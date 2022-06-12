import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/AboutScreen';
import AppBar from './components/AppBar';
import ResumeScreen from './pages/ResumeScreen';
import ProjectScreen from './pages/ProjectsScreen';
import Footer from './components/Footer';
import SideDots from './components/SideDots';
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const [option, setOption] = useState("orange");


  const listenScrollEvent = (event) => {
    let homeH = homeRef.current.clientHeight;
    let aboutH = homeH + aboutRef.current.clientHeight;
    let resumeH = aboutH + resumeRef.current.clientHeight;
    let projectH = resumeH + projectRef.current.clientHeight;
    let viewH = window.scrollY;

    if(viewH < homeH){
      setSelected(0);
      setOption("orange");
      console.log("home");
    }
    else if(viewH < aboutH && viewH >= homeH){
      setSelected(1);
      setOption("orange");
      console.log("about");
    }
    else if(viewH < resumeH && viewH >= aboutH){
      setSelected(2);
      setOption("orange");
      console.log("resume");
    }
    else if(viewH < projectH && viewH >= resumeH){
      setSelected(3);
      setOption("orange");
      console.log("project");
    }    
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return() =>
      window.removeEventListener('scroll', listenScrollEvent);
    
  },[]);

  return (
      <div>
        <AppBar></AppBar>
        <SideDots page={selected} selected={option} options='rgba(44, 122, 123,1)'/>
        <section id='home' ref={homeRef}>

          <HomeScreen/>

        </section>
        <section id='about'  ref={aboutRef}>

          <AboutScreen />

        </section>
        <section id='resume' s ref={resumeRef}>

          <ResumeScreen/>

        </section>
        <section id='projects' ref={projectRef}>

          <ProjectScreen/>

        </section>
        <Footer/>

      </div>
  );
}

export default App;

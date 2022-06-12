import {Container, Grid, Stack, Typography, Box} from '@mui/material';
import React, {useState, useEffect} from 'react';
import {FaJava, FaHtml5, FaCss3, FaGithub, FaReact, FaPython} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';

function ResumeScreen() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650);
      };
    
      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

    return(
        <Container maxWidth='false' style={{height: '100%', backgroundColor: '#F8F8F8', borderBottom: 'solid', borderColor: 'black', borderWidth:'1px'}}>
            {isDesktop ? (
                <Grid container>
                    <Grid item sx={{marginLeft: '15vw'}} mt={15}>
                        <Stack  sx={{textAlign: 'center', alignItems: 'center'}} spacing={10}>

                            <Stack direction='row'>
                                <Box>
                                    <Typography variant='h5' sx={{borderBottom: '3px solid rgba(44, 122, 123,1)'}}>
                                        Education
                                    </Typography>
                                </Box>
                                <Box sx={{marginLeft: '10vw', textAlign: 'left', width: '40vw'}}>
                                    <Typography variant='h5'>
                                        University of Redlands
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        B.S. in Computer Science, Minor in Mathematics - April 2022
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                        D3 student athlete on the Men's Soccer team, 2021 SCIAC Men’s Soccer Champion, NCAA D3 Men’s Soccer Championship Sweet 16 finalist, Google Developer Student Club.
                                    </Typography>

                                    <Typography variant='h5' mt={2}>
                                        Cleveland High School
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        High School Diploma - June 2018
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                    Focus: Mathematics and Physics 3.5 GPA & 4-year varsity athlete
                                    </Typography>
                                </Box>
                            </Stack>

                            <hr style={{color: 'blue', width: '60vw'}}/>

                            <Stack direction='row'>
                                <Box>
                                    <Typography variant='h5' sx={{borderBottom: '3px solid rgba(44, 122, 123,1)'}}>
                                        Experience
                                    </Typography>
                                </Box>
                                <Box sx={{marginLeft: '10vw', textAlign: 'left', width: '40vw'}}>
                                    <Typography variant='h5'>
                                        Pacific Standard
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        Company Website | July 2021 - August 2021
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                        Designed and developed user-friendly residential builder website, including implementing new design layout and aesthetics to attract page views and improve user experience. (HTML, Bootstrap, PHP, and MySQL)
                                    </Typography>

                                    <Typography variant='h5' mt={2}>
                                        Bluetooth RC Car
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        Electronics Project | April 2019 - May 2019
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                        Built Bluetooth RC car using a breadboard and Arduino Uno microcontroller. Coded the Arduino Software (IDE) to allow the car to be multidirectional as well as utilize the proximity sensors on the front of the car. Linked the Arduino to an IOS app for remote control. (C/C++ 'dialect')
                                    </Typography>

                                    <Typography variant='h5' mt={2}>
                                        Redlands Yelp App
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        Android Application | April 2020 - May 2020
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                    Worked with a team to create an app modeled after the Yelp app. Led the design and development of the directions button, which allowed users to locate desired restaurant using Google Maps. Completed using Android Studio for the mobile application. Initiated the use of Slack and GitKraken to manage communication and project deliverables. (Java)                                </Typography>
                                    <Typography/>

                                    <Typography variant='h5' mt={2}>University of Redlands</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Teaching Assistant | January 2020 - April 2022</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Grading Assistant and Student Tutor for the Director of Computer Science and Mathematics.</Typography>

                                    <Typography variant='h5' mt={2}>Meteor Building Company</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Construction Laborer | May 2017 - April 2022</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Perform general labor, carpentry, drywall, siding, painting, etc.</Typography>

                                    <Typography variant='h5' mt={2}>the Far Post</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Sales Associate | May 2018 - August 2018</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Assisted shoppers, offered product knowledge, handled merchandising and sales transactions.</Typography>

                                    <Typography variant='h5' mt={2}>Garden Monsters</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Line Cook & Window Server | May 2017 - August 2017</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Interacted with customers in a positive, upbeat manner in a busy and fast paced environment.</Typography>
                                </Box>
                            </Stack>

                            <hr style={{color: 'blue', width: '60vw'}}/>

                            <Stack direction='row'>
                                <Box>
                                    <Typography variant='h5' sx={{borderBottom: '3px solid rgba(44, 122, 123,1)'}}>
                                        Skills
                                    </Typography>
                                </Box>
                                <Box sx={{marginLeft: '10vw', textAlign: 'left', width: '40vw'}} mb={15}>
                                    <Grid container spacing={{ xs: 4, md: 6 }}>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaJava/></Typography>
                                            <Typography>Java</Typography>
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><SiJavascript/></Typography>
                                            <Typography>JavaScript</Typography>                                    
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaHtml5/></Typography>
                                            <Typography>HTML</Typography>                                        
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaCss3/></Typography>
                                            <Typography>CSS</Typography> 
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaGithub/></Typography>
                                            <Typography>Git</Typography> 
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaReact/></Typography>
                                            <Typography>React.JS</Typography> 
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaPython/></Typography>
                                            <Typography>Python</Typography> 
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            ) : (
                <Grid container>
                    <Grid item sx={{justifyContent: 'center', alignContent:'center', alignItems:'center', display: 'flex'}} mt={15}>
                        <Stack  sx={{textAlign: 'center', alignItems: 'center'}} spacing={10}>

                            <Stack sx={{justifyContent: 'center', alignContent:'center', alignItems:'center', display: 'flex'}}>
                                <Box>
                                    <Typography variant='h5' sx={{borderBottom: '3px solid rgba(44, 122, 123,1)'}} mb={7}>
                                        Education
                                    </Typography>
                                </Box>
                                <Box sx={{textAlign: 'center', width: '90vw'}}>
                                    <Typography variant='h5'>
                                        University of Redlands
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        B.S. in Computer Science, Minor in Mathematics - April 2022
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                        D3 student athlete on the Men's Soccer team, 2021 SCIAC Men’s Soccer Champion, NCAA D3 Men’s Soccer Championship Sweet 16 finalist, Google Developer Student Club.
                                    </Typography>

                                    <Typography variant='h5' mt={2}>
                                        Cleveland High School
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        High School Diploma - June 2018
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                    Focus: Mathematics and Physics 3.5 GPA & 4-year varsity athlete
                                    </Typography>
                                </Box>
                            </Stack>

                            <hr style={{color: 'blue', width: '60vw'}}/>

                            <Stack sx={{justifyContent: 'center', alignContent:'center', alignItems:'center', display: 'flex'}}>
                                <Box>
                                    <Typography variant='h5' sx={{borderBottom: '3px solid rgba(44, 122, 123,1)'}} mb={7}>
                                        Experience
                                    </Typography>
                                </Box>
                                <Box sx={{textAlign: 'center', width: '90vw'}}>
                                    <Typography variant='h5'>
                                        Pacific Standard
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        Company Website | July 2021 - August 2021
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                        Designed and developed user-friendly residential builder website, including implementing new design layout and aesthetics to attract page views and improve user experience. (HTML, Bootstrap, PHP, and MySQL)
                                    </Typography>

                                    <Typography variant='h5' mt={2}>
                                        Bluetooth RC Car
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        Electronics Project | April 2019 - May 2019
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                        Built Bluetooth RC car using a breadboard and Arduino Uno microcontroller. Coded the Arduino Software (IDE) to allow the car to be multidirectional as well as utilize the proximity sensors on the front of the car. Linked the Arduino to an IOS app for remote control. (C/C++ 'dialect')
                                    </Typography>

                                    <Typography variant='h5' mt={2}>
                                        Redlands Yelp App
                                    </Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight: '200', color: 'rgba(44, 122, 123,1)'}}>
                                        Android Application | April 2020 - May 2020
                                    </Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134,1)', fontWeight: '300'}}>
                                    Worked with a team to create an app modeled after the Yelp app. Led the design and development of the directions button, which allowed users to locate desired restaurant using Google Maps. Completed using Android Studio for the mobile application. Initiated the use of Slack and GitKraken to manage communication and project deliverables. (Java)                                </Typography>
                                    <Typography/>

                                    <Typography variant='h5' mt={2}>University of Redlands</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Teaching Assistant | January 2020 - April 2022</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Grading Assistant and Student Tutor for the Director of Computer Science and Mathematics.</Typography>

                                    <Typography variant='h5' mt={2}>Meteor Building Company</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Construction Laborer | May 2017 - April 2022</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Perform general labor, carpentry, drywall, siding, painting, etc.</Typography>

                                    <Typography variant='h5' mt={2}>the Far Post</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Sales Associate | May 2018 - August 2018</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Assisted shoppers, offered product knowledge, handled merchandising and sales transactions.</Typography>

                                    <Typography variant='h5' mt={2}>Garden Monsters</Typography>
                                    <Typography variant='h6' mt={1} sx={{fontWeight:'200', color: 'rgba(44, 122, 123, 1)'}}>Line Cook & Window Server | May 2017 - August 2017</Typography>
                                    <Typography variant='subtitle1' mt={1} sx={{color: 'rgba(104, 115, 134, 1)', fontWeight:'300'}}>Interacted with customers in a positive, upbeat manner in a busy and fast paced environment.</Typography>
                                </Box>
                            </Stack>

                            <hr style={{color: 'blue', width: '60vw'}}/>

                            <Stack sx={{justifyContent: 'center', alignContent:'center', alignItems:'center', display: 'flex'}}>
                                <Box>
                                    <Typography variant='h5' sx={{borderBottom: '3px solid rgba(44, 122, 123,1)'}}>
                                        Skills
                                    </Typography>
                                </Box>
                                <Box sx={{textAlign: 'center', width: '90vw'}} mb={7} mt={7}>
                                    <Grid container spacing={{ xs: 4, md: 6 }}>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaJava/></Typography>
                                            <Typography>Java</Typography>
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><SiJavascript/></Typography>
                                            <Typography>JavaScript</Typography>                                    
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaHtml5/></Typography>
                                            <Typography>HTML</Typography>                                        
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaCss3/></Typography>
                                            <Typography>CSS</Typography> 
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaGithub/></Typography>
                                            <Typography>Git</Typography> 
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaReact/></Typography>
                                            <Typography>React.JS</Typography> 
                                        </Grid>
                                        <Grid item sx={{textAlign:'center'}}>
                                            <Typography variant='h4'><FaPython/></Typography>
                                            <Typography>Python</Typography> 
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}

export default ResumeScreen;
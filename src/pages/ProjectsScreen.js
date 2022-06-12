import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Box, Typography} from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import FoodForFuelLogo from '../images/logo.png';
import PSDBLOGO from '../images/PSDB-mist.jpg'
import ArduinoLogo from '../images/ArduinoLogo.jpg'
import AdobeAnimateLogo from '../images/AdobeAnimate.png'

function ProjectScreen() {
    return(
        <Container maxWidth='false' sx={{minHeight: '100vh', backgroundColor: '#F8F8F8', paddingBottom:'2vh', maxHeight:"100%"}}>
            <Grid container mb={5}>
                <Grid item sx={{marginLeft: '15vw'}} mt={10}>
                    <Box sx={{borderBottom:'solid', borderLeft:'solid', borderColor:'black', borderWidth: '1px'}}>
                        <Typography variant='h4' sx={{color: 'rgba(44, 122, 123,1)', fontWeight: '200', padding: '.2em'}}>Projects</Typography>
                    </Box>
                </Grid>
                <Grid item sx={{marginLeft: '15vw'}} mt={5}>
                    <Grid container spacing={{ xs: 3, md: 4 }}>

                        <Grid item xs='auto'>
                            <ProjectCard title='Macronutrient Tracker App' description='A React.JS web application which allows users to track their macronutrient intake to help achieve their desired weight goals.' image={FoodForFuelLogo} url='https://github.com/paetinspier/FoodForFuel'/>
                        </Grid>

                        <Grid item>
                            <ProjectCard title='Pacific Standard Company Website' description='A brochure website designed to increase the clientele for the Pacific Standard construction company.' image={PSDBLOGO} url='https://github.com/paetinspier/PacificStandard.Build'/>
                        </Grid>

                        <Grid item>
                            <ProjectCard title='Bluetooth RC Car' description='A custom built RC car powered by an Arduino microcontroller and Bluefruit Connect app.' image={ArduinoLogo} url='https://github.com/paetinspier/arduino_RC_Car'/>
                        </Grid>

                        <Grid item>
                            <ProjectCard title='AI Self Driving Car App' description='A self driving car app made in Adobe Animate.' image={AdobeAnimateLogo} url='https://github.com/paetinspier/Game_Dev_AI/tree/main/2D_Car_App'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProjectScreen;
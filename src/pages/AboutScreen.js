import {Box, Container, Grid, Stack, Typography} from '@mui/material';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Fab from '@mui/material/Fab';
import Resume from '../resources/P_Nelson_Resume_2022.pdf';


function AboutScreen() {

    return(
        <Container maxWidth='false' style={{minHeight: "100vh", backgroundColor: 'rgba(18, 21, 26,1)', justifyContent: 'center', alignContent: 'center', alignItems:'center', display:'flex', maxHeight:'100%'}}>
            <Grid container>

                <Grid item xs={8} style={{justifyContent: 'center', alignContent:'center', alignItems:'center', display: 'flex'}}>
                    <Stack>
                        <Typography variant='h1' mb={2} sx={{color: 'white', fontWeight: '500'}}>
                            About
                        </Typography>
                        <Box sx={{width: '35vw'}}>
                            <Typography variant='h5' sx={{color: 'white', fontWeight: '300'}}>
                                Hello, i'm Paetin, a 2022 graduate from the University of Redlands with a passion for designing, constructing, and testing end-user applications through the use of programming languages, architecture, and platforms to meet user needs. 
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>

                <Grid item xs={4} style={{justifyContent: 'left', alignContent:'left', alignItems:'left', display: 'flex'}}>
                    <a href={Resume} download="PaetinNelsonResume.pdf" style={{color: 'black', fontWeight:'400'}}><Fab variant='extended'><DownloadIcon sx={{ mr: 1}}/>Download Resume</Fab></a>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutScreen;

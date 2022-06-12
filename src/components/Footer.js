import {Container, Grid} from '@mui/material';
import React from 'react';
import SocialButtons from './SocialButtons';

function Footer(){
    return(
        <Container maxWidth='false' sx={{backgroundColor: 'rgba(26, 32, 44,1)', height:'100%', textAlign:'center', alignItems: 'center'}}>

            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            
            >

                <Grid item xs={3} mt={3}>
                    <SocialButtons/>
                </Grid>   

                <Grid item xs={3}>
                    <p>&copy; Copyright 2022 Paetin S. Nelson</p>
                </Grid>   
            
            </Grid> 
            
            
        </Container>
    );
}

export default Footer;

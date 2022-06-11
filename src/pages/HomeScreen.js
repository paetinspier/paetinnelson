import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SocialButtons from '../components/SocialButtons';
import Background from '../images/pattern4.svg';
import { Box } from '@mui/material';
import { useTypewriter } from 'react-simple-typewriter'

function HomeScreen() {
    const {text} = useTypewriter({
        words: ['Paetin Nelson'],
        delaySpeed: '5000',
        typeSpeed: '60',
        deleteSpeed: '60',
        loop: 2,
      });
    return(
        <Container maxWidth='false' style={{minHeight: "100vh", backgroundImage: `url(${Background})`, alignItems: 'center', justifyContent:'center', textAlign: 'center', display:'flex', maxHeight:'100%'}}>
            <Stack spacing={1} sx={{alignContent:'center', alignItems:'center', justifyContent:'center'}}>
                <div style={{color: 'white', fontSize: '5em', fontWeight: '300'}}>
                    <span>&#123;</span>
                    <span>{text}</span>
                    <span>&#125;</span>
                </div>

                <Box>
                    <Typography variant='h5' sx={{color: 'white', fontWeight: '400'}}>Software Engineer, Entrepreneur, and Investor <Typography variant='h5' sx={{color: 'darkgrey', fontWeight: '200'}}>Based on the west coast. Feel free to connect.</Typography></Typography>
                </Box>

                <Stack space={5} sx={{alignContent:'center', alignItems:'center', justifyContent:'center'}}>
                    <SocialButtons/>
                    <Typography variant='h6' sx={{color: 'gray', fontWeight: '200'}}>(503) 729.0144</Typography>
                    <Typography variant='h6' sx={{color: 'gray', fontWeight: '200'}}>paetin.nelson@gmail.com</Typography>
                </Stack>

            </Stack>
        </Container>
    );
}

export default HomeScreen;

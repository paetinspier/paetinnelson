import React from 'react';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            dark: '#2a6c9c',
            main: '#f8f8f8',
        },
        secondary:{
            dark: '#269191',
            main:'#f8f8f8',
        }
        
    },
});

function SocialButtons() {
    return(
        <ThemeProvider theme={theme}>
            <Stack direction='row' spacing={2}>
                <a href='https://www.linkedin.com/in/paetin-nelson/'>
                    <Fab size='small' color='primary'>
                        <LinkedInIcon/>
                    </Fab>
                </a>
                <a href='https://github.com/paetinspier'>
                    <Fab size='small' color='secondary'>
                        <GitHubIcon/>
                    </Fab>
                </a>
            </Stack>
      </ThemeProvider>
    );
}
export default SocialButtons;
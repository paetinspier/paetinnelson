import {Fab} from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main: '#2a6c9c',
        },
        secondary:{
            main:'#269191',
        }
        
    },
});

function DownButton() {
    return(
        <ThemeProvider theme={theme}>
            <Fab variant='secondary'>
                <KeyboardArrowDownIcon/>
            </Fab>
        </ThemeProvider>
    );
}

export default DownButton;
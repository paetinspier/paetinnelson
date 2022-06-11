import {Card, CardActions, CardContent, CardMedia, Fab, ThemeProvider, Typography, createTheme} from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';


const theme = createTheme({
    palette:{
        primary:{
            dark: 'rgba(44, 122, 123,1)',
            main: '#F8F8F8',
            light: 'rgba(104, 115, 134,1)',
        },
    },
});

function ProjectCard(props) {
    return(
        <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia component='img' alt='projectImg' image={props.image} height='300'/>
                <CardContent>
                    <Typography gutterBottom variant="h5">{props.title}</Typography>
                    <Typography gutterBottom variant="body1">{props.description}</Typography>
                </CardContent>
                <CardActions>
                    <a href={props.url}><Fab size='small' color='primary' variant='extended'><GitHubIcon sx={{ mr: 1 }}/>see on github</Fab></a>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}

export default ProjectCard;
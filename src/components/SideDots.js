import React, {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import {links} from '../Data';

function SideDots(props){
    const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650);
      };
    
      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

    return(
        <div style={{position: 'fixed', top: '40vh', left: '3vh'}}>
            {isDesktop ? (
                <Stack>
                    {links.map((link) => {
                        return( 
                            <div>
                                {link.id === props.page && <IconButton sx={{backgroundColor: '#ffffff00'}}><a style={{color: '#ffffff', backgroundColor: '#ffffff00'}} href={link.url} key={link.id}><HexagonOutlinedIcon sx={{width: '.7em', height: '.7em'}} style={{ color: `${props.selected}`}}/></a></IconButton>}
                                {link.id !== props.page && <IconButton sx={{backgroundColor: '#ffffff00'}}><a style={{color: '#ffffff', backgroundColor: '#ffffff00'}} href={link.url} key={link.id}><HexagonOutlinedIcon sx={{width: '.7em', height: '.7em'}} style={{ color: `${props.options}`}}/></a></IconButton>}
                            </div>
                            
                        );
                    })}
                </Stack>
            ) : (
                <div></div>
            )}

        </div>
    );
}

export default SideDots;
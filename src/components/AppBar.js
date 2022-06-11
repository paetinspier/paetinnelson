
import React from "react";
import {links} from '../Data';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'




function Navbar() {
    return (
        <Container maxWidth='false' style={{zIndex:'1060',position: 'fixed', top: 0, textAlign: 'center', backgroundColor: '#0000006b'}}>
            {links.map((link) => {
                return <Button sx={{color: 'white', fontSize: '20'}}><a href={link.url} key={link.id}>{link.text}</a></Button>
            })}
        </Container>
    );
}
export default Navbar;
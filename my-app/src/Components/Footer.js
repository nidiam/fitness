import React from 'react';
import { AppBar } from '@mui/material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'; // Correct import statement
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const copyRight = require("./copyright.png");

const Footer = () => {
    return (
        <AppBar position='static' className="Footer" style={{ backgroundColor: 'whitesmoke', top: 'auto', bottom: 0, color: 'PaleVioletRed', textAlign: 'center', height: '13vh', marginTop: '140px' }}>
            <div style={{ display: 'inline-flex', margin: 'auto' }}>
                <img src={copyRight} alt='copyRight' style={{ height: '20px', width: '20px', marginTop: '13px', marginRight: '30px' }}></img>
                <p>All rights reserved 2024</p>
               
            <div style={{marginLeft: '200px'}}>
                <FacebookTwoToneIcon style={{ color: 'pink', marginTop: '11px' }} /> {/* Correct usage of FacebookTwoToneIcon */}
                <InstagramIcon style={{display: 'inline-flex', marginTop: '11px',}} ></InstagramIcon>
                <TwitterIcon style={{ marginTop: '11px' }}></TwitterIcon>
                    
            </div>       
                
            </div>
        </AppBar>
    );
};

export default Footer;

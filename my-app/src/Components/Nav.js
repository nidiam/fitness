import React from 'react';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import './Nav.css';
const logo = require("./logo.jpg")

const Nav = () => {
  return (
    <div>
      <AppBar position='static' className="Nav" style={{ height: '13vh', marginBottom: '40px', backgroundColor: 'whitesmoke' }}>
        <div className="nav-buttons">
          <img src={logo} alt='logo' style={{ height: '120px', width: '130px', position: 'relative', right: '300px' , top: '20px' }}></img>
          <Button style={{ backgroundColor: 'pink', color: 'white', marginLeft: '20px' }} className="Button">Home</Button>
          <Button style={{ backgroundColor: 'pink', color: 'white', marginLeft: '20px' }} className="Button">Classes</Button>
          <Button style={{ backgroundColor: 'pink', color: 'white', marginLeft: '20px' }} className="Button">Locations</Button>
          <Button style={{ backgroundColor: 'pink', color: 'white', marginLeft: '20px' }} className="Button">Our Instructors</Button>
          <Button style={{ backgroundColor: 'pink', color: 'white', marginLeft: '20px' }} className="Button">Contact Us</Button>
        </div>
      </AppBar>
  
    </div>
  );
};

export default Nav;

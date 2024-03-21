import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import './Nav.css'

const Nav = () => {
  return (
    <div> <Box className="Nav">
      
      <Button className="Button" style={{ backgroundColor: 'pink', color: 'white', marginLeft:'10%' }}> Home </Button>
      <Button className="Button" style={{ backgroundColor: 'pink', color: 'white', marginLeft:'10%' }}> Classes </Button>
      <Button className="Button" style={{ backgroundColor: 'pink', color: 'white', marginLeft:'10%' }}> Locations </Button>
      <Button className="Button" style={{ backgroundColor: 'pink', color: 'white', marginLeft:'10%' }}> Instructors </Button>
      <Button className="Button" style={{ backgroundColor: 'pink', color: 'white', marginLeft:'10%' }}> Contact </Button>
     
      
      
    
    </Box> </div>
  )
}

export default Nav
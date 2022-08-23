import React from 'react';
import './Sidebar.css';
import Button from '@mui/material/Button';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="title" 
      style={{marginLeft: '40px', marginTop: '190px', marginBottom:'40px'}}>
          <h2>UMD</h2>
          <h2>Prerequisite Tree</h2>
          <h2>Maker</h2>
          <h4>By Lanz F.</h4>

          <Button href="https://github.com/RodeoRhodia" 
          target="_blank" 
          variant="contained" 
          size="large" 
          rel="noreferrer"
          color="success"
          style={{marginTop: '25px'}}>
          GitHub
        </Button>
      </div>
      <ul>
        <li>How to read tree, <br /> if course starts with...</li>
          <ul>
            <li>'P2' it means pick two</li>
            <li>'P1' it means pick one</li>
          </ul>
        <br />
        <li>Note: Expanding a tree with P1 or P2 is currently not available</li>
      </ul>
    
    </div>
  );
}

export default Sidebar;
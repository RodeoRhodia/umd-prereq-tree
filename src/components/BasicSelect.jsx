//----------------------------------------------------------------------//
// Credits to Material UI's Select component
//
// https://mui.com/material-ui/react-select/#BasicSelect.js
//----------------------------------------------------------------------//

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';

export default function BasicSelect({firstLetter, changeLetter}) {
  const handleChange = (event) => {
    changeLetter(event.target.value);
  };

  const alphabetArr = [];
  for (let asciiCode = 97; asciiCode < 123; asciiCode++) {
    let currLetter = String.fromCharCode(asciiCode).toUpperCase();
    alphabetArr.push(currLetter)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department Letter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={firstLetter}
          label="Department Letter"
          onChange={handleChange}
        >
        {alphabetArr.map(letter => (
        <MenuItem value={letter} key={letter.charCodeAt(0)}>{letter}</MenuItem>
        ))}

        </Select>
      </FormControl>
    </Box>
  );
}
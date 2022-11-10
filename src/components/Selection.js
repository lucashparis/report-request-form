import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selection() {
  const [sistem, setSistem] = useState('');

  const handleChange = (event) => {
    setSistem(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Sistema</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={sistem}
          label="Sistema"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Sispetro</MenuItem>
          <MenuItem value={2}>BI</MenuItem>
          <MenuItem value={3}>Teciap</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

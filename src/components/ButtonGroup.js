import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

export default function ButtonGroup() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    
  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">NOVO</ToggleButton>
        <ToggleButton value="android">MELHORIA</ToggleButton>
        <ToggleButton value="ios">BUG</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

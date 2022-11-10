import * as React from "react";
import { Button, TextField } from "@mui/material/";

import Selection from "./components/Selection";
import ButtonGroup from "./components/ButtonGroup";
import MultipleSelectCheckmarks from "./components/MultipleSelectCheckmarks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Solicitação de Relatório</h1>
      
      <ButtonGroup />

      <div className="fields">
        <Selection />
        <TextField fullWidth label="Nome do relatório" />
        <TextField fullWidth label="Diretório" />

        <Selection />

        <TextField
          id="outlined-number"
          label="Pessoas Alcançadas"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <MultipleSelectCheckmarks/>

        <TextField fullWidth label="Filtros que devem conter" />
        <TextField fullWidth label="Colunas que devem conter" />
        <TextField fullWidth label="Solicitação" />
      </div>

      <Button variant="contained">Gerar Solicitação</Button>
    </div>
  );
}

export default App;

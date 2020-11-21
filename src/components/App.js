import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios/index";
import "../css/index.css";
import "../css/spinner.css";
import Publicaciones from "./Publicaciones";
import Tareas from "./Tareas/index";
import TareasGuardar from "./Tareas/Guardar";

const App = (props) => (
  <BrowserRouter>
    <Menu />
    <div id="margen">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/tareas/guardar" component={TareasGuardar} />
      <Route exact path="/tareas/guardar" component={TareasGuardar} />
      <Route
        exact
        path="/publicaciones/:usr_id/:tar_id"
        component={Publicaciones}
      />
    </div>
  </BrowserRouter>
);

export default App;

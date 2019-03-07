import React from "react";
import ReactDOM from "react-dom";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

ReactDOM.render(
  <DragDropContextProvider backend={HTML5Backend}>
    <App />
  </DragDropContextProvider>,
  document.getElementById("root")
);
registerServiceWorker();

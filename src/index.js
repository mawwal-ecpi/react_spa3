import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";

//React 18 removed compatibilty with ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);
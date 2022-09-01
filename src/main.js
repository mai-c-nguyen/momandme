import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.js";
import { createRoot } from "react-dom/client";
// Find the DOM Node that I want React to take over
let domNode = document.querySelector("#app");
// Create a React app based on that DOM Node
let reactApp = createRoot(domNode);
// Render a component into that React app
reactApp.render(<App />);

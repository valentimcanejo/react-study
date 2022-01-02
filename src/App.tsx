import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/HelloWorld";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Box>
      <Message hello={"Hello World"} />
    </Box>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";

import Message from "./components/HelloWorld";
import { Box, Grid } from "@material-ui/core";
import TestingProps from "./components/TestingProps";

function App() {
  return (
    <Box>
      <TestingProps name={"Rômulo"} age={21} task={"Estagiário"} />
      <TestingProps name={"Aécio"} age={30} task={"Orientador"} />
      <TestingProps name={"João"} age={30} task={"Orientador"} />
      {/* <Message hello={"Hello World"} /> */}
    </Box>
  );
}

export default App;

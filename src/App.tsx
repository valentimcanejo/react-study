import React from "react";
import logo from "./logo.svg";

import Message from "./components/HelloWorld";
import { Box, Grid } from "@material-ui/core";
import TestingProps from "./components/TestingProps";
import StringsArray from "./components/StringsArray";
import ConditionalRendering from "./components/ConditionalRendering";
import Forms from "./components/Forms";

function App() {
  return (
    <Box>
      {/* <ConditionalRendering /> */}
      <Forms login={"login"} senha={"senha"} />
      {/* <StringsArray /> */}

      {/* <TestingProps name={"Rômulo"} age={21} task={"Estagiário"} />
      <TestingProps name={"Aécio"} age={30} task={"Orientador"} />
      <TestingProps name={"João"} age={30} task={"Orientador"} /> */}
      {/* <Message hello={"Hello World"} /> */}
    </Box>
  );
}

export default App;

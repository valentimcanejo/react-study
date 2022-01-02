import { Box, Button } from "@material-ui/core";
import React from "react";

interface Props {
  hello: string;
}

const Message: React.FC<Props> = ({ hello }) => {
  return (
    <Box>
      <Button variant="contained" color="primary">
        {hello}
      </Button>
    </Box>
  );
};

export default Message;

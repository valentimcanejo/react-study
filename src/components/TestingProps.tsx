import { Box, Button, Grid } from "@material-ui/core";
import React from "react";

interface Props {
  name: string;
}

const Message: React.FC<Props> = ({ name }) => {
  return (
    <Box>
      <Grid>
        <Button variant="contained" color="primary">
          {name}
        </Button>
      </Grid>
    </Box>
  );
};

export default Message;

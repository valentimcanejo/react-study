import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

interface Props {
  login: string;
  senha: string;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(8),
    },
    textfield: {
      margin: theme.spacing(2),
    },
  })
);

const Forms: React.FC<Props> = ({ login, senha }) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid
        spacing={0}
        style={{ minHeight: "100vh" }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Paper className={classes.paper}>
          <Grid item>
            <Typography align="center">Log in</Typography>
          </Grid>

          <Grid item>
            <TextField
              className={classes.textfield}
              variant="filled"
              label="Login"
              required
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.textfield}
              variant="filled"
              label="Senha"
              required
            ></TextField>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Forms;

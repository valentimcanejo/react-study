import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
  },
  typography: {
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Message = () => {
  const [isLogged, setLogged] = useState(false);

  function login() {
    if (isLogged !== true) {
      alert("Logged in");
    }

    setLogged(true);
  }
  function logout() {
    if (isLogged !== false) {
      alert("Logged out");
    }
    setLogged(false);
  }
  const classes = useStyles();
  return (
    <Box m={8}>
      <Grid container justifyContent="center" alignItems="center">
        <Paper className={classes.paper}>
          {isLogged ? (
            <Grid item>
              <Typography className={classes.typography}>Logado</Typography>
            </Grid>
          ) : (
            <Typography className={classes.typography}>Não logado</Typography>
          )}
          <Button
            className={classes.button}
            onClick={login}
            color="primary"
            variant="outlined"
          >
            Login
          </Button>
          <Button
            className={classes.button}
            onClick={logout}
            color="secondary"
            variant="outlined"
          >
            Logout
          </Button>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Message;

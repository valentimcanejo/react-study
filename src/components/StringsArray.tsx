import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

interface Persons {
  name: string;
  age: number;
  task: string;
}

interface Props {
  persons: Persons[];
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
  },
  typography: {
    padding: theme.spacing(1),
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

function activateAlert() {
  alert("Closed");
}

function activateButton() {
  console.log("Clicked");
}

const Message: React.FC<Props> = ({ persons }) => {
  const classes = useStyles();
  return (
    <Box m={5}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={4} item>
          {persons.map((person) => (
            <Paper className={classes.paper} variant="elevation" elevation={5}>
              <Typography
                className={classes.typography}
                align="center"
                variant="body1"
              >
                <Grid container justifyContent="flex-end" alignItems="flex-end">
                  <IconButton onClick={activateAlert} size="small">
                    <CloseIcon />
                  </IconButton>
                </Grid>
                {person.name}
              </Typography>

              <Typography
                className={classes.typography}
                align="left"
                variant="body1"
              >
                Age: {person.age}
              </Typography>

              <Typography
                className={classes.typography}
                align="left"
                variant="body1"
              >
                Task: {person.task}
              </Typography>
              <Button
                onClick={activateButton}
                color="primary"
                variant="contained"
              >
                Test Button
              </Button>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Message;

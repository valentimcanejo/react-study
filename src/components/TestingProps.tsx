import {
  Box,
  Button,
  Card,
  Grid,
  makeStyles,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
interface Props {
  name: string;
  age: number;
  task: string;
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

const Message: React.FC<Props> = ({ name, age, task }) => {
  const classes = useStyles();
  return (
    <Box m={5}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={4} item>
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
              {name}
            </Typography>

            <Typography
              className={classes.typography}
              align="left"
              variant="body1"
            >
              Age: {age}
            </Typography>

            <Typography
              className={classes.typography}
              align="left"
              variant="body1"
            >
              Task: {task}
            </Typography>
            <Button color="primary" variant="contained">
              Test Button
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Message;

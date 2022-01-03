import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

interface Person {
  name: string;
  age: number;
  task: string;
}

interface Props {
  person: Person;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
  },
  typography: {
    padding: theme.spacing(1),
  },
}));

const ComponentPaper: React.FC<Props> = ({ person }) => {
  const classes = useStyles();
  const activateAlert = useCallback(() => {
    alert("Closed");
  }, []);

  const activateButton = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <Paper className={classes.paper} variant="elevation" elevation={5}>
      <Typography className={classes.typography} align="center" variant="body1">
        <Grid container justifyContent="flex-end" alignItems="flex-end">
          <IconButton onClick={activateAlert} size="small">
            <CloseIcon />
          </IconButton>
        </Grid>
        {person.name}
      </Typography>

      <Typography className={classes.typography} align="left" variant="body1">
        Age: {person.age}
      </Typography>

      <Typography className={classes.typography} align="left" variant="body1">
        Task: {person.task}
      </Typography>
      <Button onClick={activateButton} color="primary" variant="contained">
        Test Button
      </Button>
    </Paper>
  );
};

export default function Message() {
  const [arr, setArr] = useState<Person[]>([
    { name: "Rômulo", age: 21, task: "Estagiário" },
    { name: "Aécio", age: 27, task: "Orientador" },
    { name: "João", age: 30, task: "Orientador" },
  ]);
  const classes = useStyles();
  return (
    <Box m={5} p={4}>
      <Grid container justifyContent="center" spacing={4} alignItems="center">
        {arr.map((person, index) => (
          <Grid xs={4} key={index} item>
            <ComponentPaper key={index} person={person} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

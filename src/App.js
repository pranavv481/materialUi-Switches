import './App.css';
import { Container, Switch, Paper, Box, Typography, FormControl, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5)
  },
}));
function App() {
  const classes = useStyles();
  const [autoPlay, setAutoplay]= useState(false)
  return (
    <Container className={classes.root}>
      <Paper component={Box} width="30%" p={4} mx="auto" >
        <Typography color="secondary" variant="h4" align="center">
            {autoPlay?"true":"false"}
        </Typography>
<FormControl>
  <FormControlLabel label="autoplay" control={<Switch checked={autoPlay} onChange={(e)=> setAutoplay(e.target.checked)} />}/>
</FormControl>
        
      </Paper>
    </Container>
  );
}

export default App;

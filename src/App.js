import './App.css';
import M, { Container, Grid } from "@mui/material";
import Navigation from "./components/NavBar";
import AddUser from "./components/AddUser";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <Navigation />

      {/* <Grid container sx={{width:'100vw', marginTop:'5%'}} spacing={1}>
        <Grid item xs={3}> */}
      <AddUser />
      {/* </Grid>
        <Grid item xs={8}> */}
      <User />
      {/* </Grid>
      </Grid> */}


    </div>
  );
}

export default App;

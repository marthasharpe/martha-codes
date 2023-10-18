import React from "react";
import "./App.css";
import Title from "./title/Title.js";
// import Projects from "./projects/Projects";
import Navigation from "./navigation/Navigation";
import About from "./about/About";
// import Fellowship from "./fellowship/Fellowship";
// import Form from "./form/Form";
// import { Snackbar, Alert } from "@mui/material";

const App = () => {
  // const [open, setOpen] = React.useState(false);
  // const [message, setMessage] = React.useState("");
  // const [severity, setSeverity] = React.useState("info");

  // const handleClose = () => setOpen(false);

  // const handleOpenSnackbar = (severity, message) => {
  //   setMessage(message);
  //   setSeverity(severity);
  //   setOpen(true);
  // };

  return (
    <div id="App" className="app-container">
      <Title />
      <Navigation />
      <About />
      {/* <Fellowship />
      <Form handleOpenSnackbar={handleOpenSnackbar} />
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity={severity}>{message}</Alert>
      </Snackbar> */}
      {/* <Projects /> */}
    </div>
  );
};

export default App;

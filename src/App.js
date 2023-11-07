// import { Snackbar, Alert } from "@mui/material";

import Title from "./components/title/Title.js";
import SocialMedia from "./components/social-media/SocialMedia.js";
import About from "./components/about/About.js";
import Contents from "./components/contents/Contents.js";
import LearnToCode from "./components/learning-to-code/LearnToCode.js";
// import Projects from "./projects/Projects";
// import Form from "./form/Form";

import "./App.css";
import ProfessionalWork from "./components/professional-work/ProfessionalWork.js";
import RVLife from "./components/rv-life/RVLife.js";
import AlternativeEd from "./components/alternative-ed/AlternativeEd.js";

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
      <SocialMedia />
      <Contents />
      <About />
      <LearnToCode />
      <ProfessionalWork />
      <RVLife />
      <AlternativeEd />
      {/* <Form handleOpenSnackbar={handleOpenSnackbar} /> */}
      {/* <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity={severity}>{message}</Alert>
      </Snackbar> */}
      {/* <Projects /> */}
    </div>
  );
};

export default App;

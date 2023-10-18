import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Navigation.css";
import { Tooltip } from "@mui/material";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav-icons">
        <Tooltip title="LinkedIn" placement="top">
          <a
            href="https://www.linkedin.com/in/marthasharpe2020"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="link" />
          </a>
        </Tooltip>
        <Tooltip title="GitHub" placement="top">
          <a
            href="https://github.com/marthasharpe"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" className="link" />
          </a>
        </Tooltip>
        <Tooltip title="YouTube" placement="top">
          <a
            href="https://www.youtube.com/channel/UCqL_YXyK5g7rr4MmhqVCAGA"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" className="link" />
          </a>
        </Tooltip>
        <Tooltip title="Email" placement="top">
          <a
            href="mailto:marthasharpe2020@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="link" />
          </a>
        </Tooltip>
      </nav>
      {/* <a href="#mini-fellowships" className="link">
        Mini Fellowships
      </a> */}
    </div>
  );
};

export default Navigation;

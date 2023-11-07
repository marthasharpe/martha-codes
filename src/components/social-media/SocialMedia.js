import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMedia.css";
import { Tooltip } from "@mui/material";

const SocialMedia = () => {
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
        <Tooltip title="Twitter" placement="top">
          <a
            href="https://twitter.com/SharpeMartha"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" className="link" />
          </a>
        </Tooltip>
      </nav>
    </div>
  );
};

export default SocialMedia;

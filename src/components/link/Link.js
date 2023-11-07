import { Tooltip } from "@mui/material";
import "./Link.css";

const Link = (props) => {
  return (
    <Tooltip title={props.tooltip} placement="top">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.href}
        className="link"
      >
        {props.content}
      </a>
    </Tooltip>
  );
};

export default Link;

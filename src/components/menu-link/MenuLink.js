import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const MenuLink = () => {
  return (
    <div>
      <a href="#contents" className="link">
        <FontAwesomeIcon icon={faAnglesUp} size="sm" /> Back to Menu
      </a>
    </div>
  );
};

export default MenuLink;

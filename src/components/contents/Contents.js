import "./Contents.css";

const Contents = () => {
  return (
    <div id="contents" className="contents-container">
      <h2 className="title">Jump to a Topic</h2>
      <ul className="contents-list">
        <li className="contents-item">
          <a href="#about-me" className="contents-link">
            About Me
          </a>
        </li>
        <li className="contents-item">
          <a href="#learning-to-code" className="contents-link">
            Learning to Code
          </a>
        </li>
        <li className="contents-item">
          <a href="#professional-work" className="contents-link">
            Professional Work
          </a>
        </li>
        <li className="contents-item">
          <a href="#rv-life" className="contents-link">
            RV & Skoolie Life
          </a>
        </li>
        <li className="contents-item">
          <a href="#alternative-ed" className="contents-link">
            Alternative Education
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contents;

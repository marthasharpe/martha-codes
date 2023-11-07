import resume from "../../assets/Martha Sharpe Resume - 2023 (1).pdf";
import Link from "../link/Link";
import MenuLink from "../menu-link/MenuLink";
import Video from "../video/Video";

const ProfessionalWork = () => {
  return (
    <div id="professional-work" className="about-me-content">
      <h2 className="title">Professional Work</h2>
      <p>
        As a software engineer, I've spent the last 3 years working with
        frontend technologies like React, React Native, and NextJS. I've played
        a pivotal role on agile teams, consistently improving productivity
        through innovative solutions. I have experience with both web and mobile
        applications and easily pick up new technologies as needed. See the
        video below or view my{" "}
        <Link tooltip="PDF file" href={resume} content="Resume 📝" /> for a more
        detailed work history.
      </p>
      <Video
        src="lSG8_QkEh1M?si=ociR_J2iPdwcSWHf"
        title="Martha Sharpe Work History Video"
      />
      <MenuLink />
    </div>
  );
};

export default ProfessionalWork;

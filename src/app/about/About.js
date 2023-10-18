import "./About.css";
import resume from "../../assets/Martha Sharpe Resume - 2023 (1).pdf";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-me">
        <h2 className="title">Software Engineer</h2>
        <p>
          I am a self-taught front-end developer with a track record of
          delivering clean code and exceptional user experiences. For the past 3
          years, I've played a pivotal role on agile teams, consistently
          improving productivity through innovative solutions. I have experience
          with both web and mobile applications and easily pick up new
          technologies as needed. See the video below and view my{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={resume}
            className="link"
          >
            resume
          </a>{" "}
          for an overview of my work history.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/lSG8_QkEh1M?si=ociR_J2iPdwcSWHf?rel=0"
            title="OSV Pitch Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div />
        <h2 className="title">YouTuber</h2>
        <p>
          Beyond professional work, I also have a{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCqL_YXyK5g7rr4MmhqVCAGA"
            className="link"
          >
            YouTube channel
          </a>{" "}
          where I share my coding journey, adventures as a full time digital
          nomad, and insights into alternative education. I even completed a
          6-month fellowship to create a{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtu.be/eSPX3spdBUU?si=Rvwoy1npLudi6-2d"
            className="link"
          >
            documentary
          </a>{" "}
          about self-directed learning. You can view my channel intro below.
        </p>
      </div>
    </div>
  );
};

export default About;

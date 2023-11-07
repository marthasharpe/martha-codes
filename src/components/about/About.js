import "./About.css";
import MenuLink from "../menu-link/MenuLink";
import Link from "../link/Link";

const About = () => {
  return (
    <div id="about-me" className="about-me-content">
      <h2 className="title">About Me</h2>
      <p>
        As a self-taught software engineer, YouTuber, and homeschooling mother
        of five, I am passionate about helping others find their path in life.
      </p>
      <p>
        This website is a guide to my work and the content I've created be it
        ebooks, coding demos, travel blogs, DIY projects, or documentaries on
        alternative schools. If you want to support what I do or set up a zoom
        chat feel free to{" "}
        <Link
          tooltip="Buy me a Coffee page"
          href="https://www.buymeacoffee.com/marthasharpe"
          content="Buy me a Coffee ☕"
        />
        .
      </p>
      <MenuLink />
    </div>
  );
};

export default About;

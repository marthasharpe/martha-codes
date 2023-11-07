import Link from "../link/Link";
import MenuLink from "../menu-link/MenuLink";
import Video from "../video/Video";

const LearnToCode = () => {
  return (
    <div id="learning-to-code" className="about-me-content">
      <h2 className="title">Learning to Code</h2>
      <p>
        I started learning to code in 2019 when I was a stay-at-home mom looking
        for a way to work from home. I used free online resources and shared
        what I was learning and building through coding demos like the one
        below. I landed my first software job in 2020 and wrote an ebook called{" "}
        <Link
          tooltip="View on Gumroad"
          href="https://gumroad.com/l/teach-yourself-to-code"
          content="Teach Yourself to Code 📕"
        />{" "}
        to help others follow the same path.
      </p>
      <Video src="eR6Su2uIC8o?si=JaKCbCeCVnEEcw1c" title="Coding Demo" />
      <MenuLink />
    </div>
  );
};

export default LearnToCode;

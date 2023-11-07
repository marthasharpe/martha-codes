import MenuLink from "../menu-link/MenuLink";
import Video from "../video/Video";
import Link from "../link/Link";

const AlternativeEd = () => {
  return (
    <div id="alternative-ed" className="about-me-content">
      <h2 className="title">Alternative Education</h2>
      <p>
        In 2023, my husband and I were selected for a fellowship through{" "}
        <Link
          tooltip="OSV Fellows"
          href="https://www.osv.llc/our-fellows"
          content="O'Shaughnessy Ventures"
        />{" "}
        to create a documentary on self-directed education. Since we started
        having kids, we've explored many alternatives to public school and this
        was an opportunity to share what we've learned. Below is the trailer we
        made and you can view the full{" "}
        <Link
          tooltip="video link"
          href="https://youtu.be/eSPX3spdBUU?si=Rvwoy1npLudi6-2d"
          content="documentary"
        />{" "}
        on our Youtube channel.
      </p>
      <Video src="WpwvpJ44HjU" title="Documentary Trailer" />
      <MenuLink />
    </div>
  );
};

export default AlternativeEd;

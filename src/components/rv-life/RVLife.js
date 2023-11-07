import MenuLink from "../menu-link/MenuLink";
import Video from "../video/Video";
import Link from "../link/Link";

const RVLife = () => {
  return (
    <div id="rv-life" className="about-me-content">
      <h2 className="title">RV & Skoolie Life</h2>
      <p>
        When the pandemic hit, we got to live out a dream of mine. We bought an
        RV and hit the road as digital nomads. We spent a year traveling the
        country as a family and I shared many of our adventures on{" "}
        <Link
          href="https://www.youtube.com/playlist?list=PLjbmSSYO7o3LT656odvWz4zWRCVLNxPx3"
          tooltip="RV Life playlist"
          content="YouTube"
        />
        . With a new baby on the way, we decided to buy a house. But then I got
        to live another dream of buying an old school bus and converting it into
        an RV. Looking forward to sharing more skoolie adventures!
      </p>
      <Video src="KYOrFUBs6o0?si=m6je4nkwR0Spb8lV" title="RV Life Video" />
      <MenuLink />
    </div>
  );
};

export default RVLife;

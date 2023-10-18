import "./Fellowship.css";

const Fellowship = () => {
  return (
    <div id="mini-fellowships" className="fellowship-container">
      <h2 className="title">
        <em>Your</em> Story
      </h2>
      {/* <div className="video-container">
        <iframe
          title="Mini Fellowship"
          src="https://www.youtube-nocookie.com/embed/RZ_EFhPvvxw?rel=0"
          className="video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div> */}
      <p>
        We are awarding $1000 each to 6 self-directed learners who are
        graduation age (unschooling, democratic schools, ALCs, etc). If you are
        selected, you will film your journey from May through August as you
        pursue your goals. After submitting your footage (4-8 hours worth), we
        will edit it together and share your story with the world!
      </p>
      <p>
        Each candidate for the Mini Fellowship must submit an application video.
        It doesn't have to be polished but you'll get points for quality and
        storytelling. The video should be between 5 to 10 minutes long and
        answer the following questions:
      </p>
      <ol>
        <li>What does your education look like on a daily basis?</li>
        <li>What do you want to pursue after graduation and why?</li>
        <li>How would you spend $1000?</li>
        <li>And anything else you want to throw in!</li>
      </ol>
      <p>
        As you make your video, remember "show don't tell". We will be accepting
        applications through March 31st. Then we will hold interviews and
        announce the fellows by the end of April. Good luck and happy filming!
      </p>
    </div>
  );
};

export default Fellowship;

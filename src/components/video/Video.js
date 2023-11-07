import "./Video.css";

const Video = (props) => {
  return (
    <div className="video-container">
      <iframe
        src={"https://www.youtube-nocookie.com/embed/" + props.src + "?rel=0"}
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

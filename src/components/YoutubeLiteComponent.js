import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../context/context";

export default function LightYouTubeEmbed({ id }) {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const videoSrc = `https://www.youtube.com/embed/${id}?autoplay=1`;
  const { stopPlay, setStopPlay } = useContext(globalContext);

  // Add effect to set setStopPlay when the component is mounted
  useEffect(() => {
    setStopPlay(false);
  }, [setStopPlay]);

  const handleVideoTrigger = (shouldPlay) => {
    setVideoPlayed(true);
    setStopPlay(shouldPlay);
  };

  const handleClick = () => {
    handleVideoTrigger(!stopPlay);
  };

  // Adding keyboard event handler
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      // 'Enter' or 'Space' key
      handleVideoTrigger(!stopPlay);
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyPress={handleKeyPress} // Keyboard event listener
      role="button" // Role to indicate this is a button
      tabIndex="0" // tabIndex so it's focusable
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {!videoPlayed && (
        <img
          src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
          alt="thumbnail"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
      )}

      {videoPlayed && !stopPlay ? (
        <iframe
          width="100%"
          height="300px"
          src={videoSrc}
          title="Video"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src="your-youtube-play-icon" alt="Play button" /> */}
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

const VideoWithFallback = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      {!videoError ? (
        <video
          width={1000}
          height={4000}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="rounded-lg shadow-lg"
          onError={() => setVideoError(true)} // fallback handler
        >
          <source
            src="https://cdn.pixabay.com/video/2022/07/12/123872-729413470_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-laptop-6343300-5242454.png?f=webp"
          alt="Web Developer 3D Illustration"
          width={1000}
          height={4000}
          className="rounded-lg shadow-lg"
        />
      )}
    </>
  );
};

export default VideoWithFallback;

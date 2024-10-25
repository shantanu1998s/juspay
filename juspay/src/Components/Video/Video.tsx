/*
 * A Video Component that takes in a video url and renders the video with some basic settings
 */

const Video = ({ src, className }: { src: string; className?: string }) => {
  return (
    <video
      className={`rounded-lg overflow-hidden mt-2 mb-4 outline-neutral-400 ${className}`}
      autoPlay
      loop
      muted
      controlsList="nofullscreen"
      disablePictureInPicture
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;

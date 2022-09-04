import handleViewport from "react-in-viewport";

const Block = ({ id, inViewport, forwardedRef }) => {
  const isPlaying = inViewport ? 1 : 0;

  return (
    <div className="viewport-block" ref={forwardedRef}>
      <iframe
        width="100%"
        className="h-[100vh]"
        src={`https://www.youtube.com/embed/${id}?autoplay=${isPlaying}&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const MyPort = ({ playerId }) => (
  <div>
    <ViewportBlock id={playerId} />
  </div>
);

export default MyPort;

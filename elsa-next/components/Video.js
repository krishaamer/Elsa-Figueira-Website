export default function Video() {
  return (
    <div className="ui basic very padded center aligned segment" id="elsa">
      <div className="ui middle center aligned grid">
        <div className="column" style={{ width: "100%" }}>
          <div className="ui embed" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
              src="https://www.youtube.com/embed/hPkhVh_hlY8?autoplay=1&rel=0"
              title="Elsa Figueira"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}


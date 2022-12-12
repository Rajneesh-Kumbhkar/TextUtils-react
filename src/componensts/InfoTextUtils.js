export default function InfoTextUtils(props) {
  // const [textStyle, setTextStyle] = useState({
  //   color: "cyan",
  //   backgroundColor: "#1e1e1e",
  // });

  // const [btnText, setBtnText] = useState("Enable light Mode");

  // const toggleStyle = () => {
  //   if (textStyle.color === "cyan") {
  //     setTextStyle({
  //       color: "#1e1e1e",
  //       backgroundColor: "cyan",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable dark Mode");
  //   } else {
  //     setTextStyle({
  //       color: "cyan",
  //       backgroundColor: "#1e1e1e",
  //     });
  //     setBtnText("Enable light Mode");
  //   }
  // };

  let textStyle = {
    color: props.mode === "dark" ? "white" : "#1e1e1e",
    backgroundColor: props.mode === "dark" ? "#1e1e1e" : "white",
  };

  return (
    <div className="container my-2" style={textStyle}>
      <h1>Information</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={textStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={textStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={textStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={textStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={textStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={textStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-4 pb-3">
        <button type="button" onClick={toggleStyle} className="btn btn-dark">
          {btnText}
        </button>
      </div> */}
    </div>
  );
}

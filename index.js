const contentWrapperStyle = {
  color: "#fff",
  height: "100vh",
  backgroundColor: "#333"
}

const rowWrapperSyle = {
  height: "100%",
  margin: "0"
}

class Root extends React.Component {

  render() {
    return (
      <div id="content-wrapper"
        className="container-fluid"
        style={contentWrapperStyle}>
        <div className="row align-items-center justify-content-center"
          style={rowWrapperSyle}>
          <div className="row w-75">
            <div id="pads" className="col-md">A</div>
            <div id="controls" className="col-md">B</div>
          </div>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
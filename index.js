const contentWrapperStyle = {
  color: "#fff",
  height: "100vh",
  backgroundColor: "#333"
}

const rowWrapperSyle = {
  height: "100%",
  margin: "0"
}

const audioClips = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class Root extends React.Component {
  render() {
    return (
      <div id="content-wrapper"
        className="container-fluid"
        style={contentWrapperStyle}>
        <div className="row align-items-center justify-content-center"
          style={rowWrapperSyle}>
          <div className="row w-50">
            <div id="pads" className="col-md">
              <DrumPads />
            </div>
            {/* <div id="controls" className="col-md"></div> */}
          </div>
        </div>
      </div>
    )
  }
}

class DrumPads extends React.Component {
  render() {
    return (
      <div>
        {audioClips.map((e) => {
          return <div className="btn btn-secondary p-5 m-1"
            onClick={() => {
              const audio = document.getElementById(e.keyTrigger)
              audio.play()
            }}>
            <audio id={e.keyTrigger}
              src={e.url}></audio>
            {e.keyTrigger}
          </div>
        })}
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
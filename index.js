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

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clipName: "Sound"
    }
    this.updateDisplayText = this.updateDisplayText.bind(this)
  }

  updateDisplayText(clipName) {
    this.setState({
      clipName: clipName
    })
  }

  render() {
    return (
      <div id="content-wrapper"
        className="container-fluid"
        style={contentWrapperStyle}>
        <div id="drum-machine"
          className="row align-items-center justify-content-center"
          style={rowWrapperSyle}>
          <div className="row w-50">
            <h1 id="display">{this.state.clipName}</h1>
            <div id="pads" className="col-md">
              <DrumPad updateDisplayText={this.updateDisplayText} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class DrumPad extends React.Component {
  playAudio(e) {
    const audio = document.getElementById(e.keyTrigger)
    audio.play()
  }

  updateClipName(e, updateDisplayText) {
    updateDisplayText(e.id)
  }

  render() {
    return (
      <div>
        {audioClips.map((e) => {
          return <div id={e.id}
            className="drum-pad btn btn-secondary p-5 m-1"
            onClick={() => {
              this.playAudio(e)
              this.updateClipName(e, this.props.updateDisplayText)
            }}>
            <audio id={e.keyTrigger}
              className="clip"
              src={e.url}></audio>
            {e.keyTrigger}
          </div>
        })}
      </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("root"));

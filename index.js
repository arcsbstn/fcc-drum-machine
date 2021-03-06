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
    id: 'Kick-n-Hat',
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
]

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clipName: 'Sound'
    }
    this.updateDisplayText = this.updateDisplayText.bind(this)
  }

  updateDisplayText = (clipName) => this.setState({ clipName })

  render() {
    return (
      <div
        id='content-wrapper'
        className='container-fluid'
      >
        <div
          id='row-wrapper'
          className='row align-items-center justify-content-center'>
          <div
            id='drum-machine'
            className='row'
          >
            <h1 id='display'>
              {this.state.clipName}
            </h1>
            <div
              id='pads'
              className='col-md'
            >
              {audioClips.map(clip => {
                return <DrumPad
                  id={clip.id}
                  keyCode={clip.keyCode}
                  keyTrigger={clip.keyTrigger}
                  url={clip.url}
                  updateDisplayText={this.updateDisplayText}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    if ((e.keyCode === this.props.keyTrigger.charCodeAt()) ||
      (e.keyCode === this.props.keyTrigger.toLowerCase().charCodeAt())) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.updateDisplayText(this.props.id)
    }
  }

  handleButtonClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.updateDisplayText(this.props.id)
  }

  render() {
    return (
      <div
        id={this.props.id}
        className='drum-pad btn btn-secondary p-5 m-1'
        onClick={() => this.handleButtonClick()}
      >
        <audio id={this.props.keyTrigger}
          className='clip'
          src={this.props.url}
          ref={ref => this.audio = ref}
        />
        {this.props.keyTrigger}
      </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'))

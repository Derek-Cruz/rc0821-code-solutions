import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    let time = this.state.time;

    if (this.state.isRunning) {
      clearInterval(this.counter);
      this.setState({ isRunning: !this.state.isRunning });
    } else {
      this.counter = setInterval(() => {
        time++;
        this.setState({ isRunning: true, time: time });
      }, 1000);
    }
  }

  reset() {
    this.setState({
      isRunning: false,
      time: 0
    });
  }

  render() {
    const buttonPauseOrPlay = this.state.isRunning;

    return (
      <div className="container">
        <div onClick={this.reset} className='circle'>{this.state.time}</div>
        <button onClick={this.handleClick} className='button-style'>
          <i className={buttonPauseOrPlay ? 'fas fa-pause fa-3x' : 'fas fa-play fa-3x'}></i>
        </button>
      </div>
    );
  }
}

export default StopWatch;

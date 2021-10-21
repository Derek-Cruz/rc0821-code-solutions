import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: 0
    };
  }

  render() {
    return (
      <div>
        <div className='circle'>{this.state.time}</div>
      </div>
    );
  }
}

export default StopWatch;

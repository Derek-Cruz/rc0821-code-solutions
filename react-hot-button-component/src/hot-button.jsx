import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let count = this.state.clicks;
    count++;
    this.setState({ clicks: count });
  }

  colorChange() {
    if (this.state.clicks >= 3 && this.state.clicks < 6) {
      return 'btn-cold';
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      return 'btn-cool';
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      return 'btn-tepid';
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      return 'btn-warm';
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      return 'btn-hot';
    } else if (this.state.clicks >= 18) {
      return 'btn-nuclear';
    }
  }

  render() {
    return (
      <button className={`btn ${this.colorChange()}`} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;

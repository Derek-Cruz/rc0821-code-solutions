import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
    this.onOrOff = this.onOrOff.bind(this);
  }

  onOrOff() {
    this.setState({ switch: !this.state.switch });
  }

  render() {
    const clickOnOrOff = this.state.switch;
    return (
      <div className={'div-style'}>
        <button onClick={this.onOrOff} className={`button-style ${clickOnOrOff ? 'button-off' : 'button-on'}`}>
          <div className={`switch-div ${clickOnOrOff ? 'switch-off' : 'switch-on'}`}></div>
        </button>
        <h2 className={'on-or-off'} >{clickOnOrOff ? 'OFF' : 'ON'}</h2>
      </div>
    );
  }
}

export default ToggleSwitch;

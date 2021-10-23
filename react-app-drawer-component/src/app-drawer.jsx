import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      menuOpen: false
    };
  }

  handleToggle() {
    (this.state.menuOpen === false)
      ? this.setState({ menuOpen: true })
      : this.setState({ menuOpen: false });
  }

  render() {
    const testing = this.state.menuOpen === false;

    return (
      <div>
        <i onClick={this.handleToggle} className={`i-style ${testing ? 'fas fa-bars' : 'hidden'}`}></i>
        <div onClick={this.handleToggle} className={testing ? 'hidden' : 'background'}></div>
        <div className={testing ? 'hidden' : 'menu'}>
          <h2>Menu</h2>
          <ul className='ul-style'>
            <li onClick={this.handleToggle}>About</li>
            <li onClick={this.handleToggle}>Get Started</li>
            <li onClick={this.handleToggle}>Sign In</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppDrawer;

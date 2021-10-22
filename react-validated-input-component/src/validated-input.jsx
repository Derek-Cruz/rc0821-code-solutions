import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.getPassword = this.getPassword.bind(this);
  }

  getPassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const passLength = this.state.password.length < 8;
    const msg = this.state.password === '';

    return (
      <form className='form-style'>
        <label className='label-style'>Password</label>
        <div className='div-style'>
          <input className='input-style' type="password" value={this.state.password} onChange={this.getPassword} />
          <i className={passLength ? 'fas fa-times' : 'fas fa-check'}></i>
        </div>
        <div className='message'>
          {msg
            ? 'A password is required.'
            : passLength
              ? 'Your password is too short.'
              : ''}
        </div>
      </form>
    );
  }
}

export default ValidateInput;

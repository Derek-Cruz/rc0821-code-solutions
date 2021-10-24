import React from 'react';
import ReactDOM from 'react-dom';
class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);

// --------------------------------------how to have muiltiple forms----------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom';

// class NewsletterForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       username: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   handleChange(event) {
//     const value = event.target.value;
//     const name = event.target.name;

//     this.setState({ [name]: value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log('state:', this.state);
//   }

//   reset() {
//     this.setState({
//       email: '',
//       password: '',
//       username: ''
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} onReset={this.reset}>
//         <div>
//           <label htmlFor="signup-email">Email: </label>
//           <input
//             name="email"
//             type="text"
//             id="signup-email"
//             value={this.state.email}
//             onChange={this.handleChange} />
//         </div>
//         <div>
//           <label htmlFor="signup-username">Username: </label>
//           <input
//             name="username"
//             type="text"
//             id="signup-username"
//             value={this.state.username}
//             onChange={this.handleChange} />
//         </div>
//         <div>
//           <label htmlFor="signup-password">Password: </label>
//           <input
//             name="password"
//             type="password"
//             id="signup-password"
//             value={this.state.password}
//             onChange={this.handleChange} />
//         </div>
//         <div>
//           <button>Sign Up</button>
//           <button type="reset">Reset</button>
//         </div>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NewsletterForm />,
//   document.querySelector('#root')
// );

import React from 'react';
import './sign-in-style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email" value={this.state.email} required />
          <label>Email</label>
          <input
            name="password"
            value={this.state.email}
            required
            type="password"
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
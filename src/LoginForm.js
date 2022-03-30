import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {

//state funciton for user state
  handleState = (e) => {
    this.setState({
      user: e.target.value
    });
  }

  //handle submit to call props login function, passes in this.state.user
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginHandler(this.state.user);
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      // <p>LoginForm Coming Soon</p>
      <Form >
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onInput={this.handleState} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};

export default LoginForm;

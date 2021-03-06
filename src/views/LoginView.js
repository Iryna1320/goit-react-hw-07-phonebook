import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const styles = {
  h1: {
    textAlign: 'center',
    color: '#E84A5F',
  },
  form: {
    width: 320,
    margin: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 style={styles.h1}>Страница логина</h1>

        <Form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <Form.Group controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>

            <Form.Control
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="danger" size="lg" block>
            Войти
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile';
import LoginForm from './LoginForm';
import Login from './Login';
import LogoutButton from './LogoutButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        {/* <BestBooks/> */}
        {/* <LoginForm /> */}
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          {/* <Login /> */}
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks user={this.state.user} /> : <Login userLogin={this.loginHandler} />}
              {/* if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            <Route exact path="/Profile">
              <Profile userInfo={this.state.user} />
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Route>
            <Route exact path="/LogoutButton">
              <LoginForm userLogin={this.logoutHandler}/>
            </Route>
            <Route exact path="/LogoutButton">
              <LogoutButton onLogout={this.logoutHandler}/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;

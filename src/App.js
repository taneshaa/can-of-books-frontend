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
import Login from './Login';
import LoginForm from './LoginForm';

class App extends React.Component {

  constructor(props) {
    super(props);
   this.state = {
     isLoggedIn: false,
      user: null,
    }
  }

  loginHandler = (user) => {
    console.log('logged in function');
    this.setState({
      isLoggedIn: true,
    })
  }

  logoutHandler = () => {
    this.setState({
     isLoggedIn: false,
    })
  }

  render() {
    console.log('what is state', this.state);
    return (
      <>
      
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.isLoggedIn ? <BestBooks user={this.state.user} /> : <LoginForm loginHandler={this.loginHandler} />}
            </Route>
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            <Route exact path="/profile">
              <Profile user={this.state.user}/>
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;


// " <Router>
// <Header user={this.state.user} onLogout={this.logoutHandler} />
// <Switch>
// <Route exact path="/Profile">
// <Profile userInfo={this.state.user} />
// </Route>
// <Route exact path="/LoginButton">
// <LoginForm loginHandler={this.setLogin} />
// </Route>
// <Route exact path="/LogoutButton">
// <LogoutButton onLogout={this.logoutHandler}/>
// </Route>
// </Switch>
// <Footer />
// </Router> "
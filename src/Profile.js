import { Component } from "react";
import { Card } from 'react-bootstrap';

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    <Card body></Card>

    /* STRETCH TODO: if no logged in user then redirect home */
    return <p>{this.props.userInfo}</p>
  }
};

export default Profile;

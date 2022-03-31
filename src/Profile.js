import { Component } from "react";
import { Card } from 'react-bootstrap';

class Profile extends Component {
// constructor(props){
//   super(props);

  render() {
    console.log('profile', this.props);
    /* TODO: render information about logged in user */
    <Card body></Card>

    /* STRETCH TODO: if no logged in user then redirect home */
    return <p>Hello lemi</p>
  }
};

export default Profile;

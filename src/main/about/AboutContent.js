import React, {Component} from "react";
import AboutLinks from "./AboutLinks";
import About from "./About";
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class AboutContent extends Component {
  render(){
    const links = [
      {
        name: 'Howdy',
        id: 'howdy'
      },
      {
        name: 'Experience',
        id: 'experience'
      },
      {
        name: 'Education',
        id: 'education'
      },
      {
        name: 'Hobbies',
        id: 'hobbies'
      }
    ]

    return(
      <div>
        <h3>My name is Zachary Rose.</h3>
        <div>I am a Software Engineer.</div>
        <div id="about-links-wrapper">
          <ul>
            {links.map(({ name, id }) => (
              <li key={id}>
                <Link to={`/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
          <Route path={`/:linkId`} component={About}/>
        </div>
      </div>
    );
  }
}


export default AboutContent;

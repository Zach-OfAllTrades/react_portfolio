import React, { Component } from "react";
import TextInput from "../universal/TextInput";
import TextArea from "../universal/TextArea";
import Button from "../universal/Button";

class ContactForm extends Component {
  render(){
    return(
      <div id="contact-form-wrapper">
        <form id="contact-form">
          <div id="contact-header">
            <h3>Get In Touch</h3>
          </div>
          <div id="contact-input-container">
            <div id="name-wrapper">
              <TextInput placeholder="First Name" name="first-name" id="first-name-input"/>
              <TextInput placeholder="Last Name" name="last-name" id="last-name-input"/>
            </div>
            <TextInput placeholder="Affiliations" name="affiliations" id="affiliations-input"/>
            <TextInput placeholder="E-mail" name="email" id="email-input"/>
            <TextArea placeholder="Message" columns="44" rows="15" />
            <Button type="submit" label="Send Message" />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;

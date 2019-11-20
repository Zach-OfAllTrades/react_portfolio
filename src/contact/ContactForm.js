import React, { Component } from "react";
import TextInput from "../universal/TextInput";
import TextArea from "../universal/TextArea";
import SubmitButton from "../universal/SubmitButton";

class ContactForm extends Component {
  render(){
    return(
      <div id="contact-form-wrapper">
        <form id="contact-form">
          <div id="contact-header">
            <h3>Get In Touch</h3>
          </div>
          <div id="contact-input-container">
            <TextInput placeholder="Name" name="name"/>
            <TextInput placeholder="Affiliations" name="affiliations"/>
            <TextInput placeholder="E-mail" name="email"/>
            <TextArea placeholder="Message" columns="44" rows="15" />
            <SubmitButton label="Send Message" />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;

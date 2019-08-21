import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "A Message To You JG",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "gmarchesi888@gmail.com",
      subject: subject,
      message: message
    };
    emailjs.send(
      "mailjet",
      "jg_templ",
      templateParams,
      "user_b00FO4Wazqr0MmCjTatxl"
    );
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      subject: "A Message To You JG",
      message: ""
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="container-inner">
        <form className="h-form" onSubmit={this.handleSubmit}>
          <label className="h-label">Name</label>
          <input
            className="h-input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label className="h-label">E-Mail</label>
          <input
            className="h-input"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label className="h-label">Subject</label>
          <input
            className="h-input"
            type="text"
            name="subject"
            value={subject}
            onChange={this.handleChange}
          />
          <label className="h-label">Message</label>
          <textarea
            className="h-textarea"
            type="textarea"
            name="message"
            value={message}
            onChange={this.handleChange}
          />
          <div className="spacer5" />
          <button type="submit">Submit</button>
          <button onClick={this.props.closeEmailPanel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

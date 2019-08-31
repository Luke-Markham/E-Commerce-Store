import React from "react";
import axios from "axios"; // For making client request.
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./contact-form.styles.scss";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleForm = e => {
    axios
      .post("https://formcarry.com/s/JcjZozOdygu", this.state, {
        headers: { Accept: "application/json" }
      })
      .then(function(response) {
        alert(
          "Great, we have recieved your message! We'll be in contact soon."
        );
      })
      .catch(function(error) {
        alert("Sorry there was a problem, please try again. ");
      });

    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleForm}>
        <FormInput
          type="text"
          value={name}
          name="name"
          label="Name"
          onChange={this.handleFields}
        />

        <FormInput
          type="email"
          value={email}
          name="email"
          label="Email"
          onChange={this.handleFields}
        />

        <textarea
          value={message}
          name="message"
          rows="8"
          onChange={this.handleFields}
          placeholder="Enter Your Message..."
        ></textarea>

        <CustomButton className="send-btn" type="submit">
          Send
        </CustomButton>
      </form>
    );
  }
}

export default ContactForm;

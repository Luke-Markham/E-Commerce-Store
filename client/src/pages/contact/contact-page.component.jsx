import React from "react";
import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact-page.styles.scss";

const ContactPage = () => {
  return (
    <div className="contactPage-container">
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;

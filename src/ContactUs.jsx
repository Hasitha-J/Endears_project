import React from 'react'
import './ContactUs.css'


const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const mailtoLink = `mailto:shbbandara@gmail.com?subject=Contact Us Mail From ${conFom.email}&body= This message is sending to developer. This still in the developing process${encodeURIComponent(
      `Name: ${conFom.name}\nEmail: ${conFom.email}\n\nMessage:\n${conFom.message}`
    )}`;

    window.location.href = mailtoLink;
    setFormStatus('Send'); // Reset the button text after submission
  };

  return (
    <div className="container" id='contact'>
      <h2>Contact Us</h2>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div>
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

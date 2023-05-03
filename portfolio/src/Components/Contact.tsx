import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';

function Contact() {

  const form = useRef<null | HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement | null>) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs.sendForm('service_93flvy6', 'template_nwt7xv8', '#emailform', 'NSV6aTQjw2wXfm8vQ')
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
    return (
        <>
          <section className="contact">
            <article className="info">
              Swathi Sidharthan
            </article>
            <article className="email">
            <form ref={form} onSubmit={sendEmail} id='emailform'>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
            </article>
          </section>
        </>
    )
}

export default Contact;
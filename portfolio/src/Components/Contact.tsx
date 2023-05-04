import React, { useRef } from 'react';
import { Button, TextInput, Textarea } from '@mantine/core';
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
        form.current?.reset();
    }, (error) => {
        console.log(error.text);
    });
  };
    return (
        <>
          <section className="contact">
            <article className="email">
            <form ref={form} onSubmit={sendEmail} id='emailform'>
            <h2 className='sub-heading green'>Get in touch</h2>
              <article className='name-email'>
                <TextInput name="user_name" required size='lg'
                placeholder="Name"/>
                <TextInput name="user_email" type='email' required size='lg'
                placeholder="Email"/>
              </article>
              <Textarea
                placeholder="Tell me more..." name='message'
                size='lg'/>
              <Button color="teal" type="submit">Send</Button>

            </form>
            </article>
          </section>
        </>
    )
}

export default Contact;
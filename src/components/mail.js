import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0wlwdeo', 'template_khpicyt', form.current, {
        publicKey: '6kLRNwW_LX6yEoyVJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (<>
    <form ref={form} onSubmit={sendEmail}>
      
    </form>
  </>
  );
};

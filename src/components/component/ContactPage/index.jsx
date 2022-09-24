/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Contact from '../../common/contact';
import LayoutPage from '../../common/layout';

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className='contact__container container'>
        <Contact className='contact-page' />
      </div>
    </div>
  );
};

export default ContactPage;

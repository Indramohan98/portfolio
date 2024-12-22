import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
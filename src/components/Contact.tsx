import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">example@email.com</p>
          </div>
          <div className="text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import axios from 'axios';

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await axios.post('http://localhost:5000/api/mail', form);

      // Clear form
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
      });

      // Show success message
      setSuccessMessage('Message sent successfully!');

      // Hide message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setSuccessMessage('Something went wrong. Please try again.');
      setTimeout(() => setSuccessMessage(''), 3000);
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className='container mx-auto'>
      <div className='py-[100px] px-[27px]'>
        <div className='grid grid-cols-12 gap-6 items-start w-full'>
          {/* Contact Form */}
          <div
            className='col-start-1 col-span-12 md:col-start-1 md:col-span-7 bg-white shadow-md rounded-2xl p-6'
            data-aos='fade-up'
          >
            <h2 className='text-2xl font-semibold text-gray-800'>Contact Us</h2>
            <p className='text-gray-500 mt-2 mb-6'>
              We’d love to hear from you! Whether you have questions about our
              teas, need help with an order, or simply want to share your tea
              experience, we’re here to help.
              <br />
              Feel free to contact us any time. We will get back to you as soon
              as we can!
            </p>

            <form
              className='space-y-4'
              onSubmit={handleSubmit}
              autoComplete='off'
            >
              <div className='grid grid-cols-2 gap-4'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name *'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400'
                  value={form.firstName}
                  onChange={handleChange}
                />
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name *'
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400'
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              <input
                type='email'
                name='email'
                placeholder='Email *'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400'
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name='description'
                placeholder='Message *'
                rows={4}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400'
                value={form.description}
                onChange={handleChange}
              />

              <button
                type='submit'
                className={`w-full bg-blue-600 text-white py-2 rounded-lg transition transform ${
                  isSending
                    ? 'scale-95 opacity-70 cursor-not-allowed'
                    : 'hover:bg-blue-700'
                }`}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'SEND'}
              </button>

              {/* Success message */}
              {successMessage && (
                <p className='text-green-600 font-medium mt-2 transition-opacity duration-500'>
                  {successMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div
            className='col-start-1 col-span-12 md:col-start-9 md:col-span-4 space-y-4'
            data-aos='fade-left'
          >
            <div className='bg-blue-600 text-white p-5 rounded-xl shadow'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-6 h-6 mt-1' />
                <a
                  href='https://www.google.com/maps/place/Rampokh,+Suryadaya+Municipality-9,+Fikal,+Ilam'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  Rampokh, Suryadaya Municipality-9, Fikal, Ilam
                </a>
              </div>
            </div>

            <div className='bg-gray-100 p-5 rounded-xl shadow flex items-start space-x-3'>
              <Phone className='w-6 h-6 text-blue-600' />
              <p>
                1800-123-456 <br /> Mon–Sat: 8:00 am – 6:00 pm
              </p>
            </div>

            <div className='bg-gray-100 p-5 rounded-xl shadow flex items-start space-x-3'>
              <Mail className='w-6 h-6 text-blue-600' />
              <div>
                <p>We’re ready to reply within 24 hours</p>
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=shresthathakur@gmail.com'
                  className='text-blue-600 hover:underline'
                >
                  shresthathakur@gmail.com
                </a>
              </div>
            </div>

            <div className='bg-gray-100 p-5 rounded-xl shadow flex items-start space-x-3'>
              <Building className='w-6 h-6 text-blue-600' />
              <p>Rampokha Green Tea and Agro Processing Industries Pvt. Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

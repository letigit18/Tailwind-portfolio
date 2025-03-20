import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required.'),
      email: Yup.string().email('Invalid email address').required('Email is required.'),
      message: Yup.string().required('Message is required.'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form values:", values);
      emailjs
        .send(
          'service_x8l3f9t', // Service ID
          'template_b3f1ynz', // Template ID
          values,
          'zqyR-KOkHU5WSoEqh' // Public Key
        )
        .then(
          (result) => {
            console.log("EmailJS result:", result);
            alert('Message sent successfully!');
            resetForm();
          },
          (error) => {
            console.error("EmailJS error:", error);
            alert('Failed to send message. Please try again.');
          }
        );
    },
  });

  return (
    <div className="w-full h-auto p-5 bg-white flex flex-col gap-5" id='contact'>
      <b className="text-center text-2xl">Contact</b>
      <form onSubmit={formik.handleSubmit} className="flex flex-col md:flex-row w-full md:w-[90%] mx-auto">
        <div className="flex flex-col gap-4 p-4 md:p-6 w-full md:w-1/2">
          <div className="flex flex-col w-full gap-1 justify-start">
            <label htmlFor="name" className="block text-left">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`p-2 rounded-md border ${
                formik.touched.name && formik.errors.name
                  ? 'border-red-500'
                  : 'border-blue-300'
              } focus:outline-none focus:border-blue-900 focus:shadow-md`}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <label htmlFor="email" className="block text-left">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`p-2 rounded-md border ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'border-blue-300'
              } focus:outline-none focus:border-blue-900 focus:shadow-md`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <label htmlFor="message" className="text-left">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`p-2 rounded-md border ${
                formik.touched.message && formik.errors.message
                  ? 'border-red-500'
                  : 'border-blue-300'
              } focus:outline-none focus:border-blue-900 focus:shadow-md`}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500">{formik.errors.message}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white cursor-pointer bg-blue-900 hover:bg-red-500 transition ease-in duration-300"
          >
            Send
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around w-full md:w-1/2 p-4 md:p-6">
          <div className="flex gap-3 flex-col items-start">
            <h1 className="font-bold">Follow me:</h1>
            <span className='flex gap-2'>

              <a href="#" className='hover:scale-110 transition-transform ease-in duration-300'><FaFacebook size={30} color="#4267B2" /> </a>
              <a href="#" className='hover:scale-110 transition-transform ease-in duration-300'><FaGithub size={30} color="#4267B2" /> </a>
              <a href="#" className='hover:scale-110 transition-transform ease-in duration-300'><FaLinkedin size={30} color="#4267B2" /> </a>
              
            </span>
            <h1 className="font-bold">Location:</h1>
            <span className="text-left">Jimma, Ethiopia</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-bold">Mobile Number:</h1>
            <span>+251910985181</span>
            <h1 className="font-bold">Email:</h1>
            <span>leti.tesfaye18@gmail.com</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
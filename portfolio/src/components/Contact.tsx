"use client";
import React, { lazy, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { sendContactForm } from "../utils/SendContactForm";
import { toast } from "react-toastify";
import Image from "next/image";
import IconsContact from "./IconsContact";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = (e: any) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleChange = (e: any) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const validateEmail = (email: string) => {
    // Regular expression for a valid email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const onSubmit = async () => {
    // Check if required fields are empty
    if (!values.name || !values.email || !values.subject || !values.message) {
      toast.error("Please fill out all required fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Check if the email address is in a valid format
    if (!validateEmail(values.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast.success("📧Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error?.message,
      }));
    }
  };

  const Label = ({ htmlFor, children }) => (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold mb-1 mt-2 text-left"
    >
      {children} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <section id="contact" className=" lg:section relative z-10">
      <div className="container mx-auto px-4">
        <h4 className="text-3xl lg:text-4xl text-center text-flicker-in-glow text-Rubrik-Distressed mt-4">
          Let's Connect
        </h4>
        {/* form */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-20">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2 border rounded-2xl flex flex-col uppercase text-center p-8 mt-2"
          >
            <div>
              <Label htmlFor="name">Full Name</Label>
              <input
                className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <input
                className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
                placeholder="Your email address"
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <input
                className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
                placeholder="Your subject"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-center w-full pt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center"
                type="button"
                onClick={onSubmit}
              >
                {isLoading ? "Sending..." : "Send message"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-4 lg:flex lg:flex-row-reverse p-2">
        <div className="text-sm lg:text-md leading-none text-white p-1 pb-3 -mt-3 text-center">
          Don't Feel Like Filling Out Forms? No worries!
          <br /> You can shoot me an email at
          <a
            href="mailto:aviyadavchas@gmail.com"
            className="text-accent hover:underline text-blue-600 text-md lg:text-xl pt-3"
          >
            📮aviyadavchas@gmail.com
          </a>
        </div>
        <div className="lg:flex-1 flex items-center justify-center lg:items-start lg:justify-start lg:text-3xl lg:-mt-6">
          <IconsContact />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);

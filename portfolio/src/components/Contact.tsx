"use client";
import React, { useState } from "react";
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
    console.log("eeee", e.target);
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

  return (
    <section id="contact" className=" lg:section relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 ml-8"
          >
            <div>
              <h4 className="text-xl font-bold uppercase text-accent  mb-2 tracking-wide">
                Let's Connect
              </h4>
              <h2 className="text-[20px] lg:text-[20px] leading-none mb-4">
                🚀 Ready for a New Adventure? Count me in!
                <br /> Whether it's a challenging project or a creative
                collaboration, I'm all ears.
              </h2>
              <Image
                src="https://cdni.iconscout.com/illustration/premium/thumb/developer-team-working-together-5683342-4734795.png?f=avif"
                alt="work together"
                width={700}
                height={200}
                className="-mt-6"
              />
              <h2 className="text-[20px] lg:text-[20px] leading-none mb-12">
                Don't Feel Like Filling Out Forms?
                <br /> No worries! You can shoot me an email at
                <a
                  href="mailto:your.email@gmail.com"
                  className="text-accent hover:underline"
                >
                  📮aviuitee@gmail.com
                </a>
              </h2>
            </div>
            <IconsContact />
          </motion.div>
          {/* form */}

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col mr-4 mt-10 items-start p-[12px] max-w-[420px]  "
          >
            <label>Full Name*</label>
            <input
              className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black font-semibold pl-2"
              type="text"
              id="name"
              value={values?.name}
              name="name"
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Your full name*"
            />
            <label>Email*</label>
            <input
              className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black font-semibold pl-2"
              type="email"
              id="email"
              value={values?.email}
              name="email"
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Your email address*"
            />
            <label>Subject*</label>
            <input
              className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black font-semibold pl-2"
              type="Subject"
              placeholder="Your subject*"
              id="subject"
              value={values?.subject}
              name="subject"
              onChange={handleChange}
              onBlur={onBlur}
            />
            <label>Message*</label>
            <textarea
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-none mb-10 text-black font-medium"
              value={values?.message}
              name="message"
              rows={4}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder="Write your message here...*"
            ></textarea>
            <div className="flex flex-col justify-center items-center w-full">
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
    </section>
  );
};

export default Contact;

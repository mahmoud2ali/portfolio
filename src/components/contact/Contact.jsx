import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

import Swal from 'sweetalert2'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kiybqyf",
      "template_eczfyxy",
      form.current,
      "hzSVGBSbVIgW2HxdB"
    ).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting me. I'll get back to you soon!",
          showConfirmButton: false,
          timer: 2500,
        });
        form.current.reset();
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again!",
        });
        console.error(error.text);
      }
    );
  };

  return (
    <section className="contact section" id="contact">
      <div className="container text-center">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form mt-4" data-aos="fade-in">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

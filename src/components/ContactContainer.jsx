import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Swal from "sweetalert2";
import Contact from "./Contact";

const details = [
  {
    section: "Location",
    info: ["123 Racing Boulevard,", "Los Angeles, CA 90001"],
    icon: FaMapMarkerAlt,
  },
  {
    section: "Hours",
    info: [
      "Monday - Friday: 3:00 PM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
    icon: FaClock,
  },
  {
    section: "Email",
    info: ["contact@mcjgarage.com"],
    icon: FaEnvelope,
  },
  {
    section: "Phone",
    info: ["(555) 123-4567"],
    icon: FaPhoneAlt,
  },
];


const swalStyles = `
  .swal2-popup {
    background: #1a1f29 !important;
    border: 1px solid #2a2f3a;
    border-radius: 22px;
    color: #e1e8ed;
    font-family: "Raleway", sans-serif;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
  }
  .swal2-title {
    font-family: "Anton SC", sans-serif;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .swal2-html-container {
    color: #8899a6;
    font-size: 1.05rem;
    line-height: 1.6;
  }
  .swal2-backdrop-show {
    backdrop-filter: blur(6px);
    background: rgba(15, 20, 25, 0.75) !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill {
    -webkit-text-fill-color: #d1d5db;
    -webkit-box-shadow: 0 0 0px 1000px #1F1F22 inset;
    transition: background-color 5000s ease-in-out 0s;
    caret-color: #f97316;
  }
`;

const ContactContainer = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,      
      [name]: value, // actualiza solo el campo que cambió
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // cancela la recarga de página del navegador

    Swal.fire({
      title: "Message Sent!",
      html: `We'll get back to you soon, <strong style="color:#d1d5db; font-weight:600; text-transform:capitalize">${formData.name}</strong>!`,
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Contact
      details={details}
      swalStyles={swalStyles}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ContactContainer;

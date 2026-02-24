import React, { useState } from "react";
import Part from "./Part";
import Swal from "sweetalert2";

const partForm = [
    { name: "name", label: "Full Name" },
    { name: "phone", label: "Phone" },
    { name: "email", label: "Email" },
    { name: "motorcycleM", label: "Motorcycle Model" },
    { name: "partNeeded", label: "Part Needed" },
    { name: "additionalD", label: "Additional Details" },
    { name: "option", label: "Fulfillment Method", options: ["Pickup", "Delivery"] }
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


const PartContainer = () => {

    const [partData, setPartData] = useState({
        name: "",
        phone: "",
        email: "",
        motorcycleM: "",
        partNeeded: "",
        additionalD: "",
        option: ""
    });

    
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPartData((prev) => ({
      ...prev,      
      [name]: value,
    }));
  };

    const handleSubmit = (e) => {
      e.preventDefault();

       Swal.fire({
            title: "Message Sent!",
            html: `We'll get back to you soon, <strong style="color:#d1d5db; font-weight:600; text-transform:capitalize">${partData.name}</strong>!`,
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
      
   
      setPartData({ name: "", phone: "", email: "", motorcycleM: "", partNeeded: "", additionalD: "", option: "" });
    };
      
  return (
    <div>
        <Part 
            partForm={partForm}
            partData={partData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            swalStyles={swalStyles}
        />
    </div>
  )
}

export default PartContainer
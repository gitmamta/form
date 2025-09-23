import React, { useState } from "react";


import { useNavigate } from "react-router-dom";
import "./form.css"

export default function Form(){
  
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic field check
    const isEmpty = Object.values(formData).some((value) => value.trim() === "");
    if (isEmpty) {
      alert("Please fill in all fields.");
      return;
    }

  
  };

  return (
    <>
    <div className="containerr">
      <h2 className="heading">Shipping Address</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="inputt"
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleChange}
          className="inputt"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="inputt"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="inputt"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="inputt"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="inputt"
        />
        <button type="submit" className="button">
          submit
        </button>
      </form>
    </div>
    </>
  );
};





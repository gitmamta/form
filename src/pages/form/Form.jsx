import React, { useState } from "react";

export default function Form() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields are filled
    const isEmpty = Object.values(formData).some((value) => value.trim() === "");
    if (isEmpty) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Replace this with your actual Render backend URL and route
      const response = await fetch("https://form-backend-ysvv.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      alert("Form submitted successfully!");

      // Clear form after successful submission
      setFormData({
        name: "",
        street: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form");
    }
  };

  return (
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
          Submit
        </button>
      </form>
    </div>
  );
}

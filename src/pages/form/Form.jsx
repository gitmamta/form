const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic field check
  const isEmpty = Object.values(formData).some((value) => value.trim() === "");
  if (isEmpty) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("https://form-backend-ysvv.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    const data = await response.json();
    alert("Form submitted successfully!");
    // Optionally, navigate or clear form here
    // navigate("/success"); // if using useNavigate from react-router-dom
    setFormData({
      name: "",
      street: "",
      city: "",
      pincode: "",
      state: "",
      country: "",
    });
  } catch (error) {
    console.error(error);
    alert("Error submitting the form");
  }
};

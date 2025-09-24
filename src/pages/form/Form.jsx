import { signin } from "../../schema/index.jsx";
import api from "../../api/api.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import "./form.css";
// import { useNavigate } from "react-router-dom";

let initialValue = {
  name: "",
  email: "",
  phoneNo: "",
  age: "",
  message: "",
};

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValue,
    onSubmit: submitHandler,
    validationSchema: signin,
  });
  async function submitHandler() {
    try {
      setStatus(true);
      const response = await api.post("/users", values);
      console.log(values);
      handleReset();
      setStatus(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="card">
        <div className="d-flex flex-column gap-3 card-body">
          <h1 className="text-center">Add Users</h1>

          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
          />
          {errors.name && touched.name && (
            <span className="text-danger">{errors.name}</span>
          )}

          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
          />
          {errors.email && touched.email && (
            <span className="text-danger">{errors.email}</span>
          )}

          <input
            type="number"
            placeholder="Enter your phoneNo"
            id="phoneNo"
            name="phoneNo"
            value={values.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
          />
          {errors.phoneNo && touched.phoneNo && (
            <span className="text-danger">{errors.phoneNo}</span>
          )}

          <input
            type="number"
            placeholder="Enter your age"
            id="age"
            name="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
          />
          {errors.phoneNo && touched.age && (
            <span className="text-danger">{errors.age}</span>
          )}

          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter message"
            className="form-control"
            rows="10"
            cols="30"
            style={{ resize: "none" }}
          ></textarea>
          {errors.message && touched.message && (
            <span className="text-danger">{errors.message}</span>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

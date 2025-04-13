import React, { useState } from "react";

const App230 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myerrors = validateForm(formData);
    console.log("myerrors-->", myerrors);
    if (Object.keys(myerrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(myerrors);
      console.log(myerrors);
    }
  };

  const validateForm = (formData) => {
    const err = {};
    if (!formData.name) {
      err.name = "Name is required";
    }
    if (!formData.email) {
      err.email = "Email is required";
    }
    if (!formData.phone) {
      err.phone = "Phone is required";
    }
    if (!formData.address) {
      err.address = "Address is required";
    }
    return err;
  };

  return (
    <div>
      <h1>Complex Form</h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </label>
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <div style={{ color: "red" }}>{errors.phone}</div>
              )}
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && (
                <div style={{ color: "red" }}>{errors.address}</div>
              )}
            </label>
            <button type="button" onClick={handlePrevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default App230;

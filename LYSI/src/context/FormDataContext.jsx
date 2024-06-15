import React, { useState } from "react";
import { createContext } from "react";

const context = createContext();

const MyContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Okay");
    console.log("Form Data", formData);
  };

  const contextValue = {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export { MyContextProvider, context };

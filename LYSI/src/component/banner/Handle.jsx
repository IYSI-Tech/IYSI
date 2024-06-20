import { useState } from "react";

export const FormDataHandler = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        occupation: "",
        institution: "",
      });

      return [formData, setFormData];
}

export const ErrorHandler = () => {
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        gender: "",
        occupation: "",
        institution: "",
      });
      return [errors, setErrors]
}

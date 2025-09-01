import { useState } from "react";
import { RegistrationContext } from "./RegistrationContext";



export const RegistrationProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
        state: "",
        city: "",
    });

return (
    <RegistrationContext.Provider value={{ formData, setFormData }}>
        {children}
    </RegistrationContext.Provider>
);

};
import { useState } from "react";
import RegistrationSuccessBanner from "./RegistrationSuccessBanner";
import RegistrationFormBody from "./RegistrationFormBody";

const RegistrationForm = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [isValid, setValid] = useState(false);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        hearAboutUs: "",
        birthday: "",
    });

    const handleInputChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        setValues((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (
            values.firstName &&
            values.phoneNumber &&
            values.email &&
            values.password &&
            values.birthday
        ) {
            setValid(true);
        }
    };

    return (
        <div className="form-container">
            {isValid ? (
                <RegistrationSuccessBanner firstName={values.firstName} />
            ) : (
                <RegistrationFormBody
                    isSubmitted={isSubmitted}
                    values={values}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                />
            )}
        </div>
    );
};

export default RegistrationForm;

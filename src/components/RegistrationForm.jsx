import { useEffect, useState } from "react";
import RegistrationFormBody from "./RegistrationFormBody";
import SuccessModal from "./SuccessModal";
import { chakra, useDisclosure } from "@chakra-ui/react";

const RegistrationForm = (p) => {
    const { setPageState } = p;
    const [isSubmitted, setSubmitted] = useState(false);
    const [isValid, setValid] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        isValid && onOpen();
    }, [isValid, onOpen]);

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
        <chakra.div className="form-container">
            <SuccessModal
                firstName={values.firstName}
                isOpen={isOpen}
                onClose={onClose}
                setPageState={setPageState}
            />
            <RegistrationFormBody
                isSubmitted={isSubmitted}
                values={values}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
        </chakra.div>
    );
};

export default RegistrationForm;

import { FormEventHandler, useEffect, useState } from "react"
import RegistrationFormBody from "./RegistrationFormBody"
import SuccessModal from "./SuccessModal"
import { chakra, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { PageState, UseStateReturnNoUndefined } from "../App"

interface RegistrationFormProps {
	setPageState: UseStateReturnNoUndefined<PageState>[1]
}

const RegistrationForm = (p: RegistrationFormProps) => {
	const { setPageState } = p
	const [isSubmitted, setSubmitted] = useState<boolean>(false)
	const [isValid, setValid] = useState<boolean>(false)
	const { isOpen, onOpen, onClose } = useDisclosure()

	useEffect(() => {
		isValid && onOpen()
	}, [isValid, onOpen])

	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		password: "",
		hearAboutUs: "",
		birthday: "",
	})

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
		event.preventDefault()

		const { name, value } = event.target
		setValues(values => ({
			...values,
			[name]: value,
		}))
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		setSubmitted(true)
		if (values.firstName && values.phoneNumber && values.email && values.password && values.birthday) {
			setValid(true)
		}
	}

	return (
		<chakra.div className="form-container">
			<SuccessModal firstName={values.firstName} isOpen={isOpen} onClose={onClose} setPageState={setPageState} />
			<RegistrationFormBody
				isSubmitted={isSubmitted}
				values={values}
				handleSubmit={handleSubmit}
				handleInputChange={handleInputChange}
			/>
		</chakra.div>
	)
}

export default RegistrationForm

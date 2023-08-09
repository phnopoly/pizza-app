import { ChangeEventHandler, FormEventHandler, createContext, useEffect, useState } from "react"
import RegistrationFormBody from "./RegistrationFormBody"
import SuccessModal from "./SuccessModal"
import { chakra, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { PageState, UseStateReturnNoUndefined } from "../App"

interface RegistrationFormProps {
	setPageState: UseStateReturnNoUndefined<PageState>[1]
}

const defaultFormValues = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	password: "",
	hearAboutUs: "",
	birthday: "",
}

type RegistrationFormContextType = {
	values: RegistrationFormData
	isOpen: boolean
	isSubmitted: boolean
	onClose: ReturnType<typeof useDisclosure>["onClose"]
	setPageState: UseStateReturnNoUndefined<PageState>[1]
	handleSubmit: FormEventHandler<HTMLFormElement>
	handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
}

export const RegistrationFormContext = createContext<RegistrationFormContextType>({} as RegistrationFormContextType)

const RegistrationForm = (p: RegistrationFormProps) => {
	const { setPageState } = p
	const [isSubmitted, setSubmitted] = useState<boolean>(false)
	const [isValid, setValid] = useState<boolean>(false)
	const { isOpen, onOpen, onClose } = useDisclosure()

	useEffect(() => {
		isValid && onOpen()
	}, [isValid, onOpen])

	const [values, setValues] = useState(defaultFormValues)

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

	const contextValue: RegistrationFormContextType = {
		values,
		isOpen,
		isSubmitted,
		onClose,
		setPageState,
		handleSubmit,
		handleInputChange,
	}

	return (
		<RegistrationFormContext.Provider value={contextValue}>
			<chakra.div className="form-container">
				<SuccessModal />
				<RegistrationFormBody />
			</chakra.div>
		</RegistrationFormContext.Provider>
	)
}

export default RegistrationForm

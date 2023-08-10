import { createContext, useCallback } from "react"
import RegistrationFormBody from "./RegistrationFormBody"
import SuccessModal from "./SuccessModal"
import { Button, Stack, useDisclosure, Text } from "@chakra-ui/react"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import Form from "./Form"
import { responsiveGridEdges } from "../utils"

type RegistrationFormContextType = {
	isOpen: boolean
	onClose: ReturnType<typeof useDisclosure>["onClose"]
}

const defaultFormValues: RegistrationFormData = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	password: "",
	hearAboutUs: "",
	birthday: "",
}

export const RegistrationFormContext = createContext<RegistrationFormContextType>({} as RegistrationFormContextType)

const RegistrationForm = () => {
	const { isOpen, onClose } = useDisclosure()

	const formMethods = useForm<RegistrationFormData>({
		defaultValues: defaultFormValues,
	})
	const { handleSubmit } = formMethods

	const contextValue: RegistrationFormContextType = {
		isOpen,
		onClose,
	}

	const onSubmit = useCallback((data: RegistrationFormData) => console.log("submitted" + data), [])

	return (
		<FormProvider {...formMethods}>
			<RegistrationFormContext.Provider value={contextValue}>
				<Form onSubmit={handleSubmit(data => onSubmit(data))}>
					<SuccessModal />
					<Text fontSize="xl" gridColumn="1 / -1">
						Raj's Royal Pizza Registration
					</Text>
					<RegistrationFormBody />
					<Stack
						gridColumn={{ base: "1 / -1", md: "5 / -1", lg: "7 / -1" }}
						direction="row"
						spacing={responsiveGridEdges}
						placeContent="end"
					>
						<Button colorScheme="blue" variant="link" display="block">
							Cancel
						</Button>
						<Button type="submit" colorScheme="blue" display="block">
							Submit
						</Button>
					</Stack>
				</Form>
			</RegistrationFormContext.Provider>
		</FormProvider>
	)
}

export default RegistrationForm

import { Button, Stack, Text, useDisclosure } from "@chakra-ui/react"
import React, { createContext, useCallback, useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { PageContext } from "../App"
import { responsiveGridEdges } from "../utils"
import Form from "./Form"
import RegistrationFormBody from "./RegistrationFormBody"
import SuccessModal from "./SuccessModal"

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
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { setPageState, setUsers, setUser } = useContext(PageContext)
	const formMethods = useForm<RegistrationFormData>({
		defaultValues: defaultFormValues,
	})
	const { handleSubmit } = formMethods

	const contextValue: RegistrationFormContextType = {
		isOpen,
		onClose,
	}

	const onSubmit = useCallback((data: RegistrationFormData) => {
		setUsers(currData => [...currData, data])
		setUser(data)
		onOpen()
	}, [])

	return (
		<FormProvider {...formMethods}>
			<RegistrationFormContext.Provider value={contextValue}>
				<Form onSubmit={handleSubmit(data => onSubmit(data))}>
					<SuccessModal />
					<Text fontSize="xl" gridColumn="1/-1">
						Raj's Royal Pizza Registration
					</Text>
					<RegistrationFormBody />
					<Stack
						gridColumn={{ base: "1/-1", md: "5/-1", lg: "7/-1" }}
						direction="row"
						spacing={responsiveGridEdges}
						placeContent="end"
						alignSelf="center"
					>
						<Button colorScheme="blue" variant="link" onClick={() => setPageState("mainMenu")}>
							Cancel
						</Button>
						<Button type="submit" colorScheme="blue">
							Submit
						</Button>
					</Stack>
				</Form>
			</RegistrationFormContext.Provider>
		</FormProvider>
	)
}

export default RegistrationForm

import { Button, Stack, Text, useDisclosure } from "@chakra-ui/react"
import React, { createContext, useCallback, useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { PageContext } from "../App"
import { responsiveGridEdges } from "../utils"
import Form from "./Form"
import RegistrationFormBody from "./RegistrationFormBody"
import SuccessModal from "./SuccessModal"

interface RegistrationFormContextType {
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
	birthday: ""
}

export const RegistrationFormContext = createContext<RegistrationFormContextType>({} as RegistrationFormContextType)

const RegistrationForm: React.FC = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { setPageState, setUsers, setUser } = useContext(PageContext)
	const formMethods = useForm<RegistrationFormData>({
		defaultValues: defaultFormValues
	})
	const { handleSubmit } = formMethods

	const contextValue: RegistrationFormContextType = {
		isOpen,
		onClose
	}

	const onSubmit = useCallback((data: RegistrationFormData) => {
		setUsers(currData => [...currData, data])
		setUser(data)
		onOpen()
	}, [])

	return (
		<FormProvider {...formMethods}>
			<RegistrationFormContext.Provider value={contextValue}>
				<Form
					onSubmit={handleSubmit(data => {
						onSubmit(data)
					})}
				>
					<SuccessModal />
					<Text fontSize="xl" gridColumn="1/-1">
						{"Raj's Royal Pizza Registration"}
					</Text>
					<RegistrationFormBody />
					<Stack
						alignSelf="center"
						direction="row"
						gridColumn={{ base: "1/-1", md: "5/-1", lg: "7/-1" }}
						placeContent="end"
						spacing={responsiveGridEdges}
					>
						<Button
							colorScheme="blue"
							onClick={() => {
								setPageState("mainMenu")
							}}
							variant="link"
						>
							Cancel
						</Button>
						<Button colorScheme="blue" type="submit">
							Submit
						</Button>
					</Stack>
				</Form>
			</RegistrationFormContext.Provider>
		</FormProvider>
	)
}

export default RegistrationForm

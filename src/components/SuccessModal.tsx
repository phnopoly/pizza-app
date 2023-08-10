import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	Text,
} from "@chakra-ui/react"
import React, { useContext } from "react"
import { RegistrationFormContext } from "./RegistrationForm"
import { PageContext } from "../App"
import { useFormContext } from "react-hook-form"

const SuccessModal = () => {
	const { isOpen, onClose } = useContext(RegistrationFormContext)
	const { setPageState } = useContext(PageContext)
	const { getValues } = useFormContext<RegistrationFormData>()

	const firstName = getValues().firstName
	return (
		<Modal
			size="xs"
			isOpen={isOpen}
			onClose={() => {
				onClose()
				setPageState("mainMenu")
			}}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Registration Successful!</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>{`Welcome ${firstName}!`}</Text>
				</ModalBody>

				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default SuccessModal

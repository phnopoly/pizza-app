import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text
} from "@chakra-ui/react"
import React, { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { PageContext } from "../App"
import { RegistrationFormContext } from "./RegistrationForm"

const SuccessModal: React.FC = () => {
	const { isOpen, onClose } = useContext(RegistrationFormContext)
	const { setPageState } = useContext(PageContext)
	const { getValues } = useFormContext<RegistrationFormData>()

	const firstName = getValues().firstName
	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				onClose()
				setPageState("home")
			}}
			size="xs"
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

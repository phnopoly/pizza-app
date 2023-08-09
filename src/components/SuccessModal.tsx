import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
} from "@chakra-ui/react"
import React, { useContext } from "react"
import { RegistrationFormContext } from "./RegistrationForm"

const SuccessModal = () => {
	const { values, isOpen, onClose, setPageState } = useContext(RegistrationFormContext)

	return (
		<Modal
			size="xs"
			isOpen={isOpen}
			onClose={() => {
				setPageState("mainMenu")
				onClose()
			}}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Registration Successful!</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<h3>{`Welcome ${values.firstName}!`}</h3>
				</ModalBody>

				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default SuccessModal

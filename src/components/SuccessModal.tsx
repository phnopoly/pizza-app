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
import { PageContext } from "App"

const SuccessModal = () => {
	const { values, isOpen, onClose } = useContext(RegistrationFormContext)
	const { setPageState } = useContext(PageContext)

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

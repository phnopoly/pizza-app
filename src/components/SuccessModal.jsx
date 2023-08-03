import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
} from "@chakra-ui/react"
import React from "react"

const SuccessModal = p => {
	const { isOpen, onClose, firstName, setPageState } = p
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
					<h3>{`Welcome ${firstName}!`}</h3>
				</ModalBody>

				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default SuccessModal

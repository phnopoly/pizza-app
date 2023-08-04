import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react"
import React from "react"
import { PageState, UseStateReturnNoUndefined } from "../App"

interface SuccessModalProps {
	firstName: string
	isOpen: boolean
	onClose: ReturnType<typeof useDisclosure>["onClose"]
	setPageState: UseStateReturnNoUndefined<PageState>[1]
}

const SuccessModal = (p: SuccessModalProps) => {
	const { firstName, isOpen, onClose, setPageState } = p
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

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import {
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure
} from "@chakra-ui/react"
import { useWindowSize } from "@uidotdev/usehooks"
import React, { useContext, useEffect, useState } from "react"
import { PageContext, type PageState, type UseStateReturnNoUndefined } from "../App"

const NavigationHeader: React.FC = () => {
	const { setPageState, user, setUser } = useContext(PageContext)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [showAddress, setShowAddress] = useState<boolean>(true)

	const windowSize = useWindowSize()

	useEffect(() => {
		if (windowSize.width != null) {
			if (windowSize.width >= 1024 && !showAddress) {
				setShowAddress(true)
			} else if (windowSize.width < 1024 && showAddress) {
				setShowAddress(false)
			}
		}
	}, [windowSize.width, showAddress])

	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")} className="navigator" gridColumn="1/-1" px={4}>
			<Flex alignItems="center" h={16} justifyContent="space-between">
				<IconButton
					aria-label="Open Menu"
					display={{ md: "none" }}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					onClick={isOpen ? onClose : onOpen}
					size="md"
				/>
				<HStack alignItems="center" spacing={0}>
					<HStack as="nav" display={{ base: "none", md: "flex" }} spacing={4}>
						{displayNavLinks(setPageState, user)}
					</HStack>
				</HStack>
				{user ? (
					<Menu>
						<MenuButton
							as={Button}
							color="inherit"
							cursor="pointer"
							fontWeight="normal"
							mb="0px"
							rounded="full"
							variant="link"
						>
							{`Hi ${user.firstName}!`}
						</MenuButton>
						<MenuList>
							<MenuItem>Account Settings</MenuItem>
							<MenuDivider />
							<MenuItem
								onClick={() => {
									setUser(undefined)
								}}
							>
								Log Out
							</MenuItem>
						</MenuList>
					</Menu>
				) : (
					showAddress && <Text>{"168 Maverick Via, Donnystad, VA 01257"}</Text>
				)}
			</Flex>

			{isOpen ? (
				<Box display={{ md: "none" }} pb="4px">
					<Stack as="nav" spacing="4px">
						{displayNavLinks(setPageState, user)}
					</Stack>
				</Box>
			) : null}
		</Box>
	)
}

const displayNavLinks = (setPageState: UseStateReturnNoUndefined<PageState>[1], user?: RegistrationFormData) => {
	const linkButtons = [
		{
			label: "Main Menu",
			onClick: () => {
				setPageState("mainMenu")
			},
			conditionalDisplay: false
		},
		{
			label: "My Orders",
			onClick: () => {
				setPageState("orderNow")
			},
			conditionalDisplay: false
		},
		{
			label: "Sign In",
			onClick: () => {
				setPageState("login")
			},
			conditionalDisplay: true
		},
		{
			label: "Sign Up",
			onClick: () => {
				setPageState("registration")
			},
			conditionalDisplay: true
		}
	]

	return linkButtons.map(linkButton => {
		const display = !linkButton.conditionalDisplay || (linkButton.conditionalDisplay && !user)
		return (
			display && (
				<NavLink key={linkButton.label} onClick={linkButton.onClick}>
					{linkButton.label}
				</NavLink>
			)
		)
	})
}
const NavLink = (p: any) => (
	<Box
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700")
		}}
		as="button"
		onClick={p.onClick}
		px={2}
		py={1}
		rounded="md"
		// href="#"
	>
		{p.children}
	</Box>
)

export default NavigationHeader

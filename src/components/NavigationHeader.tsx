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
	useDisclosure,
} from "@chakra-ui/react"
import React, { useContext } from "react"
import { PageContext, PageState, UseStateReturnNoUndefined } from "../App"

const NavigationHeader = () => {
	const { setPageState, user, setUser } = useContext(PageContext)
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box gridColumn="1/-1" className="navigator" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
			<Flex h={16} alignItems="center" justifyContent="space-between">
				<IconButton
					size="md"
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label="Open Menu"
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={0} alignItems="center">
					<HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
						{displayNavLinks(setPageState, user)}
					</HStack>
				</HStack>
				{user ? (
					<Menu>
						<MenuButton
							as={Button}
							color="inherit"
							fontWeight="normal"
							rounded="full"
							variant="link"
							cursor="pointer"
							mb="0px"
						>
							{`Hi ${user.firstName}!`}
						</MenuButton>
						<MenuList>
							<MenuItem>Account Settings</MenuItem>
							<MenuDivider />
							<MenuItem onClick={() => setUser(undefined)}>Log Out</MenuItem>
						</MenuList>
					</Menu>
				) : (
					<Text>{"168 Maverick Via, Donnystad, VA 01257"}</Text>
				)}
			</Flex>

			{isOpen ? (
				<Box pb="4px" display={{ md: "none" }}>
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
		{ label: "My Orders", onClick: () => setPageState("orderNow"), conditionalDisplay: false },
		{ label: "Sign In", onClick: () => setPageState("login"), conditionalDisplay: true },
		{
			label: "Sign Up",
			onClick: () => setPageState("registration"),
			conditionalDisplay: true,
		},
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
		as="button"
		px={2}
		py={1}
		rounded="md"
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		onClick={p.onClick}
		// href="#"
	>
		{p.children}
	</Box>
)

export default NavigationHeader

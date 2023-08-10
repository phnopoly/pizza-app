import {
	Box,
	Flex,
	Avatar,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import React, { useContext } from "react"
import { PageContext } from "../App"

const NavigationHeader = () => {
	const { setPageState } = useContext(PageContext)
	const { isOpen, onOpen, onClose } = useDisclosure()

	const links = [
		{ label: "My Orders", onClick: null },
		{ label: "Sign In", onClick: null },
		{
			label: "Sign Up",
			onClick: () => setPageState("registration"),
		},
	]

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
						{links.map(link => (
							<NavLink key={link.label} onClick={link.onClick}>
								{link.label}
							</NavLink>
						))}
					</HStack>
				</HStack>
				<Flex>
					<Menu>
						<MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
							<Avatar size="sm" src="/img/profilePic3.jpg" />
						</MenuButton>
						<MenuList>
							<MenuItem>Account Settings</MenuItem>
							<MenuDivider />
							<MenuItem>Log Out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as="nav" spacing={4}>
						{links.map(link => (
							<NavLink key={link.label} onClick={link.onClick}>
								{link.label}
							</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	)
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

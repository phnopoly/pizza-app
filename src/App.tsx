import "./app.css"
import { createContext, useState } from "react"
import RegistrationForm from "./components/RegistrationForm"
import NavigationHeader from "./components/NavigationHeader"
import { Image } from "@chakra-ui/react"
import React from "react"
import { Layout } from "./components/Layout"
import LoginForm from "./components/LoginForm"

export type PageState = "mainMenu" | "myOrders" | "placeOrder" | "login" | "registration"
export type UseStateReturnNoUndefined<T> = [T, React.Dispatch<React.SetStateAction<T>>]

type PageContextType = {
	pageState: PageState
	setPageState: UseStateReturnNoUndefined<PageState>[1]
	users: RegistrationFormData[]
	setUsers: UseStateReturnNoUndefined<RegistrationFormData[]>[1]
	user?: RegistrationFormData
	setUser: ReturnType<typeof useState<RegistrationFormData>>[1]
}

export const PageContext = createContext<PageContextType>({} as PageContextType)

const App = () => {
	const [pageState, setPageState] = useState<PageState>("mainMenu")
	const [users, setUsers] = useState<RegistrationFormData[]>([])
	const [user, setUser] = useState<RegistrationFormData | undefined>(undefined)

	return (
		<Layout pageTitle="Raj's Royal Pizza" pageDescription="An app that let's you order pizza!" pageHeading="">
			<PageContext.Provider value={{ pageState, setPageState, users, setUsers, user, setUser }}>
				<NavigationHeader />
				{pageState === "mainMenu" ? (
					<Image
						gridColumn="1 / -1"
						src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80s"
						alt="Spotlight Pizza"
					></Image>
				) : pageState === "login" ? (
					<LoginForm />
				) : (
					<RegistrationForm />
				)}
			</PageContext.Provider>
		</Layout>
	)
}

export default App

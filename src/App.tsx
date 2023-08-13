import { Image } from "@chakra-ui/react"
import React, { createContext, useState } from "react"
import "./app.css"
import { Layout } from "./components/Layout"
import LoginForm from "./components/LoginForm"
import NavigationHeader from "./components/NavigationHeader"
import OrderForm from "./components/OrderForm"
import PageFooter from "./components/PageFooter"
import PaymentForm from "./components/PaymentForm"
import RegistrationForm from "./components/RegistrationForm"

export type PageState = "mainMenu" | "orderNow" | "placeOrder" | "payment" | "login" | "registration"
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
						gridColumn="1/-1"
						src="https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg"
						alt="Spotlight Pizza"
					></Image>
				) : pageState === "login" ? (
					<LoginForm />
				) : pageState === "orderNow" ? (
					<OrderForm />
				) : pageState === "payment" ? (
					<PaymentForm />
				) : (
					<RegistrationForm />
				)}
				<PageFooter />
			</PageContext.Provider>
		</Layout>
	)
}

export default App

import { Image } from "@chakra-ui/react"
import React, { createContext, useState } from "react"
import "./app.css"
import { CartForm } from "./components/CartForm"
import { Layout } from "./components/Layout"
import LoginForm from "./components/LoginForm"
import NavigationHeader from "./components/NavigationHeader"
import OrderForm from "./components/OrderForm"
import PageFooter from "./components/PageFooter"
import PaymentForm from "./components/PaymentForm"
import RegistrationForm from "./components/RegistrationForm"

export type PageState = "home" | "orderNow" | "myOrders" | "signIn" | "signUp" | "payment"
export type UseStateReturnNoUndefined<T> = [T, React.Dispatch<React.SetStateAction<T>>]

interface PageContextType {
	pageState: PageState
	setPageState: UseStateReturnNoUndefined<PageState>[1]
	users: RegistrationFormData[]
	setUsers: UseStateReturnNoUndefined<RegistrationFormData[]>[1]
	user?: RegistrationFormData
	setUser: ReturnType<typeof useState<RegistrationFormData>>[1]
}

export const PageContext = createContext<PageContextType>({} as PageContextType)

const App: React.FC = () => {
	const [pageState, setPageState] = useState<PageState>("home")
	const [users, setUsers] = useState<RegistrationFormData[]>([])
	const [user, setUser] = useState<RegistrationFormData | undefined>(undefined)

	return (
		<Layout pageDescription="An app that let's you order pizza!" pageHeading="" pageTitle="Raj's Royal Pizza">
			<PageContext.Provider value={{ pageState, setPageState, users, setUsers, user, setUser }}>
				<NavigationHeader />
				{pageState === "home" ? (
					<Image
						alt="Spotlight Pizza"
						gridColumn="1/-1"
						src="https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg"
					></Image>
				) : pageState === "orderNow" ? (
					<OrderForm />
				) : pageState === "myOrders" ? (
					<CartForm />
				) : pageState === "signIn" ? (
					<LoginForm />
				) : pageState === "signUp" ? (
					<RegistrationForm />
				) : pageState === "payment" ? (
					<PaymentForm />
				) : (
					<></>
				)}
				<PageFooter />
			</PageContext.Provider>
		</Layout>
	)
}

export default App

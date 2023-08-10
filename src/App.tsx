import "./app.css"
import { createContext, useState } from "react"
import RegistrationForm from "./components/RegistrationForm"
import NavigationHeader from "./components/NavigationHeader"
import { Image, chakra } from "@chakra-ui/react"
import React from "react"

export type PageState = "mainMenu" | "myOrders" | "placeOrder" | "login" | "registration"
export type UseStateReturnNoUndefined<T> = [T, React.Dispatch<React.SetStateAction<T>>]

type PageContextType = {
	pageState: PageState
	setPageState: UseStateReturnNoUndefined<PageState>[1]
}

export const PageContext = createContext<PageContextType>({} as PageContextType)

const App = () => {
	const [pageState, setPageState] = useState<PageState>("mainMenu")

	return (
		<PageContext.Provider value={{ pageState, setPageState }}>
			<chakra.div>
				<NavigationHeader />
				{pageState === "mainMenu" ? (
					<>
						<Image src="/img/sampleLogo3.jpg" boxSize="full" alt="Logo"></Image>
						<Image
							src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80s"
							alt="Spotlight Pizza"
						></Image>
					</>
				) : (
					<RegistrationForm />
				)}
			</chakra.div>
		</PageContext.Provider>
	)
}

export default App

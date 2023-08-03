import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
	breakpoints: {
		sm: "320px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	styles: {
		global: props => ({
			"html, body": {
				background: mode("#fecd51")(props),
			},
		}),
	},
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

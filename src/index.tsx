import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"
import App from "./App"

const theme = extendTheme({
	initialColorMode: "light",
	useSystemColorMode: false,
	breakpoints: {
		xs: "320px",
		sm: "480px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
	},
	fonts: {
		body: "'Open Sans', sans-serif",
		default: "'Open Sans', sans-serif",
	},
	fontSizes: {
		base: "1rem",
		error: "0.875rem",
	},
	fontWeights: {
		normal: "400",
		bold: "700",
	},
	colors: {
		/* Colors by function */
		text: "#212121",
		primary: "#0A2240",
		secondary: "#002D74",
		accent: "#65B2E8",
		error: "#C10230",
		clickable: "#0071BC",
		defaultBorder: "#B2B2B2",
		disabledText: "#666666",
		disabledBorder: "#666666",
		disabledBackground: "#E4E5E6",
		success: "#00833E",
		warning: "#E0B624",
		required: "#C10230",
		placeholderText: "#767676",
	},
	sizes: {
		icon: "1rem",
		iconSm: "1.25rem",
		iconMd: "1.5rem",
		iconLg: "2rem",
		iconXl: "3rem",
		full: "100%",
		maxScreenWidth: "1280px",
	},
	// space: {
	// 	"px": "1px",
	// 	"2": "0.125rem",
	// 	"4": "0.25rem",
	// 	"8": "0.5rem",
	// 	"12": "0.75rem",
	// 	"16": "1rem",
	// 	"20": "1.25rem",
	// 	"24": "1.5rem",
	// 	"28": "1.75rem",
	// 	"32": "2rem",
	// 	"36": "2.25rem",
	// 	"40": "2.5rem",
	// 	"44": "2.75rem",
	// 	"48": "3rem",
	// 	"52": "3.25rem",
	// 	"56": "3.5rem",
	// 	"60": "3.75rem",
	// 	"64": "4rem",
	// 	"68": "4.25rem",
	// 	"72": "4.5rem",
	// 	"76": "4.75rem",
	// 	"80": "5rem",
	// 	"84": "5.25rem",
	// 	"88": "5.5rem",
	// 	"92": "5.75rem",
	// 	"96": "6rem",
	// },
	// lineHeights: {
	// 	normal: "1.5",
	// },
	// borders: {
	// 	"px": "1px solid",
	// 	"2": "2px solid",
	// 	"3": "3px solid",
	// },
	// borderWidths: {
	// 	"px": "1px",
	// 	"2": "2px",
	// 	"3": "3px",
	// },
	zIndices: {
		hide: -1,
		auto: "auto",
		base: 0,
		docked: 10,
		dropdown: 1000,
		overlay: 1300,
		highest: 9999,
	},
	radii: {
		round: "50%",
	},
	styles: {
		global: (props: Record<string, any> | StyleFunctionProps) => ({
			"html, body": {
				background: mode("#fecd51", "#fecd51")(props),
			},
		}),
	},
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
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

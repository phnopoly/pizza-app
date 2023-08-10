import { Grid, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { responsiveGridEdges, responsiveGridColumns } from "../utils"

type FormProps<T = HTMLDivElement & HTMLFormElement> = React.FormHTMLAttributes<T> & React.RefAttributes<T>

const Form: React.FC<FormProps> = p => {
	const { children, ...formProps } = p
	return (
		<Grid
			as="form"
			gridColumn="1 / -1"
			bg={useColorModeValue("gray.100", "gray.900")}
			className="form-container"
			gridGap={responsiveGridEdges}
			gridTemplateColumns={responsiveGridColumns}
			noValidate={true}
			{...formProps}
		>
			{children}
		</Grid>
	)
}

export default Form

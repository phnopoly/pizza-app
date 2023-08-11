import { FormControl, FormHelperText, FormLabel, Text } from "@chakra-ui/react"
import * as React from "react"

interface FormInputProps {
	labelText: string
	labelId: string
	errorMessage?: string
	required?: boolean
	gridColumn?: GridColumn | string
	children: React.ReactElement<React.InputHTMLAttributes<HTMLElement>>
}

export const FormInput: React.FC<FormInputProps> = p => {
	const { labelText, labelId, errorMessage, children, required, gridColumn = "1/-1", ...input } = p

	return (
		<FormControl gridColumn={gridColumn}>
			<FormLabel id={labelId}>
				{required && (
					<Text color="required" as="span" display="inline">
						*&nbsp;
					</Text>
				)}
				{labelText}
			</FormLabel>
			{React.cloneElement(children, {
				required,
				"aria-labelledby": `${labelId} ${children.props["aria-labelledby"] ?? ""}`.trim(),
				...input,
			})}
			<FormHelperText color="error" fontSize="error" mt={0} overflowWrap="normal" w="full" role="alert">
				{errorMessage}
			</FormHelperText>
		</FormControl>
	)
}

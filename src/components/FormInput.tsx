import { FormControl, FormLabel, Text } from "@chakra-ui/react"
import * as React from "react"

interface FormInputProps {
	labelText: string
	labelId: string
	required?: boolean
	gridColumn?: GridColumn | string
	children: React.ReactElement<React.InputHTMLAttributes<HTMLElement>>
}

export const FormInput: React.FC<FormInputProps> = p => {
	const { labelText, labelId, children, required, gridColumn = "1/-1", ...input } = p

	return (
		<FormControl gridColumn={gridColumn}>
			<FormLabel id={labelId}>
				{required && (
					<Text as="span" display="inline">
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
		</FormControl>
	)
}

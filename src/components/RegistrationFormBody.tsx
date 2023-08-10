import { Input, Select } from "@chakra-ui/react"
import React from "react"
import { FormInput } from "./FormInput"

const RegistrationFormBody = () => {
	const leftFieldGridCol = { base: "1 / -1", md: "1 / 5", lg: "1 / 7" }
	const rightFieldGridCol = { base: "1 / -1", md: "5 / -1", lg: "7 / -1" }
	return (
		<>
			<FormInput gridColumn={leftFieldGridCol} labelText="First Name" labelId="firstName" required>
				<Input />
			</FormInput>

			<FormInput gridColumn={rightFieldGridCol} labelText="Last Name" labelId="lastName" required>
				<Input />
			</FormInput>

			<FormInput gridColumn={leftFieldGridCol} labelText="Phone Number" labelId="phoneNumber">
				<Input type="tel" />
			</FormInput>

			<FormInput gridColumn={rightFieldGridCol} labelText="Email Address" labelId="email" required>
				<Input type="email" />
			</FormInput>

			<FormInput gridColumn={leftFieldGridCol} labelText="How did you hear about us?" labelId="hearAboutUs">
				<Select className="select-selected">
					<option value=""></option>
					<option value="searchEngine">Search Engine</option>
					<option value="email">Email</option>
					<option value="tvAd">TV Ad</option>
					<option value="radioAd">Radio Ad</option>
					<option value="friend">Friend's Suggestion</option>
					<option value="other">Other</option>
				</Select>
			</FormInput>

			<FormInput gridColumn={rightFieldGridCol} labelText="Date of Birth" labelId="birthday">
				<Input type="date" max={new Date().toISOString().split("T")[0]} />
			</FormInput>
		</>
	)
}

export default RegistrationFormBody

import { Input, Select } from "@chakra-ui/react"
import React from "react"
import { FormInput } from "./FormInput"
import { Controller, useFormContext } from "react-hook-form"

const RegistrationFormBody = () => {
	const leftFieldGridCol = { base: "1 / -1", md: "1 / 5", lg: "1 / 7" }
	const rightFieldGridCol = { base: "1 / -1", md: "5 / -1", lg: "7 / -1" }
	const { control } = useFormContext<RegistrationFormData>()

	return (
		<>
			<FormInput gridColumn={leftFieldGridCol} labelText="First Name" labelId="firstName" required>
				<Controller
					name="firstName"
					control={control}
					rules={{
						required: "Please enter your name",
						maxLength: 50,
					}}
					render={({ field: { ref, ...field } }) => <Input {...field} ref={ref} />}
				/>
			</FormInput>

			<FormInput gridColumn={rightFieldGridCol} labelText="Last Name" labelId="lastName" required>
				<Controller
					name="lastName"
					control={control}
					rules={{
						required: "Please enter your last name",
					}}
					render={({ field: { ref, ...field } }) => <Input {...field} ref={ref} />}
				/>
			</FormInput>

			<FormInput gridColumn={leftFieldGridCol} labelText="Phone Number" labelId="phoneNumber">
				<Controller
					name="phoneNumber"
					control={control}
					render={({ field: { ref, ...field } }) => <Input {...field} type="tel" ref={ref} />}
				/>
			</FormInput>

			<FormInput gridColumn={rightFieldGridCol} labelText="Email Address" labelId="email" required>
				<Controller
					name="email"
					control={control}
					rules={{
						required: "Please enter your email address",
						maxLength: 50,
					}}
					render={({ field: { ref, ...field } }) => <Input {...field} type="email" ref={ref} />}
				/>
			</FormInput>

			<FormInput gridColumn={leftFieldGridCol} labelText="How did you hear about us?" labelId="hearAboutUs">
				<Controller
					name="hearAboutUs"
					control={control}
					render={({ field: { ref, ...field } }) => (
						<Select {...field} ref={ref}>
							<option value=""></option>
							<option value="searchEngine">Search Engine</option>
							<option value="email">Email</option>
							<option value="tvAd">TV Ad</option>
							<option value="radioAd">Radio Ad</option>
							<option value="friend">Friend's Suggestion</option>
							<option value="other">Other</option>
						</Select>
					)}
				/>
			</FormInput>

			<FormInput gridColumn={rightFieldGridCol} labelText="Date of Birth" labelId="birthday" required>
				<Controller
					name="birthday"
					control={control}
					rules={{
						required: "Please enter your birthday",
						max: new Date().toISOString().split("T")[0],
					}}
					render={({ field: { ref, ...field } }) => <Input {...field} type="date" ref={ref} />}
				/>
			</FormInput>
		</>
	)
}

export default RegistrationFormBody

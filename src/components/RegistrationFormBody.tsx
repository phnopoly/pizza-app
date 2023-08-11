import { Input, Select } from "@chakra-ui/react"
import React from "react"
import { FormInput } from "./FormInput"
import { Controller, useFormContext } from "react-hook-form"
import { getValidationState } from "../utils"

const RegistrationFormBody = () => {
	const leftFieldGridCol = { base: "1/-1", md: "1/5", lg: "1/7" }
	const rightFieldGridCol = { base: "1/-1", md: "5/-1", lg: "7/-1" }
	const { control, formState } = useFormContext<RegistrationFormData>()
	const { errors } = formState

	return (
		<>
			<FormInput
				gridColumn={leftFieldGridCol}
				labelText="First Name"
				labelId="firstName"
				errorMessage={errors.firstName?.message}
				required
			>
				<Controller
					name="firstName"
					control={control}
					rules={{
						required: "Please enter your name",
						maxLength: 50,
					}}
					render={({ field: { ref, ...field } }) => (
						<Input {...field} ref={ref} isInvalid={getValidationState(errors, "firstName")} />
					)}
				/>
			</FormInput>

			<FormInput
				gridColumn={rightFieldGridCol}
				labelText="Last Name"
				labelId="lastName"
				errorMessage={errors.lastName?.message}
			>
				<Controller
					name="lastName"
					control={control}
					render={({ field: { ref, ...field } }) => (
						<Input {...field} ref={ref} isInvalid={getValidationState(errors, "lastName")} />
					)}
				/>
			</FormInput>

			<FormInput
				gridColumn={leftFieldGridCol}
				labelText="Email Address"
				labelId="email"
				errorMessage={errors.email?.message}
				required
			>
				<Controller
					name="email"
					control={control}
					rules={{
						required: "Please enter your email address",
						maxLength: 50,
					}}
					render={({ field: { ref, ...field } }) => (
						<Input {...field} type="email" ref={ref} isInvalid={getValidationState(errors, "email")} />
					)}
				/>
			</FormInput>

			<FormInput
				gridColumn={rightFieldGridCol}
				labelText="Password"
				labelId="password"
				errorMessage={errors.password?.message}
				required
			>
				<Controller
					name="password"
					control={control}
					rules={{
						required: "Please enter a valid password",
						pattern: {
							value: /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/,
							message: "Password must have 1 upper, 1 lower, and 1 digit",
						},
						minLength: {
							value: 12,
							message: "Password must be between 12 and 30 characters",
						},
						maxLength: {
							value: 30,
							message: "Password must be between 12 and 30 characters",
						},
					}}
					render={({ field: { ref, ...field } }) => (
						<Input
							{...field}
							type="password"
							ref={ref}
							isInvalid={getValidationState(errors, "password")}
						/>
					)}
				/>
			</FormInput>

			<FormInput
				gridColumn={leftFieldGridCol}
				labelText="Mobile Number"
				errorMessage={errors.phoneNumber?.message}
				labelId="phoneNumber"
			>
				<Controller
					name="phoneNumber"
					control={control}
					rules={{
						pattern: {
							value: /^([0-9\\\-()+.:# ]|(x|ext|extension))*$/,
							message: "Please enter a valid phone number",
						},
					}}
					render={({ field: { ref, ...field } }) => <Input {...field} type="tel" ref={ref} />}
				/>
			</FormInput>

			<FormInput
				gridColumn={rightFieldGridCol}
				labelText="Date of Birth"
				labelId="birthday"
				errorMessage={errors.birthday?.message}
				required
			>
				<Controller
					name="birthday"
					control={control}
					rules={{
						required: "Please enter your birthday",
						max: new Date().toISOString().split("T")[0],
					}}
					render={({ field: { ref, ...field } }) => (
						<Input {...field} type="date" ref={ref} isInvalid={getValidationState(errors, "birthday")} />
					)}
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
		</>
	)
}

export default RegistrationFormBody

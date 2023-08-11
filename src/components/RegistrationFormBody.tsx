import { Input, Select } from "@chakra-ui/react"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { getValidationState } from "../utils"
import { FormInput } from "./FormInput"

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
						required: "Please enter your first name",
						pattern: {
							value: /^[a-z ,.'-]+$/i,
							message: "Please enter a valid first name",
						},
					}}
					render={({ field: { ref, ...field } }) => (
						<Input
							{...field}
							maxLength={24}
							ref={ref}
							isInvalid={getValidationState(errors, "firstName")}
						/>
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
					rules={{
						pattern: {
							value: /^[a-z ,.'-]+$/i,
							message: "Please enter a valid last name",
						},
					}}
					render={({ field: { ref, ...field } }) => (
						<Input {...field} maxLength={24} ref={ref} isInvalid={getValidationState(errors, "lastName")} />
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
						pattern: {
							value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
							message: "Please enter a valid email address",
						},
					}}
					render={({ field: { ref, ...field } }) => (
						<Input
							{...field}
							type="email"
							maxLength={50}
							ref={ref}
							isInvalid={getValidationState(errors, "email")}
						/>
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
						required: "Please enter a password",
						pattern: {
							value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?/~_+-=|]).{8,32}$/,
							message: "Password must have a lowercase letter, an uppercase letter, and a number",
						},
						minLength: {
							value: 8,
							message: "Password must be between 8 and 32 characters",
						},
						maxLength: {
							value: 32,
							message: "Password must be between 8 and 32 characters",
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
							value: /^([0-9\\\-()+.:# ])*$/,
							message: "Please enter a valid phone number",
						},
					}}
					render={({ field: { ref, ...field } }) => <Input {...field} maxLength={12} type="tel" ref={ref} />}
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

import { Button, Input, Text, chakra } from "@chakra-ui/react"
import React, { useCallback, useContext } from "react"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { PageContext } from "../App"
import { getValidationState } from "../utils"
import Form from "./Form"
import { FormInput } from "./FormInput"

const defaultFormValues: LoginFormData = {
	email: "",
	password: ""
}

const LoginForm = () => {
	const gridCol = { base: "1/-1", md: "1/5", lg: "1/7" }

	const { users, setUser, setPageState } = useContext(PageContext)
	const formMethods = useForm<LoginFormData>({
		defaultValues: defaultFormValues
	})
	const { handleSubmit, setError, formState, control } = formMethods
	const { errors, isSubmitted } = formState

	const onSubmit = useCallback((data: LoginFormData) => {
		const user = users.find(user => user.email === data.email && user.password === data.password)
		if (user) {
			setUser(user)
			setPageState("mainMenu")
		} else {
			setError("email", { type: "focus" })
			setError("phoneNumber", { type: "focus" })
		}
	}, [])

	return (
		<FormProvider {...formMethods}>
			<Form onSubmit={handleSubmit(data => onSubmit(data))}>
				<Text fontSize="xl" gridColumn="1/-1">
					Sign In
				</Text>

				<FormInput
					errorMessage={errors.email?.message}
					gridColumn={gridCol}
					labelId="email"
					labelText="Email Address"
					required
				>
					<Controller
						control={control}
						name="email"
						render={({ field: { ref, ...field } }) => (
							<Input {...field} isInvalid={getValidationState(errors, "email")} ref={ref} type="email" />
						)}
						rules={{
							required: "Please enter your email address",
							maxLength: 50
						}}
					/>
				</FormInput>
				<FormInput
					errorMessage={errors.password?.message}
					gridColumn={gridCol}
					labelId="password"
					labelText="Password"
					required
				>
					<Controller
						control={control}
						name="password"
						render={({ field: { ref, ...field } }) => (
							<Input
								{...field}
								isInvalid={getValidationState(errors, "password")}
								ref={ref}
								type="password"
							/>
						)}
						rules={{
							required: "Please enter your password"
						}}
					/>
				</FormInput>
				{isSubmitted && (
					<Text
						color="error"
						fontSize="error"
						gridColumn="1/-1"
						mt={0}
						overflowWrap="normal"
						role="alert"
						w="full"
					>
						{"Email or password is not correct"}
					</Text>
				)}
				<chakra.div gridColumn="1/-1">
					<Button colorScheme="blue" type="submit">
						Sign In
					</Button>
				</chakra.div>
			</Form>
		</FormProvider>
	)
}

export default LoginForm

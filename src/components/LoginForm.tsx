import { useCallback, useContext } from "react"
import { Button, Text, Input, chakra } from "@chakra-ui/react"
import React from "react"
import { FormProvider, useForm, Controller } from "react-hook-form"
import Form from "./Form"
import { PageContext } from "../App"
import { FormInput } from "./FormInput"
import { getValidationState } from "../utils"

const defaultFormValues: LoginFormData = {
	email: "",
	password: "",
}

const LoginForm = () => {
	const gridCol = { base: "1/-1", md: "1/5", lg: "1/7" }

	const { users, setUser, setPageState } = useContext(PageContext)
	const formMethods = useForm<LoginFormData>({
		defaultValues: defaultFormValues,
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
					gridColumn={gridCol}
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
					gridColumn={gridCol}
					labelText="Password"
					labelId="password"
					errorMessage={errors.password?.message}
					required
				>
					<Controller
						name="password"
						control={control}
						rules={{
							required: "Please enter your password",
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
				{isSubmitted && (
					<Text
						gridColumn="1/-1"
						color="error"
						fontSize="error"
						mt={0}
						overflowWrap="normal"
						w="full"
						role="alert"
					>
						{"Email or password is not correct"}
					</Text>
				)}
				<chakra.div gridColumn="1/-1">
					<Button type="submit" colorScheme="blue">
						Sign In
					</Button>
				</chakra.div>
			</Form>
		</FormProvider>
	)
}

export default LoginForm

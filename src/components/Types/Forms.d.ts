type RegistrationFormDataValueTypes = string | undefined
interface RegistrationFormData extends Record<string, RegistrationFormDataValueTypes> {
	firstName: string
	lastName: string
	email: string
	password: string
	phoneNumber?: string
	birthday: string
	hearAboutUs?: string
}

type LoginFormDataValueTypes = string | undefined
interface LoginFormData extends Record<string, LoginFormDataValueTypes> {
	email: string
	password: string
}

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

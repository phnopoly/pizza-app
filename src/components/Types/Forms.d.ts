type EventLocationFDValTypes = string | number | boolean | null | undefined
interface RegistrationFormData extends Record<string, EventLocationFDValTypes> {
	firstName: string
	lastName: string
	phoneNumber?: string
	email: string
	password: string
	hearAboutUs?: string
	birthday: string
}

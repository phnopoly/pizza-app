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
                errorMessage={errors.firstName?.message}
                gridColumn={leftFieldGridCol}
                labelId="firstName"
                labelText="First Name"
                required
            >
                <Controller
                    control={control}
                    name="firstName"
                    render={({ field: { ref, ...field } }) => (
                        <Input
                            {...field}
                            isInvalid={getValidationState(errors, "firstName")}
                            maxLength={24}
                            ref={ref}
                        />
                    )}
                    rules={{
                        required: "Please enter your first name",
                        pattern: {
                            value: /^[a-z ,.'-]+$/i,
                            message: "Please enter a valid first name"
                        }
                    }}
                />
            </FormInput>

            <FormInput
                errorMessage={errors.lastName?.message}
                gridColumn={rightFieldGridCol}
                labelId="lastName"
                labelText="Last Name"
            >
                <Controller
                    control={control}
                    name="lastName"
                    render={({ field: { ref, ...field } }) => (
                        <Input {...field} isInvalid={getValidationState(errors, "lastName")} maxLength={24} ref={ref} />
                    )}
                    rules={{
                        pattern: {
                            value: /^[a-z ,.'-]+$/i,
                            message: "Please enter a valid last name"
                        }
                    }}
                />
            </FormInput>

            <FormInput
                errorMessage={errors.email?.message}
                gridColumn={leftFieldGridCol}
                labelId="email"
                labelText="Email Address"
                required
            >
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { ref, ...field } }) => (
                        <Input
                            {...field}
                            isInvalid={getValidationState(errors, "email")}
                            maxLength={50}
                            ref={ref}
                            type="email"
                        />
                    )}
                    rules={{
                        required: "Please enter your email address",
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                            message: "Please enter a valid email address"
                        }
                    }}
                />
            </FormInput>

            <FormInput
                errorMessage={errors.password?.message}
                gridColumn={rightFieldGridCol}
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
                        required: "Please enter a password",
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?/~_+-=|]).{8,32}$/,
                            message: "Password must have a lowercase letter, an uppercase letter, and a number"
                        },
                        minLength: {
                            value: 8,
                            message: "Password must be between 8 and 32 characters"
                        },
                        maxLength: {
                            value: 32,
                            message: "Password must be between 8 and 32 characters"
                        }
                    }}
                />
            </FormInput>

            <FormInput
                errorMessage={errors.phoneNumber?.message}
                gridColumn={leftFieldGridCol}
                labelId="phoneNumber"
                labelText="Mobile Number"
            >
                <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field: { ref, ...field } }) => <Input {...field} maxLength={12} ref={ref} type="tel" />}
                    rules={{
                        pattern: {
                            value: /^([0-9\\\-()+.:# ])*$/,
                            message: "Please enter a valid phone number"
                        }
                    }}
                />
            </FormInput>

            <FormInput
                errorMessage={errors.birthday?.message}
                gridColumn={rightFieldGridCol}
                labelId="birthday"
                labelText="Date of Birth"
                required
            >
                <Controller
                    control={control}
                    name="birthday"
                    render={({ field: { ref, ...field } }) => (
                        <Input {...field} isInvalid={getValidationState(errors, "birthday")} ref={ref} type="date" />
                    )}
                    rules={{
                        required: "Please enter your birthday",
                        max: new Date().toISOString().split("T")[0]
                    }}
                />
            </FormInput>

            <FormInput gridColumn={leftFieldGridCol} labelId="hearAboutUs" labelText="How did you hear about us?">
                <Controller
                    control={control}
                    name="hearAboutUs"
                    render={({ field: { ref, ...field } }) => (
                        <Select {...field} ref={ref}>
                            <option value=""></option>
                            <option value="searchEngine">Search Engine</option>
                            <option value="email">Email</option>
                            <option value="tvAd">TV Ad</option>
                            <option value="radioAd">Radio Ad</option>
                            <option value="friend">{"Friend's Suggestion"}</option>
                            <option value="other">Other</option>
                        </Select>
                    )}
                />
            </FormInput>
        </>
    )
}

export default RegistrationFormBody

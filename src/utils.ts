import { type FieldErrors } from "react-hook-form"

export const responsiveGridColumns = { base: "repeat(4, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)" }
export const responsiveGridEdges = { base: 2, md: 4 }

export const getValidationState = (fieldErrors: FieldErrors<LoginFormData> | undefined, field: string): boolean =>
    !!fieldErrors?.[field]

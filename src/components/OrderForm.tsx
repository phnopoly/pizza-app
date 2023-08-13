import { Button, Text, chakra } from "@chakra-ui/react"
import React, { useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"
import FoodCard from "./FoodCard"
import Form from "./Form"

const defaultFormValues: OrderFormData = {
	email: "",
	items: [],
	orderPlacedDate: undefined,
	orderReadyByDate: undefined,
}

const OrderForm = () => {
	// const { setPageState } = useContext(PageContext)
	const formMethods = useForm<OrderFormData>({
		defaultValues: defaultFormValues,
	})
	const { handleSubmit } = formMethods

	const onSubmit = useCallback((data: OrderFormData) => {
		fetch("http://localhost:5500/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data.items),
		})
			.then(async res => (res.ok ? res.json() : res.json().then(json => Promise.reject(json))))
			.then(({ url }) => (window.location = url))
			.catch(e => console.error(e.error))
	}, [])
	const src = "https://loremflickr.com/300/300/pizza"
	return (
		<FormProvider {...formMethods}>
			<Form onSubmit={handleSubmit(data => onSubmit(data))}>
				<Text fontSize="xl" gridColumn="1/-1">
					Pizza Menu
				</Text>
				<FoodCard
					src={src}
					price={10.99}
					itemName="Pepperoni Pizza"
					description="Cheese and Pepperoni."
					gridColumn="1/6"
				/>
				<FoodCard
					src={src}
					price={12.99}
					itemName="Supreme Pizza"
					description="Cheese, Pepperoni, Sausage, Ham, Onions, Meatballs, Mushrooms and Green Peppers."
					gridColumn="6/-1"
				/>
				<chakra.div gridColumn="1/-1" justifySelf="end" alignSelf="center">
					<Button type="submit" colorScheme="blue">
						Order Now
					</Button>
				</chakra.div>
			</Form>
		</FormProvider>
	)
}

export default OrderForm

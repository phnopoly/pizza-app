import { Button, Text, chakra } from "@chakra-ui/react"
import React, { useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"
import FoodCard from "./FoodCard"
import Form from "./Form"

const defaultFormValues: OrderFormData = {
	email: "",
	items: [],
	orderPlacedDate: undefined,
	orderReadyByDate: undefined
}

type JSONResponse = {
    data?: {
      pokemon: Omit<PokemonData, 'fetchedAt'>
    }
    errors?: Array<{message: string}>
  }
  
const OrderForm: React.FC = () => {
	// const { setPageState } = useContext(PageContext)
	const formMethods = useForm<OrderFormData>({
		defaultValues: defaultFormValues
	})
	const { handleSubmit } = formMethods

	const onSubmit = useCallback((data: OrderFormData) => {
		fetch("http://localhost:5500/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data.items)
		})
			.then(async res => (res.ok ? await res.json() : await res.json().then(json => Promise.reject(json))))
			.then(({ url }) => (window.location = url))
			.catch(e => {
				console.error(e.error)
			})
	}, [])
	const src = "https://loremflickr.com/300/300/pizza"
	return (
		<FormProvider {...formMethods}>
			<Form onSubmit={handleSubmit(data => onSubmit(data))}>
				<Text fontSize="xl" gridColumn="1/-1">
					Pizza Menu
				</Text>
				<FoodCard
					description="Cheese and Pepperoni."
					gridColumn="1/6"
					itemName="Pepperoni Pizza"
					price={10.99}
					src={src}
				/>
				<FoodCard
					description="Cheese, Pepperoni, Sausage, Ham, Onions, Meatballs, Mushrooms and Green Peppers."
					gridColumn="6/-1"
					itemName="Supreme Pizza"
					price={12.99}
					src={src}
				/>
				<chakra.div alignSelf="center" gridColumn="1/-1" justifySelf="end">
					<Button colorScheme="blue" type="submit">
						Order Now
					</Button>
				</chakra.div>
			</Form>
		</FormProvider>
	)
}

export default OrderForm

import { Button, Flex, IconButton, Text, chakra } from "@chakra-ui/react"
import React, { useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { sendDataToStripe } from "../server/controller"
import FoodCard from "./FoodCard"
import Form from "./Form"

const defaultFormValues: OrderFormData = {
	email: "",
	items: [],
	orderPlacedDate: undefined,
	orderReadyByDate: undefined
}

const OrderForm: React.FC = () => {
	const formMethods = useForm<OrderFormData>({
		defaultValues: defaultFormValues
	})
	const { handleSubmit } = formMethods

	const onSubmit = useCallback((data: OrderFormData) => sendDataToStripe(data), [])

	return (
		<FormProvider {...formMethods}>
			<Form onSubmit={handleSubmit(data => onSubmit(data))}>
				<Flex gridColumn="1/-1">
					<Text fontSize="xl">Pizza Menu</Text>
					<IconButton aria-label="View my cart" icon={<AiOutlineShoppingCart />} variant="outline" />
				</Flex>
				<FoodCard
					description="Ham and Pineapple."
					gridColumn="1/5"
					itemName="Hawaiian Pizza"
					price={10.99}
					src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
				/>
				<FoodCard
					description="Cheese, Pepperoni"
					gridColumn="5/9"
					itemName="Pepperoni Pizza"
					price={12.99}
					src="https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
				/>
				<FoodCard
					description="Cheese, Pepperoni, Sausage, Ham, Onions, Meatballs, Mushrooms and Green Peppers."
					gridColumn="9/-1"
					itemName="Supreme Pizza"
					price={13.99}
					src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1402&q=80"
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

import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { useFormContext } from "react-hook-form"

interface FoodCardProps {
	src: string
	price: number
	itemName: string
	description: string
	gridColumn?: GridColumn
}

const FoodCard: React.FC<FoodCardProps> = (p: FoodCardProps) => {
	const { src, price, itemName, description, gridColumn } = p
	const { setValue, getValues } = useFormContext<OrderFormData>()
	return (
		<Card gridColumn={gridColumn} maxW="64">
			<CardBody>
				<Image src={src} alt="Card Picture" borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{itemName}</Heading>
					<Text>{description}</Text>
					<Text color="blue.600" fontSize="2xl">
						{`$${price}`}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing="2">
					<Button variant="ghost" colorScheme="blue">
						Customize
					</Button>
					<Button
						onClick={() => {
							const existingItems = getValues().items
							const index = existingItems.findIndex(item => item.name === itemName)
							if (index >= 0) {
								existingItems[index] = {
									name: itemName,
									quantity: existingItems[index].quantity + 1,
								}
								setValue("items", [...existingItems])
							} else {
								setValue("items", [
									...existingItems,
									{
										name: itemName,
										quantity: 1,
									} as OrderItem_Client,
								])
							}
						}}
						variant="solid"
						colorScheme="blue"
					>
						Add
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	)
}

export default FoodCard

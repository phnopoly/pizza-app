import { Button, Flex, Heading, Link, Stack, Text, useColorModeValue as mode } from "@chakra-ui/react"
import React from "react"
import { FaArrowRight } from "react-icons/fa"

type OrderSummaryItemProps = {
	label: string
	value?: string
	children?: React.ReactNode
}

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
	const { label, value, children } = props
	return (
		<Flex fontSize="sm" justify="space-between">
			<Text color={mode("gray.600", "gray.400")} fontWeight="medium">
				{label}
			</Text>
			{value ? <Text fontWeight="medium">{value}</Text> : children}
		</Flex>
	)
}

export const CartOrderSummary = () => {
	return (
		<Stack
			borderColor={mode("gray.300", "gray.700")}
			borderWidth="1px"
			padding="8"
			rounded="lg"
			spacing="8"
			width="full"
		>
			<Heading size="md">Order Summary</Heading>

			<Stack spacing="6">
				<OrderSummaryItem label="Subtotal" value="$76.94" />
				<OrderSummaryItem label="Shipping + Tax" value="$5.97" />
				<OrderSummaryItem label="Coupon">
					<Link href="#" textDecor="underline">
						Add coupon
					</Link>
				</OrderSummaryItem>
				<Flex justify="space-between">
					<Text fontSize="lg" fontWeight="semibold">
						Total
					</Text>
					<Text fontSize="xl" fontWeight="extrabold">
						$82.91
					</Text>
				</Flex>
			</Stack>
			<Button colorScheme="blue" fontSize="md" rightIcon={<FaArrowRight />} size="lg">
				Checkout
			</Button>
		</Stack>
	)
}

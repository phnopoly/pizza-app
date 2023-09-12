import { Flex, HStack, Heading, Link, Stack, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { responsiveGridColumns, responsiveGridEdges } from "../utils"
import { CartCard } from "./CartCard"
import { CartOrderSummary } from "./CartOrderSummary"
import { cartData } from "./_data"

export type OrderItem_Menu = {
	imageUrl: string
	price: number
} & OrderItem_Client

export const CartForm = () => (
	<Stack
		align={{ lg: "flex-start" }}
		bg={useColorModeValue("gray.100", "gray.900")}
		direction={{ base: "column", lg: "row" }}
		gridColumn="1/-1"
		gridGap={responsiveGridEdges}
		gridTemplateColumns={responsiveGridColumns}
		p="24px"
		spacing={{ base: "8px", md: "16px" }}
	>
		<Stack flex="2" spacing={{ base: "8px", md: "16px" }}>
			<Heading fontSize="2xl" fontWeight="extrabold">
				Pizza Cart (6 items)
			</Heading>

			<Stack spacing={{ base: "8px", md: "10px" }}>
				{(cartData as OrderItem_Menu[]).map((item, i) => (
					<CartCard key={i} {...item} />
				))}
			</Stack>
		</Stack>

		<Flex align="center" direction="column" flex="1">
			<CartOrderSummary />
			<HStack fontWeight="semibold" mt="6">
				<p>or</p>
				<Link color={useColorModeValue("blue.500", "blue.200")}>Continue shopping</Link>
			</HStack>
		</Flex>
	</Stack>
)

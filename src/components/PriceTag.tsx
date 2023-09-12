import { HStack, StackProps, Text, TextProps, useColorModeValue as mode } from "@chakra-ui/react"
import React, { ReactNode } from "react"

interface PriceTagProps {
	price: number
	salePrice?: number
	rootProps?: StackProps
	priceProps?: TextProps
	salePriceProps?: TextProps
}

export const PriceTag = (props: PriceTagProps) => {
	const { price, salePrice, rootProps, priceProps, salePriceProps } = props
	return (
		<HStack spacing="1" {...rootProps}>
			<Price isOnSale={!!salePrice} textProps={priceProps}>
				{`$${price}`}
			</Price>
			{salePrice && <SalePrice {...salePriceProps}> {`$${salePrice}`}</SalePrice>}
		</HStack>
	)
}

interface PriceProps {
	children?: ReactNode
	isOnSale?: boolean
	textProps?: TextProps
}

const Price = (props: PriceProps) => {
	const { isOnSale, children, textProps } = props
	const defaultColor = mode("gray.700", "gray.400")
	const onSaleColor = mode("gray.400", "gray.700")
	const color = isOnSale ? onSaleColor : defaultColor
	return (
		<Text
			as="span"
			color={color}
			fontWeight="medium"
			textDecoration={isOnSale ? "line-through" : "none"}
			{...textProps}
		>
			{children}
		</Text>
	)
}

const SalePrice = (props: TextProps) => (
	<Text as="span" color={mode("gray.800", "gray.100")} fontWeight="semibold" {...props} />
)

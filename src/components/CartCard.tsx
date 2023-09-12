import { DeleteIcon } from "@chakra-ui/icons"
import {
	CloseButton,
	Flex,
	IconButton,
	Image,
	Select,
	SelectProps,
	Stack,
	Text,
	useColorModeValue
} from "@chakra-ui/react"
import React from "react"
import { PriceTag } from "./PriceTag"

type CartCardProps = {
	name: string
	quantity: number
	price: number
	imageUrl: string
	onChangeQuantity?: (quantity: number) => void
	onClickGiftWrapping?: () => void
	onClickDelete?: () => void
}

const QuantitySelect = (props: SelectProps) => {
	return (
		<Select
			aria-label="Select quantity"
			focusBorderColor={useColorModeValue("blue.500", "blue.200")}
			maxW="64px"
			{...props}
		>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
				<option key={i} value={i}>
					{i}
				</option>
			))}
		</Select>
	)
}

export const CartCard = (props: CartCardProps) => {
	const { name, quantity, imageUrl, price, onChangeQuantity, onClickDelete } = props

	return (
		<Flex align="center" direction={{ base: "column", md: "row" }}>
			<Stack
				direction="row"
				gap="2rem"
				justifyContent={{ base: "", md: "left" }}
				placeContent={{ base: "center", md: "" }}
				w={{ base: "full", md: "60%" }}
			>
				<Image
					alt={name}
					draggable="false"
					fit="cover"
					h="100px"
					loading="lazy"
					rounded="lg"
					src={imageUrl}
					w="100px"
				/>
				<Text display={{ base: "none", md: "flex" }} fontWeight="medium" placeSelf="center">
					{name}
				</Text>
			</Stack>

			<Text display={{ base: "flex", md: "none" }} fontWeight="medium" mt="4px" placeSelf="center">
				{name}
			</Text>

			<Flex display={{ base: "none", md: "flex" }} justify="space-between" w="40%">
				<QuantitySelect onChange={e => onChangeQuantity?.(+e.currentTarget.value)} value={quantity} />
				<PriceTag price={price} />
				<CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} />
			</Flex>

			<Flex
				align="center"
				display={{ base: "flex", md: "none" }}
				justify="space-between"
				mt="4px"
				width={{ base: "100%", md: "80%" }}
			>
				<IconButton aria-label="Delete Item" icon={<DeleteIcon />} />
				<QuantitySelect onChange={e => onChangeQuantity?.(+e.currentTarget.value)} value={quantity} />
				<PriceTag price={price} />
			</Flex>
		</Flex>
	)
}

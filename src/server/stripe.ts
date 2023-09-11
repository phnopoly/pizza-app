import { Request, Response } from "express"
import Stripe from "stripe"
import { app } from "./server"

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY as string, {
	apiVersion: "2023-08-16",
	typescript: true
})

// TODO: load the db here
const menuList: OrderItem_Server[] = [
	{ id: 0, price: 1099, name: "Pepperoni Pizza" },
	{ id: 1, price: 1299, name: "Supreme Pizza" }
]

const checkoutSessionCallback = async (req: Request, res: Response) => {
	const checkoutItems = (req.body as OrderItem_Client[]).map((orderItem: OrderItem_Client) => {
		const menuItem = menuList[menuList.findIndex(cartItem => cartItem.name === orderItem.name)]
		return {
			price_data: {
				currency: "usd",
				product_data: {
					name: menuItem.name
				},
				unit_amount: menuItem.price
			},
			quantity: orderItem.quantity
		}
	})
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: checkoutItems,
			success_url: process.env.CLIENT_URL as string,
			cancel_url: process.env.CLIENT_URL as string
		})
		res.json({ url: session.url })
	} catch (e) {
		console.error((e as Error).message)
	}
}

export const setupStripe = () => {
	app.post("/checkout-session", checkoutSessionCallback)
}

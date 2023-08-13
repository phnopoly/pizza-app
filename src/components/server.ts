import cors from "cors"
import dotenv from "dotenv"
import express, { Express } from "express"

dotenv.config()
const app: Express = express()
const port = process.env.PORT || 5500
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.use(express.json())
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
)

const menuList: OrderItem_Server[] = [
	{ id: 0, price: 1099, name: "Pepperoni Pizza" },
	{ id: 1, price: 1299, name: "Supreme Pizza" },
]

app.post("/create-checkout-session", async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: req.body.map((orderItem: OrderItem_Client) => {
				const menuItem = menuList[menuList.findIndex(cartItem => cartItem.name === orderItem.name)]
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: menuItem.name,
						},
						unit_amount: menuItem.price,
					},
					quantity: orderItem.quantity,
				}
			}),
			success_url: process.env.CLIENT_URL,
			cancel_url: process.env.CLIENT_URL,
		})
		res.json({ url: session.url })
	} catch (e) {
		console.error((e as Error).message)
	}
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

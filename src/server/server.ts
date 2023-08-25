import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { router1 } from "./routers"

dotenv.config()
const app = express()
const port = 5500
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.use(express.json())
app.use(
	cors({
		origin: process.env.CLIENT_URL
	})
)
app.use(router1)

import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4e0jjnt.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
console.log("url", uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// await db()

// store this on MongoDB
const menuList: OrderItem_Server[] = [
	{ id: 0, price: 1099, name: "Pepperoni Pizza" },
	{ id: 1, price: 1299, name: "Supreme Pizza" }
]

app.post("/create-checkout-session", async (req, res) => {
	const checkoutItems = req.body.map((orderItem: OrderItem_Client) => {
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
			success_url: process.env.CLIENT_URL,
			cancel_url: process.env.CLIENT_URL
		})
		res.json({ url: session.url })
	} catch (e) {
		console.error((e as Error).message)
	}
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

import cors from "cors"
import "dotenv/config"
import express from "express"
import { MongoClient, ServerApiVersion } from "mongodb"
import { router } from "./routes"
import { setupStripe } from "./stripe"

export const app = express()

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}\
@cluster${process.env.CLUSTER_NUMBER}.${process.env.CLUSTER_INSTANCE}\
.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

export const client = new MongoClient(URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
})

const startServer = async () => {
	await client.connect().then(() => {
		app.use(express.json())
		app.use(cors({ origin: process.env.CLIENT_URL }))
		app.use("/api", router)
		setupStripe()

		app.listen(process.env.SERVER_PORT, () => console.log(`Server listening on port ${process.env.SERVER_PORT}`))
	})
}

startServer().catch(console.dir)

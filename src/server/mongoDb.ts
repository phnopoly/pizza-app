import "dotenv/config"
import { MongoClient, ServerApiVersion } from "mongodb"

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}\
@cluster${process.env.CLUSTER_NUMBER}.${process.env.CLUSTER_INSTANCE}\
.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

const client = new MongoClient(URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
})

export const connectToMongDB = async () => {
	try {
		await client.connect()
		await client.db("admin").command({ ping: 1 })
		console.log("Pinged your deployment. You successfully connected to MongoDB!")
	} finally {
		await client.close()
	}
}

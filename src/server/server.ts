import cors from "cors"
import "dotenv/config"
import express from "express"
import { connectToMongDB } from "./mongoDb"
// import { router1 } from "./routers"

export const app = express()

app.use(express.json())
app.use(
	cors({
		origin: process.env.CLIENT_URL
	})
)
// app.use(router1)

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))

connectToMongDB().catch(console.dir)

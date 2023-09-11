import { Request, Response, Router } from "express"
import { client, dbName } from "./server"

export const router = Router()

router.get("/menuItems", async (_req: Request, res: Response) => {
	const menuCollection = client.db(dbName).collection("menu")
	const a = await menuCollection.find().toArray()
	res.send(a)
})

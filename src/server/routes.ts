import { Request, Response, Router } from "express"
import { client } from "./server"

const dbName = process.env.DB_NAME
export const router = Router()

router.get("/menuItems", async (_req: Request, res: Response) => {
	const menuArray = client.db(dbName).collection("menu").find().toArray()
	res.send(menuArray)
})

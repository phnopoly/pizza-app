import { Router } from "express"
export const router1 = Router()

// router1.get("/api/menuItems", async (_req: Request, res: Response) => {
//     const menuItems = await models.Menu.find({})
//     return res.status(200).send(menuItems)
// })

// router1.get("/api/users", async (_req: Request, res: Response) => {
// 	const users = await models.User.find()
// 	console.log(users)
// 	return res.status(200).send(users)
// })

// router1.post("/api/addUser", async (req: Request, _res: Response) => {
// 	const newUser = await models.User.create(req.body)
// 	console.log(newUser)
// return res.status(200).send(newUser)
// })

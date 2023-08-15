import models from "./model"

// let menuItems = [
// 	{ id: 0, price: 1099, name: "Pepperoni Pizza" },
// 	{ id: 1, price: 1299, name: "Supreme Pizza" },
// ]

export const getMenuItems = async (_req: any, res: any) => {
	const menuItems = await models.Menu.find()

	return res.send(menuItems)
}
export const addMenuItems = async (req: any, res: any) => {
	const menuItem = await models.Menu.create(req.body)
	return res.send(menuItem)
}

export const updateMenuItems = async (req: any, res: any) => {
	const updatedMenuItem = await models.Menu.findOneAndUpdate(req.params.id, req.body)
	return res.send(updatedMenuItem)
}

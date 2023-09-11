import { Schema, model } from "mongoose"

const MenuSchema = new Schema<IMenu>(
	{
		name: { type: String, required: true },
		price: { type: Number, required: true }
	},
	{ collection: "menu" }
)

const Menu = model("Menu", MenuSchema)
const models = { Menu }

export default models

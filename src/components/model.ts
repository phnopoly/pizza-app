import mongoose from "mongoose"

interface MenuItem {
	// id: number
	name: string
	price: number
}

interface MenuItemModel extends mongoose.Model<MenuItemDoc> {
	build(attr: MenuItem): MenuItemDoc
}

interface MenuItemDoc extends mongoose.Document {
	// id: number
	name: string
	price: number
}
const menuSchema = new mongoose.Schema({
	// id: {
	// 	require: true,
	// 	type: String,
	// 	unique: true,
	// },
	name: {
		require: true,
		type: String,
	},
	price: {
		require: true,
		type: Number,
	},
})

// const userSchema = new mongoose.Schema({
// 	name: {
// 		require: true,
// 		type: String,
// 	},
// })

const Menu = mongoose.model<MenuItemDoc, MenuItemModel>("Menu", menuSchema)
// const User = mongoose.model("User", userSchema)
const models = { Menu }

export default models

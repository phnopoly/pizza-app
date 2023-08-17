// interface MenuItem {
//     name: string
//     price: number
// }

// interface MenuItemModel extends mongoose.Model<MenuItemDoc> {
//     build(attr: MenuItem)
// }

// interface MenuItemDoc extends mongoose.Document {
//     name: string
//     price: number
// }
// const menuSchema = new mongoose.Schema({
//     name: {
//         require: true,
//         type: String
//     },
//     price: {
//         require: true,
//         type: Number
//     }
// })

// const userSchema = new mongoose.Schema({
// 	name: {
// 		require: true,
// 		type: String,
// 	},
// })

// const Menu = mongoose.model<MenuItemDoc, MenuItemModel>("Menu", menuSchema)
// const User = mongoose.model("User", userSchema)
// const models = { Menu }

// export default models

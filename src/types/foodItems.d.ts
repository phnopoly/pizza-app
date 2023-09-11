type PizzaTopping = (typeof pizzaToppings)[number]
type PizzaType = (typeof pizzaTypes)[number]
type PizzaToppingQuantity = (typeof pizzaToppingQuantities)[number]
type PizzaSize = (typeof pizzaSizes)[number]

interface IMenu extends Document {
	name: string
	price: number
}

interface OrderItem_Client {
	name: string
	quantity: number
}

interface OrderItem_Server {
	id: number
	name: string
	price: number
}

interface Pizza extends OrderItem {
	pizzaType: PizzaType
	pizzaSize: PizzaSize
	pizzaToppings: Set<{ topping: PizzaTopping; quantity: PizzaToppingQuantity }>
}
// interface Drinks extends OrderItem { }

type PizzaTopping = (typeof pizzaToppings)[number]
type PizzaType = (typeof pizzaTypes)[number]
type PizzaToppingQuantity = (typeof pizzaToppingQuantities)[number]
type PizzaSize = (typeof pizzaSizes)[number]

interface OrderItem {
	cost: number
}

interface Pizza extends OrderItem {
	pizzaType: PizzaType
	pizzaSize: PizzaSize
	pizzaToppings: Set<{ topping: PizzaTopping; quantity: PizzaToppingQuantity }>
}
interface Drinks extends OrderItem {}

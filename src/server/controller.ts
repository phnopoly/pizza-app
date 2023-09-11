export const getMenuItems = () =>
	fetch("http://localhost:5500/api/menuItems", {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	}).then(response =>
		response.ok
			? (response.json() as Promise<OrderItem_Server[]>)
			: response.json().then(json => Promise.reject(json))
	)

export const sendDataToStripe = (data: OrderFormData) =>
	fetch("http://localhost:5500/checkout-session", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data.items)
	})
		.then(response => (response.ok ? response.json() : response.json().then(json => Promise.reject(json))))
		.then(({ url }) => (window.location = url))

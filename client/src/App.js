import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import MainPage from "./components/mainPage";
import MenuPage from "./components/menuPage";
import Cart from "./components/cart";
import OrderPage from "./components/orderPage";
import LandingPage from "./components/landingPage";
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
	const [currentUser, setCurrentUser] = useState("");
	const [selectedRestaurant, setSelectedRestaurant] = useState({
		id: "",
		name: "",
	});

	const [cartItems, setCartItems] = useState([]);

	function handleAddToCart(item) {
		const ItemExist = cartItems.find((i) => i.id === item.id);
		if (ItemExist) {
			setCartItems(
				cartItems.map((i) =>
					i.id === item.id
						? { ...ItemExist, quantity: ItemExist.quantity + 1 }
						: i
				)
			);
		} else {
			setCartItems([...cartItems, { ...item, quantity: 1 }]);
		}
	}

	function clearCart() {
		setCartItems([]);
	}

	function handleRemoveFromCart(removedItem) {
		const ItemExist = cartItems.find((item) => item.id === removedItem.id);
		if (ItemExist.quantity === 1) {
			setCartItems(
				cartItems.filter((item) => item.id !== removedItem.id)
			);
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === removedItem.id
						? { ...ItemExist, quantity: ItemExist.quantity - 1 }
						: item
				)
			);
		}
	}

	useEffect(() => {
		fetch("/me")
			.then((res) => res.json())
			.then((data) => data.email && setCurrentUser(data));
	}, []);

	if (!currentUser) {
		return (
			<Routes>
				<Route exact path="/" element={<MainPage />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route
					path="/SignIn"
					element={<SignIn setCurrentUser={setCurrentUser} />}
				/>
			</Routes>
		);
	} else {
		return (
			<>
				<NavBar setCurrentUser={setCurrentUser} cartItems={cartItems} />
				<Routes>
					<Route
						path="/"
						element={
							<LandingPage
								setSelectedRestaurant={setSelectedRestaurant}
								selectedRestaurant={selectedRestaurant}
							/>
						}
					/>
					<Route
						path="/menuPage"
						element={
							<MenuPage
								selectedRestaurant={selectedRestaurant}
								handleAddToCart={handleAddToCart}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								cartItems={cartItems}
								handleRemoveFromCart={handleRemoveFromCart}
								clearCart={clearCart}
								currentUser={currentUser}
								setCartItems={setCartItems}
								handleAddToCart={handleAddToCart}
							/>
						}
					/>
					<Route path="/orderPage" element={<OrderPage />} />
				</Routes>
			</>
		);
	}
}

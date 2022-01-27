import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import MainPage from "./components/mainPage";
import MenuPage from "./components/menuPage";
import Cart from "./components/cart";
import OrderPage from "./components/orderPage";
import LandingPage from "./components/landingPage";
import RestaurantSignUp from "./components/restaurantSignUp";
import RestaurantSignIn from "./components/restaurantSignIn";
import NavBar from "./components/navBar";
import MenuForm from "./components/menuForm"
import MenuEdit from "./components/menuEdit"

import RestaurantNavBar from "./components/restaurantNavBar";
import RestaurantProfileEdit from "./components/restaurantProfileEdit"
import RestaurantLanding from "./components/restaurantLanding"

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


export default function App() {
	const [currentUser, setCurrentUser] = useState("");
	const [currentRestaurant, setCurrentRestaurant] = useState("");
	const [selectedRestaurant, setSelectedRestaurant] = useState({
		id: "",
		name: "",
	});
	const [selectedMenu, setSelectedMenu] = useState("")

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

	useEffect(() => {
		if (!currentRestaurant){
		fetch("/currentRestaurant")
			.then((res) => res.json())
			.then((data) => data.admin_email && setCurrentRestaurant(data));
		}
	}, []);

	if (!currentUser && !currentRestaurant) {
		return (
			<Routes>
				<Route exact path="/" element={<MainPage />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route
					path="/signIn"
					element={<SignIn setCurrentUser={setCurrentUser} />}
				/>
				<Route
					path="/restaurantSignIn"
					element={
						<RestaurantSignIn
							currentRestaurant={currentRestaurant}
							setCurrentRestaurant={setCurrentRestaurant}
							setSelectedRestaurant={setSelectedRestaurant}
						/>
					}
				/>
				<Route
					path="/restaurantSignUp"
					element={<RestaurantSignUp />}
				/>
			</Routes>
		);
	} else if (currentUser) {
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
					<Route
						path="/orderPage"
						element={<OrderPage currentUser={currentUser} />}
					/>
				</Routes>
			</>
		);
	} else {
		return (
			<>
				<RestaurantNavBar setCurrentRestaurant={setCurrentRestaurant} />
				<Routes>
					<Route path="/" element={<RestaurantLanding currentRestaurant={currentRestaurant} setSelectedMenu={setSelectedMenu}/>} />
					<Route path="/menuForm" element={<MenuForm currentRestaurant={currentRestaurant}/>} />
					<Route path="/restaurantProfileEdit" element={<RestaurantProfileEdit  currentRestaurant={currentRestaurant}/>} />
					<Route path="/menuEdit" element={<MenuEdit selectedMenu={selectedMenu} />} />
				</Routes>
			</>
		);
	}
}

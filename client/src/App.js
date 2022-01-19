
import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import MainPage from './components/mainPage';
import MenuPage from './components/menuPage'
import LandingPage from './components/landingPage';
import NavBar from './components/navBar'
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
const [currentUser, setCurrentUser] = useState("");
const[selectedRestaurant, setSelectedRestaurant] = useState("")

console.log(selectedRestaurant)





useEffect(() => {
  fetch('/me')
  .then(res => res.json())
  .then(data=> data.email && setCurrentUser(data) );
  },[])

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
    }else{
      return(
        <>
       <NavBar setCurrentUser={setCurrentUser} />
       <Routes>
       <Route path="/" element={<LandingPage setSelectedRestaurant={setSelectedRestaurant}/>} />
       <Route path="/menuPage" element={<MenuPage selectedRestaurant={selectedRestaurant}/>} />
       </Routes>
      </>
      );
      }

    }


export default App;

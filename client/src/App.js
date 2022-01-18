
import './App.css';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import MainPage from './components/mainPage';
import LandingPage from './components/landingPage';
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
const [currentUser, setCurrentUser] = useState("");
console.log(currentUser)

useEffect(() => {
  fetch('/me')
  .then(res => res.json())
  .then(data=> data.email && setCurrentUser(data) );
  },[])


  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        path="/SignIn"
        element={<SignIn setCurrentUser={setCurrentUser} />}
      />
      <Route path="/landingPage" element={<LandingPage setCurrentUser={setCurrentUser} currentUser={currentUser}  />} />
    </Routes>
  );
}

export default App;

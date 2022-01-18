import * as React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function LandingPage({setCurrentUser,currentUser}) {
    const navigate = useNavigate();

    function handleSubmit(){
        fetch("/logout", { method: "DELETE" })
        .then(() => console.log("Delete successful"))
        .then((x) => {
          setCurrentUser("");
          navigate("/");
        });
    }

    return (
        <div>
            <h1>{currentUser.email}</h1>
         <Button
            type="submit"
            width="8"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ background:'#2E3B55'}}
          > Log Out</Button>
        </div>
    )
}


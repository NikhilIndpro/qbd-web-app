import React from "react";
import { isAuthenticated } from "../../commonUtils/auth";
import HomePage from "containers/HomePage";
import LogIn from "../auth/Login";


const Home = () => {
    const route = isAuthenticated() ? <HomePage /> : <LogIn />;
    return route
}

export default Home;

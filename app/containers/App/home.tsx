import React from "react";
import { isAuthenticated } from "../../commonUtils/auth";
import HomePage from "containers/HomePage";
import LogIn from "../auth/Login";
import TwoStepLogIn from "../auth/TwoStepLogIn"


const Home = () => {
    const route = isAuthenticated() ? <HomePage /> : <TwoStepLogIn />;
    return route
}

export default Home;

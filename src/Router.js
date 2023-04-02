import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Login from "./components/Login"
import Listings from "./components/Listings"
import Business from "./components/Details";

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props
    return (
        checkAuth() === true ? (<Component {...rest} />) : (<Navigate to="/login" />)
    )
}

const Router = () => {
    return (
        <Routes>
            {/* ACTION ITEM - Listings is unprotected */}
            <Route path="/" element={<Listings/>}/>
            {/* <Route path="/" element={<ProtectedRoute component={Listings} />} /> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/business/:id" element={<Business/>} />
            {/* Add Additional Routes */}
        </Routes>
    )
}

export default Router;
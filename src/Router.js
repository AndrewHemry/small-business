import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import AddBusiness from "./containers/AddBusiness";
import Login from "./components/Login"
import Businesses from "./containers/Businesses";
import Details from "./containers/Details"

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
            <Route path="/" element={<Businesses/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/business/:id" element={<Details/>} />
            {/* Add Additional Routes */}
            <Route path="/add" element={<ProtectedRoute component={AddBusiness} />} />
        </Routes>
    )
}

export default Router;
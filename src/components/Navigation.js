import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import cookie from "cookie";

const Navigation = (props) => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const parsedCookie = cookie.parse(document.cookie);
        setIsLoggedIn(parsedCookie.loggedIn === "true");
    }, []);

    function handleLogout() {
        document.cookie = cookie.serialize("loggedIn", false, { maxAge: 0 });
        console.log("Logout was pressed, current value is:", isLoggedIn);
        navigate("/login");
    }

    return (
        <nav className="nav-bar">
            <AppBar position="relative">
                <Toolbar className="toolbar-nav">
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        <Link className="nav-title" to="/">Austin Small Business</Link>
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link className="nav-list-link" to="/">Listings</Link>
                        </li>
                        <li className="nav-list-item">
                            {isLoggedIn ? (
                                <Link className="nav-list-link" to="/add">Add</Link>
                            ): null }
                        </li>
                        {/* ACTION ITEM - Iron out the logout and login features */}
                        <li className="nav-list-item">
                            {isLoggedIn ? (
                                <button onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link className="nav-list-link" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
            <div className="current-user-bar">
                {isLoggedIn ? (
                    <h4 className="current-user-text">Logged in as: {props.user.username} </h4>
                ) : null}
            </div>
        </nav>
    )
}

export default Navigation;
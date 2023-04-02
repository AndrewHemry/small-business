import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import cookie from "cookie";
// import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(cookie.parse(document.cookie).loggedIn);

    function handleLogout() {
        document.cookie = cookie.serialize("loggedIn", false, { maxAge: 0})
        console.log("Logout was pressed, current value is:", isLoggedIn)
        navigate("/login")
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
        </nav>
    )
}

export default Navigation;
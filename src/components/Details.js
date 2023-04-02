import React from "react";
import { useParams } from "react-router-dom";
// Update Listing to Redux
import listings from "../listings.json"

const Business = (props) => {
    const id = useParams().id
    const business = listings.find((listing) => listing.id === Number(id))

    return (
        <div className="business-details">
            <h2 className="business-title">{business.Name}</h2>
            <h3 className="business-address">{business.Address}</h3>
            <h3 className="business-hours">{business.Open_Time} - {business.Close_Time}</h3>
            <p className="business-description">{business.Description}</p>
            {/* Add Google Maps API for the map */}
        </div>
    )
}

export default Business;
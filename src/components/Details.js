import React from "react";
import { useParams } from "react-router-dom";
// Update Listing to Redux
// import listings from "../listings.json"

const Details = (props) => {
    const id = useParams().id
    // const id = props.match.params.id
    // const business = props.find((detail) => detail.id === Number(id))
    const business = props.businesses.find(b => b.id === id)

    return (
        <div className="business-details">
            {/* { Object.keys(business).map((key, idx) => {
                return (
                    <h2 className="business-title">{business.Name}</h2>
                    <h3 className="business-address">{business.Address}</h3>
                    <h3 className="business-hours">{business.Open_Time} - {business.Close_Time}</h3>
                    <p className="business-description">{business.Description}</p>
                )
            })
        } */}
            <h2 className="business-title">{business.Name}</h2>
            <h3 className="business-address">{business.Address}</h3>
            <h3 className="business-hours">{business.Open_Time} - {business.Close_Time}</h3>
            <p className="business-description">{business.Description}</p>

            {/* Add Google Maps API for the map */}
        </div>
    )
}

export default Details;
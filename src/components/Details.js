import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Map from "./GoogleMapEmbed"

const Details = (props) => {

    const id = useParams().id
    const business = props.businesses.find(b => b.id == id)

    return (
        <div className="business-details">
            <h2 className="business-title">{business.Name}</h2>
            <h3 className="business-address">{business.Address}</h3>
            <h3 className="business-hours">{business.Open_Time} - {business.Close_Time}</h3>
            <p className="business-description">{business.Description}</p>
            <Map address={business.Address}/>
        </div>
    )
}

export default Details;
import React from "react";

const APIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

export default function Map(props) {
  const { name, address } = props;

  let Address = [name, address]
    .join(" ")
    .split(" ")
    .join("+")
    .replaceAll(",", "");
  console.log(Address);

  return (
    <div className="maps-container">
      <iframe
        title="map"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${APIKey}&q=${Address}`}
      ></iframe>
    </div>
  );
}
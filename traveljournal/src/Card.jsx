import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="" />
      <div className="textbox">
        <div className="locationbox">
          <p>{props.location}</p>
          <p>
            <a href="{props.googleMapsUrl}">View on Google Maps</a>
          </p>
        </div>
        <h2>{props.title}</h2>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

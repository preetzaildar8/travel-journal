import React from 'react'

export default function Card(props) {
    const str = props.location;
    const location = str.toUpperCase();
    return(
        <div className="card">
            <img src={`${props.imageUrl}`} className="card--image" />
            <div className="card-details">
                <div className="card-loc">
                    <h3 className="card-location">{location}</h3>
                    <a href={`${props.googleMapsUrl}`}>View On Google Maps</a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-date">{props.startDate} - {props.endDate}</h3>
                <p className="card-desc">{props.description}</p>
            </div>
        </div>
    )
}
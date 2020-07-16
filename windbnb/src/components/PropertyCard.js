import React from 'react';

const PropertyCard = ({ properties }) => {
    //console.log("card", properties)
    return (
        <div>
            {properties ? properties.map(property => (
                <div key={property.id}>
                    <li>
                        {property.city}
                        {property.country}
                        {property.country}
                        {property.superHost}
                        {property.title}
                        {property.rating}
                        {property.maxGuests}
                        {property.type}
                        {property.beds}
                        {property.photo}
                    </li>
                </div>
            )) : null}
      </div>
    );
}
 
export default PropertyCard;
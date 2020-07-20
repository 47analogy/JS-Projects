import React from 'react';

// {
//     "id": 1,
//     "city": "Helsinki",
//     "country": "Finland",
//     "superHost": false,
//     "title": "Stylist apartment in center of the city",
//     "rating": 4.4,
//     "maxGuests": 3,
//     "type": "Entire apartment",
//     "beds": 2,
//     "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
//   }

const PropertyCard = ({ properties }) => {
    //console.log("card", properties)
    return (
        <div>
            {properties ? properties.map(property => (
                <div key={property.id}>
                    <li>
                        {/* {property.city} */}
                        {/* {property.country} */}
                        {/* {property.country} */}
                        {property.superHost}
                        {property.title}
                        {property.rating}
                        {/* {property.maxGuests} */}
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
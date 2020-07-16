import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard'
import PropertySearch from './PropertySearch'
import propertyData from '../stays.json'

const PropertyList = () => {
    const [properties, setProperties] = useState()

    useEffect(() => {
        setProperties(propertyData)
    }, [properties])

    return (
        <div>
            <PropertySearch />
            <h1>Stays in Finland</h1>
            <PropertyCard properties={properties} />
        </div>
    );
}
 
export default PropertyList;
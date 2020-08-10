import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard'
import PropertySearch from './PropertySearch'
import propertyData from '../stays.json'

const PropertyList = () => {
    const [properties, setProperties] = useState([])
    const [inputSearchGuests, setInputSearchGuests] = useState('')
    const [filteredGuestProperties, setFilteredGuestProperties] = useState([])

    useEffect(() => {
        setProperties(propertyData)
    }, [properties])

    useEffect(() => {
        setFilteredGuestProperties(properties.filter(property => {
            return String(property.maxGuests).includes(inputSearchGuests)
        }))
        
    }, [inputSearchGuests, properties])

    const onSearchChange = (event) => {
        //console.log('show event value', event.target.value)
        setInputSearchGuests(event.target.value)
    }

    /*
    properties.filter(property => {
            return String(property.maxGuests).includes(inputSearchGuests)
    })

    ***Versus***

    properties.filter(property => {
            return property.maxGuests === Number(inputSearchGuests)
    }) // won't show initial properties!
    
    */
    
    return (
        <div>
            <PropertySearch
                onSearchChange={onSearchChange}
                inputSearchGuests={inputSearchGuests}
                properties={properties}
            />
            <h1>Stays in Finland</h1>
            <PropertyCard properties={filteredGuestProperties} />
        </div>
    );
}
 
export default PropertyList;
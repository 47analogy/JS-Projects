import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        bottom: '50%',
    }
  };

const PropertySearch = ({onSearchChange, inputSearchGuests, properties}) => {
    const [showModal, setShowModal] = useState(false)
    const [listOpen, setListOpen] = useState(false)


    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    
    const toggleList = () => {
        setListOpen(!listOpen)
    }


    return ( 
        <div>
        <button onClick={handleOpenModal}>Open Search Modal</button>
        <Modal 
           isOpen={showModal}
           style={customStyles}
            ariaHideApp={false}
        >  
          <button onClick={handleCloseModal}>Close Search Modal</button>
                <div onClick={toggleList}>
                <label for="cities">Choose a City:</label>
                        {listOpen && <select className="dd-list">
                            {properties.map((property) => (   
                                <option className="dd-list-item" key={property.id} value={property.city}>{property.city}</option>
                            ))}
                    </select>} 

                    <label htmlFor="search">Search</label>
                    <input
                        type="text"
                        placeholder="Number of guests"
                        onChange={onSearchChange}
                        value={inputSearchGuests} />
               </div>    
        </Modal>
      </div>
     );
}
 
export default PropertySearch;


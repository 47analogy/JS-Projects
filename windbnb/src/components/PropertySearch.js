import React, { useState, useEffect } from 'react';
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
                    <div>
                        <label for="cities">Choose a City:</label>
                        {listOpen && <select className="dd-list">
                            {/* set gives array of cities without dupes */}
                            {[...new Set(properties.map(property => property.city))].map((city) => (
                                <option className="dd-list-item" value={city}>{city}</option>
                            ))}
                        </select>} 
                    </div>
                    <div>
                        <label htmlFor="search">Search</label>
                        <input
                            type="text"
                            placeholder="Number of guests"
                            onChange={onSearchChange}
                            value={inputSearchGuests} />
                    </div> 
               </div>    
        </Modal>
      </div>
     );
}
 
export default PropertySearch;


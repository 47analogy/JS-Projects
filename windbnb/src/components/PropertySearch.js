import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        bottom: '50%',
    }
  };

const PropertySearch = ({onSearchChange, inputSearchGuests}) => {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
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
          <div>Filter location</div>
                <div>
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

/*
need dropdown filter that displays all locations (city/country)
need search box for # of guests
when user click on number of guests (display all properties that fit the criteria)
*/
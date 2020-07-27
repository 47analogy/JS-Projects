import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        bottom: '50%',
    }
  };

const PropertySearch = () => {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return ( 
        <div>
        <button onClick={handleOpenModal}>Trigger Modal</button>
        <Modal 
           isOpen={showModal}
           style={customStyles}
            >  
          <button onClick={handleCloseModal}>Close Modal</button>
          <div>Filter location</div>
          <div>Search # of guests allowed</div>
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
import React from 'react'

const Modal = ({ name, email, address, city, zip }) => {
  return (
    <section className='modal'>
        <h2 className='modal__head'>Confirm Your Details</h2>
        <div className='moda__info'>
        <h3><span className='info__tag'>Name: </span>{name}</h3>
        <h5><span className='info__tag'>Email: </span>{email}</h5>
        <h5><span className='info__tag'>Address: </span>{address}</h5>
        <h5><span className='info__tag'>City: </span>{city}</h5>
        <h5><span className='info__tag'>Zip: </span>{zip}</h5>
        </div>
        
    </section>
  )
}

export default Modal
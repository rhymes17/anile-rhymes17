import React from 'react'

const Item = ({ imgUrl, name, price }) => {
  return (
    <div className='item'>
        <img src={imgUrl} alt='item_img'/>

        <h3 className='item__name'>{name}</h3>

        <h4 className='item__price'>Rs.{price}</h4>
    </div>
  )
}

export default Item
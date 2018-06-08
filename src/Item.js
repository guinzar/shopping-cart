import React from 'react';

const Item = ({item, index, quantityChangeHandler}) => {
  return (
    <div className="Item">
      <div className="item-name">
        {item.name}
      </div>
      <div className="item-quantity">
        <input value={item.quantity} onChange={(e) => quantityChangeHandler(index, e.target.value)} />
      </div>
      <div className="item-price">
        {item.price}
      </div>
      <div className="item-subtotal">
        {item.price * item.quantity}
      </div>
    </div>
  )
}

export default Item;

import React from 'react';
import { X } from 'react-bootstrap-icons';

export default function Cart({ data, deleteItemInCart }) {
  return (
    <>
      {!!data.dishes.length ? (
        <div className='cart-modal__cart-list cart-list '>
          {data.dishes.map((dish) => (
            <div className='cart-list__cart-item cart-item '>
              <p className='cart-item__title'> {dish.name}</p>
              <p className='cart-item__quantity'>{dish.quantity} шт </p>
              <p className='cart-item__price'>
                {dish.price * dish.quantity} kgs
              </p>
              <X
                onClick={() => deleteItemInCart(dish.id)}
                className='cart-item__delete'
                size={20}
              />
            </div>
          ))}
          <p className='cart-list__cart-total-price cart-total-price'>
            Total Price :{' '}
            {data.dishes.reduce((acc, dish) => {
              return acc + dish.quantity * dish.price;
            }, 0)}{' '}
            kgs
          </p>
        </div>
      ) : (
        <h3>Cart is empty</h3>
      )}
    </>
  );
}

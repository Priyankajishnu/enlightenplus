import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
       <img style={{marginLeft:520}} src='https://imgcdn.floweraura.com/ssr-build/static/media/emptyCart.4ed88ded.svg' alt=''></img>
       <h3 style={{textAlign:'center'}}>Hey,it feels so light!</h3>
       <p style={{textAlign:'center'}}>There is nothing in your bag.Let's add some items.</p>
       <Link style={{marginLeft:540}} to='/wishlist'>
        <Button variant="outlined" color="warning">ADD ITEMS FROM WISHLIST</Button>
      </Link>
    </div>
  );
}

export default Cart;
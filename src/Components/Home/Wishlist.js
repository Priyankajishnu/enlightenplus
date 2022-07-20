import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <div style={{marginTop:100}}>
      <h3 style={{textAlign:'center'}}>PLEASE LOG IN</h3>
      <p style={{textAlign:'center'}}>Login to view items in your wishlist.</p> 
      <img style={{marginLeft:520}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtWFhmtqf7at33Ga3T2KMy9m40NpfWQLunQ&usqp=CAU' alt='' ></img>
      <br></br>
      <Link style={{marginLeft:590}} to='/login'>
        <Button variant="contained" color="secondary">Login</Button>
      </Link>
    </div>
  );
}

export default Wishlist;
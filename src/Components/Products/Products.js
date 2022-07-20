import * as React from 'react';
import '../Products/products.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Products() {

  // manage state
  var [data,setData] = useState([]);

  // API connection for displaying all products
  useEffect(()=>{
    loadDataFromApi();
    console.log("load ")
  },[]);

  const loadDataFromApi=()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      console.log(res.data);
      setData((data=res.data));
    });
  };

  return (
    <div>
      <div className='producthead'>
        <h1 style={{textAlign:"center",fontFamily:"sans-serif",marginTop:50}}>TOP PICKS FOR YOU</h1>
      </div>
      <br></br><br></br>
      <ImageList >
        <ImageListItem key="Subheader" cols={6}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>

        {data.map((product,key) => (

          <ImageListItem key={product.image}>
            <img src={product.image} alt='' style={{height:300,width:200}} />
            <ImageListItemBar
              title={product.title}
              subtitle={`$ ${product.price}`}
              actionIcon={
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${product.title}`} >
                  <Link key={key} to={`/products/${product.id}`} style={{ color: "white" }} >
                    <InfoIcon />
                  </Link> 
                </IconButton> 
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}


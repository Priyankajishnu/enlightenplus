import React ,{useEffect,useState} from 'react'
import '../Products/item.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import {Animated} from "react-animated-css";
import {useParams} from 'react-router-dom';
import { borderLeft } from '@mui/system';
import { Button } from '@mui/material';

const Item = (props) => {
  
  const{id} = useParams();
  console.log("id",id);
  
  // manage state
  let[item,setItem]=useState([]);
   
  let [data,setData] = useState([]);

  // API connection for displaying all products
  useEffect(()=>{
    loadDataFromApi1();
    console.log("load ")
  },[]);
 
  const loadDataFromApi1=()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      console.log(res.data);
      setData((data=res.data));
    });
  };

  //API connection for displaying a single product
  useEffect(()=>{
    loadDataFromApi();
    console.log("reload");
  },[]);

  const loadDataFromApi = () =>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      console.log(res.data);
      setItem((item=res.data));
      setItem((item=res.data.find((i)=>i.id===id)));
    });
  };

  return (
    <div>
      <Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true}>
        <div>
          <img className='singleimage' src={item.image} alt=''></img>
        </div>
      </Animated>

      <div >
        <h3 style={{marginLeft:200,color:'darkgray'}}>{item.category}</h3>
      </div>
       
      <div className='description'>
        <h2>{item.title}</h2>
        <p className='rating'> Rating <span style={{color:"green"}} > {item.rating && item.rating.rate} </span>  <span class="fa fa-star checked"></span> </p>
        <span style={{fontWeight:borderLeft,fontSize:40}}> {`$ ${item.price}`} </span>
        <p style={{fontSize:17,color:"darkslategray"}}> {item.description} </p>
      </div>
      <div style={{marginLeft:450,position:'absolute',display:'flex'}}>
        <Button   variant="outlined" color="secondary">Wishlist</Button>
        <Button variant="outlined" color="secondary">Add to Cart</Button>
      </div>
      <br></br><br></br><br></br>
      <div style={{marginLeft:500}}>
        <h2>Other Products</h2>

        <Carousel fade className="d-block w-50">

          {data.map((product,key) => (

            <Carousel.Item interval={1000}>
              <img className="d-block w-50" src={product.image}style={{height:300}} alt="First Slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Item;
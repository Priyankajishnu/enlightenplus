import React from "react";
import {Grid, Paper, TextField} from "@mui/material";
import '../Register/Register.css';
import validation from "../Register/validation";
import { useEffect } from "react";
import { useState } from "react";


const Register=(props)=>{
    
  // storing Form field values
  const[userData,setUserData] = useState({});

  //manage the form error values
  const [errorvalues,setErrorvalues]=useState({});

  //flag for form submission status
  const [issubmit,setIssubmit]=useState(false);
  
 

  // manage field change
  const handleChange=(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value});
    console.log(userData);
  }
  
  // manage form refresh,backend connection
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setErrorvalues(validation(userData));
  };
  
  
  useEffect(()=>{
    if(Object.keys(errorvalues).length===0 && issubmit){

       alert("login successfully");
      
    }
  },[errorvalues]);

    return(
        <div>     
            <div className="signin" >
                <form action="" onSubmit={handleSubmit}>
                    <Grid>
                        <Paper className="paperstyle" elevation={10} >
                            <Grid align='center'>
                                <h1> SIGNUP</h1>   
                            </Grid>
                            <div id="label">
                                <TextField  label='name' placeholder="NAME" type='text' fullWidth  name="name" onChange={handleChange} value={userData.name} required></TextField>
                            </div>
                            <div id="label">
                                <TextField  label='email' placeholder="EMAIL ID" type='email' fullWidth  name="email" onChange={handleChange} value={userData.email} required></TextField>
                            </div>
                            <div id="label">
                                <TextField  label='Password' placeholder=" PASSWORD" type='password' fullWidth name="password" onChange={handleChange} value={userData.password} required></TextField>
                            </div>
                            <div className="button">
                                <button id="buttonstyle" type="submit" >Register </button>
                            </div>
                        </Paper>
                    </Grid>
                </form>
            </div>
        </div>
    );
}

export default Register;
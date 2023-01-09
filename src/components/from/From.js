import React, {useState} from 'react'
import {Paper, TextField, Button} from "@mui/material";
import { UseContextControllers } from '../../context/Context';

const From = () => {

const create = UseContextControllers().createPic;



    const [Values, setValues] = useState({
       title: "",
        img:"" ? null : undefined,
    });
    
    
    
    
    const targetValue = (e) => {
      const value = e.target.value;
      setValues({...Values, [e.target.name]: value});
    }
    
    const PutPicSubmit = (e)=>{
        e.preventDefault();
        console.log(Values);
        create(Values);
        
    }
    


  return (
   <Paper sx={{width: "500px", height: "200px", marginX: "auto", display: "flex", alignItems: "center", justifyContent: "center"}} elevation={3}>
    <form className='form' onSubmit={PutPicSubmit}>
     <TextField name='title' value={Values["title"]} onChange={targetValue} type="text" variant='outlined' label='Title'/>
     <TextField name='img' value={Values["img"]} onChange={targetValue}   variant='outlined'  label='Img URL'/>
    <Button type='submit' variant="contained" >SUBMIT</Button>
    </form>
</Paper>
  )
}

export default From
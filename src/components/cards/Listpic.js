import React, {useEffect, useState} from 'react'
import Pic from './Pic'
import { ListCardStyle } from '../../css/ListCardStyle';
const END_POINT_ALL = "http://localhost:4000/pic/all";

const Listpic = () => {

const [pic, setpic] = useState()


useEffect(()=>{
  
   
const getAllPic = async () =>{

    try {
      const res =  await fetch(END_POINT_ALL, {
        header: {'content-type': 'appliction/json'}
    });
      const data = await res.json();
      setpic(data.data);
      return data;
      
    } catch (error) {
        
    }
    
}

getAllPic();
},[pic]);


// console.log(pic);

  return (
    <ListCardStyle>
    {pic?.map((pic)=> <Pic key={pic._id} pic={pic}/>)}
    </ListCardStyle>
  )
}

export default Listpic
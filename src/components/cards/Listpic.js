import React, {useEffect, useState} from 'react'
import Pic from './Pic'
import { ListCardStyle } from '../../css/ListCardStyle';
// import { UseContextControllers } from '../../context/Context';
const END_POINT_ALL = "http://localhost:4000/pic/all";

const Listpic = () => {

// const allpic = UseContextControllers().getAllPic;
const [pic, setpic] = useState()


useEffect(()=>{
// allpic.then(data => setpic(data))


const getAllPic = async () =>{

    try {
      const res =  await fetch(END_POINT_ALL, {
        header: {'content-type': 'appliction/json'}
    });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
        
    }
    
}

getAllPic().then(data=> setpic(data));
})
console.log(pic);
  return (
    <ListCardStyle>
    {pic.map((pic, index)=>{  <Pic key={index} pic={pic}/>})}
    </ListCardStyle>
  )
}

export default Listpic
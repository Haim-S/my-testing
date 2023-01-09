import React from 'react'
import { CardStyle } from '../../css/CardStyle'
const Pic = ({pic}) => {
  return (
    <CardStyle>
        <h4>{pic.title}</h4>
        <img src={pic.img}/>
    </CardStyle>
  )
}

export default Pic
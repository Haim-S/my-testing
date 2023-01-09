import React from 'react'
import { CardStyle, ImageCardStyle, Title } from '../../css/CardStyle'
const Pic = ({pic}) => {
  return (
    <CardStyle>
        <ImageCardStyle src={pic.img}/>
        <Title>{pic.title}</Title>
    </CardStyle>
  )
}

export default Pic
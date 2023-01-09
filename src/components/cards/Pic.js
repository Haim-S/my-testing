import React from 'react'
import { CardStyle, ImageCardStyle, Title } from '../../css/CardStyle';
import { UseContextControllers } from '../../context/Context';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Pic = ({pic}) => {

  const {deleteOne} = UseContextControllers();

  return (
    <CardStyle>
        <ImageCardStyle src={pic.img}/>
        <Title>{pic.title}</Title>
        <button onClick={()=>deleteOne(pic._id)}><DeleteOutlineIcon/></button>
    </CardStyle>
  )
}

export default Pic
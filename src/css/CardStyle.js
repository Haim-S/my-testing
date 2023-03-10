




import styled from "@emotion/styled";

export const CardStyle = styled.div`
position: relative;
width: 103%;
height: 100%;
padding: 4px;
margin: 10px;
background-color: white;
border-radius: 8px;
box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.03);
transition: $transition-ease;
display: flex;
`



export const ImageCardStyle = styled.img`
width: 60%;
height: 150px;
overflow: hidden!important;
border-radius: 10px;
`

export const Title = styled.p`
padding: 12px;
display: flex;
ailgn-items: center;
justify-content: center;
flex-direction: column;

`


export const H2 = styled.h2`
margin: 0;
color: var(--MentorsCard-title);
`
export const H5 = styled.h5`
color: var(--MentorsCard-title);
margin: 0;
padding: 0;
`
export const Button = styled.button`

margin-top: 5px;
width:120px;
background: #08C3A8;
border: solid #08C3A8;
border-radius: 8px;
display:flex;
ailgn-items:center;
justify-content: center;
color: white;
`


import styled from "@emotion/styled";


export const ListCardStyle = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
row-gap: 2rem;
column-gap: 11rem;
padding-left: 15%;
padding-right: 25%;
@media screen and (max-width: 876px){
    grid-template-columns: repeat(1, 1fr);
    column-gap: 11rem;
    padding-left: 25%;
    padding-right: 35%;
}

@media screen and (max-width: 576px){
    grid-template-columns: repeat(1, 1fr);
    column-gap: 11rem;
    padding-left: 2%;
    padding-right: 0%;
}

`

export const TitleCategory = styled.div`
width: 99%;
height: 60px;
margin-bottom: 15px;
padding: 1px;
padding-left: 10px;
display: flex;
align-items: center;
color: var(--header-color-title) ;
background-color: #fff;
border-left: 7px solid var(--Home-border-title) ;
`



export const H3 = styled.h3`
padding: 0;
`
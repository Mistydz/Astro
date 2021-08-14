import React from "react";
import Font from 'react-font'
import styled from "styled-components";
import SvgComponent from './logo.jsx';



const Body = styled.div`
padding : 0;
display : flex;
`;
const Logo = styled.div`
padding : 5px;
margin: 0 auto;
display : flex;
`;
const H1 = styled.h1`
font-size : 30px;
`
const Img = styled.div`
width : 50px;
height : 50px
`
const Fpart = styled.span`
color : white;
`;
const Spart = styled.span`
color : #53d753;
`;
const logo = {
  display: "flex",
  textDecoration: 'none',
};

const Bar = () => (
  <Font family="Do Hyeon">
    <Body>
     <Logo>
    <Img><SvgComponent /></Img><H1><a href="/" style={logo}><Fpart>Steam</Fpart> <Spart>Astro'<Fpart>s</Fpart></Spart></a></H1>
     </Logo> 
 
    </Body>
  </Font>
);

export default Bar;

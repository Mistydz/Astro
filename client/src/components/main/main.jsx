import React from "react";
import styled from "styled-components";
import "./style.css";
const classNames = require("classnames");

const MainBody = ({ data }) => {
  if (!data) {
    return null;
  }

let repllvl;
if(data.level<data.playerLevel) repllvl = data.playerLevel+1;
else repllvl = data.level;

let lvl1;
if(data.playerLevel<10) lvl1 = 1;
else if(data.playerLevel<100) lvl1 = 10;
else lvl1 = 100;

let lvl2;
if(repllvl<10) lvl2 = 1;
else if(repllvl<100) lvl2 = 10;
else lvl2 = 100;



/* problem on *10 ... doesnt work on levels like 1000 and more (*100 is solution) but doesnt work on 10 to 900 .. */
const lvl_x = (Math.floor(data.playerLevel/lvl1))* lvl1;
const lvl_plus = data.playerLevel - lvl_x;
const x1 ='friendPlayerLevel';
const x2 =`lvl_${lvl_x}`;
const x3 =`lvl_plus_${lvl_plus}`;

const positionY1 = Math.floor(lvl_plus/10)*-32;
let xlvl = {
  backgroundPositionX: 0, 
  backgroundPositionY: positionY1
}

const lvl_y = (Math.floor(repllvl/lvl2))* lvl2;
const lvl_wplus = repllvl - lvl_y;
const y1 ='friendPlayerLevel';
const y2 =`lvl_${lvl_y}`;
const y3 =`lvl_plus_${lvl_wplus}`;

const positionY2 = Math.floor(lvl_wplus/10)*-32;
let wlvl = {
  backgroundPositionX: 0, 
  backgroundPositionY: positionY2
}


  return (
    <>
    
      <ImageContainer>
        <UserAvatar src={data.avatarfull} />
      </ImageContainer>
      <Body>
      <Part1>
        <p>Name: &nbsp;{data.personaname}</p>
        <p>Creation Date: &nbsp;{data.fullDate}</p>
        <p>User State: &nbsp;{data.userState}</p>
        <Horizontal>
          <p>Country: </p>
          <Flag src={data.flag} />
          <p>{data.country}</p>
        </Horizontal>
        <Horizontal>
          <p>Profile Url:</p>
          <a href={data.url} style={{textDecoration: "none"}} target="_blank" rel="noreferrer"><Mob>{data.url}</Mob></a>
        </Horizontal>
      </Part1>
      <Part2>
        <p>level:     &nbsp;&nbsp;<span className={classNames([x1,x2,x3])} style={xlvl}>{data.playerLevel}</span></p>
        <p>level Wanted:    	&nbsp;&nbsp;<span className={classNames([y1,y2,y3])} style={wlvl}>{repllvl}</span></p>
        <p>XP Needed:  	&nbsp;{data.difference} xp</p>
        <p>Sets Needed:  	&nbsp;{data.badges}</p>
        <p>Price with TF2 Keys:  	&nbsp;{data.tf2_keys}</p>
      </Part2>
      </Body>

    </>
  );
};

const Body = styled.div`
  display: inline-flex;
  color:white;
  margin-left:25px;
  justify-content: center;
  @media (max-width: 470px) {
    flex-direction: column;
    margin-left:30px;

  }
`;

const Horizontal = styled.div`
display: inline-flex;
flex-direction: row;
`;
const Mob = styled.div`
top: 16px;
margin-left: 15px;
position: relative;
color : red;
@media (max-width: 470px) {
  & {
    position: relative;
    visibility: hidden;
  }
  &:after {
  textDecoration: 'none';
  bottom: 20px;
  visibility: visible;
  display: inline;
  content: 'Click Here';
  color : yellow;
  display: block;
  position: relative;
  }
}
`

const Part1 = styled.div`
display: inline-grid;
margin: 5px;
padding: 15px;
@media (min-width: 470px) {
  margin: 25px 5px 0px 0px;
}
`;
const Part2 = styled.div`
  display: inline-grid;
  margin: 15px;
  padding: 15px;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  width: auto;
  display: inline-flex;
  justify-content: center;
`;

const UserAvatar = styled.img`
@media (min-width: 470px) {
  height: 184px;
  width: 184px;
}
height: 128px;
width: 128px;

`;

const Flag = styled.img`
  top: 5px;
  position: relative;
  height: 20px;
  margin: 5px;
  padding: 5px;
`;



export default MainBody;

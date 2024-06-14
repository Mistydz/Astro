import React, { useState } from "react";
import "../Constants/styles.css";
import clsx from "clsx";
import Image from "next/image";

interface MainBodyProps {
  data: {
    avatarfull: string;
    personaname: string;
    fullDate: string;
    userState: string;
    url: string;
    playerLevel: number;
    difference: number;
    badges: number;
    tf2_keys: number;
    level: number;
  } | undefined;
  loading: boolean; // Add loading prop
}
const MainBody: React.FC<MainBodyProps> = ({ data, loading }) => {
  if (loading) {
    return <div>Loading...</div>; // Render loading indicator when loading state is true
  }

if (!data) {
    return null; // Render nothing when data is undefined
}
    if (data.personaname === 'nouser') {
      return <div>NO user found</div>; // Render "NO user found" if personaname is 'nouser'
  }
  let repllvl;
  if (data.level < data.playerLevel) repllvl = data.playerLevel + 1;
  else repllvl = data.level;

  let lvl1;
  if (data.playerLevel < 10) lvl1 = 1;
  else if (data.playerLevel < 100) lvl1 = 10;
  else lvl1 = 100;

  let lvl2;
  if (repllvl < 10) lvl2 = 1;
  else if (repllvl < 100) lvl2 = 10;
  else lvl2 = 100;

  const lvl_x = Math.floor(data.playerLevel / lvl1) * lvl1;
  const lvl_plus = data.playerLevel - lvl_x;
  const x1 = 'friendPlayerLevel';
  const x2 = `lvl_${lvl_x}`;
  const x3 = `lvl_plus_${lvl_plus}`;

  const positionY1 = Math.floor(lvl_plus / 10) * -32;
  let xlvl = {
    backgroundPositionX: 0,
    backgroundPositionY: positionY1,
  };

  const lvl_y = Math.floor(repllvl / lvl2) * lvl2;
  const lvl_wplus = repllvl - lvl_y;
  const y1 = 'friendPlayerLevel';
  const y2 = `lvl_${lvl_y}`;
  const y3 = `lvl_plus_${lvl_wplus}`;

  const positionY2 = Math.floor(lvl_wplus / 10) * -32;
  let wlvl = {
    backgroundPositionX: 0,
    backgroundPositionY: positionY2,
  };

  return (
    <main className="w-full mx-auto p-20 lg:text-left text-center">
    

      <div className="lg:flex lg:justify-evenly">
      <a >
        <Image className="mx-auto" src={data.avatarfull} />
      </a>
      <div className="pt-5">
        <p>Name: &nbsp;{data.personaname}</p>
        <p>Creation Date: &nbsp;{data.fullDate}</p>
        <p>User State: &nbsp;{data.userState}</p>
        <div>
          <p>Profile Url:</p>
          <a href={data.url} style={{textDecoration: "none"}} target="_blank" rel="noreferrer"><span>{data.url}</span></a>
        </div>
      </div>
      <div className="pt-5">
        <p>level:     &nbsp;&nbsp;<span className={clsx([x1,x2,x3])} style={xlvl}>{data.playerLevel}</span></p>
        <p>level Wanted:    	&nbsp;&nbsp;<span className={clsx([y1,y2,y3])} style={wlvl}>{repllvl}</span></p>
        <p>XP Needed:  	&nbsp;{data.difference} xp</p>
        <p>Sets Needed:  	&nbsp;{data.badges}</p>
        <p>Price with TF2 Keys:  	&nbsp;{data.tf2_keys}</p>
      </div>
      </div>

    </main>
  );
};
export default MainBody;
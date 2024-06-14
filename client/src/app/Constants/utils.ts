import defaultAvatar from "../../../public/default_avatar.jpg";
import { StaticImageData } from 'next/image';
export interface Data {
  timecreated?: number;
  personastate?: number;
  avatarfull?: string | StaticImageData;
  personaname?: string;
  name?: string;
  profileurl?: string;
  player_level?: number;
  player_xp?: number;
  loccountrycode?: string;
}

export interface Result {
  fullDate: string;
  userState: string;
  userStateColor: string;
  avatarfull: string | StaticImageData;
  personaname: string;
  url: string;
  playerLevel: number;
  playerXP: number;
  difference: number;
  badges: number;
  tf2_keys: number;
  level: number;
  loccountrycode?: string;
}

export const handleData = (data: Data, level: number): Result => {
  // timestamp to date
  const { timecreated: time = 907794930 } = data;
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const dt = date.getDate();
  const fullDate = `${dt} ${month} ${year}`;

  // user online/offline state with font color green/red
  const { personastate: state = 0 } = data;
  const userState = state === 0 ? "Offline" : "Online";
  const userStateColor = state === 0 ? "red" : "green";

  const { avatarfull = defaultAvatar } = data;
  const { personaname = "nouser" } = data;
  const { profileurl: url = "Wrong user check it again." } = data;

  const { player_level: playerLevel = 0 } = data;
  const { player_xp: playerXP = 0 } = data;

  let difference: number, badges: number, tf2_keys: number;

  if (!level || level < playerLevel) {
    level = playerLevel + 1;
    const calc_xp = Math.ceil((level * (level * 5 + 50)) / 100) * 100;
    difference = calc_xp - playerXP;
    badges = Math.ceil(difference / 100); 
    tf2_keys = badges / 20;
  } else if (level > 5099) {
    level = 5099;
    const calc_xp = Math.ceil((level * (level * 5 + 50)) / 100) * 100;
    difference = calc_xp - playerXP;
    badges = Math.ceil(difference / 100);
    tf2_keys = badges / 20;
  } else {
    const calc_xp = Math.ceil((level * (level * 5 + 50)) / 100) * 100;
    difference = calc_xp - playerXP;
    badges = Math.ceil(difference / 100);
    tf2_keys = badges / 20;
  }

  return {
    fullDate,
    userState,
    userStateColor,
    avatarfull,
    personaname,
    url,
    playerLevel,
    playerXP,
    difference,
    badges,
    tf2_keys,
    level
  };
};

// this file is used to controle the api result and modify it to make it ready to be presented for the end user

export const handleData = (data, level) => {
  // timestamp to date
  const { timecreated: time = 907794930 } = data;
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const dt = date.getDate();
  const fullDate = dt + " " + month + " " + year;

  // user online/offline state with font color green/red
  const { personastate: state = 0 } = data;
  const userState = state === 0 ? "Offline" : "Online";
  const userStateColor = state === 0 ? "red" : "green";
  // eslint-disable-next-line
  const { avatarfull: avatarfull = defaultAvatar } = data;
  // eslint-disable-next-line
  const { personaname: personaname = "User doesn't exist" } = data;
  const { name: country = "unknown" } = data; // if the account has no set country output unknown with a green flag
  // eslint-disable-next-line
  const { flag: flag = "https://restcountries.eu/data/mac.svg" } = data; // green flag
  const { profileurl: url = "Wrong user check it again." } = data;

  const { player_level: playerLevel = 0 } = data;
  const { player_xp: playerXP = 0 } = data;

  let difference, badges, tf2_keys;

  if (!level || level<playerLevel) {
    level = playerLevel + 1;
    const calc_xp = Math.ceil((level * (level * 5 + 50)) / 100) * 100;
    difference = calc_xp - playerXP;
    badges = Math.ceil(difference / 100); // sets needed to craft to get to wanted level
    tf2_keys = badges / 20; // u can buy 20 sets for 1 tf2 keys from traiding bot's
  } else if (level > 5099) {
    // steam max level that you can get is 5099 (output 0) and diffrencelvl<0 means that the wanted level is smaller then the level that you have now
    difference = 0;
    badges = 0;
    tf2_keys = 0;
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
    country,
    flag,
    url,
    playerLevel,
    playerXP,
    difference,
    badges,
    tf2_keys,
    level
  };
};

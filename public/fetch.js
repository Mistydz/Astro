// Project created by misty :) i hope u have a great day.

let user;
let level;

async function getData() {
    var user = document.getElementById('user').value;
    var level = document.getElementById('level').value;
    const db_response = await fetch(`/id?user=${user}`);
    const db_data = await db_response.json();
    window.stop();

    // timestamp to date 
    const { timecreated: time = 907794930 } = db_data;
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const dt = date.getDate();
    const fullDate = dt + ' ' + month + ' ' + year;

    // user online/offline state with font color green/red
    const { personastate: state = 0 } = db_data;
    if (state == 0) {
        const userstate = 'Offline';
        document.getElementById('state2').textContent = userstate;
        document.getElementById('state2').style.color = "red";
    } else {
        const userstate = 'Online';
        document.getElementById('state2').textContent = userstate;
        document.getElementById('state2').style.color = "green";

    }

    const { avatarfull: avatarfull = './default_avatar.jpg' } = db_data;
    document.getElementById('img').src = avatarfull;
    document.getElementById('img').style.opacity = "1";
    const { personaname: personaname = 'no Name' } = db_data;
    document.getElementById('name1').textContent = 'Name : ';
    document.getElementById('name2').textContent = personaname;
    document.getElementById('country1').textContent = 'Country : ';
    const { name: country = 'unkown' } = db_data; // if the account has no set country output unkown with a green flag
    document.getElementById('country2').textContent = country;
    const { flag: flag = 'https://restcountries.eu/data/mac.svg' } = db_data; // green flag
    document.getElementById('img2').src = flag;
    document.getElementById('img2').style.opacity = "1";
    document.getElementById('date1').textContent = 'Creation Date : ';
    document.getElementById('date2').textContent = fullDate;
    document.getElementById('date1').textContent = 'Creation Date : ';
    document.getElementById('state1').textContent = 'User State :';
    document.getElementById('url1').textContent = 'Profile Url :';
    const { profileurl: url = 'Wrong user check it again.' } = db_data;
    document.getElementById('url2').textContent = url;
    document.getElementById('url2').href = url;
    document.getElementById('title').style.paddingTop = "0";


    const { player_level: pl = 0 } = db_data;
    const { player_xp: xp = 0 } = db_data;
    const diffrencelvl = level - pl;
    if (level == '') {
        level = pl + 1
        const calc_xp = (Math.ceil(((level * ((level * 5) + 50)) / 100))) * 100;
        const diffrence = calc_xp - xp;
        const badges = Math.ceil((diffrence / 100)); // sets nedded to craft to get to wanted level
        const tf2_keys = badges / 20; // u can buy 20 sets for 1 tf2 keys from traiding bot's

        document.getElementById('dreamlevel2').textContent = level;
        document.getElementById('xpned2').textContent = diffrence;
        document.getElementById('set2').textContent = badges;
        document.getElementById('tf22').textContent = tf2_keys;
    } else if (diffrencelvl < 0 || level > 5099) { // steam max level that you can get is 5099 (output 0) and diffrencelvl<0 means that the wanted level is smaller then the level that you have now
        document.getElementById('xpned2').textContent = 0;
        document.getElementById('set2').textContent = 0;
        document.getElementById('tf22').textContent = 0;
    } else {
        const calc_xp = (Math.ceil(((level * ((level * 5) + 50)) / 100))) * 100;
        const diffrence = calc_xp - xp;
        const badges = Math.ceil((diffrence / 100));
        const tf2_keys = badges / 20;
        document.getElementById('xpned2').textContent = diffrence;
        document.getElementById('set2').textContent = badges;
        document.getElementById('tf22').textContent = tf2_keys;
    }

    document.getElementById('level2').textContent = pl;
    document.getElementById('dreamlevel2').textContent = level;
    document.getElementById('xpnow2').textContent = xp;
    document.getElementById('level1').textContent = 'Level : ';
    document.getElementById('dreamlevel1').textContent = 'Level Wanted : ';
    document.getElementById('xpnow1').textContent = 'Current XP : ';
    document.getElementById('xpned1').textContent = 'XP Nedded : ';
    document.getElementById('set1').textContent = 'Sets :';
    document.getElementById('tf21').textContent = 'Price with TF2 Keys :';


};

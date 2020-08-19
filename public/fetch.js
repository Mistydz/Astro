// Welcome to my ghetto Javascript codding feel free to use any $hit in here even though ain't much anyway
// Have a great day


let user;
let level;



async function getData() {
    var user = document.getElementById('user').value;
    var level = document.getElementById('level').value;
    const db_response = await fetch(`/id?user=${user}`);
    const db_data = await db_response.json();
    window.stop();


    var time = db_data.creation;
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const dt = date.getDate();
    const fullDate = dt + ' ' + month + ' ' + year;

    if (db_data.state == 0) {
        const userstate = 'Offline';
        document.getElementById('state2').textContent = userstate;
        document.getElementById('state2').style.color = "red";
    } else {
        const userstate = 'Online';
        document.getElementById('state2').textContent = userstate;
        document.getElementById('state2').style.color = "green";

    }

    document.getElementById('img').src = db_data.avatar;
    document.getElementById('img').style.opacity = "1";
    document.getElementById('img2').src = db_data.flag;
    document.getElementById('img2').style.opacity = "1";
    document.getElementById('name1').textContent = 'Name : ';
    document.getElementById('name2').textContent = db_data.name;
    document.getElementById('country1').textContent = 'Country : ';
    document.getElementById('country2').textContent = db_data.country;
    document.getElementById('date1').textContent = 'Creation Date : ';
    document.getElementById('date2').textContent = fullDate;
    document.getElementById('date1').textContent = 'Creation Date : ';
    document.getElementById('state1').textContent = 'User State :';
    document.getElementById('url1').textContent = 'Profile Url :';
    document.getElementById('url2').textContent = db_data.url;
    document.getElementById('url2').href = db_data.url;
    document.getElementById('title').style.paddingTop = "0";





    const diffrencelvl = level - db_data.level;
    if (level == '') {
        level = db_data.level + 1
        const calc_xp = (Math.ceil(((level * ((level * 5) + 50)) / 100))) * 100;
        const diffrence = calc_xp - db_data.xp;
        const badges = Math.ceil((diffrence / 100)); // coupons or promo card recived after crafting = sets used
        const tf2_keys = badges / 20; // const emote = badges * 2; when u craft a badge u get 1 emote 1 background 1 coupon/promoCard

        document.getElementById('dreamlevel2').textContent = level;
        document.getElementById('xpned2').textContent = diffrence;
        document.getElementById('set2').textContent = badges;
        document.getElementById('tf22').textContent = tf2_keys;
    } else if (diffrencelvl < 0 || level > 5099) {
        document.getElementById('xpned2').textContent = 0;
        document.getElementById('set2').textContent = 0;
        document.getElementById('tf22').textContent = 0;
    } else {
        const calc_xp = (Math.ceil(((level * ((level * 5) + 50)) / 100))) * 100;
        const diffrence = calc_xp - db_data.xp;
        const badges = Math.ceil((diffrence / 100)); // coupons or promo card recived after crafting = sets used
        const tf2_keys = badges / 20; // const emote = badges * 2; when u craft a badge u get 1 emote 1 background 1 coupon/promoCard

        document.getElementById('xpned2').textContent = diffrence;
        document.getElementById('set2').textContent = badges;
        document.getElementById('tf22').textContent = tf2_keys;



    }
    document.getElementById('level2').textContent = db_data.level;
    document.getElementById('dreamlevel2').textContent = level;
    document.getElementById('xpnow2').textContent = db_data.xp;
    document.getElementById('level1').textContent = 'Level : ';
    document.getElementById('dreamlevel1').textContent = 'Level Wanted : ';
    document.getElementById('xpnow1').textContent = 'Current XP : ';
    document.getElementById('xpned1').textContent = 'XP Nedded : ';
    document.getElementById('set1').textContent = 'Sets :';
    document.getElementById('tf21').textContent = 'Price with TF2 Keys :';


};
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));


var urlencodedParser = bodyParser.urlencoded({ extended: false })







app.get('/id', urlencodedParser, async(req, res) => {
    const id = req.query.user; // user input
    if (id == '') {
        const xp = 0;
        const level = 0;
        const state = 0;
        const name = 'no Name';
        const url = 'Wrong user check it again.';
        const avatar = './default_avatar.jpg';
        const creation = 907794930;
        const flag = 'https://restcountries.eu/data/mac.svg';
        const country = 'unknown';
        const data = { xp, level, state, name, url, avatar, creation, flag, country };
        res.json(data);
    } else {
        const Steam_API_Key = 'XXXXXXXXXXXXXXXXXXXXX'; //replace by your API key
        const apiUrl = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${Steam_API_Key}&vanityurl=${id}`
        const idinfo = await fetch(apiUrl);
        const idinfo2 = await idinfo.json();
        const steamid = idinfo2.response.steamid;
        const code = idinfo2.response.success;
        // a quick error handling when the api can't find the Steamid will just go for a unknown output
        if (code === 1) {
            const curl = `http://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam_API_Key}&steamid=${steamid}`;
            const cinfo = await fetch(curl);
            const cinfo2 = await cinfo.json();
            const xp = cinfo2.response.player_xp;
            const level = cinfo2.response.player_level;
            const level_up = cinfo2.response.player_xp_needed_to_level_up;
            const burl = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${Steam_API_Key}&steamids=${steamid}`;
            const binfo = await fetch(burl);
            const binfo2 = await binfo.json();
            const state = binfo2.response.players[0].personastate;
            const name = binfo2.response.players[0].personaname;
            const url = binfo2.response.players[0].profileurl;
            const avatar = binfo2.response.players[0].avatarfull;
            const creation = binfo2.response.players[0].timecreated;
            const countrycode = binfo2.response.players[0].loccountrycode;
            if (countrycode == null) { // error handling when api cant find origin country on steam profile will replace it by unknown
                const flag = 'https://restcountries.eu/data/mac.svg';
                const country = 'unknown';
                const data = { steamid, xp, level, level_up, name, url, avatar, creation, state, flag, country };
                res.json(data);
            } else {
                const aurl = `https://restcountries.eu/rest/v2/alpha/${countrycode}`
                const ainfo = await fetch(aurl);
                const ainfo2 = await ainfo.json();
                const flag = ainfo2.flag;
                const country = ainfo2.name;
                const data = { steamid, xp, level, level_up, name, url, avatar, creation, state, flag, country };
                res.json(data);
            }


        } else { // the unknown output
            const xp = 0;
            const level = 0;
            const state = 0;
            const name = 'no Name';
            const url = 'Wrong user check it again.';
            const avatar = './default_avatar.jpg';
            const creation = 907794930;
            const flag = 'https://restcountries.eu/data/mac.svg';
            const country = 'unknown';
            const data = { xp, level, state, name, url, avatar, creation, flag, country };
            res.json(data);
        }
    }


})
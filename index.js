const express = require('express');
const fetch = require('node-fetch');


const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));

var urlencodedParser = express.urlencoded({ extended: false })




app.get('/id', urlencodedParser, async(req, res) => {
    const id = req.query.user; // user input
    // a quick error handling when there is no user input or the api can't find the Steamid will just go for a unknown output
    if (!id) {
        const data = '';
        res.json(data);
    } else {
        const Steam_API_Key = 'XXXXXXXXXXXXXXXXXXXXX'; //replace by your API key
        const apiUrl = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${Steam_API_Key}&vanityurl=${id}`
        const idinfo = await fetch(apiUrl);
        const idinfo2 = await idinfo.json();
        const { success, steamid } = idinfo2.response;
        if (success != 1) {
            const data = '';
            res.json(data);
        } else {
            const curl = `http://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam_API_Key}&steamid=${steamid}`;
            const cinfo = await fetch(curl);
            const cinfo2 = await cinfo.json();
            const { player_xp, player_level, player_xp_needed_to_level_up } = cinfo2.response;
            const burl = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${Steam_API_Key}&steamids=${steamid}`;
            const binfo = await fetch(burl);
            const binfo2 = await binfo.json();
            const { personastate, personaname, profileurl, avatarfull, timecreated, loccountrycode } = binfo2.response.players[0];
            const aurl = `https://restcountries.eu/rest/v2/alpha/${loccountrycode}`
            const ainfo = await fetch(aurl);
            const ainfo2 = await ainfo.json();
            const { flag, name } = ainfo2;

            const data = { player_xp, player_level, player_xp_needed_to_level_up, personastate, personaname, profileurl, avatarfull, timecreated, flag, name, };
            res.json(data);
        }
    }



});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});
app.use(express.static('client/build'));
app.use(cors());

const Steam_API_Key = process.env.API_KEY; // create .env file with Steam_API_Key=XXXXXXXXX in it

if (!Steam_API_Key) {
    throw new Error('You need a steam api key to get a response')
}

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/id", urlencodedParser, async(req, res) => {


    try {
        const id = req.query.user; // user input
        if (!id) throw new Error("The username field is empty");

        if ((id * 1) == id) {
            const steamid = id;
            const BadgesURL = `http://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam_API_Key}&steamid=${steamid}`;
            const { response: Badges } = await (await fetch(BadgesURL)).json();
            if (!Badges) throw new Error("This user info are privet or inexistant , please try again later");

            const { player_xp, player_level, player_xp_needed_to_level_up } = Badges;

            const PlayerSummariesURL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${Steam_API_Key}&steamids=${steamid}`;
            const { response: PlayerSummaries } = await (
                await fetch(PlayerSummariesURL)
            ).json();

            const {
                personastate,
                personaname,
                profileurl,
                avatarfull,
                timecreated,
                loccountrycode,
            } = PlayerSummaries.players[0];


            const flag = await (await fetch(`https://www.countryflags.io/${loccountrycode}/flat/64.png`)).url;
            const name = loccountrycode

            const data = {
                steamid,
                player_xp,
                player_level,
                player_xp_needed_to_level_up,
                personastate,
                personaname,
                profileurl,
                avatarfull,
                timecreated,
                loccountrycode,
                flag,
                name,
            };

            console.log(data)
            res.json(data);
        } else {
            const SteamIdUrl = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${Steam_API_Key}&vanityurl=${id}`;
            const { response: { success, steamid }, } = await (await fetch(SteamIdUrl)).json();
            if (success != 1) throw new Error("This user can't be found , please verify your input again");


            const BadgesURL = `http://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam_API_Key}&steamid=${steamid}`;
            const { response: Badges } = await (await fetch(BadgesURL)).json();
            if (!Badges) throw new Error("This user info are privet or inexistant , please try again later");

            const { player_xp, player_level, player_xp_needed_to_level_up } = Badges;

            const PlayerSummariesURL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${Steam_API_Key}&steamids=${steamid}`;
            const { response: PlayerSummaries } = await (
                await fetch(PlayerSummariesURL)
            ).json();

            const {
                personastate,
                personaname,
                profileurl,
                avatarfull,
                timecreated,
                loccountrycode,
            } = PlayerSummaries.players[0];


            const flag = await (await fetch(`https://www.countryflags.io/${loccountrycode}/flat/64.png`)).url;
            const name = loccountrycode

            const data = {
                steamid,
                player_xp,
                player_level,
                player_xp_needed_to_level_up,
                personastate,
                personaname,
                profileurl,
                avatarfull,
                timecreated,
                loccountrycode,
                flag,
                name,
            };

            console.log(data)
            res.json(data);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

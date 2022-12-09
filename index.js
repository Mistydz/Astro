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

const Steam_API_Key = process.env.API_KEY; // create .env file with API_Key=XXXXXXXXX in it

if (!Steam_API_Key) {
    throw new Error('You need a steam api key to get a response')
}

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// health check route
app.get('/_health', (req, res) => {
    res.status(200).send('Server is up')
  })

// Main Api route
app.get("/id", urlencodedParser, async(req, res) => {

    async function getId() {
    const id = req.query.user;
    if((id * 1) == id) {
        var steamid = id;
        var steam_id=steamid
    }else{
        const SteamIdUrl = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${Steam_API_Key}&vanityurl=${id}`;
        const { response: { success, steamid }, } = await (await fetch(SteamIdUrl)).json();
        if (!success) throw new Error("This user can't be found , please verify your input again");
        var steam_id=steamid
    }
    if (!steam_id) {
        res.json("user doesn't exist please try again");
    }else{
        return gotID(steam_id)
    }  
    }
    getId()

    async function gotID(steam_id){
        const BadgesURL = `http://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam_API_Key}&steamid=${steam_id}`;
            const { response: Badges } = await (await fetch(BadgesURL)).json();
            if (!Badges) throw new Error("This user info are privet or inexistant , please try again later");

            const { player_xp, player_level, player_xp_needed_to_level_up } = Badges;

            const VacURL = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${Steam_API_Key}&steamids=${steam_id}`;
            const { players: VacStatus } = await (await fetch(VacURL)).json();

                const {
                    CommunityBanned,
                    VACBanned,
                    NumberOfVACBans,
                    DaysSinceLastBan,
                    NumberOfGameBans,
                    EconomyBan,
                } = VacStatus[0];

            if (!VacStatus) throw new Error("This user info are privet or inexistant , please try again later");



            const PlayerSummariesURL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${Steam_API_Key}&steamids=${steam_id}`;
            const { response: PlayerSummaries } = await (await fetch(PlayerSummariesURL)).json();
            if (!PlayerSummaries) throw new Error("This user info are privet or inexistant , please try again later");

            const {
                personastate,
                personaname,
                profileurl,
                avatarfull,
                timecreated,
                loccountrycode,
            } = PlayerSummaries.players[0];



            const data = {
                steam_id,
                player_xp,
                player_level,
                player_xp_needed_to_level_up,
                personastate,
                personaname,
                profileurl,
                avatarfull,
                timecreated,
                loccountrycode,
                CommunityBanned,
                VACBanned,
                NumberOfVACBans,
                DaysSinceLastBan,
                NumberOfGameBans,
                EconomyBan,
            };
            console.log(data);
            res.json(data);
    }




 
});

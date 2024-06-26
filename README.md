# Steam Astro
:video_game: Steam is a cloud-based gaming library. One of its most popular features is the ability for users to customize there profiles . Every Steam user has a level, with higher levels granting bonuses like extra slots on your friends list and higher drop rates for booster card packs. This web application can help the user to know how much is the cost/badges to get to his wanted level.

### *Features*
- Takes user input (steam username - wanted level) and calculate the cost of rank up
- Calls the steam api from the backend to avoid the CROS error

Steam max level cap is 5099 now so anything above that would not get calculated .


### *Demo*

* Source Control: GitHub
* Hosting: This application is deployed on Vercel. Please check it out [Here](https://astro-front-ruby.vercel.app/)

If you want to clone the project make sure to change the Steam_API_Key on the index.js and i recommend using dotenv before deploying your project so you dont share your api key publicly.
if you counter a problem when deploying its due to typescripts errors , i had to change some files to jsx for it to work , i m not used to wrok with TS , should work fine on localhost

![demo](https://github.com/Mistydz/SteamAstro/blob/0ca089d9eea4b9a8e7484e350f9fa3a5840df8c7/public/12.PNG)



### *Technologies & Tools*
##### *Front End*
> NextJs
##### *Back End*
>Node/Express
##### *API's Used*
>Steam API [Documentation](https://partner.steamgames.com/doc/webapi/IPlayerService)

### *Releases*
Problem to fix : website is not runing perfectly on mozilla firefox (FIXED) 

#### Version 2 (in progress)
- using NextJs for a better performance
- UI rework
- Deployment on Vercel


#### Version 1.2 
- VacCheck
    - will add steam accounts vac/game/trade ban status 
     <br/>https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key={API_Key}&steamids={id64}
- Full rework


#### Version 1.1

- Features
  - Added user country and flag (removed)
- Fixes
  - Max allowed wanted level as 5099
  - if level wanted is inferior to current level then replace wanted level with (current level + 1)

#### Version 1.0

- Features
  - Steam user data from the steam api (Name,Level,XP)
  - Calcuate the difference on xp betwen current and wanted xp
  - Deployment on Heroku

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iJcHBI6b#2Ms33pOunT8Mj2L7-WOhNBUNQz9xr4ksoGK26Bu5HqA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/DANUWA-MD/DANUWA-MD/blob/main/images/DANUWA-MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 FATIMA-MD Is Alive Now😍*",
BOT_OWNER: '94759138140',  // Replace with the owner's phone number



};

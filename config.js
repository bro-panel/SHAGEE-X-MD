const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DM02BDjR#LiMhRAJADHyp1Q7Y6OAEYdNZd6uyUyFLn8afou3sQYw",
MONGODB: process.env.MONGODB || "mongodb+srv://user:321465@cluster0.7jcofhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", //enter mongo db url
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iuwjg1.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now"
};

// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

// Clean code - variables for strings
const arr = ["./token.json", "ready", "message", "!hello", "!help", "reconnecting"];

// Add a safer way to store the token (password)
const {
    token
} = require(arr[0]);

// Display a message when the bot comes online
client.on(arr[1], () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Reconnecting event
client.on(arr[5], () => {
    console.log(`This bot is trying to reconnect: ${client.user.tag}!`);
});

// Check for new messages
client.on(arr[2], msg => {
    // Failsafe
    const msgContent = msg.content.toLowerCase();
    
    // Send back a reply when the specific command has been written by a user.
    if (msgContent === arr[3]){
        msg.reply("Hello ,I am Plum Bot");
    }

    // !help command
    else if (msgContent === arr[4]){
        msg.reply("There are 2 commands: !hello plum bot here!help");
    }
});

// Log in the bot using your token (password)
client.login(token);

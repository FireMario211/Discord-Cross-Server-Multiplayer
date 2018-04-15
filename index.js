/*

    CROSS SERVER MULTIPLAYER
            V1.0.0
        FireMario211


License: MIT
*/
const {
    Client,
    RichEmbed
} = require('discord.js'); // Discord.JS Module
const bot = new Client() // Client Constructor
const settings = require('./settings.json')
const util = require('util'); // Util
const fs = require('fs') // Node Filesystem
bot.login(settings.token) // Login Bot
bot.on('ready', () => {
    console.log("[Bot]> Bot is READY")
})

bot.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === 'dm') return;
    
})

/*
    IGNORE BELOW \/\/
*/
module.exports.loginDecrypt = function (token, isEnable) {
    if (isEnable === undefined) return;
    bot.login(token);
}
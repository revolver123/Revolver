const Discord = require('discord.js')
const {
    prefix,
    token
} = require('./config.json');
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.tag} has started shooting!`)
    // Set the client user's status
    client.user.setStatus('idle')
        .then(console.log)
        .catch(console.error);
})



client.login(token)
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js') //import discord.js in aplication

const dotenv = require('dotenv')
dotenv.config()
const {TOKEN,CLIENT_ID,GUILD_ID} = process.env


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, readyClient => {
	console.log(`Pronto! Login realizado como ${readyClient.user.tag}`)
})

client.login(TOKEN)
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require("./data.json");
const prefix = "!";

const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();

const activities_list = ["Lux","Idoly Pride","les plumes","TrySail"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
		setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
		}, 10000);
	client.channels.cache.get('821287593643212832').send('Comeback!')
});

client.on('message', async message => {
	if (message.author.bot) return;
	currency.add(message.author.id, 1);

	if (!message.content.startsWith(prefix)) return;
	const input = message.content.slice(prefix.length).trim();
	if (!input.length) return;
	const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);

	if (command === 'balance') {
		// [gamma]
	} else if (command === 'inventory') {
		// [delta]
	} else if (command === 'transfer') {
		// [epsilon]
	} else if (command === 'buy') {
		// [zeta]
	} else if (command === 'shop') {
		// [theta]
	} else if (command === 'leaderboard') {
		// [lambda]
	}

});

client.login(process.env.BOT_TOKEN);
//${message.author.username} MENTION BẢN THÂN
//if(message.author.id !== config.ownerID) return; BẢO MẬT LỆNH

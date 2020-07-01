const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require("./data.json");
const prefix = "!";
const activities_list = ["with Rakkuen","with Albedox","with Claris","with Ngoc"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
		setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
		}, 10000);
});

client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	//if(message.author.id !== config.ownerID) return; Dùng để bảo mật lệnh
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'avatar') {
	const embed = new MessageEmbed()
	.setColor('#000000')
	.setImage(message.author.displayAvatarURL())
	message.channel.send(embed);
	} 
	if (command === 'ping') {
	message.channel.send(`Hello ${message.author.username}`);
	}
	if (message.mentions.<@703960869071093840>) {
	message.channel.send('Alo');
	}
});

client.login(process.env.BOT_TOKEN);

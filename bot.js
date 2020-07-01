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
	if (command === "asl") {
	let age = args[0]; // Remember arrays are 0-based!.
	let sex = args[1];
	let location = args[2];
	message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
	}
});

client.login(process.env.BOT_TOKEN);

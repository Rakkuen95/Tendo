const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const data = require('./data.json');
const prefix = "+";

const activities_list = ['+help','+ping']; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
	const embed = new MessageEmbed()
	.setColor('#81ff73')
	.setDescription('<:OtachanOmoshiroi:825562968967479306> **`|  ちょっとまってください  !`**')
	client.channels.cache.get('827615692685049916').send(embed)
});

client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "profile") {
  	const name = args[0];
		if(args[0].toLowerCase() === "lux"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription('**=======================================**')
	.addField('💀 NAME', data.name0, true)
	.addField('🧠 LEVEL', data.level0, true)
	.addField('⚡️ SHINX', data.shinx0, true)
	.addField('🔋 TOTAL', data.total0, true)
	.addField('🔋 CONSUME', data.use0, true)
	.addField('🔋 HAVE', data.coin0, true)
	.addField('=======================================','Link')
	.setImage('https://i.imgur.com/TkaLDku.png)
	await message.channel.send(embed);
	await message.channel.send(data.history0);
	} 
	}
	

});
client.login(process.env.BOT_TOKEN);

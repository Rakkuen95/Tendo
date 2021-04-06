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

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "profile") {
  	const name = args[0];
		if(args[0].toLowerCase() === "lux"){
	message.channel.send("> Profile của Lux");
	const embed = new MessageEmbed()
	.setImage('https://media.discordapp.net/attachments/807223949720682516/828820046037123102/expeditionBanner.gif')
	message.channel.send(embed);
	const embed = new MessageEmbed()
        .setColor('#fcfcfc')
        .setDescription('Tổng Cộng : ` 99 ` Kẹo\nSử Dụng : ` 99 ` Kẹo\nCòn Lại : ` 0 ` Kẹo')
	message.channel.send(embed);
		}
	}
	
	

});
client.login(process.env.BOT_TOKEN);

const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const data = require('./data.json');
const prefix = "^";


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
		const attachment = new MessageAttachment('https://media.discordapp.net/attachments/807223949720682516/829178333300260924/Vk77q8c.png');
			await message.channel.send(attachment);
			await message.channel.send('> **Lux Profile • [ 696175356109127692 ]**\n----------------------------------------------------\n> Tổng Điểm : 100 [ ||1000 - 900|| ]');
		}
	}

    	if (message.content.toLowerCase().startsWith(prefix + 'box')) {
	const target = message.content.replace(prefix + 'box','');
	const prize = data.reward[Math.floor(Math.random() * data.reward.length)];
		message.channel.send(prize);
	}

});
client.login(process.env.BOT_TOKEN);

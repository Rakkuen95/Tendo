const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const data = require('./data.json');
const prefix = "+";


const activities_list = ['Lux','Beta','Kude','Duc','+']; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
});

client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
	message.channel.send('pong');
	}
	
	if (command === "help") {
	message.channel.send('Please, Lux-sama is coding my kimochi!');
	}

	if (command === "+") {
	message.channel.send('Vợ sẽ gọi chồng trong 2 phút nữa nha!');
	message.delete(5000)
	setTimeout(function(){message.reply('Tới giờ claim rồi đó chồng ơi!')}, 120*1000);
	}

});
client.login(process.env.BOT_TOKEN);

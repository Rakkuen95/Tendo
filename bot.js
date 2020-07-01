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
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'avatar') {
	const embed = new MessageEmbed()
	.setColor('#000000')
	.setImage(message.author.displayAvatarURL())
	message.channel.send(embed);
	} 
	if (command === 'nice') {
	message.react('👍').then(() => message.react('👎'));

	const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
	};

	message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
	const reaction = collected.first();

	if (reaction.emoji.name === '👍') {
	message.reply('you reacted with a thumbs up.');
	} else {
	message.reply('you reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
	}
});

client.login(process.env.BOT_TOKEN);
//${message.author.username} MENTION BẢN THÂN
//if(message.author.id !== config.ownerID) return; BẢO MẬT LỆNH

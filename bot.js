const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require("./data.json");
const prefix = "!";

const activities_list = ["Lux","Idoly Pride","les plumes","TrySail"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
	client.channels.cache.get('821287593643212832').send('Comeback!')
});
client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (message.content.toUpperCase().startsWith(prefix + 'SAY')) {
        message.delete();
        message.channel.send(message.content.replace(prefix + 'say', '') + 'abc')
    	}




	if (command === 'ping') {
	message.delete({ timeout: 1000 })
	message.channel.send("pong");
	}
	if (command === 'avatar') {
	const embed = new MessageEmbed()
	.setColor('#000000')
	.setImage(message.author.displayAvatarURL())
	message.channel.send(embed);
	} 

	if (command === 'box1') {
	message.delete({ timeout: 1000 })
	const rating = Math.floor(Math.random() * 100) + 1;
		if ((rating > 0) && (rating < 74)){
		const point1 = Math.floor(Math.random() * 6) + 5;
		const embed = new MessageEmbed()
		.setColor('#FEFEFE')
		.setTitle('Tier 1')
		.addField(`**${message.author.username}** đã nhận được ${point1} điểm!`, 'Bạn đã mở 1 Event Box', true)
		.setImage('https://i.imgur.com/xplyCxW.png')
		message.channel.send(embed);
		}
		if ((rating >= 74) && (rating < 89)){
		const point2 = Math.floor(Math.random() * 11) + 10;
		const embed = new MessageEmbed()
		.setColor('#7aff8d')
		.setTitle('Tier 2')
		.addField(`**${message.author.username}** đã nhận được ${point2} điểm!`, 'Bạn đã mở 1 Event Box', true)
		.setImage('https://i.imgur.com/8zNZHro.png')
		message.channel.send(embed);
		}
		if ((rating >= 89) && (rating < 96)){
		const point3 = Math.floor(Math.random() * 21) + 20;
		const embed = new MessageEmbed()
		.setColor('#58a0e3')
		.setTitle('Tier 3')
		.addField(`**${message.author.username}** đã nhận được ${point3} điểm!`, 'Bạn đã mở 1 Event Box', true)
		.setImage('https://i.imgur.com/rs0tWV4.png')
		message.channel.send(embed);
		}
		if ((rating >= 96) && (rating < 99)){
		const point4 = Math.floor(Math.random() * 41) + 40;
		const embed = new MessageEmbed()
		.setColor('#ad58e3')
		.setTitle('Tier 4')
		.addField(`**${message.author.username}** đã nhận được ${point4} điểm!`, 'Bạn đã mở 1 Event Box', true)
		.setImage('https://i.imgur.com/hGHuaWL.png')
		message.channel.send(embed);
		}
		if ((rating >= 99) && (rating <= 100)){
		const point5 = Math.floor(Math.random() * 81) + 80;
		const embed = new MessageEmbed()
		.setColor('#f8f105')
		.setTitle('Tier 5')
		.addField(`**${message.author.username}** đã nhận được ${point5} điểm!`, 'Bạn đã mở 1 Event Box', true)
		.setImage('https://i.imgur.com/LZaXY4O.png')
		message.channel.send(embed);
		}
	}
	if (command === 'exam') {
	const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
	message.channel.send(exampleEmbed);
	}

	if (command === 'hello') {
	message.channel.send('my emote')
	.then((msg)=> {setTimeout(function(){msg.edit('my others emotes');}, 3000)}); 
	}


});
client.login(process.env.BOT_TOKEN);

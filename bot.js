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

	if (command === 'avatar') {
	const embed = new MessageEmbed()
	.setColor('#000000')
	.setImage(message.author.displayAvatarURL())
	message.channel.send(embed);
	} 
	if (command === 'kimochi') {
	const messages = [
		`Tendo đang tỏ ra khinh bỉ với **${message.author.username}** .!`,
		`Tendo không quan tâm tới với **${message.author.username}** .!`,
		`Tendo đang tỏ ra thích thú với **${message.author.username}** .!`,
		`Tendo đang tỏ ra đáng yêu với **${message.author.username}** .!`,
		]
	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	message.channel.send(randomMessage);
	}
	if (command === 'tendo') {
	const attachment = new MessageAttachment('https://i.imgur.com/CdmJDTJ.png');
		message.channel.send(attachment);
	} 
	if (command === 'rate') {
	const rating = Math.floor(Math.random() * 100) + 1;
	message.channel.send(`Tendo đánh giá **${message.author.username}** đạt ${rating}/100 điểm!`);
	}

	if (command === 'chest') {
	const rating = Math.floor(Math.random() * 10) + 1;
		if ((rating > 0) && (rating < 3)){
		const embed = new MessageEmbed()
		.setColor('#ffffff')
		.setTitle('Tier 1')
		.setDescription('Chúc mừng bạn đã trúng 0 Coins')

		message.channel.send(embed);
		}
		if ((rating >= 3) && (rating < 6)){
		const embed = new MessageEmbed()
		.setColor('#96ff00')
		.setTitle('Tier 2')
		.setDescription('Chúc mừng bạn đã trúng 10 Coins')

		message.channel.send(embed);
		}
		if ((rating >= 6) && (rating < 9)){
		const embed = new MessageEmbed()
		.setColor('#00d2ff')
		.setTitle('Tier 3')
		.setDescription('Chúc mừng bạn đã trúng 20 Coins')

		message.channel.send(embed);
		}
		if ((rating >= 9) && (rating <= 10)){
		const embed = new MessageEmbed()
		.setColor('#b000ff')
		.setTitle('Tier 4')
		.setDescription('Chúc mừng bạn đã trúng 50 Coins')

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
});
//
client.login(process.env.BOT_TOKEN);
//${message.author.username} MENTION BẢN THÂN
//if(message.author.id !== config.ownerID) return; BẢO MẬT LỆNH

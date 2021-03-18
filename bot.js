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
	if (command === 'hello') {
	const messages = [
		`Nếu như ngày ${message.author.username} bước đến\nThì ${message.author.username} đã yêu thương em.`,
		`Tại sao mày mình biết ${message.author.username} là gay ?\nVì Tendo là gay.`,
		`Thế giới này là của Tendo và\nTendo có quyền đi với ${message.author.username}.`,
		`Tendo hello mấy cưng`,
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
		.setColor('#FEFEFE')
		.setTitle('Tier 1')
		.setURL('https://google.vn/')
		.setDescription(`Chúc mừng **${message.author.username}** đã trúng 0 Coins`)
		.setImage('https://i.pinimg.com/originals/17/aa/53/17aa5373d7639e1baf8a6ef8f85e9a8d.gif')
		message.channel.send(embed);
		}
		if ((rating >= 3) && (rating < 6)){
		const embed = new MessageEmbed()
		.setColor('#96ff00')
		.setTitle('Tier 2')
		.setURL('https://google.vn/')
		.setDescription(`Chúc mừng **${message.author.username}** đã trúng 1 Coins`)
		.setImage('https://i.pinimg.com/originals/90/b7/1e/90b71e6909cab410620383865e35f23e.gif')
		message.channel.send(embed);
		}
		if ((rating >= 6) && (rating < 9)){
		const embed = new MessageEmbed()
		.setColor('#00d2ff')
		.setTitle('Tier 3')
		.setURL('https://google.vn/')
		.setDescription(`Chúc mừng **${message.author.username}** đã trúng 2 Coins`)
		.setImage('https://data.whicdn.com/images/353236267/original.gif')
		message.channel.send(embed);
		}
		if ((rating >= 9) && (rating <= 10)){
		const embed = new MessageEmbed()
		.setColor('#b000ff')
		.setTitle('Tier 4')
		.setURL('https://google.vn/')
		.setDescription(`Chúc mừng **${message.author.username}** đã trúng 3 Coins`)
		.setImage('https://files.gamebanana.com/img/ico/sprays/5d7e23934727f.gif')
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

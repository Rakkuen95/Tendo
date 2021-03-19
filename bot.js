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
	if (command === 'hello') {
	const messages = [
		`Nếu như ngày ${message.author.username} bước đến\nThì ${message.author.username} đã yêu thương em.`,
		`Tại sao mày mình biết ${message.author.username} là gay ?\nVì Tendo là gay.`,
		`Thế giới này là của Tendo và\nTendo có quyền đi với ${message.author.username}.`,
		`Thật không thể tin được\nThật không thể tin nổi`,
		`Đẹp trai thì mới có nhiều đứa yêu\nXấu trai thì chó nó yêu.`,
		`Cái đó không quan trọng\nQuan trọng là ${message.author.username} là người đàn ông cuối cùng của Tendo.`,
		`${message.author.username} là ai\n? Cháu không biết cô , cô đi ra đi.`,
		`Tìm một nơi tình yêu đưa lối\nMuộn phiền con tim ${message.author.username} bối rối.`,
		`Á á Á á Á á Á á`,
		`Chị ${message.author.username} im đi !!!`,
		`Aba sạch tinh tươm.`,
		`Thanh xuân như một ly trà\nĂn xong miếng bánh hết bà thanh xuân.`,
		`Cái loại chó ${message.author.username} mà suốt ngày đòi ăn pate.`,
		`Sơ quá , sợ quá\nPhải ban ${message.author.username} thôi.`,
		`Xin chào tất cả các cháu quay trở lại kênh Bà ${message.author.username} Vlog.`,
		`Tendo năm nay 70 tuổi mà Tendo chưa gặp trường hợp nào như thế này cả.`,
		`Ờ mây ding , gút chóp em.`,
		`Mèo méo meo mèo meo.`,
		`Chào ${message.author.username}\nTendo đừng đây từ chiều.`,
		`Không làm mà đòi có ăn thì ăn đầu buồi ăn cức\nNói thế cho nó nhanh`,
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
	message.delete({ timeout: 1000 })
	const rating = Math.floor(Math.random() * 100) + 1;
		if ((rating > 0) && (rating < 50)){
		const point1 = Math.floor(Math.random() * 10) + 1;
		const embed = new MessageEmbed()
		.setColor('#FEFEFE')
		.setTitle('Tier 1')
		.addField(`**${message.author.username}** đã nhận được ${point1} điểm!`, 'Bạn đã mở 1 Loot Box', true)
		.setImage('https://i.imgur.com/NfNsthO.png')
		message.channel.send(embed);
		}
		if ((rating >= 50) && (rating < 75)){
		const point2 = Math.floor(Math.random() * 15) + 11;
		const embed = new MessageEmbed()
		.setColor('#7aff8d')
		.setTitle('Tier 2')
		.setDescription(`**${message.author.username}** đã nhận được ${point2} điểm!`)
		.setImage('https://i.imgur.com/p1BQvLe.png')
		message.channel.send(embed);
		}
		if ((rating >= 75) && (rating < 90)){
		const point3 = Math.floor(Math.random() * 25) + 26;
		const embed = new MessageEmbed()
		.setColor('#58a0e3')
		.setTitle('Tier 3')
		.setDescription(`**${message.author.username}** đã nhận được ${point3} điểm!`)
		.setImage('https://i.imgur.com/zhOnWBI.png')
		message.channel.send(embed);
		}
		if ((rating >= 90) && (rating < 98)){
		const point4 = Math.floor(Math.random() * 50) + 51;
		const embed = new MessageEmbed()
		.setColor('#ad58e3')
		.setTitle('Tier 4')
		.setDescription(`**${message.author.username}** đã nhận được ${point4} điểm!`)
		.setImage('https://i.imgur.com/OHlPQe4.png')
		message.channel.send(embed);
		}
		if ((rating >= 98) && (rating <= 100)){
		const point5 = Math.floor(Math.random() * 100) + 101;
		const embed = new MessageEmbed()
		.setColor('#f8f105')
		.setTitle('Tier 5')
		.setDescription(`**${message.author.username}** đã nhận được ${point5} điểm!`)
		.setImage('https://i.imgur.com/LiVnxPJ.png')
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

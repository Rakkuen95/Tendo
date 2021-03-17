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
		`Anh **${message.author.username}** ơi Tendo sướng quá!`,
		`Anh **${message.author.username}** ơi Tendo ra rồi!`,
		`Anh **${message.author.username}** ơi Tendo 2 vạch nà!`,
		`Anh **${message.author.username}** rút ra đi mòa!`,
		`Anh **${message.author.username}** bơi vào đây nè!`,
		`Anh **${message.author.username}** nhớ đeo bao vào nha!`
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
		if (rating >= 0 || rating < 20) {
		message.channel.send(`Tendo đang tỏ ra khinh bỉ ${message.author.username}`);
		}
		if (rating >= 20 || rating < 40) {
		message.channel.send(`Tendo không quan tâm ${message.author.username}`);	
		}
		if (rating >= 40 || rating < 60) {
		message.channel.send(`Tendo đang tỏ ra thích thú ${message.author.username}`);	
		}
		if (rating >= 60 || rating < 80) {
		message.channel.send(`Tendo muốn đi chơi với ${message.author.username}`);	
		}
		if (rating >= 80 || rating < 100) {
		message.channel.send(`Tendo đang tỏ ra khinh bỉ ${message.author.username}`);	
		}
	}

});

client.login(process.env.BOT_TOKEN);
//${message.author.username} MENTION BẢN THÂN
//if(message.author.id !== config.ownerID) return; BẢO MẬT LỆNH

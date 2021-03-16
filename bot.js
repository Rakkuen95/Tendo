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
	client.channels.cache.get('707501654756425731').send('Comeback!')
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
	if (command === 'discord') {
	const attachment = new MessageAttachment('https://thumbs.gfycat.com/AmbitiousInfantileIndochinesetiger-small.gif');
	message.channel.send(attachment);
	} 
	if (command === 'ohaiyo') {
	const messages = ["kimochi", "itai", "chotomate", "konichiwa"]
	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	console.log(randomMessage)
	} 
});

client.login(process.env.BOT_TOKEN);
//${message.author.username} MENTION BẢN THÂN
//if(message.author.id !== config.ownerID) return; BẢO MẬT LỆNH

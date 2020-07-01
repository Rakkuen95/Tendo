const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const prefix = "!";
const activities_list = ["with Rakkuen","with Albedox","with Claris","with Ngoc"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
		setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
		}, 10000);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'avatar') {
    const embed = new MessageEmbed()
	.setColor('#000000')
	.setDescription('Đây là Avatar của bạn nè')
	.setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}

});
client.login(process.env.BOT_TOKEN);

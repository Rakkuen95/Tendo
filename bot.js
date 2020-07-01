const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const activities_list = ["with Rakkuen","with Albedox","with Claris","with Ngoc"]; 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

client.on("message", async message => {
	const prefix = "!";

	if (!message.author.bot) return;
	if (!message.guild) return;
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if (cmd === "ping") {
		const msg = await message.channel.send('Pinging...');
		msg.edit('Hello');
    }
});
client.login(process.env.BOT_TOKEN);

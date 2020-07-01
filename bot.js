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

	if (cmd === "say") {
		if (message.deletable) message.delete();

		if (args.length < 1 )
			return message.reply("Nothing to say?").then(m -> m.delete(5000));
		const roleColor = message.guild.me.displayHexColor ==== "#000000" ? "#ffffff" : message.guild.me.displayHexColor;
			
		if (args[0].toLowerCase() === "embed") {
			const embed = new RichEmbed()
				.setColor(roleColor)
				.setDescription(args.slice(1).join(" "))
				.setTimestamp()
			messge.channel.send(embed);
		} else {
			message.channel.send(args.join(" ");
		}
	}
});
client.login(process.env.BOT_TOKEN);

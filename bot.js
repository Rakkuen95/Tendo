const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const activities_list = ["with Rakkuen","with Spooky","with Longvip","with BlackPink"]; 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

client.on('message', message => {
    if (message.content.toLowerCase() === '?random') {
    	message.channel.send(Math.floor(Math.random() * 100) + 1);
  	}
    if (message.content.toLowerCase() === '?avatar') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
        }

});
client.login(process.env.BOT_TOKEN);

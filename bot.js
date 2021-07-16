const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();
const data = require('./data.json');
const prefix = "-";

const activities_list = ['Lux','Beta','Kude','Duc','UwU']; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);

});

client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "server") {
    	const Embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(3447003)
  .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
  .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
  .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
  .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
  .addField('Location', message.guild.region, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .addBlankField(true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send(Embed);
	}


	if (command === "hi") {
	message.channel.send(`Chào `+message.author.username+`-sama`);
	}

	if (command === "avatar") {
	await message.channel.send(`Avatar của `+message.author.username+` nè :`);
    	const Embed = new Discord.MessageEmbed()
        .setColor('#36393F')
        .setImage(message.author.displayAvatarURL());
    	await message.channel.send(Embed);
	}
	
	if (command === "-") {	
	try {
		const sentMessage = await message.channel.send(`Eris sẽ gọi `+message.author.username+` trong **2 phút** nữa nha!`);
		await sentMessage.delete({ timeout: 5000 });
		await setTimeout(function(){message.reply(`Tới giờ claim rồi đó `+message.author.username+` ơi!`)}, 120*1000);
		} catch (error) {
	}
	}

	if (command === "--") {
	try {
		const sentMessage = await message.channel.send(`Eris sẽ gọi `+message.author.username+` trong **3 phút** nữa nha!`);
		await sentMessage.delete({ timeout: 5000 });
		await setTimeout(function(){message.reply(`Tới giờ claim rồi đó `+message.author.username+` ơi!`)}, 180*1000);
		} catch (error) {
	}
	}

	if (command === "eris") {
	try {
            message.channel.send(`Loading.`)
                .then(msg => {
                    setTimeout(function() {
                        msg.edit(`Loading..`)
                    }, 2000);
                    setTimeout(function() {
                        msg.edit(`Loading...`)
                    }, 4000)
                })
		} catch (error) {
	}
	}

	if (command === "rd") {
	const messages = ["Mặt Úp", "Mặt Mở"]
	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	message.channel.send(randomMessage);
	}

});
client.login(process.env.BOT_TOKEN);

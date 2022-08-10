const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();
const prefix = "=";

const activities_list = ['Cheems Online','Shoob Online']; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
});


client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.split(' ').slice(1);
	const command = args.shift().toLowerCase();

	if (command === "rroles") {
	const role = message.mentions.roles.first();
	if (!role)
	return message
	.reply('You need mention a role')
	.then((m) => m.delete({ timeout: 1_000 }));
	const emoji = args[1];
	if (!emoji)
	return message
	.reply('You need use a valid emoji.')
	.then((m) => m.delete({ timeout: 1_000 }));
	const msg = await message.channel.messages.fetch(args[2] || message.id);
	if (!role)
	return message
	.reply('Message not found!')
	.then((m) => m.delete({ timeout: 1_000 }));
	reactionRoleManager.addRole({message: msg,role,emoji,});
	message.reply('Done').then((m) => m.delete({ timeout: 500 }));
	}

	if (command === "help") {
	await message.channel.send("Bot nhà làm không có help.");
	}

	if (command === "cheems") {
	const cheems = ["69","96"]
	const randomcheems = cheems[Math.floor(Math.random() * cheems.length)];
	await message.channel.send(randomcheems);
	}

	if (command === "avatar") {
	await message.channel.send(`Avatar của `+message.author.username+` nè :`);
    	const Embed = new Discord.MessageEmbed()
        .setColor('#36393F')
        .setImage(message.author.displayAvatarURL());
    	await message.channel.send(Embed);
	}
	
	if (command === "=") {	
	try {
		const sentMessage = await message.channel.send(`Cheems sẽ cắn `+message.author.username+` trong **2 phút** tiếp theo!`);
		await sentMessage.delete({ timeout: 5000 });
		await setTimeout(function(){message.reply(`Đau không con đỏ chí ???`)}, 120*1000);
		await sentMessage.delete({ timeout: 10000 });
		} catch (error) {
	}
	}

	if (command === "==") {
	try {
		const sentMessage = await message.channel.send(`Cheems sẽ cắn `+message.author.username+` trong **3 phút** tiếp theo!`);
		await sentMessage.delete({ timeout: 5000 });
		await setTimeout(function(){message.reply(`Đau không con đỏ chí ???`)}, 180*1000);
		await sentMessage.delete({ timeout: 10000 });
		} catch (error) {
	}
	}

	if (command === "dice") {
	const numbers = ["1","2","3","4","5","6"]
	const dice = numbers[Math.floor(Math.random() * numbers.length)];
	try {
            message.channel.send(`🎲 | Cheems đang lắc xúc xắc.`)
                .then(msg => {
                    setTimeout(function() {
                        msg.edit(`🎲 | Cheems đang lắc xúc xắc..`)
                    }, 1500);
                    setTimeout(function() {
                        msg.edit(`🎲 | Cheems đang lắc xúc xắc...`)
                    }, 3000)
                    setTimeout(function() {
                        msg.edit("🎲 | Viên xúc xắc là mặt số **` "+dice+" !`**")
                    }, 5000)
                })
		} catch (error) {
	}
	}

});

client.login(process.env.BOT_TOKEN);

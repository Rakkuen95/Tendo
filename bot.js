const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();
const data = require('./data.json');
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
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "help") {
	await message.channel.send("Bot nhà làm không có help.");
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
		} catch (error) {
	}
	}

	if (command === "==") {
	try {
		const sentMessage = await message.channel.send(`Cheems sẽ cắn `+message.author.username+` trong **3 phút** tiếp theo!`);
		await sentMessage.delete({ timeout: 5000 });
		await setTimeout(function(){message.reply(`Đau không con đỏ chí ???`)}, 180*1000);
		} catch (error) {
	}
	}

	if (command === "dice") {
	const numbers = ["1","2","3","4","5","6"]
	const dice = numbers[Math.floor(Math.random() * numbers.length)];
	try {
            message.channel.send(`🎲 | Đang lắc xúc xắc.`)
                .then(msg => {
                    setTimeout(function() {
                        msg.edit(`🎲 | Đang lắc xúc xắc..`)
                    }, 1500);
                    setTimeout(function() {
                        msg.edit(`🎲 | Đang lắc xúc xắc...`)
                    }, 3000)
                    setTimeout(function() {
                        msg.edit("🎲 | Viên xúc xắc tung mặt **` "+dice+" `**")
                    }, 5000)
                })
		} catch (error) {
	}
	}

});

client.login(process.env.BOT_TOKEN);

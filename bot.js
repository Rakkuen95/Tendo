const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const data = require('./data.json');
const prefix = "+";


const activities_list = ['+help','+ping']; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
	const embed = new MessageEmbed()
	.setColor('#81ff73')
	.setDescription('<:OtachanOmoshiroi:825562968967479306> **`|  ちょっとまってください  !`**')
	client.channels.cache.get('827615692685049916').send(embed)
});

client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "profile") {
  	const name = args[0];
		if(args[0].toLowerCase() === "lux"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription('**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**')
	.addField('💀 NAME', data.name0, true)
	.addField('🧠 LEVEL', data.level0, true)
	.addField('⚡️ SHINX', data.shinx0, true)
	.addField('🔋 TOTAL', data.total0, true)
	.addField('🔋 CONSUME', data.use0, true)
	.addField('🔋 HAVE', data.coin0, true)
	.addField('━━━━━━━━━━━━━━━━━━━━━━━━━━━━','[Bạn có thể xem danh sách các Rewards tại đây.](https://tinyurl.com/5anzuzed)')
	.setImage('https://i.imgur.com/TkaLDku.png')
	await message.channel.send(embed);
	await message.channel.send('> ||History : Nope .||');
	} 
	}

	if (command === "roll") {
	const rating = Math.floor(Math.random() * 1000) + 1;
	message.channel.send(rating);
		if ((rating > 0) && (rating <= 500)){
			message.channel.send('Tier 1');
		}
		if ((rating > 500) && (rating <= 800)){
			message.channel.send('Tier 2');
		}
		if ((rating > 800) && (rating <= 900)){
			message.channel.send('Tier 3');
		}
		if ((rating > 900) && (rating <= 990)){
			message.channel.send('Tier 4');
		}
		if ((rating > 990) && (rating <= 1000)){
			message.channel.send('Tier 5');
		}
	}

	if (command === "reward") {
const reward = ['A','B','C'];
const random = Math.floor(Math.random() * (reward.length - 1) + 1);
message.channel.send(reward[random]);
	}

});
client.login(process.env.BOT_TOKEN);

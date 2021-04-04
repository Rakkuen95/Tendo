const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const prefix = "+";
const data = require('./data.json');
const quiz = require('./quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
//
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

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "profile") {
  	const name = args[0];
		if(args[0] === "festiaaa"){
	message.channel.send('> **✦ Event Re:Sparkle**');
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name1, true)
	.addField('🧠 LEVEL', data.rank1, true)
	.addField('⚡️ SHINX', data.shinx1, true)
	.addField('🔋 TOTAL', data.total1, true)
	.addField('🔋 CONSUME', data.use1, true)
	.addField('🔋 HAVE', data.coin1, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history1);
	message.channel.send(embed);
		}
    	}

	if (command === "hello") {
    	const now = Date.now();
    	const cooldownAmount = 5 * 1000;
	const timestamps = new Discord.Collection();
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	const timeLeft = (expirationTime - now) / 1000;
   	if (timestamps.has(message.author.id)) {
        	if (now < expirationTime) {
            	return message.reply(`You have to wait ${timeLeft.toFixed(1)} seconds to use this command again!`)
        	}
    	}
		else if {
		return message.reply('Hi')
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}

});
client.login(process.env.BOT_TOKEN);

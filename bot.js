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
		if(args[0].toLowerCase() === "festiaaa"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name1, true)
	.addField('🧠 LEVEL', data.level1, true)
	.addField('⚡️ SHINX', data.shinx1, true)
	.addField('🔋 TOTAL', data.total1, true)
	.addField('🔋 CONSUME', data.use1, true)
	.addField('🔋 HAVE', data.coin1, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history1);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "haidudeptrai"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name2, true)
	.addField('🧠 LEVEL', data.level2, true)
	.addField('⚡️ SHINX', data.shinx2, true)
	.addField('🔋 TOTAL', data.total2, true)
	.addField('🔋 CONSUME', data.use2, true)
	.addField('🔋 HAVE', data.coin2, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history2);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "sabito12"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name3, true)
	.addField('🧠 LEVEL', data.level3, true)
	.addField('⚡️ SHINX', data.shinx3, true)
	.addField('🔋 TOTAL', data.total3, true)
	.addField('🔋 CONSUME', data.use3, true)
	.addField('🔋 HAVE', data.coin3, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history3);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "phucs"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name4, true)
	.addField('🧠 LEVEL', data.level4, true)
	.addField('⚡️ SHINX', data.shinx4, true)
	.addField('🔋 TOTAL', data.total4, true)
	.addField('🔋 CONSUME', data.use4, true)
	.addField('🔋 HAVE', data.coin4, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history4);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "shuto1"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name5, true)
	.addField('🧠 LEVEL', data.level5, true)
	.addField('⚡️ SHINX', data.shinx5, true)
	.addField('🔋 TOTAL', data.total5, true)
	.addField('🔋 CONSUME', data.use5, true)
	.addField('🔋 HAVE', data.coin5, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history5);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "sstupidname"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name6, true)
	.addField('🧠 LEVEL', data.level6, true)
	.addField('⚡️ SHINX', data.shinx6, true)
	.addField('🔋 TOTAL', data.total6, true)
	.addField('🔋 CONSUME', data.use6, true)
	.addField('🔋 HAVE', data.coin6, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history6);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "callmegrayz"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name7, true)
	.addField('🧠 LEVEL', data.level7, true)
	.addField('⚡️ SHINX', data.shinx7, true)
	.addField('🔋 TOTAL', data.total7, true)
	.addField('🔋 CONSUME', data.use7, true)
	.addField('🔋 HAVE', data.coin7, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history7);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "gosoranui"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name8, true)
	.addField('🧠 LEVEL', data.level8, true)
	.addField('⚡️ SHINX', data.shinx8, true)
	.addField('🔋 TOTAL', data.total8, true)
	.addField('🔋 CONSUME', data.use8, true)
	.addField('🔋 HAVE', data.coin8, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history8);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "thaoubi"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor('#fcfcfc')
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name9, true)
	.addField('🧠 LEVEL', data.level9, true)
	.addField('⚡️ SHINX', data.shinx9, true)
	.addField('🔋 TOTAL', data.total9, true)
	.addField('🔋 CONSUME', data.use9, true)
	.addField('🔋 HAVE', data.coin9, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history9);
	message.channel.send(embed);
	} 
		else if {
	message.channel.send(data.unc);
	}}

});
client.login(process.env.BOT_TOKEN);

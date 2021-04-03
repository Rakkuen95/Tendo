const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const prefix = "+";
const usersInTimeout = [];
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
	if (command === "ping") {
        var timeoutDelay = 10000;
        if(usersInTimeout.some(user => user.userID == message.author.id)){
          var userInTimeout = usersInTimeout.find(user => user.userID == message.author.id);
          var remainingTime = millisec(timeoutDelay - (new Date().getTime() - userInTimeout.timeoutStart)).format('hh:mm:ss');
          return message.reply(`Time left to use the command: **${remainingTime}**`);
        }
        message.channel.send('pong);
        usersInTimeout.push({userID: message.author.id, timeoutStart: new Date().getTime()});//add the user to timeout
        setTimeout(() => {//add a timer to remove him from the timeout
          usersInTimeout.splice(usersInTimeout.indexOf(message.author.id), 1);
        }, timeoutDelay);
    }

});
client.login(process.env.BOT_TOKEN);

const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const prefix = "^";
const data = require('./data.json');
const quiz = require('./quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

const activities_list = ["Lux","Tomozaki","Beta","Kude","Festiaaa"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
	client.channels.cache.get('821287593643212832').send('Comeback!')
});

client.on('message', message => {
  if (message.author.bot === 'To claim, use:')) {
    message.channel.send(`<@&826451810280538123>`); 
  }
});

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'quiz') {
	message.channel.send(item.question).then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
		message.channel.send(`${collected.first().author} got the correct answer!`);
		})
		.catch(collected => {message.channel.send('Looks like nobody got the answer this time.');
		});
	});
	}
	
    	let blacklisted = ['deptrai', 'traidep'];
    	let foundInText = false;
    	for (var i in blacklisted) {
      	if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    	}
    	if (foundInText) {
      	message.channel.send(`<@&826451810280538123>`); 
	}		
		
	if (command === 'quest1') {
	const embed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle(data.quest1)
	.setURL('https://google.vn/')
	.setDescription(data.desc1)
	.setThumbnail('https://yuzu-emu.org/images/game/boxart/pokemon-lets-go-pikachu.png')
	.addField(':third_place: Easy Mode', '||' + data.easy1 + '||',true)
	.addField(':second_place: Medium Mode', '||' + data.medium1 + '||',true)
	.addField(':first_place: Hard Mode', '||' + data.hard1 + '||',true)
	message.channel.send(embed);
	}

	if(command === "delete"){
	const amount = args[0];
  	message.delete();
	message.channel.bulkDelete(amount)
	.then(() => {message.channel.send(`Đã xóa ${amount} tin nhắn gần nhất.`)});
	}

	if(command === "say"){
  	let text = args.join(" ");
  	message.delete();
  	message.channel.send(text);
	}

	if (command === "react") {
	message.react('🇦')
	.then(() => message.react('🇧'))
	.then(() => message.react('🇨'))
	.catch(error => {});
	}

	if (command === "profile") {
	message.delete()
  	const name = args[0];
		if(args[0] === "lux"){
	const embed = new MessageEmbed()
	.setColor('#c2c2c2')
	.setTitle('Lux Profile')
	.setURL('https://www.google.com.vn/')
	.addField('Total', ':coin:**`999`**', true)
	.addField('Total', ':coin:**`999`**', true)
	.addField('Total', ':coin:**`999`**', true)
	message.channel.send(embed);
		}
    	}

	if (command === "add") {
	message.delete()
  	const name = args[0];
  	const money = args[1];
	const embed = new MessageEmbed()
	.setColor('#7aff8d')
	.setDescription(`:yen:  **${name}** đã nhận được **${money} Coins** !`)
	message.channel.send(embed);
    	}

	if (command === "use") {
	message.delete()
  	const name = args[0];
  	const money = args[1];
	const embed = new MessageEmbed()
	.setColor('#ff6666')
	.setDescription(`:yen:  **${name}** đã sử dụng **${money} Coins** !`)
	message.channel.send(embed);
    	}

	if (command === 'ping') {
	message.delete({ timeout: 1000 })
	message.channel.send("pong");
	}

	if (command === 'avatar') {
	const embed = new MessageEmbed()
	.setColor('#000000')
	.setImage(message.author.displayAvatarURL())
	message.channel.send(embed);
	} 
	
    	if (message.content.toLowerCase().startsWith(prefix + 'ebox')) {
	const target = message.content.replace(prefix + 'ebox','');
	const point1 = Math.floor(Math.random() * 6) + 5;
	const point2 = Math.floor(Math.random() * 11) + 10;
	const point3 = Math.floor(Math.random() * 21) + 20;
	const point4 = Math.floor(Math.random() * 41) + 40;
	const point5 = Math.floor(Math.random() * 81) + 80;
	const rating = Math.floor(Math.random() * 100) + 1;
	message.delete({ timeout: 1000 })
		if ((rating > 0) && (rating < 74)){
		const embed = new MessageEmbed()
		.setColor('#FEFEFE')
		.setTitle('Event Box : Tier 1')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point1} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/xplyCxW.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 74) && (rating < 89)){
		const embed = new MessageEmbed()
		.setColor('#7aff8d')
		.setTitle('Event Box : Tier 2')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point2} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/8zNZHro.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 89) && (rating < 96)){
		const embed = new MessageEmbed()
		.setColor('#58a0e3')
		.setTitle('Event Box : Tier 3')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point3} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/rs0tWV4.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 96) && (rating < 99)){
		const embed = new MessageEmbed()
		.setColor('#ad58e3')
		.setTitle('Event Box : Tier 4')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point4} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/hGHuaWL.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 99) && (rating <= 100)){
		const embed = new MessageEmbed()
		.setColor('#f8f105')
		.setTitle('Event Box : Tier 5')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point5} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/LZaXY4O.png')
		.setTimestamp()
		message.channel.send(embed);
		}
	}


    	if (message.content.toLowerCase().startsWith(prefix + 'pbox')) {
	const target = message.content.replace(prefix + 'pbox','');
	const point1 = Math.floor(Math.random() * 31) + 30;
	const point2 = Math.floor(Math.random() * 61) + 60;
	const point3 = Math.floor(Math.random() * 121) + 120;
	const point4 = Math.floor(Math.random() * 241) + 240;
	const point5 = Math.floor(Math.random() * 481) + 480;
	const rating = Math.floor(Math.random() * 100) + 1;
	message.delete({ timeout: 1000 })
		if ((rating > 0) && (rating < 74)){
		const embed = new MessageEmbed()
		.setColor('#FEFEFE')
		.setTitle('💎 Premium Box : Tier 1')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point1} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/xplyCxW.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 74) && (rating < 89)){
		const embed = new MessageEmbed()
		.setColor('#7aff8d')
		.setTitle('💎 Premium Box : Tier 2')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point2} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/8zNZHro.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 89) && (rating < 96)){
		const embed = new MessageEmbed()
		.setColor('#58a0e3')
		.setTitle('💎 Premium Box : Tier 3')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point3} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/rs0tWV4.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 96) && (rating < 99)){
		const embed = new MessageEmbed()
		.setColor('#ad58e3')
		.setTitle('💎 Premium Box : Tier 4')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point4} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/hGHuaWL.png')
		.setTimestamp()
		message.channel.send(embed);
		}
		if ((rating >= 99) && (rating <= 100)){
		const embed = new MessageEmbed()
		.setColor('#f8f105')
		.setTitle('💎 Premium Box : Tier 5')
		.setURL('https://pokemonrevolution.net/')
		.addField('**'+target+'**' + ` đã nhận được ${point5} Coins`,"[Bạn có thể xem Event Shop tại đây](https://tinyurl.com/5anzuzed)", true)
		.setImage('https://i.imgur.com/LZaXY4O.png')
		.setTimestamp()
		message.channel.send(embed);
		}
	}

	if (command === 'exam') {
	const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
	message.channel.send(embed);
	}

});
client.login(process.env.BOT_TOKEN);

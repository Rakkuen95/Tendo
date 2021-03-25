const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require("./data.json");
const prefix = "^";
 
const activities_list = ["Lux","Idoly Pride","les plumes","TrySail"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
	}, 10000);
	client.channels.cache.get('821287593643212832').send('Comeback!')
});

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    	if (message.content.toLowerCase().startsWith(prefix + 'say')) {
	message.delete()
	message.channel.send(message.content.replace(prefix + 'say', ''));
    	}

    	if (message.content.toLowerCase().startsWith(prefix + 'add')) {
	message.delete()
	const text = message.content.replace(prefix + 'add', '')
	const embed = new MessageEmbed()
	.setColor('#7aff8d')
	.setDescription(':yen:  '+text)
	message.channel.send(embed);
    	}

    	if (message.content.toLowerCase().startsWith(prefix + 'use')) {
	message.delete()
	const text = message.content.replace(prefix + 'use', '')
	const embed = new MessageEmbed()
	.setColor('#ff6666')
	.setDescription(':yen:  '+text)
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
	const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Discord Profile',message.guild.iconURL(),message.guild.iconURL())
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Discord Name',message.guild.name, true)
	.addField('Total Members',message.guild.memberCount, true)
	.addField('Date Created',message.guild.createdAt, true)
	.addField('Region Created',message.guild.region, true)
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
	message.channel.send(exampleEmbed);
	}


});
client.login(process.env.BOT_TOKEN);

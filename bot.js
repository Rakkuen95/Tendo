const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const prefix = "+";

var pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6", "Page 7", "Page 8", "Page 9"];
var page = 1;

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

	if (command === 'choose') {
	const abc = m => m.content.toLowerCase() === '2';
	message.channel.send("Choose 1 , 2 or 3").then(() => {
	message.channel.awaitMessages(abc, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
		message.channel.send(`${collected.first().author} got the correct answer!`);
		})
		.catch(collected => {message.channel.send('Looks like nobody got the answer this time.');
		});
	});
	}
	

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

	if (command === "embed") {
    	const embed = new MessageEmbed()
        .setColor('#fcfcfc')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1])
	.setImage(data.bg)
    	message.channel.send(embed).then(msg => {
        msg.react('⏪').then(r => {
            msg.react('⏩');
            //filters
            const isBackwards = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const isForwards = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
            const backwards = msg.createReactionCollector(isBackwards);
            const forwards = msg.createReactionCollector(isForwards);
            backwards.on("collect", r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
		embed.setImage(data.bg);
                msg.edit(embed)
            });
            forwards.on("collect", r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
		embed.setImage(data.bg);
                msg.edit(embed)
            });
        });
    });
}


	if (command === "profile") {
  	const name = args[0];
		if(args[0].toLowerCase() === "lux"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name0, true)
	.addField('🧠 LEVEL', data.level0, true)
	.addField('⚡️ SHINX', data.shinx0, true)
	.addField('🔋 TOTAL', data.total0, true)
	.addField('🔋 CONSUME', data.use0, true)
	.addField('🔋 HAVE', data.coin0, true)
	.addField(data.space,data.link)
	.setImage(data.bg1)
	.setFooter(data.history0);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "festiaaa"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
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
	.setColor(data.color)
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
	.setColor(data.color)
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
	.setColor(data.color)
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
	.setColor(data.color)
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
	.setColor(data.color)
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
	.setColor(data.color)
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
	.setColor(data.color)
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
	.setColor(data.color)
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
		else if(args[0].toLowerCase() === "sonnnnnnnnn"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name10, true)
	.addField('🧠 LEVEL', data.level10, true)
	.addField('⚡️ SHINX', data.shinx10, true)
	.addField('🔋 TOTAL', data.total10, true)
	.addField('🔋 CONSUME', data.use10, true)
	.addField('🔋 HAVE', data.coin10, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history10);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "kaorikousei"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name11, true)
	.addField('🧠 LEVEL', data.level11, true)
	.addField('⚡️ SHINX', data.shinx11, true)
	.addField('🔋 TOTAL', data.total11, true)
	.addField('🔋 CONSUME', data.use11, true)
	.addField('🔋 HAVE', data.coin11, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history11);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "manhhung2001"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name12, true)
	.addField('🧠 LEVEL', data.level12, true)
	.addField('⚡️ SHINX', data.shinx12, true)
	.addField('🔋 TOTAL', data.total12, true)
	.addField('🔋 CONSUME', data.use12, true)
	.addField('🔋 HAVE', data.coin12, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history12);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "tyaa"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name13, true)
	.addField('🧠 LEVEL', data.level13, true)
	.addField('⚡️ SHINX', data.shinx13, true)
	.addField('🔋 TOTAL', data.total13, true)
	.addField('🔋 CONSUME', data.use13, true)
	.addField('🔋 HAVE', data.coin13, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history13);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "glxdylan"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name14, true)
	.addField('🧠 LEVEL', data.level14, true)
	.addField('⚡️ SHINX', data.shinx14, true)
	.addField('🔋 TOTAL', data.total14, true)
	.addField('🔋 CONSUME', data.use14, true)
	.addField('🔋 HAVE', data.coin14, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history14);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "conngoantrogioi"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name15, true)
	.addField('🧠 LEVEL', data.level15, true)
	.addField('⚡️ SHINX', data.shinx15, true)
	.addField('🔋 TOTAL', data.total15, true)
	.addField('🔋 CONSUME', data.use15, true)
	.addField('🔋 HAVE', data.coin15, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history15);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "boombing3"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name16, true)
	.addField('🧠 LEVEL', data.level16, true)
	.addField('⚡️ SHINX', data.shinx16, true)
	.addField('🔋 TOTAL', data.total16, true)
	.addField('🔋 CONSUME', data.use16, true)
	.addField('🔋 HAVE', data.coin16, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history16);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "trantoan62"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name17, true)
	.addField('🧠 LEVEL', data.level17, true)
	.addField('⚡️ SHINX', data.shinx17, true)
	.addField('🔋 TOTAL', data.total17, true)
	.addField('🔋 CONSUME', data.use17, true)
	.addField('🔋 HAVE', data.coin17, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history17);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "loc018"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name18, true)
	.addField('🧠 LEVEL', data.level18, true)
	.addField('⚡️ SHINX', data.shinx18, true)
	.addField('🔋 TOTAL', data.total18, true)
	.addField('🔋 CONSUME', data.use18, true)
	.addField('🔋 HAVE', data.coin18, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history18);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "magichunterx1"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name19, true)
	.addField('🧠 LEVEL', data.level19, true)
	.addField('⚡️ SHINX', data.shinx19, true)
	.addField('🔋 TOTAL', data.total19, true)
	.addField('🔋 CONSUME', data.use19, true)
	.addField('🔋 HAVE', data.coin19, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history19);
	message.channel.send(embed);
	} 

		else if(args[0].toLowerCase() === "readbeasts"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name20, true)
	.addField('🧠 LEVEL', data.level20, true)
	.addField('⚡️ SHINX', data.shinx20, true)
	.addField('🔋 TOTAL', data.total20, true)
	.addField('🔋 CONSUME', data.use20, true)
	.addField('🔋 HAVE', data.coin20, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history20);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "musasi"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name21, true)
	.addField('🧠 LEVEL', data.level21, true)
	.addField('⚡️ SHINX', data.shinx21, true)
	.addField('🔋 TOTAL', data.total21, true)
	.addField('🔋 CONSUME', data.use21, true)
	.addField('🔋 HAVE', data.coin21, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history21);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "dream123456"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name22, true)
	.addField('🧠 LEVEL', data.level22, true)
	.addField('⚡️ SHINX', data.shinx22, true)
	.addField('🔋 TOTAL', data.total22, true)
	.addField('🔋 CONSUME', data.use22, true)
	.addField('🔋 HAVE', data.coin22, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history22);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "mzdmeliodas"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name23, true)
	.addField('🧠 LEVEL', data.level23, true)
	.addField('⚡️ SHINX', data.shinx23, true)
	.addField('🔋 TOTAL', data.total23, true)
	.addField('🔋 CONSUME', data.use23, true)
	.addField('🔋 HAVE', data.coin23, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history23);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "hoangluvbt"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name24, true)
	.addField('🧠 LEVEL', data.level24, true)
	.addField('⚡️ SHINX', data.shinx24, true)
	.addField('🔋 TOTAL', data.total24, true)
	.addField('🔋 CONSUME', data.use24, true)
	.addField('🔋 HAVE', data.coin24, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history24);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "sakubahp97"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name25, true)
	.addField('🧠 LEVEL', data.level25, true)
	.addField('⚡️ SHINX', data.shinx25, true)
	.addField('🔋 TOTAL', data.total25, true)
	.addField('🔋 CONSUME', data.use25, true)
	.addField('🔋 HAVE', data.coin25, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history25);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "kaitopvn"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name26, true)
	.addField('🧠 LEVEL', data.level26, true)
	.addField('⚡️ SHINX', data.shinx26, true)
	.addField('🔋 TOTAL', data.total26, true)
	.addField('🔋 CONSUME', data.use26, true)
	.addField('🔋 HAVE', data.coin26, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history26);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "mil"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name27, true)
	.addField('🧠 LEVEL', data.level27, true)
	.addField('⚡️ SHINX', data.shinx27, true)
	.addField('🔋 TOTAL', data.total27, true)
	.addField('🔋 CONSUME', data.use27, true)
	.addField('🔋 HAVE', data.coin27, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history27);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "yue"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name28, true)
	.addField('🧠 LEVEL', data.level28, true)
	.addField('⚡️ SHINX', data.shinx28, true)
	.addField('🔋 TOTAL', data.total28, true)
	.addField('🔋 CONSUME', data.use28, true)
	.addField('🔋 HAVE', data.coin28, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history28);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "ho4chanh"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name29, true)
	.addField('🧠 LEVEL', data.level29, true)
	.addField('⚡️ SHINX', data.shinx29, true)
	.addField('🔋 TOTAL', data.total29, true)
	.addField('🔋 CONSUME', data.use29, true)
	.addField('🔋 HAVE', data.coin29, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history29);
	message.channel.send(embed);
	} 

		else if(args[0].toLowerCase() === "katcmt4"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name30, true)
	.addField('🧠 LEVEL', data.level30, true)
	.addField('⚡️ SHINX', data.shinx30, true)
	.addField('🔋 TOTAL', data.total30, true)
	.addField('🔋 CONSUME', data.use30, true)
	.addField('🔋 HAVE', data.coin30, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history30);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "sasuke90"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name31, true)
	.addField('🧠 LEVEL', data.level31, true)
	.addField('⚡️ SHINX', data.shinx31, true)
	.addField('🔋 TOTAL', data.total31, true)
	.addField('🔋 CONSUME', data.use31, true)
	.addField('🔋 HAVE', data.coin31, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history31);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "misakiyoshikuni"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name32, true)
	.addField('🧠 LEVEL', data.level32, true)
	.addField('⚡️ SHINX', data.shinx32, true)
	.addField('🔋 TOTAL', data.total32, true)
	.addField('🔋 CONSUME', data.use32, true)
	.addField('🔋 HAVE', data.coin32, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history32);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "kayle2018"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name33, true)
	.addField('🧠 LEVEL', data.level33, true)
	.addField('⚡️ SHINX', data.shinx33, true)
	.addField('🔋 TOTAL', data.total33, true)
	.addField('🔋 CONSUME', data.use33, true)
	.addField('🔋 HAVE', data.coin33, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history33);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "ecsecs"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name34, true)
	.addField('🧠 LEVEL', data.level34, true)
	.addField('⚡️ SHINX', data.shinx34, true)
	.addField('🔋 TOTAL', data.total34, true)
	.addField('🔋 CONSUME', data.use34, true)
	.addField('🔋 HAVE', data.coin34, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history34);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "mcwick"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name35, true)
	.addField('🧠 LEVEL', data.level35, true)
	.addField('⚡️ SHINX', data.shinx35, true)
	.addField('🔋 TOTAL', data.total35, true)
	.addField('🔋 CONSUME', data.use35, true)
	.addField('🔋 HAVE', data.coin35, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history35);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "ewi"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name36, true)
	.addField('🧠 LEVEL', data.level36, true)
	.addField('⚡️ SHINX', data.shinx36, true)
	.addField('🔋 TOTAL', data.total36, true)
	.addField('🔋 CONSUME', data.use36, true)
	.addField('🔋 HAVE', data.coin36, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history36);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "farmervio"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name37, true)
	.addField('🧠 LEVEL', data.level37, true)
	.addField('⚡️ SHINX', data.shinx37, true)
	.addField('🔋 TOTAL', data.total37, true)
	.addField('🔋 CONSUME', data.use37, true)
	.addField('🔋 HAVE', data.coin37, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history37);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "akanaisuki"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name38, true)
	.addField('🧠 LEVEL', data.level38, true)
	.addField('⚡️ SHINX', data.shinx38, true)
	.addField('🔋 TOTAL', data.total38, true)
	.addField('🔋 CONSUME', data.use38, true)
	.addField('🔋 HAVE', data.coin38, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history38);
	message.channel.send(embed);
	} 
		else if(args[0].toLowerCase() === "meocoquai"){
	message.channel.send(data.title);
	const embed = new MessageEmbed()
	.setColor(data.color)
	.setDescription(data.help + data.space)
	.addField('💀 NAME', data.name39, true)
	.addField('🧠 LEVEL', data.level39, true)
	.addField('⚡️ SHINX', data.shinx39, true)
	.addField('🔋 TOTAL', data.total39, true)
	.addField('🔋 CONSUME', data.use39, true)
	.addField('🔋 HAVE', data.coin39, true)
	.addField(data.space,data.link)
	.setImage(data.bg)
	.setFooter(data.history39);
	message.channel.send(embed);
	} 
		else {
	message.channel.send(data.unc);
	}}

});
client.login(process.env.BOT_TOKEN);

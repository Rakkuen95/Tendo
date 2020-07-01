const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require("./data.json");
const prefix = "!";
const activities_list = ["with Rakkuen","with Albedox","with Claris","with Ngoc"]; 
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
		setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
		}, 10000);
	client.channels.cache.get('707501654756425731').send('Comeback!')
});

client.on("message", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'avatar') {
	const embed = new MessageEmbed()
	.setColor('#000000')
	.setImage(message.author.displayAvatarURL())
	message.channel.send(embed);
	} 

 let score;
    if (message.guild) {
        score = bot.getScore.get(message.author.id, message.guild.id);
        if (!score) {
            score = {
                id: `${message.guild.id}-${message.author.id}`,
                user: message.author.id,
                guild: message.guild.id,
                points: 0,
                level: 1,
            };
        }
	const nxtLvl = 5000 * (Math.pow(2, score.level) - 1);
        const xpAdd = Math.floor(Math.random() * 10) + 50;
        const curxp = score.points;
        const curlvl = score.level;
        const nxtLvl = score.level * 5000;
        score.points = curxp + xpAdd;
        if (nxtLvl <= score.points) {
            score.level = curlvl + 1;
            const lvlup = new MessageEmbed()
                .setAuthor(
                    `Congrats ${message.author.username}`,
                    message.author.displayAvatarURL()
                )
                .setTitle('You have leveled up!')
                .setThumbnail('https://i.imgur.com/lXeBiMs.png')
                .setColor('#000000')
                .addField('New Level', curlvl + 1);
            message.channel.send(lvlup).then(msg => {
                msg.delete({
                    timeout: 10000,
                });
            });
        }
        bot.setScore.run(score);
    }
});

client.login(process.env.BOT_TOKEN);
//${message.author.username} MENTION BẢN THÂN
//if(message.author.id !== config.ownerID) return; BẢO MẬT LỆNH

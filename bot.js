const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const activities_list = ["with Rakkuen","with Albedox","with Claris","with Ngoc"]; 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

client.on('message', message => {
    if (message.content.toLowerCase() === '?random') {
    	message.channel.send(Math.floor(Math.random() * 100) + 1);
  	}
    if (message.content.toLowerCase() === '?avatar') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
        }
    if (message.content.toLowerCase() === '?kien') {
var kien = ["Kiên thật sự ngu ngốc\nBảo vệ Clar cũng không xong", "Kiên không sai\nChứ ai sai ?", "Bé Kiên chào cô chú đi con"];
var recipe = Math.floor(Math.random() * kien.length);
message.channel.send(kien[recipe]);
        }
    if (message.content.toLowerCase() === '?clar') {
var clar = ["Ông trời tạo ra địa chấn\nVà Clar là điểm nhấn", "Chụy hỉu hông\nEm chạy ngang qua thấy Clar đẹp thui\nChụy hỉu hông", "Xin Clar hãy tôn trọng hàm răng của mình"];
var recipe = Math.floor(Math.random() * clar.length);
message.channel.send(clar[recipe]);
        }
    if (message.content.toLowerCase() === '?bliz') {
var bliz = ["Bliz dạo này còn làm ở đó hông ta", "Bliz tôn trọng hàm răng của mình\nBlizcrank", "Bliz nằm trong top 8 tỷ người đẹp nhất thế giới"];
var recipe = Math.floor(Math.random() * bliz.length);
message.channel.send(bliz[recipe]);
        }
});
client.login(process.env.yap3aZC1s4lTRiIkERGzQHSY7f6LSZdu);

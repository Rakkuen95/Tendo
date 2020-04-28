const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ditto') {
    	message.channel.send('https://toquoc.mediacdn.vn/2020/3/26/photo-1-15851570172391583915287-1585189253221-1585189253221232625971.gif');
  	}
    if (message.content === '!bulbasaur') {
    	message.channel.send('\n```md\nBulbasaur\n> PokeDex Number : 001\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\n#Map            Region  Type    Time    Rarity      Level   Item\nRoute 5         Kanto   Grass   M/D/N   Rare        10      -\n```');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

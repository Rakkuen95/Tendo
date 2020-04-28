const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on('message', message => {
    if (message.content === '?ditto') {
    	message.channel.send('https://toquoc.mediacdn.vn/2020/3/26/photo-1-15851570172391583915287-1585189253221-1585189253221232625971.gif');
  	}
    if (message.content === '?waifu') {
    	message.channel.send('https://i.pinimg.com/originals/fb/4a/82/fb4a827f677726e5cd64727fbfa33382.gif');
  	}
// Pokedex : 001
    if (message.content === '?bulbasaur') {
    	message.channel.send('```md\nBulbasaur\n> PokeDex Number : 001\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\n#Map            Region  Type    Time    Rarity      Level   Item\nRoute 5         Kanto   Grass   M/D/N   Rare        10      -```');
  	}
// Pokedex : 002
    if (message.content === '?ivysaur') {
    	message.channel.send('```md\nIvysaur\n> PokeDex Number : 002\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo wild locations found.\n```');
  	}
// Pokedex : 003
    if (message.content === '?venusaur') {
    	message.channel.send('```md\nVenusaur\n> PokeDex Number : 003\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo wild locations found.\n```');
  	}
// Pokedex : 004
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 005
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 006
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 007
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 008
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 009
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 010
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 011
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 012
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 013
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 014
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 015
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 016
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 016
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 017
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 018
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 019
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 020
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 021
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 022
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 023
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 024
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 025
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 026
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
});


client.login(process.env.BOT_TOKEN);

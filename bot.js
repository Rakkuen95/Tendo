const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const activities_list = ["Banned","Bored","Loser","WhyU","Please"]; 
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

client.on("guildCreate", guild => {
message.channel.send('Xin chào mọi người');
});

client.on("guildDelete", guild => {
message.channel.send('Tôi đi đây');
});

client.on('message', message => {
    if (message.content.toLowerCase() === '?about') {
    	message.channel.send('```md\nTeam phát triển MMO Bot bao gồm\nGen 1st : Startear\nGen 2nd : liiih\nGen 3rd : dragoncv\nGen 4th : DXgamer\nGen 5th : SniderLane\n```');
  	}
    if (message.content.toLowerCase() === '?startear') {
    	message.channel.send('https://i.imgur.com/YxJTidU.png');
  	}
    if (message.content.toLowerCase() === '?emprovjp') {
    	message.channel.send('https://i.imgur.com/y9oCTLn.png');
  	}
    if (message.content.toLowerCase() === '?random') {
    	message.channel.send(Math.floor(Math.random() * 100) + 1);
  	}
    if (message.content.toLowerCase() === '?avatar') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
        }
	if(message.content.toLowerCase() == "!ping"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
			});
		}
    if (message.content.toLowerCase() === '?delete') {
message.channel.bulkDelete(100);
  }
    if (message.content.toLowerCase() === '?quiz') {
const quiz = require('./quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send(item.question).then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
			message.channel.send(`${collected.first().author} đã trả lời chính xác!`);
		})
		.catch(collected => {
			message.channel.send('Có vẻ như không ai đủ thông minh.');
		});
});
  }

// TEST

  if (message.content.toLowerCase() === '?emilia') {
    const attachment = new MessageAttachment('https://i.pinimg.com/originals/fb/4a/82/fb4a827f677726e5cd64727fbfa33382.gif');
    message.channel.send(attachment);
  }
  if (message.content.toLowerCase() === '?mm') {
    const attachment = new MessageAttachment('https://i.imgur.com/oiJc8dm.png');
    message.channel.send(attachment);
  }

 if (message.content.toLowerCase() === '?waifu') {
    var tests = ["xin hãy hành hạ em!", "muốn ăn em?", "xin hãy trói em!"]
    message.reply(tests[Math.floor(Math.random() * tests.length)])
  }

    if (message.content.toLowerCase() === `?server`) {
	message.channel.send(`**Server Name**: ${message.guild.name}\n**Total Members**: ${message.guild.memberCount}`);
        }
    if (message.content.toLowerCase() === `?thumb`) {
message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name);
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('you reacted with a thumbs up.');
		} else {
			message.reply('you reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
}

// POKEMMO DEX NATIONAL 
	
// GEN-1
	
// Pokedex : 001
    if (message.content.toLowerCase() === '?bulbasaur') {
    	message.channel.send('```md\nBulbasaur\n> PokeDex Number : 001\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Kanto   Grass   M/D/N   Rare        10      -\n```');
  	}
// Pokedex : 002
    if (message.content.toLowerCase() === '?ivysaur') {
    	message.channel.send('```md\nIvysaur\n> PokeDex Number : 002\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 003
    if (message.content.toLowerCase() === '?venusaur') {
    	message.channel.send('```md\nVenusaur\n> PokeDex Number : 003\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 004
    if (message.content.toLowerCase() === '?charmander') {
    	message.channel.send('```md\nCharmander\n> PokeDex Number : 004\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRock Tunnel         Kanto   Cave    M/D/N   Rare        15      -\n```');
  	}
// Pokedex : 005
    if (message.content.toLowerCase() === '?charmeleon') {
    	message.channel.send('```md\nCharmeleon\n> PokeDex Number : 005\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 006
    if (message.content.toLowerCase() === '?charizard') {
    	message.channel.send('```md\nCharizard\n> PokeDex Number : 006\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 007
    if (message.content.toLowerCase() === '?squirtle') {
    	message.channel.send('```md\nSquirtle\n> PokeDex Number : 007\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 008
    if (message.content.toLowerCase() === '?wartortle') {
    	message.channel.send('```md\nWartortle\n> PokeDex Number : 008\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 009
    if (message.content.toLowerCase() === '?blastoise') {
    	message.channel.send('```md\nBlastoise\n> PokeDex Number : 009\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 010
    if (message.content.toLowerCase() === '?caterpie') {
    	message.channel.send('```md\nCaterpie\n> PokeDex Number : 010\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nRoute 2             Kanto   Grass   M/D/N   Rare        3-5     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    11-12   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    11-12   -\nVirdian Forest      Kanto   Grass   M/D/N   Common      5-7     -\n```');
  	}
// Pokedex : 011
    if (message.content.toLowerCase() === '?metapod') {
    	message.channel.send('```md\nMetapod\n> PokeDex Number : 011\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nPattern Bush        Kanto   Grass   M/D/N   Horde       48-50   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12      -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12      -\nVirdian Forest      Kanto   Grass   M/D/N   Uncommon    7       -\nRoute 12            Unova   Grass   M/D/N   Uncommon    48-49   -\n```');
  	}
// Pokedex : 012
    if (message.content.toLowerCase() === '?butterfree') {
    	message.channel.send('```md\nButterfree\n> PokeDex Number : 012\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Rare        50-52   -\nRoute 24            Kanto   Grass   M       Uncommon    12      -\nRoute 25            Kanto   Grass   M/D     Uncommon    12      -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    53-54   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 013
    if (message.content.toLowerCase() === '?weedle') {
    	message.channel.send('```md\nWeedle\n> PokeDex Number : 013\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nRoute 2             Kanto   Grass   M/D/N   Rare        3-5     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    11-12   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    11-12   -\nVirdian Forest      Kanto   Grass   M/D/N   Common      5-7     -\n```');
  	}
// Pokedex : 014
    if (message.content.toLowerCase() === '?kakuna') {
    	message.channel.send('```md\nKakuna\n> PokeDex Number : 014\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map            Region  Type    Time    Rarity      Level   Item\nPattern Bush    Kanto   Grass   M/D/N   Uncommon    50-52   -\nPattern Bush    Kanto   Grass   M/D/N   Horde       48-50   -\nRoute 24        Kanto   Grass   M/D/N   Uncommon    12      -\nRoute 25        Kanto   Grass   M/D/N   Uncommon    12      -\nVirdian Forest  Kanto   Grass   M/D/N   Uncommon    7       -\nRoute 12        Unova   Grass   M/D/N   Uncommon    48-49   -\n```');
  	}
// Pokedex : 015
    if (message.content.toLowerCase() === '?beedrill') {
    	message.channel.send('```md\nBeedrill\n> PokeDex Number : 015\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    53-54   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 016
    if (message.content.toLowerCase() === '?pidgey') {
    	message.channel.send('```md\nPidgey\n> PokeDex Number : 016\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 1             Kanto   Grass   M/D/N   V.Common    2-5     -\nRoute 2             Kanto   Grass   M/D/N   Common      4-6     -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 8             Kanto   Grass   D       Horde       15-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    13-17   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    23-27   -\nRoute 12            Kanto   Grass   M/D     Horde       20-22   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    25-27   -\nRoute 14            Kanto   Grass   M/D     Rare        27      -\nRoute 15            Kanto   Grass   M/D/N   Rare        27      -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 24            Kanto   Grass   M/D     Horde       8-9     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12-14   -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    5-7     -\nRoute 229           Kanto   Grass   M/D/N   Rare        47-50   -\n```');
  	}
// Pokedex : 017
    if (message.content.toLowerCase() === '?pidgeotto') {
    	message.channel.send('```md\nPidgeotto\n> PokeDex Number : 017\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nBond Bridge         Kanto   Grass   M/D     Uncommon    42-44   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Horde       46-48   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 12            Kanto   Grass   M/D     Rare        26-28   -\nRoute 13            Kanto   Grass   M/D     Rare        29      -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    29      -\nRoute 15            Kanto   Grass   M/D/N   Rare        29      -\nRoute 21            Kanto   Grass   M/D/N   Rare        30-32   -\n```');
  	}
// Pokedex : 018
    if (message.content.toLowerCase() === '?pidgeotto') {
    	message.channel.send('```md\nPidgeot\n> PokeDex Number : 018\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 019
    if (message.content.toLowerCase() === '?rattata') {
    	message.channel.send('```md\nRattata\n> PokeDex Number : 019\n> Egg Group : Field\n> Evolution : Rattata → Raticate (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    28-30   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-29   -\nRoute 1             Kanto   Grass   M/D/N   V.Common    2-4     -\nRoute 2             Kanto   Grass   M/D/N   Common      3-5     -\nRoute 3             Kanto   Grass   M/D/N   Common      5-8     -\nRoute 4             Kanto   Grass   M/D/N   Common      8-12    -\nRoute 4             Kanto   Grass   M/D/N   Horde       7-8     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 7             Kanto   Grass   M/D/N   Horde       15-17   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 9             Kanto   Grass   M/D/N   Horde       12-13   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    12-16   -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        22-25   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    24-26   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 22            Kanto   Grass   M/D/N   V.Common    3-5     -\nRoute 225           Sinnoh  Grass   M/D/N   Rare        47      -\nRoute 226           Sinnoh  Grass   M/D/N   Rare        47      -\n```');
  	}
// Pokedex : 020
    if (message.content.toLowerCase() === '?raticate') {
    	message.channel.send('```md\nRaticate\n> PokeDex Number : 020\n> Egg Group : Field\n> Evolution : Rattata → Raticate (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    32-38   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-30   -\nRoute 7             Kanto   Grass   N       Rare        20-22   -\nRoute 8             Kanto   Grass   N       Rare        20-22   -\nRoute 9             Kanto   Grass   M/D/N   Rare        20      -\nRoute 10            Kanto   Grass   M/D/N   Rare        20      -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 16            Kanto   Grass   M/D/N   Horde       20      -\nRoute 17            Kanto   Grass   M/D/N   Uncommon    25-29   -\nRoute 17            Kanto   Grass   M/D/N   Horde       20-22   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 18            Kanto   Grass   M/D/N   Horde       23-24   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    30-32   -\nDreamyard           Unova   D.Grass M/D/N   V.Common    47-50   -\nDreamyard           Unova   D.Grass M/D/N   Horde       46-47   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    50-52   -\nRoute 225           Sinnoh  Grass   M/D/N   Horde       48-50   -\nRoute 226           Sinnoh  Grass   M/D/N   Common      51-52   -\nRoute 226           Sinnoh  Grass   M/D     Horde       48-50   -\n```');
  	}
// Pokedex : 021
    if (message.content.toLowerCase() === '?spearow') {
    	message.channel.send('```md\nSpearow\n> PokeDex Number : 021\n> Egg Group : Flying\n> Evolution : Spearow → Fearow (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    39-41   -\nKindle Road         Kanto   Grass   M/D/N   Rare        36-38   -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    38-40   -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-8     -\nRoute 4             Kanto   Grass   M/D     Horde       7-8     -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 9             Kanto   Grass   M/D     Horde       12-13   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    13-17   -\nRoute 16            Kanto   Grass   M/D/N   Rare        20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        22-25   -\nRoute 18            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 22            Kanto   Grass   M/D/N   Uncommon    3-5     -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    36-38   -\nWater Path          Kanto   Grass   M/D/N   Rare        48-50   -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 2             Unova   Shadow  M/D/N   Special     6-7     -\nRoute 18            Unova   Shadow  M/D/N   Special     36-38   -\nRoute 225           Sinnoh  Grass   M/D/N   Rare        47      -\nRoute 226           Sinnoh  Grass   M/D     Rare        47      -\n```');
  	}
// Pokedex : 022
    if (message.content.toLowerCase() === '?fearow') {
    	message.channel.send('```md\nFearow\n> PokeDex Number : 022\n> Egg Group : Flying\n> Evolution : Spearow → Fearow (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanyon Entrance     Kanto   Grass   M/D     Horde       46-48   -\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    41-43   -\nKindle Road         Kanto   Grass   M/D/N   Rare        37-39   -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 9             Kanto   Grass   M/D     Rare        20      -\nRoute 10            Kanto   Grass   M/D     Rare        20      -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    22-25   -\nRoute 17            Kanto   Grass   M/D     Horde       20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        26-28   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Rare        40-44   -\nRuin Valley         Kanto   Grass   M/D/N   Horde       48-50   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    37-39   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\n```');
    	message.channel.send('```md\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 10            Unova   Shadow  M/D/N   Special     43-44   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   D.Grass M/D/N   Horde       50-52   -\nRoute 15            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 15            Unova   D.Grass M/D/N   Uncommon    53-55   -\nVictory Road        Unova   Shadow  M/D/N   Special     45-48   -\nRoute 225           Sinnoh  Grass   M/D     Horde       49-50   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    50-52   -\nRoute 226           Sinnoh  Grass   M/D     Uncommon    51-53   -\nRoute 227           Sinnoh  Grass   M/D     Horde       50-51   -\nRoute 227           Sinnoh  Grass   M/D/N   Uncommon    51-53   -\nStark Mountain      Sinnoh  Grass   M/D/N   Uncommon    54-55   -\n```');
  	}
// Pokedex : 023
    if (message.content.toLowerCase() === '?ekans') {
    	message.channel.send('```md\nEkans> PokeDex Number : 023\n> Egg Group : Field , Dragon\n> Evolution : Ekans → Arbok (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 11            Kanto   Grass   M/D/N   Common      12-16   -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\n```');
  	}
// Pokedex : 024
    if (message.content.toLowerCase() === '?arbok') {
    	message.channel.send('```md\nArbok> PokeDex Number : 024> Egg Group : Field , Dragon\n> Evolution : Ekans → Arbok (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 23            Kanto   Grass   M/D/N   Uncommon    44      -\nRoute 23            Kanto   Grass   M/D/N   Horde       38-39   -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\n```');
  	}
// Pokedex : 025
    if (message.content.toLowerCase() === '?pikachu') {
    	message.channel.send('```md\nPikachu\n> PokeDex Number : 025\n> Egg Group : Field , Fairy\n> Evolution : Pichu → Pikachu (Happiness) → Raichu (Use Thunderstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nPower Plant         Kanto   Inside  M/D/N   Common      28-30   -\nPower Plant         Kanto   Inside  M/D/N   Horde       26-28   -\nRoute 1             Kanto   Grass   M/D/N   V.Rare      2       -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    5-7     -\nSafari Zone         Hoenn   Grass   M/D/N   Rare        28-30   -\nTrophy Garden       Sinnoh  Grass   M/D/N   Horde       21-22   -\nTrophy Garden       Sinnoh  Grass   M/D/N   V.Common    22-24   -\n```');
  	}
// Pokedex : 026
    if (message.content.toLowerCase() === '?raichu') {
    	message.channel.send('```md\nRaichu\n> PokeDex Number : 026\n> Egg Group : Field , Fairy\n> Evolution : Pichu → Pikachu (Happiness) → Raichu (Use Thunderstone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 027
    if (message.content.toLowerCase() === '?sandshrew') {
    	message.channel.send('```md\nSandshrew\n> PokeDex Number : 027\n> Egg Group : Field\n> Evolution : Sandshrew → Sandslash (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Moon             Kanto   Cave    M/D/N   Rare        7-10    -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    12-16   -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\nMirage Tower        Hoenn   Cave    M/D/N   V.Common    20-23   -\nMirage Tower        Hoenn   Cave    M/D     Horde       18-20   -\nRoute 111           Hoenn   Grass   M/D/N   V.Common    20-23   -\nRoute 111           Hoenn   Grass   M/D     Horde       18-20   -\nRoute 113           Hoenn   Grass   M/D/N   Common      15-18   -\n```');
  	}
// Pokedex : 028
    if (message.content.toLowerCase() === '?sandslash') {
    	message.channel.send('```md\nSandslash\n> PokeDex Number : 028\n> Egg Group : Field\n> Evolution : Sandshrew → Sandslash (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 23            Kanto   Grass   M/D/N   Uncommon    44      -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\nVictory Road        Kanto   Cave    M/D/N   Horde       44-46   -\nRelic Castle        Unova   Cave    M/D/N   Common      47-50   -\nRelic Castle        Unova   Cave    M/D/N   Horde       45-47   -\n```');
  	}
// Pokedex : 029
    if (message.content.toLowerCase() === '?nidoran(f)') {
    	message.channel.send('```md\nNidoran (F)\n> PokeDex Number : 029\n> Egg Group : Monster , Field\n> Evolution : Nidoran (F) → Nidorina (Lv.16) → Nidoqueen (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 2             Kanto   Grass   M/D/N   Uncommon    4-6     -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 22            Kanto   Grass   M/D/N   Uncommon    3-5     -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    24-26   -\n```');
  	}
// Pokedex : 030
    if (message.content.toLowerCase() === '?nidorina') {
    	message.channel.send('```md\nNidorina\n> PokeDex Number : 030\n> Egg Group : Monster , Field\n> Evolution : Nidoran (F) → Nidorina (Lv.16) → Nidoqueen (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 10            Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    26-28   -\nRoute 14            Kanto   Grass   M/D/N   Horde       23-24   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Uncommon    40-42   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        31      -\n```');
  	}
// Pokedex : 031
    if (message.content.toLowerCase() === '?nidoqueen') {
    	message.channel.send('```md\nNidoqueen\n> PokeDex Number : 031\n> Egg Group : Monster , Field\n> Evolution : Nidoran (F) → Nidorina (Lv.16) → Nidoqueen (Use Moonstone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 032
    if (message.content.toLowerCase() === '?nidoran(m)') {
    	message.channel.send('```md\nNidoran (M)\n> PokeDex Number : 032\n> Egg Group : Monster , Field\n> Evolution : Nidoran (M) → Nidorino (Lv.16) → Nidoking (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 2             Kanto   Grass   M/D/N   Uncommon    4-6     -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 22            Kanto   Grass   M/D/N   Uncommon    3-5     -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    24-26   -\n```');
  	}
// Pokedex : 033
    if (message.content.toLowerCase() === '?nidorino') {
    	message.channel.send('```md\nNidorino\n> PokeDex Number : 033\n> Egg Group : Monster , Field\n> Evolution : Nidoran (M) → Nidorino (Lv.16) → Nidoking (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 10            Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    26-28   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    23-24   -\nRoute 15            Kanto   Grass   M/D/N   Horde       28-30   -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Uncommon    40-42   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        31      -\n```');
  	}
// Pokedex : 034
    if (message.content.toLowerCase() === '?nidoking') {
    	message.channel.send('```md\nNidoking\n> PokeDex Number : 034\n> Egg Group : Monster , Field\n> Evolution : Nidoran (M) → Nidorino (Lv.16) → Nidoking (Use Moonstone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 035
    if (message.content.toLowerCase() === '?clefairy') {
    	message.channel.send('```md\nClefairy\n> PokeDex Number : 035\n> Egg Group : Fairy\n> Evolution : Cleffa → Clefairy (Happiness) → Clefable (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Moon             Kanto   Cave    M/D/N   Rare        8-12    -\nRoute 3             Kanto   Grass   N       Rare        6-7     -\nRoute 4             Kanto   Grass   N       Rare        8-12    -\nGiant Chasm         Unova   Grass   M/D/N   Uncommon    52-54   -\nGiant Chasm         Unova   D.Grass M/D/N   Uncommon    57-59   -\nVillage Bridge      Unova   Grass   M/D/N   Special     60-65   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Uncommon    13-42   -\nMt.Coronet          Sinnoh  Grass   M/D/N   Uncommon    38-39   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       37      -\n```');
  	}
// Pokedex : 036
    if (message.content.toLowerCase() === '?clefable') {
    	message.channel.send('```md\nClefable\n> PokeDex Number : 036\n> Egg Group : Fairy\n> Evolution : Cleffa → Clefairy (Happiness) → Clefable (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\nVillage Bridge      Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 037
    if (message.content.toLowerCase() === '?vulpix') {
    	message.channel.send('```md\nVulpix\n> PokeDex Number : 037\n> Egg Group : Field\n> Evolution : Vulpix → Ninetales (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    30-32   -\nPokemon Mansion     Kanto   Inside  M/N     Horde       28-30   -\nRoute 5             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 7             Kanto   Grass   M       Uncommon    19-22   -\nRoute 7             Kanto   Grass   M/D/N   Horde       15-17   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    19-22   -\nRoute 8             Kanto   Grass   M/N     Horde       15-17   -\nMt.Pyre             Hoenn   Grass   M/D/N   Common      29-31   -\nMt.Pyre             Hoenn   Grass   M/D/N   Horde       27-29   -\nAbundant Shrine     Unova   Grass   M/D/N   Common      47      -\nAbundant Shrine     Unova   D.Grass M/D/N   Common      52      -\nAbundant Shrine     Unova   D.Grass M/D/N   Horde       50-52   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\n```');
  	}
// Pokedex : 038
    if (message.content.toLowerCase() === '?ninetales') {
    	message.channel.send('```md\nNinetales\n> PokeDex Number : 038\n> Egg Group : Field\n> Evolution : Vulpix → Ninetales (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbudant Shrine      Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 039
    if (message.content.toLowerCase() === '?jigglypuff') {
    	message.channel.send('```md\nJigglypuff\n> PokeDex Number : 039\n> Egg Group : Fairy\n> Evolution : Igglypuff → Jigglypuff (Happiness) → Wigglytuff (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Kanto   Grass   M/D/N   Rare        5-7     -\nRoute 4             Kanto   Grass   M/D/N   Rare        8-12    -\nRoute 5             Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 7             Kanto   Grass   M/D/N   Rare        17-18   -\nRoute 8             Kanto   Grass   M/D/N   Rare        17-18   -\nRoute 115           Hoenn   Grass   M/D/N   V.Common    24-25   -\nRoute 115           Hoenn   Grass   M/D/N   Horde       22-23   -\nDreamyard           Sinnoh  Grass   M/D/N   Special     10-12   -\nRoute 2             Unova   Grass   M/D/N   Special     6-7     -\nRoute 14            Unova   Grass   M/D/N   Common      48      -\nRoute 14            Unova   Grass   M/D/N   Common      53      -\nRoute 14            Unova   D.Grass M/D/N   Horde       50-52   -\n```');
  	}
// Pokedex : 040
    if (message.content.toLowerCase() === '?wigglytuff') {
    	message.channel.send('```md\nWigglytuff\n> PokeDex Number : 040\n> Egg Group : Fairy\n> Evolution : Igglypuff → Jigglypuff (Happiness) → Wigglytuff (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 14            Kanto   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 041
    if (message.content.toLowerCase() === '?zubat') {
    	message.author.send('```md\nZubat\n> PokeDex Number : 041\n> Egg Group : Flying\n> Evolution : Zubat → Golbat (Lv.22) → Crobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nAltering Cave       Kanto   Cave    M/D/N   Uncommon    8-25    -\nDigletts Cave       Kanto   Cave    M/D/N   Uncommon    15-18   -\nIcefall Cave        Kanto   Cave    M/D/N   Uncommon    48-50   -\nLost Cave           Kanto   Cave    M/D/N   Uncommon    50-52   -\nMt.Moon             Kanto   Cave    M/D/N   Common      7-11    -\nMt.Moon             Kanto   Cave    M/D/N   Horde       5-6     -\nPokemon Tower       Kanto   Inside  M/D/N   Rare        15-19   -\nPokemon Tower       Kanto   Inside  M/D/N   Horde       13-17   -\nRock Tunnel         Kanto   Cave    M/D/N   Common      15-16   -\nRock Tunnel         Kanto   Cave    M/D/N   Horde       13-15   -\nRoute 3             Kanto   Grass   N       Uncommon    6-8     -\nRoute 4             Kanto   Grass   N       Uncommon    8-12    -\nRoute 9             Kanto   Grass   N       Rare        14-17   -\nRoute 10            Kanto   Grass   N       Rare        14-17   -\nSeafoam Islands     Kanto   Cave    M/D/N   Uncommon    26-32   -\nVictory Road        Kanto   Cave    M/D/N   Rare        42-46   -\n```');
    	message.author.send('```md\nAltering Cave       Hoenn   Cave    M/D/N   Uncommon    8-25    -\nGranite Cave        Hoenn   Cave    M/D/N   Common      9-13    -\nGranite Cave        Hoenn   Cave    M/D/N   Horde       8-11    -\nMeteor Falls        Hoenn   Water   M/D/N   V.Common    20-40   -\nMeteor Falls        Hoenn   Cave    M/D/N   Common      16-20   -\nMeteor Falls        Hoenn   Water   M/D/N   Horde       20-30   -\nScorched Slab       Hoenn   Water   M/D/N   V.Common    25-30   -\nScorched Slab       Hoenn   Water   M/D/N   Horde       25-30   -\nSeafloor Cavern     Hoenn   Cave    M/D/N   Uncommon    33-36   -\nSeafloor Cavern     Hoenn   Water   M/D/N   Uncommon    30-35   -\nSealed Chamber      Hoenn   Water   M/D/N   Uncommon    30-40   -\nShoal Cave          Hoenn   Water   M/D/N   Uncommon    30-35   -\nShoal Cave          Hoenn   Cave    M/D/N   Uncommon    31      -\nVictory Road        Hoenn   Cave    M/D/N   Rare        36-38   -\n```');
    	message.author.send('```md\nAcuity Lakefront    Sinnoh  Grass   N       Rare        35      -\nIron Island         Sinnoh  Cave    M/D/N   V.Rare      30      -\nMt.Coronet          Sinnoh  Water   M/D/N   V.Common    20-30   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Rare        14-19   -\nMt.Coronet          Sinnoh  Water   M/D/N   Horde       20-30   -\nOreburgh Gate       Sinnoh  Cave    M/D/N   V.Common    5-10    -\nOreburgh Gate       Sinnoh  Cave    M/D/N   Horde       6-7     -\nOreburgh Gate       Sinnoh  Water   M/D/N   V.Common    20-30   -\nOreburgh Gate       Sinnoh  Water   M/D/N   Horde       20-30   -\nOreburgh Mine       Sinnoh  Cave    M/D/N   Common      6-10    -\nRavaged Path        Sinnoh  Cave    M/D/N   V.Common    4-6     -\nRavaged Path        Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 203           Sinnoh  Grass   N       Uncommon    4-5     -\nRoute 204           Sinnoh  Grass   N       Uncommon    3-8     -\nRoute 206           Sinnoh  Grass   N       Uncommon    17      -\nRoute 207           Sinnoh  Grass   N       Uncommon    5-6     -\nRoute 208           Sinnoh  Grass   N       Uncommon    19      -\nRoute 208           Sinnoh  Grass   N       Horde       16-17   -\nRoute 209           Sinnoh  Cave    M/D/N   V.Common    17-21   -\nRoute 209           Sinnoh  Cave    M/D/N   Horde       16-21   -\nRoute 209           Sinnoh  Grass   N       Uncommon    19      -\nRoute 211           Sinnoh  Grass   N       Uncommon    14-28   -\nRoute 214           Sinnoh  Grass   N       Uncommon    22      -\nRoute 216           Sinnoh  Grass   N       Rare        32-33   -\nRoute 217           Sinnoh  Grass   N       Rare        35      -\nWayward Cave        Sinnoh  Cave    M/D/N   Common      17-19   -\n```');
  	}
// Pokedex : 042
    if (message.content.toLowerCase() === '?golbat') {
    	message.author.send('```md\nGolbat\n> PokeDex Number : 042\n> Egg Group : Flying\n> Evolution : Zubat → Golbat (Lv.22) → Crobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nIcefall Cave        Kanto   Cave    M/D/N   Uncommon    48-50   -\nIcefall Cave        Kanto   Cave    M/D/N   Horde       46-48   -\nLost Cave           Kanto   Cave    M/D/N   Common      50-52   -\nLost Cave           Kanto   Cave    M/D/N   Horde       48-50   -\nPokemon Tower       Kanto   Inside  M/D/N   Rare        22      -\nPokemon Tower       Kanto   Inside  M/D/N   Horde       13-17   -\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        26-34   -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\n```');
    	message.author.send('```md\nCave Of Origin      Hoenn   Cave    M/D/N   V.Common    33-36   -\nCave Of Origin      Hoenn   Cave    M/D/N   Horde       30-34   -\nMeteor Falls        Hoenn   Water   M/D/N   V.Common    37-45   -\nMeteor Falls        Hoenn   Water   M/D/N   Common      30-40   -\nMeteor Falls        Hoenn   Cave    M/D/N   Horde       30-40   -\nScorched Slab       Hoenn   Cave    M/D/N   V.Common    26-29   -\nScorched Slab       Hoenn   Water   M/D/N   Horde       24-26   -\nScorched Slab       Hoenn   Cave    M/D/N   V.Common    25-30   -\nSeafloor Cavern     Hoenn   Cave    M/D/N   V.Common    33-36   -\nSeafloor Cavern     Hoenn   Cave    M/D/N   Horde       32-33   -\nSeafloor Cavern     Hoenn   Water   M/D/N   V.Common    30-35   -\nSealed Chamber      Hoenn   Water   M/D/N   Common      30-40   -\nShoal Cave          Hoenn   Water   M/D/N   Horde       30-35   -\nShoal Cave          Hoenn   Cave    M/D/N   Common      31-34   -\nShoal Cave          Hoenn   Water   M/D/N   Uncommon    30-35   -\nShoal Cave          Hoenn   Cave    M/D/N   Horde       31-32   -\nSky Pillar          Hoenn   Cave    M/D/N   Common      37-38   -\nSky Pillar          Hoenn   Cave    M/D/N   Horde       35-37   -\nVictory Road        Hoenn   Cave    M/D/N   Common      38-44   -\nVictory Road        Hoenn   Cave    M/D/N   Horde       39-40   -\nVictory Road        Hoenn   Water   M/D/N   V.Common    30-40   -\nVictory Road        Hoenn   Water   M/D/N   Horde       30-40   -\nGiant Chasm         Unova   Cave    M/D/N   Uncommon    47      -\nGiant Chasm         Unova   Grass   M/D/N   Uncommon    48-50   -\nGiant Chasm         Unova   Grass   M/D/N   Horde       46-47   -\nGiant Chasm         Unova   D.Grass M/D/N   Uncommon    53-55   -\n```');
    	message.author.send('```md\nRoute 13            Sinnoh  Grass   M/D/N   Common      48-50   -\nRoute 13            Sinnoh  D.Grass M/D/N   Common      53-55   -\nIron Island         Sinnoh  Cave    M/D/N   Common      31-33   -\nIron Island         Sinnoh  Cave    M/D/N   Horde       29-33   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Uncommon    33-41   -\nMt.Coronet          Sinnoh  Grass   N       Uncommon    38-39   -\nMt.Coronet          Sinnoh  Water   M/D/N   Uncommon    22-40   -\nMt.Coronet          Sinnoh  Water   M/D/N   Horde       22-40   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       31-32   -\nOreburgh Gate       Sinnoh  Water   M/D/N   Uncommon    22-40   -\nRavaged Path        Sinnoh  Water   M/D/N   Uncommon    22-40   -\nRavaged Path        Sinnoh  Water   M/D/N   Horde       22-30   -\nRoute 209           Sinnoh  Cave    M/D/N   Rare        22-23   -\nRoute 227           Sinnoh  Grass   N       Uncommon    51      -\nSendoff Spring      Sinnoh  Grass   N       Uncommon    38      -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Common      50-56   -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Horde       47-50   -\nStark Mountain      Sinnoh  Cave    M/D/N   Uncommon    54-56   -\nStark Mountain      Sinnoh  Grass   N       Uncommon    51-54   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Common      45-66   -\nVictory Road        Sinnoh  Cave    M/D/N   Rare        43-52   -\nVictory Road        Sinnoh  Water   M/D/N   V.Common    35-55   -\nVictory Road        Sinnoh  Water   M/D/N   Horde       30-50   -\n```');
  	}
// Pokedex : 043
    if (message.content.toLowerCase() === '?oddish') {
    	message.channel.send('```md\nOddish\n> PokeDex Number : 043\n> Egg Group : Plant\n> Evolution 1 : Oddish → Gloom (Lv.21) → Vileplume (Use Leafstone)\n> Evolution 2 : Oddish → Gloom (Lv.21) → Bellossom (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Rare        41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nCape Brink          Kanto   Grass   M/D/N   Rare        39-41   -\nRoute 2             Kanto   Grass   M/D/N   Uncommon    3-4     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 13            Kanto   Grass   M/N     Horde       22-23   -\nRoute 14            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 15            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/N     Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/D/N   Horde       8-10    -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    4-6     -\nWater Path          Kanto   Grass   M/D/N   Rare        48-50   -\n```');
    	message.channel.send('```md\nRoute 110           Hoenn   Grass   M/D/N   Uncommon    13      -\nRoute 117           Hoenn   Grass   N       Uncommon    14      -\nRoute 117           Hoenn   Grass   M/D/N   Horde       11-12   -\nRoute 119           Hoenn   Grass   M/D/N   Common      24-27   -\nRoute 120           Hoenn   Grass   M/D/N   Uncommon    25-27   -\nRoute 121           Hoenn   Grass   M/D/N   Uncommon    27-29   -\nRoute 123           Hoenn   Grass   M/D/N   Rare        28-30   -\nSafari Zone         Sinnoh  Grass   M/D/N   Rare        27-29   -\nRoute 224           Sinnoh  Grass   N       Uncommon    49      -\nRoute 229           Sinnoh  Grass   M/D/N   Rare        47-50   -\nRoute 230           Sinnoh  Grass   N       Uncommon    47      -\n```');
  	}
// Pokedex : 044
    if (message.content.toLowerCase() === '?gloom') {
    	message.channel.send('```md\n Gloom\n> PokeDex Number : 044\n> Egg Group : Plant\n> Evolution 1 : Oddish → Gloom (Lv.21) → Vileplume (Use Leafstone)\n> Evolution 2 : Oddish → Gloom (Lv.21) → Bellossom (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    42-44   -\nBond Bridge         Kanto   Grass   M/D/N   Horde       39-41   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    30      -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    30-32   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 119           Hoenn   Grass   M/D/N   Uncommon    25-27   -\nRoute 119           Hoenn   Grass   M/D/N   Horde       23-24   -\nRoute 120           Hoenn   Grass   M/D/N   Uncommon    25-27   -\nRoute 121           Hoenn   Grass   M/D/N   Uncommon    28-30   -\nRoute 123           Hoenn   Grass   M/D/N   Uncommon    29-31   -\nSafari Zone         Hoenn   Grass   M/D/N   Rare        28-30   -\nRoute 224           Sinnoh  Grass   N       Rare        53      -\nRoute 229           Sinnoh  Grass   M/D/N   Uncommon    51-52   -\nRoute 230           Sinnoh  Grass   M/D/N   Rare        50      -\n```');
  	}
// Pokedex : 045
    if (message.content.toLowerCase() === '?vileplume') {
    	message.channel.send('```md\n Vileplume\n> PokeDex Number : 045\n> Egg Group : Plant\n> Evolution 1 : Oddish → Gloom (Lv.21) → Vileplume (Use Leafstone)\n> Evolution 2 : Oddish → Gloom (Lv.21) → Bellossom (Use Sunstone)\nNo Wild Locations Found.```');
  	}
// Pokedex : 046
    if (message.content.toLowerCase() === '?paras') {
    	message.channel.send('```md\nParas\n> PokeDex Number : 046\n> Egg Group : Bug , Plant\n> Evolution : Paras → Parasect (Lv.24)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Moon             Kanto   Cave    M/D/N   V.Common    8-12    -\nMt.Moon             Kanto   Cave    M/D/N   Horde       5-6     -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    24-26   -\n```');
  	}
// Pokedex : 047
    if (message.content.toLowerCase() === '?parasect') {
    	message.channel.send('```md\nParasect\n> PokeDex Number : 047\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nCerulean Cave       Kanto   Cave    M/D/N   Horde       54-56   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        30      -\n```');
  	}
// Pokedex : 048
    if (message.content.toLowerCase() === '?venonat') {
    	message.channel.send('```md\nVenonat\n> PokeDex Number : 048\n> Egg Group : Bug\n> Evolution : Venonat → Venomoth (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 9             Kanto   Grass   N       Uncommon    14-17   -\nRoute 10            Kanto   Grass   N       Rare        14-17   -\nRoute 12            Kanto   Grass   M/D/N   Common      24-26   -\nRoute 12            Kanto   Grass   N       Horde       20-22   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    24-26   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    24-26   -\nRoute 15            Kanto   Grass   M/D/N   Rare        25-27   -\nRoute 24            Kanto   Grass   N       Rare        12-14   -\nRoute 24            Kanto   Grass   N       Horde       8-9     -\nRoute 25            Kanto   Grass   N       Rare        12-14   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        24-26   -\n```');
  	}
// Pokedex : 049
    if (message.content.toLowerCase() === '?venomoth') {
    	message.channel.send('```md\nVenomoth\n> PokeDex Number : 049\n> Egg Group : Bug\n> Evolution : Venonat → Venomoth (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nCerulean Cave       Kanto   Cave    N       Rare        54-58   -\nRoute 13            Kanto   Grass   N       Rare        31      -\nRoute 14            Kanto   Grass   N       Rare        31      -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    31      -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    31      -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\nDreamyard           Unova   D.Grass N       Rare        48-50   -\n```');
  	}
// Pokedex : 050
    if (message.content.toLowerCase() === '?diglett') {
    	message.channel.send('```md\nDiglett\n> PokeDex Number : 050\n> Egg Group : Field\n> Evolution : Diglett → Dugtrio (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nDigletts Cave       Kanto   Cave    M/D/N   V.Common    15-22   -\nDigletts Cave       Kanto   Cave    M/D/N   Horde       14-16   -\nRoute 228           Sinnoh  Grass   M/D/N   Rare        49      -\n```');
  	}
// Pokedex : 051
    if (message.content.toLowerCase() === '?dugtrio') {
    	message.channel.send('```md\nDugtrio\n> PokeDex Number : 051\n> Egg Group : Field\n> Evolution : Diglett → Dugtrio (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nDigletts Cave       Kanto   Cave    M/D/N   Rare        26      -\nRoute 228           Sinnoh  Grass   M/D/N   Common      50-52   -\nRoute 228           Sinnoh  Grass   M/D/N   Horde       50-52   -\n```');
  	}
// Pokedex : 052
    if (message.content.toLowerCase() === '?meowth') {
    	message.channel.send('```md\nMeowth\n> PokeDex Number : 052\n> Egg Group : Field\n> Evolution : Meowth → Persian (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nCanyon Entrance     Kanto   Grass   M/D/N   Common      48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    39-41   -\nFive Isle Meadow    Kanto   Grass   M/D/N   Common      48-50   -\nKindle Road         Kanto   Grass   M/D/N   Uncommon    36-38   -\nKindle Road         Kanto   Grass   M/D/N   Horde       34-36   -\nRoute 5             Kanto   Grass   M/D/N   Common      12-16   -\nRoute 5             Kanto   Grass   M/D/N   Horde       10-11   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-16   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 8             Kanto   Grass   M/D/N   Rare        18-20   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    12-16   -\nRoute 24            Kanto   Grass   M/D/N   Rare        12      -\nRoute 25            Kanto   Grass   M/D/N   Rare        12      -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    36-38   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\n```');
  	}
// Pokedex : 053
    if (message.content.toLowerCase() === '?persian') {
    	message.channel.send('```mdPersian> PokeDex Number : 053> Egg Group : Field\n> Evolution : Meowth → Persian (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    42-44   -\nCanyon Entrance     Kanto   Grass   N       Horde       46-48   -\nCanyon Entrance     Kanto   Grass   M/D/N   Common      48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    41-43   -\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-56   -\nFive Isle Meadow    Kanto   Grass   M/D/N   Common      48-50   -\nKindle Road         Kanto   Grass   M/D/N   Uncommon    37-39   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    37-39   -\nTreasure Beach      Kanto   Grass   M/D/N   Horde       34-36   -\nWater Path          Kanto   Grass   M/D/N   Common      48-50   -\nWater Path          Kanto   Grass   M/D/N   Horde       46-48   -\n```');
  	}
// Pokedex : 054
    if (message.content.toLowerCase() === '?psyduck') {
    	message.author.send('```md\nPsyduck\n> PokeDex Number : 054\n> Egg Group : Water A , Field\n> Evolution : Psyduck → Golduck (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Rare        41-43   -\nBerry Forest        Kanto   Water   M/D/N   V.Common    30-40   -\nBerry Forest        Kanto   S.Rod   M/D/N   Rare        25-40   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nBond Bridge         Kanto   S.Rod   M/D/N   Rare        25-40   -\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    39-41   -\nCape Brink          Kanto   Water   M/D/N   V.Common    30-40   -\nCape Brink          Kanto   S.Rod   M/D/N   Rare        25-40   -\nCeladon City        Kanto   Water   M/D/N   V.Common    30-35   -\nCerulean Cave       Kanto   Water   M/D/N   Common      47-50   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Rare        25-40   -\nCerulean City       Kanto   S.Rod   M/D/N   Rare        25-40   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Rare        25-40   -\nFive Island         Kanto   S.Rod   M/D/N   Rare        25-40   -\nFive Isle Meadow    Kanto   S.Rod   M/D/N   Rare        25-40   -\nFive Isle Meadow    Kanto   Grass   M/D/N   Common      48-50   -\n```');
    	message.author.send('```md\nFour Island         Kanto   Water   M/D/N   Common      40-50   -\nFour Island         Kanto   S.Rod   M/D/N   Rare        25-40   -\nFuchsia City        Kanto   Water   M/D/N   V.Common    30-35   -\nFuchsia City        Kanto   Water   M/D/N   Horde       30-35   -\nFuchsia City        Kanto   S.Rod   M/D/N   Rare        25-40   -\nGreen Path          Kanto   S.Rod   M/D/N   Rare        25-40   -\nIcefall Cave        Kanto   Cave    M/D/N   Uncommon    48-50   -\nIcefall Cave        Kanto   S.Rod   M/D/N   Rare        25-40   -\nIcefall Cave        Kanto   Water   M/D/N   Uncommon    40-50   -\nKindle Road         Kanto   Grass   M/D/N   Uncommon    36-38   -\nKindle Road         Kanto   S.Rod   M/D/N   Rare        25-40   -\nMemorial Pillar     Kanto   S.Rod   M/D/N   Rare        25-40   -\nOne Island          Kanto   S.Rod   M/D/N   Rare        25-40   -\nOutcast Island      Kanto   S.Rod   M/D/N   Rare        25-40   -\nPallet Town         Kanto   S.Rod   M/D/N   Rare        25-40   -\nResort Gorgeous     Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 4             Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    14-15   -\nRoute 6             Kanto   Grass   M/D/N   V.Common    30-35   -\nRoute 6             Kanto   Water   M/D/N   Horde       30-35   -\nRoute 6             Kanto   S.Rod   M/D/N   Rare        25-40   -\n```');
    	message.author.send('```md\nRoute 10            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 11            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 12            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 13            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 17            Kanto   Grass   M/D/N   Uncommon    24-28   -\nRoute 19            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 20            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 21            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 22            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 22            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 23            Kanto   Water   M/D/N   V.Common    30-40   -\nRoute 23            Kanto   Water   M/D/N   Horde       30-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 24            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 25            Kanto   S.Rod   M/D/N   Rare        25-40   -\n```');
    	message.author.send('```md\nRuin Valley         Kanto   Grass   M/D/N   Rare        50-52   -\nRuin Valley         Kanto   S.Rod   M/D/N   Rare        25-40   -\nS.S. Anne           Kanto   S.Rod   M/D/N   Rare        25-40   -\nSafari Zone         Kanto   Water   M/D/N   V.Common    30-35   -\nSafari Zone         Kanto   S.Rod   M/D/N   Rare        25-40   -\nSeafoam Islands     Kanto   Cave    M/D/N   Horde       26-28   -\nSeafoam Islands     Kanto   Cave    M/D/N   Common      26-32   -\nSeafoam Islands     Kanto   Water   M/D/N   Uncommon    30-40   -\nSeafoam Islands     Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nSeafoam Islands     Kanto   S.Rod   M/D/N   Rare        25-40   -\nTabony Ruins        Kanto   S.Rod   M/D/N   Rare        25-40   -\nTrainer Tower       Kanto   S.Rod   M/D/N   Rare        25-40   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    36-38   -\nTreasure Beach      Kanto   S.Rod   M/D/N   Rare        25-40   -\nVermilion City      Kanto   S.Rod   M/D/N   Rare        25-40   -\nViridian City       Kanto   Water   M/D/N   Common      30-35   -\nViridian City       Kanto   S.Rod   M/D/N   Rare        25-40   -\nWater Labyrinth     Kanto   S.Rod   M/D/N   Rare        25-40   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\nWater Path          Kanto   S.Rod   M/D/N   Rare        25-40   -\n```');
    	message.author.send('```md\nSafari Zone         Hoenn   Grass   M/D/N   Rare        27-29   -\nSafari Zone         Hoenn   Water   M/D/N   V.Common    25-30   -\nRoute 3             Unova   Grass   M/D/N   Special     12-14   -\nStriaton City       Unova   Water   M/D/N   Special     30-34   -\nCelestic Town       Sinnoh  Water   M/D/N   V.Common    20-35   -\nCelestic Town       Sinnoh  Water   M/D/N   Horde       20-35   -\nEterna City         Sinnoh  Water   M/D/N   V.Common    20-35   -\nEterna City         Sinnoh  Water   M/D/N   Horde       20-35   -\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-29   -\nGreat Marsh         Sinnoh  Water   M/D/N   V.Rare      20-30   -\nLake Acuity         Sinnoh  Water   M/D/N   V.Common    20-30   -\nLake Acuity         Sinnoh  Water   M/D/N   Horde       20-30   -\nLake Acuity         Sinnoh  Grass   M/D/N   Rare        38      -\nLake Valor          Sinnoh  Grass   M/D/N   Common      38-39   -\nLake Valor          Sinnoh  Water   M/D/N   V.Common    20-30   -\nLake Valor          Sinnoh  Water   M/D/N   Horde       20-30   -\nLake Verity         Sinnoh  Water   M/D/N   V.Common    20-30   -\nLake Verity         Sinnoh  Water   M/D/N   Horde       20-30   -\nOreburgh Gate       Sinnoh  Cave    M/D/N   V.Common    5-10    -\nOreburgh Gate       Sinnoh  Cave    M/D/N   Horde       6-7     -\nOreburgh Gate       Sinnoh  Water   M/D/N   V.Common    20-30   -\nOreburgh Gate       Sinnoh  Water   M/D/N   Horde       20-30   -\nRavaged Path        Sinnoh  Cave    M/D/N   V.Common    4-6     -\nRavaged Path        Sinnoh  Water   M/D/N   V.Common    20-30   -\nResort Area         Sinnoh  Water   M/D/N   Uncommon    35-45   -\n```');
    	message.author.send('```md\nRoute 203           Sinnoh  Water   M/D/N   V.Common    20-35   -\nRoute 203           Sinnoh  Water   M/D/N   Horde       20-35   -\nRoute 204           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 204           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 205           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 205           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 208           Sinnoh  Water   M/D/N   Uncommon    18-19   -\nRoute 208           Sinnoh  Grass   M/D/N   Horde       16-17   -\nRoute 208           Sinnoh  Grass   M/D/N   V.Common    20-30   -\nRoute 208           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 209           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 209           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 210           Sinnoh  Grass   M/D/N   Uncommon    27-28   -\nRoute 210           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 210           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 212           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 212           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 214           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 214           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 225           Sinnoh  Water   M/D/N   Uncommon    35-45   -\nTwinleaf Town       Sinnoh  Water   M/D/N   V.Common    20-35   -\nTwinleaf Town       Sinnoh  Water   M/D/N   Horde       20-35   -\n```');
  	}
// Pokedex : 055
    if (message.content.toLowerCase() === '?golduck') {
    	message.author.send('```md\nGolduck\n> PokeDex Number : 055\n> Egg Group : Water A , Field\n> Evolution : Psyduck → Golduck (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Water   M/D/N   Uncommon    33-40   -\nBerry Forest        Kanto   Water   M/D/N   Horde       33-40   -\nCape Brink          Kanto   Grass   M/D/N   Rare        41-43   -\nCape Brink          Kanto   Water   M/D/N   Common      33-40   -\nCape Brink          Kanto   Water   M/D/N   Horde       33-40   -\nCerulean Cave       Kanto   Water   M/D/N   V.Common    47-50   -\nCerulean Cave       Kanto   Water   M/D/N   Horde       47-50   -\nIcefall Cave        Kanto   Cave    M/D/N   Rare        48-50   -\nRoute 6             Kanto   Water   M/D/N   Rare        33-35   -\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        33-36   -\nSeafoam Islands     Kanto   Water   M/D/N   Rare        33-40   -\nChallengers Cave    Unova   Water   M/D/N   Special     60-65   -\nPinwheel Forest     Unova   Water   M/D/N   Special     33-40   -\n```');
    	message.author.send('```md\nRoute 3             Unova   Water   M/D/N   Special     33-40   -\nRoute 6             Unova   Water   M/D/N   Special     33-40   -\nRoute 11            Unova   Grass   M/D/N   Common      47-48   -\nRoute 11            Unova   Grass   M/D/N   Horde       45-47   -\nRoute 11            Unova   D.Grass M/D/N   Common      52-53   -\nRoute 14            Unova   Grass   M/D/N   Common      47      -\nRoute 14            Unova   D.Grass M/D/N   Common      52      -\nVictory Road        Unova   Water   M/D/N   Special     45-48   -\nVillage Bridge      Unova   Grass   M/D/N   V.Common    47-49   -\nVillage Bridge      Unova   D.Grass M/D/N   V.Common    52-54   -\nVillage Bridge      Unova   Water   M/D/N   Special     60-65   -\nWellspring Cave     Unova   Water   M/D/N   Special     33-40   -\nCelestic Town       Sinnoh  Water   M/D/N   Uncommon    33-35   -\nEterna City         Sinnoh  Water   M/D/N   Uncommon    33-35   -\nLake Acuity         Sinnoh  Water   M/D/N   Uncommon    33-40   -\nLake Acuity         Sinnoh  Grass   M/D/N   Uncommon    38-40   -\nLake Valor          Sinnoh  Grass   M/D/N   Uncommon    40-41   -\nLake Valor          Sinnoh  Water   M/D/N   Uncommon    33-40   -\nLake Verity         Sinnoh  Water   M/D/N   Uncommon    33-40   -\nOreburgh Gate       Sinnoh  Water   M/D/N   Rare        33-40   -\nRavaged Path        Sinnoh  Water   M/D/N   Rare        33-40   -\nResort Area         Sinnoh  Water   M/D/N   V.Common    40-55   -\nResort Area         Sinnoh  Water   M/D/N   Horde       35-55   -\n```');
    	message.author.send('```md\nRoute 203           Sinnoh  Water   M/D/N   Uncommon    33-35   -\nRoute 204           Sinnoh  Water   M/D/N   Uncommon    33-40   -\nRoute 205           Sinnoh  Water   M/D/N   Rare        33-40   -\nRoute 208           Sinnoh  Water   M/D/N   Uncommon    33-40   -\nRoute 209           Sinnoh  Water   M/D/N   Uncommon    33-40   -\nRoute 210           Sinnoh  Water   M/D/N   Uncommon    33-40   -\nRoute 212           Sinnoh  Water   M/D/N   Uncommon    33-40   -\nRoute 214           Sinnoh  Water   M/D/N   Uncommon    33-40   -\nRoute 225           Sinnoh  Water   M/D/N   V.Common    40-55   -\nRoute 225           Sinnoh  Water   M/D/N   Horde       35-55   -\nRoute 226           Sinnoh  Grass   M/D/N   Uncommon    51-53   -\nRoute 230           Sinnoh  Grass   M/D/N   Uncommon    52      -\nSendoff Spring      Sinnoh  Grass   M/D/N   Uncommon    38-40   -\nSendoff Spring      Sinnoh  Water   M/D/N   V.Common    33-40   -\nSendoff Spring      Sinnoh  Water   M/D/N   Horde       33-40   -\nTwinleaf Town       Sinnoh  Water   M/D/N   Uncommon    33-35   -\n```');
  	}
// Pokedex : 056
    if (message.content.toLowerCase() === '?mankey') {
    	message.channel.send('```md\nMankey\n> PokeDex Number : 056\n> Egg Group : Field\n> Evolution : Mankey → Primeape (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nRock Tunnel         Kanto   Cave    M/D/N   Uncommon    16-17   -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    7       -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    10-12   -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 5             Kanto   Grass   M/D/N   Horde       10-11   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 8             Kanto   Grass   M/D/N   Rare        18-20   -\nRoute 9             Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 22            Kanto   Grass   M/D/N   Common      3-5     -\nRoute 23            Kanto   Grass   M/D/N   Uncommon    38-42   -\n```');
  	}
// Pokedex : 057
    if (message.content.toLowerCase() === '?primeape') {
    	message.channel.send('```md\nPrimeape\n> PokeDex Number : 057\n> Egg Group : Field\n> Evolution : Mankey → Primeape (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   V.Rare      54-56   -\nRoute 23            Kanto   Grass   M/D/N   Horde       38-39   -\nRoute 23            Kanto   Grass   M/D/N   Uncommon    42      -\nVictory Road        Kanto   Cave    M/D/N   V.Rare      42      -\n```');
  	}
// Pokedex : 058
    if (message.content.toLowerCase() === '?growlithe') {
    	message.channel.send('```md\nGrowlithe\n>PokeDex Number : 058\n> Egg Group : Field\n> Evolution : Growlithe → Arcanine (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    30-32   -\nPokemon Mansion     Kanto   Inside  M/D     Horde       28-30   -\nRoute 5             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    19-22   -\nRoute 7             Kanto   Grass   D       Horde       15-17   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    19-22   -\nRoute 8             Kanto   Grass   M/D     Horde       15-17   -\n```');
  	}
// Pokedex : 059
    if (message.content.toLowerCase() === '?arcanine') {
    	message.channel.send('```md\nArcanine\n>PokeDex Number : 059\n> Egg Group : Field\n> Evolution : Growlithe → Arcanine (Use Firestone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 060
    if (message.content.toLowerCase() === '?poliwag') {
    	message.author.send('```md\nPoliwag\n> PokeDex Number : 060\n> Egg Group : Water A\n> Evolution 1 : Poliwag → Poliwhirl (Lv.25) → Poliwrath (Use Waterstone)\n> Evolution 2 : Poliwag → Poliwhirl (Lv.25) → Politoed (Hold Kings Rock + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   G.Rod   M/D/N   V.Common    10-25   -\nCape Brink          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nCape Brink          Kanto   S.Rod   M/D/N   V.Common    25-40   -\nCerulean Cave       Kanto   G.Rod   M/D/N   V.Common    10-25   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nCerulean City       Kanto   G.Rod   M/D/N   Common      10-25   -\nFour Island         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nFour Island         Kanto   S.Rod   M/D/N   V.Common    25-40   -\nFuuchsia City       Kanto   G.Rod   M/D/N   V.Common    10-25   -\nIcefall Cave        Kanto   G.Rod   M/D/N   V.Common    10-25   -\nIcefall Cave        Kanto   S.Rod   M/D/N   V.Common    25-40   -\n```');
    	message.author.send('```md\nRoute 4             Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 6             Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 6             Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 6             Kanto   S.Rod   M/D/N   V.Common    25-40   -\nRoute 10            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 11            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 12            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 13            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 22            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 22            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 22            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 22            Kanto   S.Rod   M/D/N   V.Common    25-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 25            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 25            Kanto   S.Rod   M/D/N   Common      25-40   -\n```');
    	message.author.send('```md\nRuin Valley         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRuin Valley         Kanto   S.Rod   M/D/N   V.Common    25-40   -\nSafari Zone         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nViridian City       Kanto   Water   M/D/N   V.Common    30-35   -\nViridian City       Kanto   Water   M/D/N   Horde       30-35   -\nViridian City       Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nViridian City       Kanto   G.Rod   M/D/N   V.Common    10-25   -\nViridian City       Kanto   S.Rod   M/D/N   Common      25-40   -\nChallengers Cave    Unova   S.Rod   M/D/N   V.Common    35-55   -\nGiant Chasm         Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 6             Unova   S.Rod   M/D/N   V.Common    35-55   -\nVictory Road        Unova   S.Rod   M/D/N   V.Common    35-55   -\nWellspring Cave     Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 225           Sinnoh  G.Rod   M/D/N   Common      10-25   -\nRoute 227           Sinnoh  Water   M/D/N   V.Common    20-36   -\nRoute 228           Sinnoh  Water   M/D/N   V.Common    35-45   -\n```');
  	}
// Pokedex : 061
    if (message.content.toLowerCase() === '?poliwhirl') {
    	message.channel.send('```md\nPoliwhirl\n> PokeDex Number : 061\n> Egg Group : Water A\n> Evolution 1 : Poliwag → Poliwhirl (Lv.25) → Poliwrath (Use Waterstone)\n> Evolution 2 : Poliwag → Poliwhirl (Lv.25) → Politoed (Hold Kings Rock + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCape Brink          Kanto   S.Rod   M/D/N   V.Common    25-40   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Common      25-40   -\nFour Island         Kanto   S.Rod   M/D/N   V.Common    25-40   -\nIcefall Cave        Kanto   S.Rod   M/D/N   V.Common    25-40   -\nRoute 6             Kanto   S.Rod   M/D/N   V.Common    25-40   -\nRoute 10            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 22            Kanto   Water   M/D/N   Common      30-35   -\nRoute 22            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 22            Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 25            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRuin Valley         Kanto   S.Rod   M/D/N   V.Common    25-40   -\nViridian City       Kanto   Water   M/D/N   Common      30-35   -\nViridian City       Kanto   S.Rod   M/D/N   Common      25-40   -\n```');
    	message.channel.send('```md\nChallengers Cave    Unova   S.Rod   M/D/N   Rare        35-55   -\nChallengers Cave    Unova   Fishing M/D/N   Special     55-60   -\nGiant Chasm         Unova   S.Rod   M/D/N   Rare        35-55   -\nGiant Chasm         Unova   Fishing M/D/N   Special     35-70   -\nPinwheel Forest     Unova   Fishing M/D/N   Special     55-60   -\nRoute 3             Unova   Fishing M/D/N   Special     55-60   -\nRoute 6             Unova   S.Rod   M/D/N   Rare        35-55   -\nRoute 6             Unova   Fishing M/D/N   Special     55-60   -\nVictory Road        Unova   S.Rod   M/D/N   Rare        35-55   -\nVictory Road        Unova   Fishing M/D/N   Special     55-60   -\nWellspring Cave     Unova   S.Rod   M/D/N   Uncommon    35-55   -\nWellspring Cave     Unova   Fishing M/D/N   Special     35-60   -\nRoute 225           Sinnoh  Water   M/D/N   Common      40-50   -\nRoute 225           Sinnoh  S.Rod   M/D/N   Common      30-40   -\nRoute 227           Sinnoh  Water   M/D/N   V.Common    37-55   -\nRoute 227           Sinnoh  Water   M/D/N   Horde       37-55   -\nRoute 228           Sinnoh  Water   M/D/N   V.Common    40-55   -\nRoute 228           Sinnoh  Water   M/D/N   Horde       35-55   -\n```');
  	}
// Pokedex : 062
    if (message.content.toLowerCase() === '?poliwrath') {
    	message.channel.send('```md\nPoliwrath\n> PokeDex Number : 062\n> Egg Group : Water A\n> Evolution 1 : Poliwag → Poliwhirl (Lv.25) → Poliwrath (Use Waterstone)\n> Evolution 2 : Poliwag → Poliwhirl (Lv.25) → Politoed (Hold Kings Rock + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave    Unova   Fishing M/D/N   Special     55-60   -\nGiant Chasm         Unova   Fishing M/D/N   Special     45-70   -\nVictory Road        Unova   Fishing M/D/N   Special     55-60   -\nWellspring Cave     Unova   Fishing M/D/N   Special     35-60   -\n```');
  	}
// Pokedex : 063
    if (message.content.toLowerCase() === '?abra') {
    	message.channel.send('```md\nAbra\n> PokeDex Number : 063\n> Egg Group : Humanoid\n> Evolution : Abra → Kadabra (Lv.16) → Alakazam (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 7             Kanto   Grass   M/D/N   Rare        17-18   -\nRoute 8             Kanto   Grass   M/D/N   Rare        17-18   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12      -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12      -\nGranite Cave        Hoenn   Cave    M/D/N   Uncommon    10-13   -\nRoute 116           Hoenn   Grass   M/D/N   Uncommon    7       -\nRoute 203           Sinnoh  Grass   M/D/N   Uncommon    4-5     -\nRoute 215           Sinnoh  Grass   M/D/N   Uncommon    19-20   -\n```');
  	}
// Pokedex : 064
    if (message.content.toLowerCase() === '?kadabra') {
    	message.channel.send('```md\nKadabra\n> PokeDex Number : 064\n> Egg Group : Humanoid\n> Evolution : Abra → Kadabra (Lv.16) → Alakazam (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Uncommon    55-60   -\nCerulean Cave       Kanto   Cave    M/D/N   Horde       56-58   -\nRoute 7             Kanto   Grass   M/D/N   Rare        18-20   -\nRoute 8             Kanto   Grass   M/D/N   Rare        18-20   -\nRoute 215           Sinnoh  Grass   M/D/N   Rare        21-22   -\nVictory Road        Sinnoh  Cave    M/D/N   Rare        45-47   -\nVictory Road        Sinnoh  Cave    M/D/N   Horde       43-45   -\n```');
  	}
// Pokedex : 065
    if (message.content.toLowerCase() === '?alakazam') {
    	message.channel.send('```md\nAlakazam\n> PokeDex Number : 065\n> Egg Group : Humanoid\n> Evolution : Abra → Kadabra (Lv.16) → Alakazam (Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 066
    if (message.content.toLowerCase() === '?machop') {
    	message.channel.send('```md\nMachop\n> PokeDex Number : 066\n> Egg Group : Humanoid\n> Evolution : Machop → Machoke (Lv.28) → Machamp (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Ember            Kanto   Cave    M/D/N   V.Common    38-48   -\nMt.Ember            Kanto   Cave    M/D/N   Horde       38-40   -\nMt.Ember            Kanto   Grass   M/D/N   Common      38-40   -\nRock Tunnel         Kanto   Cave    M/D/N   Uncommon    16-17   -\nVictory Road        Kanto   Cave    M/D/N   Rare        42-46   -\nFiery Path          Hoenn   Cave    M/D/N   Rare        15-16   -\nJagged Pass         Hoenn   Grass   M/D/N   Common      20-22   -\nJagged Pass         Hoenn   Grass   M/D/N   Horde       18-20   -\nRoute 112           Hoenn   Grass   M/D/N   Common      14-16   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Rare        16-20   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       13      -\nRoute 206           Sinnoh  Grass   M/D/N   Uncommon    17-19   -\nRoute 207           Sinnoh  Grass   M/D/N   V.Common    5-8     -\nRoute 208           Sinnoh  Grass   M/D/N   Uncommon    18-19   -\nRoute 210           Sinnoh  Grass   M/D/N   Rare        28-29   -\nRoute 211           Sinnoh  Grass   M/D/N   Uncommon    14-15   -\n```');
  	}
// Pokedex : 067
    if (message.content.toLowerCase() === '?machoke') {
    	message.channel.send('```md\nMachoke\n> PokeDex Number : 067\n> Egg Group : Humanoid\n> Evolution : Machop → Machoke (Lv.28) → Machamp (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nMt.Ember            Kanto   Cave    M/D/N   Rare        40-48   -\nMt.Ember            Kanto   Cave    M/D/N   Horde       38-46   -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-48   -\nVictory Road        Kanto   Cave    M/D/N   Horde       42-44   -\nAcuity Lakefront    Sinnoh  Grass   M/D     Uncommon    35-36   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Uncommon    35-41   -\nMt.Coronet          Sinnoh  Grass   M/D/N   Rare        39-40   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       37      -\nRoute 210           Sinnoh  Grass   M/D/N   Rare        29-30   -\nRoute 211           Sinnoh  Grass   M/D/N   Rare        29-30   -\nRoute 211           Sinnoh  Grass   M/D/N   Horde       28      -\nRoute 216           Sinnoh  Grass   M/D/N   Rare        33-34   -\nRoute 217           Sinnoh  Grass   M/D     Rare        35-36   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    51      -\nRoute 226           Sinnoh  Grass   M/D/N   Uncommon    53      -\nStark Mountain      Sinnoh  Cave    M/D/N   Rare        56-58   -\nVictory Road        Sinnoh  Cave    M/D/N   Common      44-52   -\n```');
  	}
// Pokedex : 068
    if (message.content.toLowerCase() === '?machamp') {
    	message.channel.send('```md\nMachamp\n> PokeDex Number : 068\n> Egg Group : Humanoid\n> Evolution : Machop → Machoke (Lv.28) → Machamp (Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 069
    if (message.content.toLowerCase() === '?bellsprout') {
    	message.channel.send('```md\nBellsprout\n> PokeDex Number : 069\n> Egg Group : Plant\n> Evolution : Bellsprout → Weepibell (Lv.21) → Victreebel (Use Leafstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Rare        41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nCape Brink          Kanto   Grass   M/D/N   Rare        39-41   -\nRoute 2             Kanto   Grass   M/D/N   Uncommon    3-4     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 13            Kanto   Grass   M/D     Horde       22-23   -\nRoute 14            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 15            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/D     Horde       8-10    -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    4-6     -\nWater Path          Kanto   Grass   M/D/N   Rare        48-50   -\nRoute 224           Sinnoh  Grass   M/D     Uncommon    49      -\nRoute 229           Sinnoh  Grass   M/D/N   Rare        47-50   -\nRoute 230           Sinnoh  Grass   M/D     Uncommon    47      -\n```');
  	}
// Pokedex : 070
    if (message.content.toLowerCase() === '?weepibell') {
    	message.channel.send('```md\nWeepibell\n> PokeDex Number : 070\n> Egg Group : Plant\n> Evolution : Bellsprout → Weepibell (Lv.21) → Victreebel (Use Leafstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    42-44   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    30      -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    30-32   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 224           Sinnoh  Grass   M/D     Rare        53      -\nRoute 229           Sinnoh  Grass   M/D/N   Uncommon    51-52   -\nRoute 230           Sinnoh  Grass   M/D/N   Rare        50      -\n```');
  	}
// Pokedex : 071
    if (message.content.toLowerCase() === '?victreebel') {
    	message.channel.send('```md\nVictreebel\n> PokeDex Number : 071\n> Egg Group : Plant\n> Evolution : Bellsprout → Weepibell (Lv.21) → Victreebel (Use Leafstone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 072
    if (message.content.toLowerCase() === '?tentacool') {
    	message.author.send('```md\nTentacool\n> PokeDex Number : 072\n> Egg Group : Water C\n> Evolution : Tentacool → Tentacruel (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   Water   M/D/N   V.Common    30-40   -\nBond Bridge         Kanto   Water   M/D/N   Horde       30-40   -\nCerulean City       Kanto   Water   M/D/N   Common      30-35   -\nCinnabar Island     Kanto   Water   M/D/N   V.Common    30-35   -\nCinnabar Island     Kanto   Water   M/D/N   Horde       30-35   -\nCinnabar Island     Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nFive Island         Kanto   Water   M/D/N   V.Common    40-50   -\nFive Isle Meadow    Kanto   Water   M/D/N   V.Common    40-50   -\nGreen Path          Kanto   Water   M/D/N   V.Common    40-50   -\nIcefall Cave        Kanto   Water   M/D/N   Common      40-50   -\nIcefall Cave        Kanto   Water   M/D/N   Horde       40-50   -\nKindle Road         Kanto   Water   M/D/N   V.Common    30-40   -\nKindle Road         Kanto   Water   M/D/N   Horde       30-40   -\nMemorial Pillar     Kanto   Water   M/D/N   V.Common    40-50   -\nOne Island          Kanto   Water   M/D/N   V.Common    30-40   -\nOne Island          Kanto   Water   M/D/N   Horde       30-40   -\nOutcast Island      Kanto   Water   M/D/N   V.Common    40-50   -\nPallet Town         Kanto   Water   M/D/N   V.Common    30-35   -\nPallet Town         Kanto   Water   M/D/N   Horde       30-35   -\nPallet Town         Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nPallet Town         Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nResort Gorgeous     Kanto   Water   M/D/N   V.Common    40-50   -\n```');
    	message.author.send('```md\nRoute 4             Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 4             Kanto   Water   M/D/N   Horde       30-35   -\nRoute 10            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 11            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 11            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 11            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 12            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 12            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 12            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 12            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 13            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 13            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 13            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 13            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 19            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 19            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 20            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 20            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 20            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 20            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 21            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 21            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 21            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 21            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 24            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 24            Kanto   Water   M/D/N   Horde       30-35   -\n```');
    	message.author.send('```md\nS.S. Anne           Kanto   Water   M/D/N   V.Common    30-35   -\nS.S. Anne           Kanto   Water   M/D/N   Horde       30-35   -\nS.S. Anne           Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nS.S. Anne           Kanto   S.Rod   M/D/N   Rare        25-40   -\nTanoby Ruins        Kanto   Water   M/D/N   V.Common    40-50   -\nTrainer Tower       Kanto   Water   M/D/N   V.Common    40-50   -\nTrasure Beach       Kanto   G.Rod   M/D/N   V.Common    30-40   -\nVermilion City      Kanto   Water   M/D/N   V.Common    30-35   -\nVermilion City      Kanto   Water   M/D/N   Horde       30-35   -\nVermilion City      Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nVermilion City      Kanto   S.Rod   M/D/N   Rare        25-40   -\nViridian City       Kanto   S.Rod   M/D/N   Rare        25-40   -\nWater Labyrinth     Kanto   Water   M/D/N   V.Common    40-50   -\nWater Path          Kanto   Water   M/D/N   V.Common    40-50   -\nAbandoned Ship      Hoenn   Water   M/D/N   V.Common    20-30   -\nAbandoned Ship      Hoenn   Water   M/D/N   Horde       20-30   -\nAbandoned Ship      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nAbandoned Ship      Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nAbandoned Ship      Hoenn   S.Rod   M/D/N   V.Common    30-40   -\n```');
    	message.author.send('```md\nAqua Hideout        Hoenn   Water   M/D/N   V.Common    20-30   -\nAqua Hideout        Hoenn   O.Rod   M/D/N   V.Common    5       -\nAqua Hideout        Hoenn   G.Rod   M/D/N   V.Common    25      -\nAqua Hideout        Hoenn   Water   M/D/N   V.Common    25-30   -\nAqua Hideout        Hoenn   Water   M/D/N   Horde       25-30   -\nAqua Hideout        Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nAqua Hideout        Hoenn   G.Rod   M/D/N   Common      15-30   -\nBattle Frontier     Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nBattle Frontier     Hoenn   G.Rod   M/D/N   Common      15-30   -\nDewford Town        Hoenn   Water   M/D/N   Horde       20-30   -\nDewford Town        Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nDewford Town        Hoenn   G.Rod   M/D/N   Common      15-30   -\nDewford Town        Hoenn   Water   M/D/N   V.Common    20-30   -\nEver Grande City    Hoenn   Water   M/D/N   V.Common    30-40   -\nEver Grande City    Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nLilycove City       Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nLilycove City       Hoenn   G.Rod   M/D/N   Common      15-30   -\nLilycove City       Hoenn   Water   M/D/N   V.Common    25-30   -\nMossdeep City       Hoenn   Water   M/D/N   V.Common    25-35   -\nMossdeep City       Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nMossdeep City       Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nPacifidog Town      Hoenn   Water   M/D/N   V.Common    30-40   -\nPacifidog Town      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nPacifidog Town      Hoenn   G.Rod   M/D/N   Common      15-30   -\n```');
    	message.author.send('```md\nRoute 103           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 103           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 103           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 105           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 105           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 105           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 106           Hoenn   Water   M/D/N   Horde       20-30   -\nRoute 106           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 106           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 106           Hoenn   Water   M/D/N   Common      20-30   -\nRoute 107           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 107           Hoenn   O.Rod   M/D/N   Horde       5-15    -\nRoute 107           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 107           Hoenn   Water   M/D/N   Common      20-30   -\nRoute 108           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 108           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 108           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 109           Hoenn   Water   M/D/N   Horde       20-30   -\nRoute 109           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 109           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 109           Hoenn   Water   M/D/N   V.Common    20-30   -\n```');
    	message.author.send('```md\nRoute 110           Hoenn   Water   M/D/N   Horde       20-30   -\nRoute 110           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 110           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 110           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 115           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 115           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 115           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 118           Hoenn   Water   M/D/N   Horde       20-30   -\nRoute 118           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 118           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 118           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 119           Hoenn   Water   M/D/N   Horde       20-30   -\nRoute 119           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 119           Hoenn   Water   M/D/N   V.Common    20-30   -\nRoute 121           Hoenn   Water   M/D/N   Horde       25-30   -\nRoute 121           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 121           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 121           Hoenn   Water   M/D/N   V.Common    25-30   -\nRoute 122           Hoenn   Water   M/D/N   Horde       25-30   -\nRoute 122           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 122           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 122           Hoenn   Water   M/D/N   V.Common    25-30   -\n```');
    	message.author.send('```md\nRoute 124           Hoenn   Water   M/D/N   V.Common    25-30   -\nRoute 124           Hoenn   Water   M/D/N   Horde       25-30   -\nRoute 124           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 124           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 125           Hoenn   Water   M/D/N   V.Common    25-35   -\nRoute 125           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 125           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 126           Hoenn   Water   M/D/N   V.Common    30-35   -\nRoute 126           Hoenn   Water   M/D/N   Horde       30-35   -\nRoute 126           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 126           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 127           Hoenn   Water   M/D/N   V.Common    25-35   -\nRoute 127           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 127           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 128           Hoenn   Water   M/D/N   V.Common    30-35   -\nRoute 128           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 129           Hoenn   Water   M/D/N   V.Common    30-40   -\nRoute 129           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 129           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 130           Hoenn   Water   M/D/N   V.Common    30-40   -\nRoute 130           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 130           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 131           Hoenn   Water   M/D/N   V.Common    30-40   -\nRoute 131           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 131           Hoenn   G.Rod   M/D/N   Common      15-30   -\n```');
    	message.author.send('```md\nRoute 132           Hoenn   Water   M/D/N   V.Common    30-40   -\nRoute 132           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 132           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 133           Hoenn   Water   M/D/N   V.Common    30-40   -\nRoute 133           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 133           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 134           Hoenn   Water   M/D/N   Horde       20-30   -\nRoute 134           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 134           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 134           Hoenn   Water   M/D/N   V.Common    20-30   -\nSeafllor Cavern     Hoenn   Water   M/D/N   Uncommon    30-35   -\nSeafllor Cavern     Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSeafllor Cavern     Hoenn   G.Rod   M/D/N   Common      15-30   -\nSealed Chamber      Hoenn   Water   M/D/N   Uncommon    30-40   -\nSealed Chamber      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSealed Chamber      Hoenn   G.Rod   M/D/N   Common      15-30   -\nShoal Cave          Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nShoal Cave          Hoenn   G.Rod   M/D/N   Common      15-30   -\nShoal Cave          Hoenn   Water   M/D/N   V.Common    30-35   -\nSlateport City      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSlateport City      Hoenn   G.Rod   M/D/N   Common      15-30   -\nSlateport City      Hoenn   Water   M/D/N   V.Common    20-30   -\n```');
    	message.author.send('```md\nCanalave City       Sinnoh  Water   M/D/N   Horde       20-30   -\nCanalave City       Sinnoh  Water   M/D/N   V.Common    20-30   -\nFuego Ironworks     Sinnoh  Water   M/D/N   Horde       20-30   -\nFuego Ironworks     Sinnoh  Water   M/D/N   V.Common    20-30   -\nIron Island         Sinnoh  Water   M/D/N   V.Common    20-30   -\nPastoria City       Sinnoh  Water   M/D/N   Horde       20-30   -\nPastoria City       Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 205           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 205           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 212           Sinnoh  Water   M/D/N   Uncommon    20-30   -\nRoute 213           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 213           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 218           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 218           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 219           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 220           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 220           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 221           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 222           Sinnoh  Water   M/D/N   V.Common    30-40   -\nSunyshore City      Sinnoh  Water   M/D/N   V.Common    30-40   -\nValley Windworks    Sinnoh  Water   M/D/N   Horde       20-30   -\nValley Windworks    Sinnoh  Water   M/D/N   V.Common    20-30   -\n```');
  	}
// Pokedex : 073
    if (message.content.toLowerCase() === '?tentacruel') {
    	message.author.send('```md\nTentacruel\n> PokeDex Number : 073\n> Egg Group : Water C\n> Evolution : Tentacool → Tentacruel (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   Water   M/D/N   Uncommon    30-40   -\nBond Bridge         Kanto   Water   M/D/N   Horde       30-40   -\nCinnabar Island     Kanto   Water   M/D/N   Uncommon    30-35   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Rare        30-40   -\nFive Island         Kanto   Water   M/D/N   Uncommon    40-50   -\nFive Isle Meadow    Kanto   Water   M/D/N   Common      40-50   -\nFive Isle Meadow    Kanto   Water   N       Horde       40-50   -\nGreen Path          Kanto   Water   M/D/N   V.Common    40-50   -\nGreen Path          Kanto   Water   M/D/N   Horde       40-50   -\nIcefall Cave        Kanto   Water   M/D/N   Common      40-50   -\nIcefall Cave        Kanto   Water   M/D/N   Horde       40-50   -\nKindle Road         Kanto   Water   M/D/N   Uncommon    30-40   -\nMemorial Pillar     Kanto   Water   M/D/N   Common      40-50   -\nMemorial Pillar     Kanto   Water   N       Horde       40-50   -\nOne Island          Kanto   Water   M/D/N   Uncommon    30-40   -\nOutcast Island      Kanto   Water   M/D/N   V.Common    40-50   -\nOutcast Island      Kanto   Water   M/D/N   Horde       40-50   -\n```');
    	message.author.send('```md\nPallet Town         Kanto   Water   M/D/N   Uncommon    30-35   -\nPallet Town         Kanto   S.Rod   M/D/N   Rare        30-40   -\nResort Gorgeous     Kanto   Water   M/D/N   Common      40-50   -\nResort Gorgeous     Kanto   Water   N       Horde       40-50   -\nRoute 4             Kanto   Water   M/D/N   Rare        30-35   -\nRoute 11            Kanto   Water   M/D/N   Uncommon    30-35   -\nRoute 12            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 12            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 13            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 13            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 19            Kanto   Water   M/D/N   Uncommon    30-35   -\nRoute 20            Kanto   Water   M/D/N   Uncommon    30-35   -\nRoute 20            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 20            Kanto   S.Rod   M/D/N   Rare        30-40   -\nRoute 21            Kanto   Water   M/D/N   Uncommon    30-35   -\nRoute 21            Kanto   S.Rod   M/D/N   Rare        30-40   -\nRoute 24            Kanto   Water   M/D/N   Rare        30-35   -\n```');
    	message.author.send('```md\nS.S. Anne           Kanto   Water   M/D/N   Uncommon    30-35   -\nTanoby Ruins        Kanto   Water   M/D/N   Uncommon    40-50   -\nTanoby Ruins        Kanto   Water   M/D/N   Horde       40-50   -\nTrainer Tower       Kanto   Water   M/D/N   Uncommon    40-50   -\nTrainer Tower       Kanto   Water   M/D/N   Horde       40-50   -\nTreasure Beach      Kanto   Water   M/D/N   Uncommon    30-40   -\nTreasure Beach      Kanto   Water   M/D/N   Horde       30-40   -\nVermilion City      Kanto   Water   M/D/N   Uncommon    30-35   -\nWater Labyrinth     Kanto   Water   M/D/N   Common      40-50   -\nWater Labyrinth     Kanto   Water   M/D/N   Horde       40-50   -\nWater Path          Kanto   Water   M/D/N   V.Common    40-50   -\nWater Path          Kanto   Water   M/D/N   Horde       40-50   -\nAbandoned Ship      Hoenn   Water   M/D/N   Rare        30      -\nAbandoned Ship      Hoenn   Water   M/D/N   Horde       30      -\nAbandoned Ship      Hoenn   S.Rod   M/D/N   Common      30-40   -\nBattler Frontier    Hoenn   Water   M/D/N   V.Common    45-55   -\nBattler Frontier    Hoenn   Water   M/D/N   Horde       46-48   -\nEver Grande City    Hoenn   Water   M/D/N   Common      30-40   -\nMossdeep City       Hoenn   Water   M/D/N   Common      30-35   -\nMossdeep City       Hoenn   Water   M/D/N   Horde       30-35   -\nPacifidog Town      Hoenn   Water   M/D/N   Common      30-40   -\n```');
    	message.author.send('```md\nRoute 124           Hoenn   Water   M/D/N   Common      30      -\nRoute 125           Hoenn   Water   M/D/N   Common      30-35   -\nRoute 125           Hoenn   Water   M/D/N   Horde       30-35   -\nRoute 126           Hoenn   Water   M/D/N   Common      30-35   -\nRoute 126           Hoenn   Water   M/D/N   Horde       30-35   -\nRoute 127           Hoenn   Water   M/D/N   Common      30-35   -\nRoute 128           Hoenn   Water   M/D/N   Common      30-35   -\nRoute 129           Hoenn   Water   M/D/N   Common      30-40   -\nRoute 129           Hoenn   Water   M/D/N   Horde       30-40   -\nRoute 130           Hoenn   Water   M/D/N   Common      30-40   -\nRoute 130           Hoenn   Water   M/D/N   Horde       30-40   -\nRoute 131           Hoenn   Water   M/D/N   Common      30-40   -\nRoute 131           Hoenn   Water   M/D/N   Horde       30-40   -\nRoute 132           Hoenn   Water   M/D/N   Common      30-40   -\nRoute 132           Hoenn   Water   M/D/N   Horde       30-40   -\nRoute 133           Hoenn   Water   M/D/N   Common      30-40   -\nRoute 133           Hoenn   Water   M/D/N   Horde       30-40   -\n```');
    	message.author.send('```md\nSeafloor Cavern     Hoenn   Water   M/D/N   V.Common    30-35   -\nSeafloor Cavern     Hoenn   Water   M/D/N   Horde       30-35   -\nSealed Chamber      Hoenn   Water   M/D/N   V.Common    30-40   -\nSealed Chamber      Hoenn   Water   M/D/N   Horde       30-40   -\nShoal Cave          Hoenn   Water   M/D/N   Uncommon    30-35   -\nShoal Cave          Hoenn   Water   M/D/N   Horde       30-35   -\nCanalave City       Sinnoh  Water   M/D/N   Rare        30-40   -\nFuego Ironworks     Sinnoh  Water   M/D/N   Rare        30-40   -\nIron Island         Sinnoh  Water   M/D/N   Rare        30-40   -\nIron Island         Sinnoh  Water   M/D/N   Horde       30-40   -\nPastoria City       Sinnoh  Water   M/D/N   Rare        30-40   -\nPokemon League      Sinnoh  Water   M/D/N   Horde       30-45   -\nPokemon League      Sinnoh  Water   M/D/N   V.Common    30-50   -\n```');
    	message.author.send('```md\nRoute 205           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 212           Sinnoh  Water   M/D/N   V.Rare      30-40   -\nRoute 213           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 218           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 219           Sinnoh  Water   M/D/N   Uncommon    30-40   -\nRoute 220           Sinnoh  Water   M/D/N   Uncommon    30-40   -\nRoute 221           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 222           Sinnoh  Water   M/D/N   Uncommon    30-40   -\nRoute 223           Sinnoh  Water   M/D/N   Horde       30-40   -\nRoute 223           Sinnoh  Water   M/D/N   V.Common    30-50   -\nRoute 224           Sinnoh  Water   M/D/N   V.Common    40-55   -\nRoute 226           Sinnoh  Water   M/D/N   Rare        40-55   -\nRoute 230           Sinnoh  Water   M/D/N   Uncommon    40-55   -\nSunyshore City      Sinnoh  Water   M/D/N   Horde       30-45   -\nSunyshore City      Sinnoh  Water   M/D/N   V.Common    30-50   -\nValley Windworks    Sinnoh  Water   M/D/N   Rare        30-40   -\n```');
  	}
// Pokedex : 074
    if (message.content.toLowerCase() === '?geodude') {
    	message.author.send('```md\nGeodude\n> PokeDex Number : 074\n> Egg Group : Mineral\n> Evolution : Geodude → Graveler (Lv.25) → Golem (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nKindle Road         Kanto   Grass   M/D/N   Uncommon    36-38   -\nKindle Road         Kanto   Rocks   M/D/N   V.Common    38-40   -\nMt.Ember            Kanto   Cave    M/D/N   V.Common    38-48   -\nMt.Ember            Kanto   Rocks   M/D/N   V.Common    40-50   -\nMt.Ember            Kanto   Cave    M/D/N   Horde       38-46   -\nMt.Ember            Kanto   Grass   M/D/N   V.Common    38-40   -\nMt.Moon             Kanto   Cave    M/D/N   Uncommon    7-10    -\nMt.Moon             Kanto   Cave    M/D/N   Horde       6-7     -\nRock Tunnel         Kanto   Cave    M/D/N   Common      15-17   -\nRock Tunnel         Kanto   Cave    M/D/N   Horde       13-15   -\nRock Tunnel         Kanto   Rocks   M/D/N   V.Common    38-40   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nVictory Road        Kanto   Cave    M/D/N   Rare        42-46   -\nGranite Cave        Hoenn   Cave    M/D/N   V.Rare      10-12   -\nGranite Cave        Hoenn   Rocks   M/D/N   V.Common    15-20   -\nMagma Hideout       Hoenn   Cave    M/D/N   V.Common    27-30   -\nMagma Hideout       Hoenn   Cave    M/D/N   Horde       26-28   -\nMirage Tower        Hoenn   Rocks   M/D/N   V.Common    20-23   -\nRoute 111           Hoenn   Rocks   M/D/N   V.Common    14-16   -\nRoute 114           Hoenn   Rocks   M/D/N   V.Common    18-20   -\nRoute 115           Hoenn   Rocks   M/D/N   V.Common    18-20   -\n```');
    	message.author.send('```md\nSafari Zone         Hoenn   Rocks   M/D/N   V.Common    30-32   -\nIron Island         Sinnoh  Cave    M/D/N   Rare        29-32   -\nIron Island         Sinnoh  Cave    M/D/N   Horde       29-31   -\nManiac Tunnel       Sinnoh  Cave    M/D/N   V.Common    23-25   -\nManiac Tunnel       Sinnoh  Cave    M/D/N   Horde       23-24   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Rare        13-19   -\nMt.Coronet          Sinnoh  Rocks   M/D/N   Common      16-35   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       15-16   -\nOreburgh Gate       Sinnoh  Cave    M/D/N   Common      5-9     -\nOreburgh Gate       Sinnoh  Rocks   M/D/N   V.Common    11-13   -\nOreburgh Mine       Sinnoh  Cave    M/D/N   V.Common    6-10    -\nOreburgh Mine       Sinnoh  Rocks   M/D/N   V.Common    11-12   -\nRavaged Path        Sinnoh  Cave    M/D/N   Common      5       -\nRavaged Path        Sinnoh  Rocks   M/D/N   V.Common    12-13   -\n```');
    	message.author.send('```md\nRoute 206           Sinnoh  Grass   M/D/N   Common      16-18   -\nRoute 207           Sinnoh  Grass   M/D/N   V.Common    5-7     -\nRoute 208           Sinnoh  Rocks   M/D/N   V.Common    19-20   -\nRoute 210           Sinnoh  Grass   M/D/N   Common      19      -\nRoute 210           Sinnoh  Rocks   M/D/N   V.Common    29-30   -\nRoute 211           Sinnoh  Grass   M/D/N   Uncommon    13-14   -\nRoute 211           Sinnoh  Rocks   M/D/N   V.Common    15-16   -\nRoute 213           Sinnoh  Rocks   M/D/N   Horde       25-26   -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommon    21-22   -\nRoute 214           Sinnoh  Rocks   M/D/N   V.Common    24-25   -\nRoute 215           Sinnoh  Grass   M/D/N   Common      20-22   -\nRuin Maniac Cave    Sinnoh  Cave    M/D/N   V.Common    21-24   -\nRuin Maniac Cave    Sinnoh  Cave    M/D/N   Horde       21-23   -\nStark Mountain      Sinnoh  Cave    M/D/N   Rare        52-53   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Uncommon    25-27   -\nWayward Cave        Sinnoh  Cave    M/D/N   Common      17-20   -\nWayward Cave        Sinnoh  Grass   M/D/N   V.Common    20-21   -\n```');
  	}
// Pokedex : 075
    if (message.content.toLowerCase() === '?graveler') {
    	message.channel.send('```md\nGraveler\n> PokeDex Number : 075\n> Egg Group : Mineral\n> Evolution : Geodude → Graveler (Lv.25) → Golem (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Uncommon    54-60   -\nCerulean Cave       Kanto   Rocks   M/D/N   V.Common    50-65   -\nKindle Road         Kanto   Rocks   M/D/N   V.Common    38-42   -\nMt.Ember            Kanto   Cave    M/D/N   Rare        46-48   -\nMt.Ember            Kanto   Rocks   M/D/N   V.Common    40-50   -\nRock Tunnel         Kanto   Rocks   M/D/N   Uncommon    38-42   -\nSevault Canyon      Kanto   Rocks   M/D/N   V.Common    50-55   -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-48   -\nMagma Hideout       Hoenn   Cave    M/D/N   Uncommon    33-33   -\nMagma Hideout       Hoenn   Cave    M/D/N   Horde       26-28   -\nSeafloor Cavern     Hoenn   Rocks   M/D/N   V.Common    33-36   -\nVictory Road        Hoenn   Rocks   M/D/N   V.Common    40-45   -\nChallengers Cave    Unova   Cave    M/D/N   Uncommon    47-49   -\nChallengers Cave    Unova   Cave    M/D/N   Horde       46-47   -\nIron Island         Sinnoh  Cave    M/D/N   V.Common    31-34   -\nIron Island         Sinnoh  Cave    M/D/N   Horde       29-33   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Uncommon    32-40   -\nMt.Coronet          Sinnoh  Rocks   M/D/N   V.Common    35-42   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       37      -\n```');
    	message.channel.send('```md\nRoute 210           Sinnoh  Rocks   M/D/N   V.Common    29-30   -\nRoute 211           Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 211           Sinnoh  Rocks   M/D/N   V.Common    29-30   -\nRoute 213           Sinnoh  Rocks   M/D/N   Common      25-26   -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommon    25      -\nRoute 214           Sinnoh  Rocks   M/D/N   Uncommon    25      -\nRoute 216           Sinnoh  Grass   M/D/N   Rare        35      -\nRoute 222           Sinnoh  Rocks   M/D/N   V.Common    41-42   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    49      -\nRoute 226           Sinnoh  Grass   M/D/N   Common      49      -\nRoute 227           Sinnoh  Grass   M/D/N   Uncommon    51-53   -\nRoute 230           Sinnoh  Rocks   M/D/N   V.Common    51-52   -\nSendoff Spring      Sinnoh  Grass   M/D/N   V.Common    37-39   -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Uncommon    52-56   -\nSnowpoint Temple    Sinnoh  Rocks   M/D/N   V.Common    54-55   -\nStark Mountain      Sinnoh  Cave    M/D/N   Uncommon    55-57   -\nStark Mountain      Sinnoh  Rocks   M/D/N   V.Common    55-59   -\nStark Mountain      Sinnoh  Grass   M/D/N   Uncommon    51-56   -\nTurnback Cave       Sinnoh  Rocks   M/D/N   V.Common    55-60   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Uncommon    26-28   -\nVictory Road        Sinnoh  Cave    M/D/N   Common      40-51   -\nVictory Road        Sinnoh  Cave    M/D/N   Horde       47-49   -\nVictory Road        Sinnoh  Rocks   M/D/N   V.Common    47-48   -\n```');
  	}
// Pokedex : 076
    if (message.content.toLowerCase() === '?golem') {
    	message.channel.send('```md\nGolem\n> PokeDex Number : 076\n> Egg Group : Mineral\n> Evolution : Geodude → Graveler (Lv.25) → Golem (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Rocks   M/D/N   Common      50-65   -\nMt.Ember            Kanto   Rocks   M/D/N   Rare        48-50   -\nSevault Canyon      Kanto   Rocks   M/D/N   Common      50-55   -\nVictory Road        Hoenn   Rocks   M/D/N   Uncommon    40-45   -\nMt.Coronet          Sinnoh  Rocks   M/D/N   V.Rare      40-42   -\nRoute 230           Sinnoh  Rocks   M/D/N   Uncommon    51-52   -\nSnowpoint Temple    Sinnoh  Rocks   M/D/N   Uncommon    55-56   -\nStark Mountain      Sinnoh  Rocks   M/D/N   Uncommon    56-60   -\nTurnback Cave       Sinnoh  Rocks   M/D/N   V.Rare      60-65   -\nVictory Road        Sinnoh  Rocks   M/D/N   Uncommon    47-49   -\n```');
  	}
// Pokedex : 077
    if (message.content.toLowerCase() === '?ponyta') {
    	message.channel.send('```md\n Ponyta\n> PokeDex Number : 077\n> Egg Group : Field\n> Evolution : Ponyta → Rapidash (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nKindle Road         Kanto   Grass   M/D/N   Common      36-38   -\nKindle Road         Kanto   Grass   M/D/N   Horde       34-36   -\nMt.Ember            Kanto   Grass   M/D/N   Common      38-40   -\nPokemon Mansion     Kanto   Inside  M/D/N   Common      30-32   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-30   -\nRoute 17            Kanto   Grass   M/D/N   Uncommon    24-28   -\nRoute 22            Kanto   Grass   M/D/N   Rare        3-5     -\nRoute 7             Unova   Grass   M/D/N   Special     31-32   -\nRoute 206           Sinnoh  Grass   M/D/N   V.Common    16-17   -\nRoute 206           Sinnoh  Grass   M/D/N   Horde       14-16   -\nRoute 207           Sinnoh  Grass   M/D/N   Common      5-7     -\nRoute 210           Sinnoh  Grass   M/D/N   Common      19-21   -\nRoute 210           Sinnoh  Grass   M/D     Horde       17-19   -\nRoute 211           Sinnoh  Grass   M/D/N   Uncommon    13-29   -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommon    23-24   -\nRoute 215           Sinnoh  Grass   M/D/N   Uncommon    21-22   -\n```');
  	}
// Pokedex : 078
    if (message.content.toLowerCase() === '?rapidash') {
    	message.channel.send('```md\n Rapidash\n> PokeDex Number : 078\n> Egg Group : Field\n> Evolution : Ponyta → Rapidash (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nKindle Road         Kanto   Grass   M/D/N   Rare        40      -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    40-42   -\nMt.Ember            Kanto   Grass   M/D/N   Horde       40      -\nRoute 12            Unova   Grass   M/D/N   V.Common    49      -\nRoute 12            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 12            Unova   D.Grass M/D/N   V.Common    54      -\n```');
  	}
// Pokedex : 079
    if (message.content.toLowerCase() === '?slowpoke') {
    	message.author.send('```md\n Slowpoke\n> PokeDex Number : 079\n> Egg Group : Monster , Water A\n> Evolution 1 : Slowpoke → Slowbro (Lv.37)\n> Evolution 2 : Slowpoke → Slowking (Hold Kings Rock + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Rare        41-43   -\nBerry Forest        Kanto   Water   M/D/N   V.Common    30-40   -\nBerry Forest        Kanto   S.Rod   M/D/N   Rare        25-40   -\nBond Bridge         Kanto   Grass   M/D/N   Rare        40-42   -\nBond Bridge         Kanto   S.Rod   M/D/N   Rare        25-40   -\nCanyon Entrance     Kanto   Grass   M/D/N   Rare        48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    39-41   -\nCape Brink          Kanto   Water   M/D/N   V.Common    30-40   -\nCape Brink          Kanto   S.Rod   M/D/N   Rare        25-40   -\nCeladon City        Kanto   Water   M/D/N   V.Common    30-35   -\nCerulean Cave       Kanto   Water   M/D/N   Uncommon    47-50   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Rare        25-40   -\nCerulean City       Kanto   S.Rod   M/D/N   Rare        25-40   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Rare        25-40   -\nFive Island         Kanto   S.Rod   M/D/N   Rare        25-40   -\nFive Isle Meadow    Kanto   Grass   M/D/N   Rare        25-40   -\nFive Isle Meadow    Kanto   S.Rod   M/D/N   Uncommon    48-50   -\n```');
    	message.author.send('```md\nFour Island         Kanto   Water   M/D/N   Common      40-50   -\nFour Island         Kanto   S.Rod   M/D/N   Rare        25-40   -\nFuchsia City        Kanto   Water   M/D/N   V.Common    30-35   -\nFuchsia City        Kanto   Water   M/D/N   Horde       30-35   -\nFuchsia City        Kanto   S.Rod   M/D/N   Rare        25-40   -\nGreen Path          Kanto   S.Rod   M/D/N   Rare        25-40   -\nIcefall Cave        Kanto   Cave    M/D/N   Uncommon    48-50   -\nIcefall Cave        Kanto   Water   M/D/N   Rare        25-40   -\nIcefall Cave        Kanto   S.Rod   M/D/N   Uncommon    40-50   -\nKindle Road         Kanto   Grass   M/D/N   Rare        36-38   -\nKindle Road         Kanto   S.Rod   M/D/N   Rare        25-40   -\nMemorial Pillar     Kanto   S.Rod   M/D/N   Rare        25-40   -\nOne Island          Kanto   S.Rod   M/D/N   Rare        25-40   -\nOutcast Island      Kanto   S.Rod   M/D/N   Rare        25-40   -\nPallet Town         Kanto   S.Rod   M/D/N   Rare        25-40   -\nResort Gorgeous     Kanto   S.Rod   M/D/N   Rare        25-40   -\n```');
    	message.author.send('```md\nRoute 4             Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 6             Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 6             Kanto   Water   M/D/N   Horde       30-35   -\nRoute 6             Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 10            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 11            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 12            Kanto   Water   M/D/N   Uncommon    30-35   -\nRoute 12            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 12            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 13            Kanto   Water   M/D/N   Uncommon    30-35   -\nRoute 13            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 19            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 20            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 21            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 22            Kanto   Water   M/D/N   Common      30-35   -\nRoute 22            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 23            Kanto   Water   M/D/N   V.Common    30-40   -\nRoute 23            Kanto   Water   M/D/N   Horde       30-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 25            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 25            Kanto   S.Rod   M/D/N   Rare        25-40   -\n```');
    	message.author.send('```md\nRuin Valley         Kanto   Grass   M/D/N   Rare        50-52   -\nRuin Valley         Kanto   S.Rod   M/D/N   Rare        25-40   -\nS.S. Anne           Kanto   S.Rod   M/D/N   Rare        25-40   -\nSafari Zone         Kanto   Water   M/D/N   V.Common    30-35   -\nSafari Zone         Kanto   S.Rod   M/D/N   Rare        25-40   -\nSeafoam Islands     Kanto   Cave    M/D/N   Uncommon    26-32   -\nSeafoam Islands     Kanto   Cave    M/D/N   Horde       26-28   -\nSeafoam Islands     Kanto   Water   M/D/N   Rare        30-40   -\nSeafoam Islands     Kanto   S.Rod   M/D/N   Rare        25-40   -\nTanoby Ruins        Kanto   S.Rod   M/D/N   Rare        25-40   -\nTrainer Tower       Kanto   S.Rod   M/D/N   Rare        25-40   -\nTreasure Beach      Kanto   Grass   M/D/N   Rare        36-38   -\nTreasure Beach      Kanto   S.Rod   M/D/N   Rare        25-40   -\nVermilion City      Kanto   S.Rod   M/D/N   Rare        25-40   -\nViridian City       Kanto   Water   M/D/N   Common      30-35   -\nViridian City       Kanto   S.Rod   M/D/N   Rare        25-40   -\nWater Labyrinth     Kanto   S.Rod   M/D/N   Rare        25-40   -\nWater Path          Kanto   Grass   M/D/N   Rare        48-50   -\nWater Path          Kanto   S.Rod   M/D/N   Rare        25-40   -\nAbundant Shrine     Unova   Water   M/D/N   V.Common    35-55   -\nAbundant Shrine     Unova   Water   M/D/N   Horde       35-55   -\nAbundant Shrine     Unova   Water   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 080
    if (message.content.toLowerCase() === '?slowbro') {
    	message.channel.send('```md\n Slowbro\n> PokeDex Number : 080\n> Egg Group : Monster , Water A\n> Evolution 1 : Slowpoke → Slowbro (Lv.37)\n> Evolution 2 : Slowpoke → Slowking (Hold Kings Rock + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Water   M/D/N   Uncommon    37-40   -\nBerry Forest        Kanto   Water   M/D/N   Horde       37-40   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    41-43   -\nCape Brink          Kanto   Grass   M/D/N   Horde       38-40   -\nCape Brink          Kanto   Water   M/D/N   Common      37-40   -\nCerulean Cave       Kanto   Water   M/D/N   V.Common    47-50   -\nCerulean Cave       Kanto   Water   M/D/N   Horde       47-50   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Uncommon    37-40   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Rare        37-40   -\nIcefall Cave        Kanto   Cave    M/D/N   Rare        48-50   -\nRoute 12            Kanto   Water   M/D/N   Rare        37      -\nRoute 13            Kanto   Water   M/D/N   Rare        37      -\nRoute 23            Kanto   S.Rod   M/D/N   Uncommon    37-40   -\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        37      -\nSeafoam Islands     Kanto   Water   M/D/N   Rare        37-40   -\nAbundant Shrine     Unova   Water   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 081
    if (message.content.toLowerCase() === '?magnemite') {
    	message.channel.send('```md\n Magnemite\n> PokeDex Number : 081\n> Egg Group : Genderless\n> Evolution : Magnemite → Magneton (Lv.30) → Magnezone (Lv.Up at Magnetic Field)\n#Map                Region  Type    Time    Rarity      Level   Item\nPower Plant         Kanto   Inside  M/D/N   Uncommon    28-30   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    14-15   -\nRoute 6             Kanto   Grass   M/D/N   Horde       10-12   -\nRoute 10            Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Horde       12-13   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    14-16   -\nNew Mauville        Hoenn   Cave    M/D/N   V.Common    22-26   -\nNew Mauville        Hoenn   Grass   M/D/N   Horde       20-24   -\nRoute 110           Hoenn   Grass   M/D/N   Rare        12-13   -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Uncommon    28-30   -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommon    39      -\n```');
  	}
// Pokedex : 082
    if (message.content.toLowerCase() === '?magneton') {
    	message.channel.send('```md\n Magneton\n> PokeDex Number : 082\n> Egg Group : Genderless\n> Evolution : Magnemite → Magneton (Lv.30) → Magnezone (Lv.Up at Magnetic Field)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Uncommon    54-60   -\nPower Plant         Kanto   Inside  M/D/N   Rare        31-34   -\nRoute 222           Sinnoh  Grass   M/D/N   Rare        41      -\nVictory Road        Sinnoh  Cave    M/D/N   Rare        41-43   -\n```');
  	}
// Pokedex : 083
    if (message.content.toLowerCase() === '?farfetched') {
    	message.channel.send('```md\n Farfetched\n> PokeDex Number : 083\n> Egg Group : Flying , Field\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 12            Kanto   Grass   M/D     Rare        26-28   -\nRoute 13            Kanto   Grass   M/D     Rare        26-28   -\n```');
  	}
// Pokedex : 084
    if (message.content.toLowerCase() === '?doduo') {
    	message.channel.send('```md\n Doduo\n> PokeDex Number : 084\n> Egg Group : Flying\n> Evolution : Doduo → Dodrio (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 16            Kanto   Grass   M/D/N   Uncommon    20-25   -\nRoute 17            Kanto   Grass   M/D/N   Uncommon    24-28   -\nRoute 18            Kanto   Grass   M/D/N   Common      25-29   -\nRoute 18            Kanto   Grass   M/D     Horde       23-24   -\nRoute 22            Kanto   Grass   M/D     Uncommon    3-5     -\nSafari Zone         Kanto   Grass   M/D/N   Rare        26-28   -\nSafari Zone         Hoenn   Grass   M/D/N   Rare        27-30   -\n```');
  	}
// Pokedex : 085
    if (message.content.toLowerCase() === '?dodrio') {
    	message.channel.send('```md\n Dodrio\n> PokeDex Number : 085\n> Egg Group : Flying\n> Evolution : Doduo → Dodrio (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 18            Kanto   Grass   M/D/N   Uncommon    31      -\nSafari Zone         Hoenn   Grass   M/D/N   V.Rare      28-30   -\n```');
  	}
// Pokedex : 086
    if (message.content.toLowerCase() === '?seel') {
    	message.channel.send('```md\n Seel\n> PokeDex Number : 086\n> Egg Group : Water A , Field\n> Evolution : Seel → Dewgong (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcefall Cave        Kanto   Water   M/D/N   Horde       40-50   -\nIcefall Cave        Kanto   Cave    M/D/N   Common      48-50   -\nIcefall Cave        Kanto   Water   M/D/N   V.Common    40-50   -\nSeafoam Islands     Kanto   Cave    M/D/N   Uncommon    28-34   -\nSeafoam Islands     Kanto   Cave    M/D/N   Horde       26-29   -\nSeafoam Islands     Kanto   Water   M/D/N   V.Common    30-40   -\nGiant Chasm         Unova   Water   M/D/N   Horde       35-55   -\nGiant Chasm         Unova   Water   M/D/N   Special     45-60   -\nGiant Chasm         Unova   Water   M/D/N   V.Common    35-55   -\nIcirus City         Unova   Water   M/D/N   Special     36-40   -\nRoute 226           Sinnoh  Water   M/D/N   Common      35-45   -\nRoute 230           Sinnoh  Water   M/D/N   Common      35-45   -\n```');
  	}
// Pokedex : 087
    if (message.content.toLowerCase() === '?dewgong') {
    	message.channel.send('```md\n Dewgong\n> PokeDex Number : 087\n> Egg Group : Water A , Field\n> Evolution : Seel → Dewgong (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcefall Cave        Kanto   Cave    M/D/N   Horde       46-48   -\nIcefall Cave        Kanto   Cave    M/D/N   Common      48-50   -\nIcefall Cave        Kanto   Water   M/D/N   Uncommon    40-50   -\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        34-36   -\nSeafoam Islands     Kanto   Water   M/D/N   Horde       34-40   -\nSeafoam Islands     Kanto   Water   M/D/N   Common      34-40   -\nGiant Chasm         Unova   Water   M/D/N   Special     35-70   -\nIcirrus City        Unova   Water   M/D/N   Special     36-40   -\nMoor of Icirrus     Unova   Water   M/D/N   Special     39-40   -\nRoute 8             Unova   Water   M/D/N   Special     39-40   -\nRoute 226           Sinnoh  Water   M/D/N   Horde       40-55   -\nRoute 226           Sinnoh  Water   M/D/N   Uncommon    40-55   -\nRoute 230           Sinnoh  Water   M/D/N   Rare        40-55   -\nVictory Road        Sinnoh  Water   M/D/N   Horde       35-55   -\nVictory Road        Sinnoh  Cave    M/D/N   Rare        50-52   -\nVictory Road        Sinnoh  Water   M/D/N   Common      35-55   -\n```');
  	}
// Pokedex : 088
    if (message.content.toLowerCase() === '?grimer') {
    	message.channel.send('```md\n Grimer\n> PokeDex Number : 088\n> Egg Group : Chaos\n> Evolution : Grimer → Muk (Lv.38)\n#Map                Region  Type    Time    Rarity      Level   Item\nCeladon City        Kanto   Water   M/D/N   Uncommon    30-35   -\nCeladon City        Kanto   Water   M/D/N   Horde       30-35   -\nCeladon City        Kanto   S.Rod   M/D/N   Rare        25-40   -\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    28-30   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       27-29   -\nPower Plant         Kanto   Inside  M/D/N   Uncommon    28-30   -\nRoute 16            Kanto   Grass   M/D/N   V.Common    20-25   -\nRoute 16            Kanto   Grass   M/D/N   Horde       19-20   -\nRoute 17            Kanto   Grass   M/D/N   V.Common    24-28   -\nRoute 18            Kanto   Grass   M/D/N   V.Common    26-28   -\nRoute 18            Kanto   Grass   N       Horde       23-24   -\nFiery Path          Hoenn   Cave    M/D/N   Uncommon    15-16   -\n```');
  	}
// Pokedex : 089
    if (message.content.toLowerCase() === '?muk') {
    	message.channel.send('```md\n Muk\n> PokeDex Number : 089\n> Egg Group : Chaos\n> Evolution : Grimer → Muk (Lv.38)\n#Map                Region  Type    Time    Rarity      Level   Item\nCeladon City        Kanto   Water   M/D/N   Rare        38      -\nPokemon Mansion     Kanto   Inside  M/D/N   Rare        38      -\nPower Plant         Kanto   Inside  M/D/N   Rare        38      -\n```');
  	}
// Pokedex : 090
    if (message.content.toLowerCase() === '?shellder') {
    	message.channel.send('```md\n Shellder\n> PokeDex Number : 090\n> Egg Group : Water C\n> Evolution : Shellder → Cloyster (Use Waterstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCinnabar Island     Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Island         Kanto   S.Rod   M/D/N   Common      25-40   -\nIcefall Cave        Kanto   S.Rod   M/D/N   Rare        25-40   -\nOne Island          Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nPallet Town         Kanto   G.Rod   M/D/N   Rare        10-25   -\nPallet Town         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 11            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 19            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 20            Kanto   G.Rod   M/D/N   Rare        10-25   -\nRoute 20            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 21            Kanto   G.Rod   M/D/N   Rare        10-25   -\nRoute 21            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nS.S. Anne           Kanto   G.Rod   M/D/N   Rare        10-25   -\nS.S. Anne           Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSeafoam Islands     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nVermilion City      Kanto   G.Rod   M/D/N   Rare        10-25   -\nVermilion City      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 13            Unova   S.Rod   M/D/N   V.Common    35-55   -\nUndella Bay         Unova   S.Rod   M/D/N   Common      35-55   -\nUndella Town        Unova   S.Rod   M/D/N   Common      35-55   -\nFuego Ironworks     Sinnoh  S.Rod   M/D/N   Uncommon    20-50   -\nRoute 205           Sinnoh  S.Rod   M/D/N   Rare        20-50   -\nValley Windworks    Sinnoh  S.Rod   M/D/N   Rare        20-40   -\n```');
  	}
// Pokedex : 091
    if (message.content.toLowerCase() === '?cloyster') {
    	message.channel.send('```md\n Cloyster\n> PokeDex Number : 091\n> Egg Group : Water C\n> Evolution : Shellder → Cloyster (Use Waterstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 13            Unova   Fishing M/D/N   Special     55-60   -\nUndella Bay         Unova   Fishing M/D/N   Special     55-60   -\nUndella Town        Unova   Fishing M/D/N   Special     55-60   -\n```');
  	}
// Pokedex : 092
    if (message.content.toLowerCase() === '?gastly') {
    	message.channel.send('```md\n Gastly\n> PokeDex Number : 092\n> Egg Group : Chaos\n> Evolution : Gastly → Haunter (Lv.25) → Gengar (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nLost Cave           Kanto   Cave    M/D/N   Common      50-52   -\nPokemon Tower       Kanto   Inside  M/D/N   V.Common    15-19   -\nPokemon Tower       Kanto   Inside  M/D/N   Horde       13-17   -\nEterna Forest       Sinnoh  Grass   M/D/N   Rare        13      -\nOld Chateau         Sinnoh  Inside  M/D/N   V.Common    15-17   -\nOld Chateau         Sinnoh  Inside  M/D/N   Horde       12-16   -\nRoute 209           Sinnoh  Cave    M/D/N   V.Common    17-22   -\nRoute 209           Sinnoh  Cave    M/D/N   Horde       17-21   -\nRoute 209           Sinnoh  Grass   N       Rare        18-20   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Common      44-54   -\n```');
  	}
// Pokedex : 093
    if (message.content.toLowerCase() === '?haunter') {
    	message.channel.send('```md\n Haunter\n> PokeDex Number : 093\n> Egg Group : Chaos\n> Evolution : Gastly → Haunter (Lv.25) → Gengar (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nLost Cave           Kanto   Cave    M/D/N   Common      50-52   -\nLost Cave           Kanto   Cave    M/D/N   Horde       48-50   -\nPokemon Tower       Kanto   Inside  M/D/N   Rare        25      -\nPokemon Tower       Kanto   Inside  M/D/N   Horde       25      -\nTurnback Cave       Sinnoh  Inside  M/D/N   Common      44-66   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Horde       46-58   -\n```');  	}
// Pokedex : 094
    if (message.content.toLowerCase() === '?gengar') {
    	message.channel.send('```md\n Gengar\n> PokeDex Number : 094\n> Egg Group : Chaos\n> Evolution : Gastly → Haunter (Lv.25) → Gengar (Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 095
    if (message.content.toLowerCase() === '?onix') {
    	message.channel.send('```md\n Onix\n> PokeDex Number : 095\n> Egg Group : Mineral\n> Evolution : Onix → Steelix (Hold Metal Coat + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Moon             Kanto   Cave    M/D/N   Rare        7-10    -\nRock Tunnel         Kanto   Cave    M/D/N   Rare        15-17   -\nRock Tunnel         Kanto   Cave    M/D/N   Horde       13-15   -\nSevault Canyon      Kanto   Grass   M/D/N   Rare        50-52   -\nVictory Road        Kanto   Cave    M/D/N   Rare        40-48   -\nVictory Road        Kanto   Cave    M/D/N   Horde       42-44   -\nRelic Castle        Unova   Cave    M/D/N   Common      47-49   -\nRelic Castle        Unova   Cave    M/D/N   Horde       45-47   -\nIron Island         Sinnoh  Cave    M/D/N   Uncommon    31-35   -\nIron Island         Sinnoh  Cave    M/D/N   Horde       29-33   -\nOreburgh Mine       Sinnoh  Cave    M/D/N   Uncommon    8-9     -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Uncommon    50-54   -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Horde       47-50   -\nStark Mountain      Sinnoh  Cave    M/D/N   Rare        54-56   -\nVictory Road        Sinnoh  Cave    M/D/N   Uncommon    41-50   -\nWayward Cave        Sinnoh  Cave    M/D/N   Uncommon    18-20   -\n```');
  	}
// Pokedex : 096
    if (message.content.toLowerCase() === '?drowzee') {
    	message.channel.send('```md\n Drowzee\n> PokeDex Number : 096\n> Egg Group : Humanoid\n> Evolution : Drowzee → Hypno (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    41-43   -\nRoute 6             Kanto   Grass   N       Uncommon    14-15   -\nRoute 6             Kanto   Grass   N       Horde       10-12   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    14-16   -\nRoute 11            Kanto   Grass   M/D/N   Horde       10-12   -\n```');
  	}
// Pokedex : 097
    if (message.content.toLowerCase() === '?hypno') {
    	message.channel.send('```md\n Hypno\n> PokeDex Number : 097\n> Egg Group : Humanoid\n> Evolution : Drowzee → Hypno (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Rare        43-45   -\nBerry Forest        Kanto   Grass   M/D/N   Horde       39-41   -\n```');
  	}
// Pokedex : 098
    if (message.content.toLowerCase() === '?krabbyy') {
    	message.author.send('```md\n Krabby\n> PokeDex Number : 098\n> Egg Group : Water C\n> Evolution : Krabyy → Kingler (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nBond Bridge         Kanto   S.Rod   M/D/N   Common      25-40   -\nCerulean City       Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nCerulean City       Kanto   G.Rod   M/D/N   Common      10-25   -\nCerulean City       Kanto   S.Rod   M/D/N   Common      25-40   -\nCinnabar Island     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Island         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nFive Island         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Isle Meadow    Kanto   G.Rod   M/D/N   V.Common    10-25   -\nFive Isle Meadow    Kanto   S.Rod   M/D/N   Common      25-40   -\nFuchsia City        Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nGreen Path          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nGreen Path          Kanto   S.Rod   M/D/N   Common      25-40   -\nIcefall Cave        Kanto   G.Rod   M/D/N   Common      10-25   -\nIcefall Cave        Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nKindle Road         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nKindle Road         Kanto   S.Rod   M/D/N   V.Common    25-40   -\n```');
    	message.author.send('```md\nMemorial Pillar     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nMemorial Pillar     Kanto   S.Rod   M/D/N   Common      25-40   -\nOne Island          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nOne Island          Kanto   S.Rod   M/D/N   Common      25-40   -\nOutcast Island      Kanto   G.Rod   M/D/N   V.Common    10-25   -\nOutcast Island      Kanto   S.Rod   M/D/N   Common      25-40   -\nPallet Town         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nPallet Town         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nResort Gorgeous     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nResort Gorgeous     Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 4             Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 4             Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 10            Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 10            Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 11            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 11            Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 12            Kanto   Grass   M/D/N   Horde       20-22   -\nRoute 12            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 12            Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    23-27   -\nRoute 13            Kanto   Grass   M/D/N   Rare        25-27   -\nRoute 13            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 13            Kanto   S.Rod   M/D/N   Common      25-40   -\n```');
    	message.author.send('```md\nRoute 19            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 19            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 19            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 20            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 20            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 21            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 21            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 24            Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 25            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nS.S. Anne           Kanto   G.Rod   M/D/N   V.Common    10-25   -\nS.S. Anne           Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSafari Zone         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSeafoam Islands     Kanto   Cave    M/D/N   Uncommon    28-32   -\nSeafoam Islands     Kanto   Cave    M/D/N   Horde       27-28   -\nSeafoam Islands     Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nSeafoam Islands     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nSeafoam Islands     Kanto   S.Rod   M/D/N   Common      25-40   -\nSeafoam Islands     Kanto   Water   M/D/N   Uncommon    30-40   -\nTanoby Ruins        Kanto   G.Rod   M/D/N   V.Common    10-25   -\nTanoby Ruins        Kanto   S.Rod   M/D/N   Common      25-40   -\nTrainer Tower       Kanto   G.Rod   M/D/N   V.Common    10-25   -\nTrainer Tower       Kanto   S.Rod   M/D/N   Common      25-40   -\n```');
    	message.author.send('```md\nTreasure Beach      Kanto   G.Rod   M/D/N   V.Common    10-25   -\nTreasure Beach      Kanto   S.Rod   M/D/N   V.Common    25-40   -\nVermilion City      Kanto   G.Rod   M/D/N   V.Common    10-25   -\nVermilion City      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nWater Labyrinth     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nWater Labyrinth     Kanto   S.Rod   M/D/N   Common      25-40   -\nWater Path          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nWater Path          Kanto   S.Rod   M/D/N   Common      25-40   -\nDriftveil City      Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 4             Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 13            Unova   S.Rod   M/D/N   V.Common    35-55   -\n```');
  	}
// Pokedex : 099
    if (message.content.toLowerCase() === '?kingler') {
    	message.channel.send('```md\n Kingler\n> PokeDex Number : 099\n> Egg Group : Water C\n> Evolution : Krabyy → Kingler (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   S.Rod   M/D/N   Uncommon    28-40   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Uncommon    28-40   -\nCerulean City       Kanto   S.Rod   M/D/N   Rare        28-40   -\nFive Island         Kanto   S.Rod   M/D/N   Rare        28-40   -\nFive Isle Meadow    Kanto   S.Rod   M/D/N   Rare        28-40   -\nGreen Path          Kanto   S.Rod   M/D/N   Rare        28-40   -\nIcefall Cave        Kanto   S.Rod   M/D/N   V.Rare      28-40   -\nKindle Road         Kanto   S.Rod   M/D/N   Rare        28-40   -\nMemorial Pillar     Kanto   S.Rod   M/D/N   Rare        28-40   -\nOne Island          Kanto   S.Rod   M/D/N   Rare        28-40   -\nOutcast Island      Kanto   S.Rod   M/D/N   Rare        28-40   -\nPallet Town         Kanto   S.Rod   M/D/N   Rare        28-40   -\nResort Gorgeous     Kanto   S.Rod   M/D/N   Rare        28-40   -\n```');
    	message.channel.send('```md\nRoute 10            Kanto   S.Rod   M/D/N   Rare        28-40   -\nRoute 12            Kanto   Grass   M/D/N   Rare        28-30   -\nRoute 13            Kanto   Grass   M/D/N   Rare        28-30   -\nRoute 19            Kanto   S.Rod   M/D/N   Rare        28-40   -\nRoute 20            Kanto   S.Rod   M/D/N   Rare        28-40   -\nRoute 21            Kanto   S.Rod   M/D/N   Rare        28-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Rare        28-40   -\nRoute 25            Kanto   S.Rod   M/D/N   Rare        28-40   -\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        25-35   -\nSeafoam Islands     Kanto   S.Rod   M/D/N   Rare        28-40   -\nSeafoam Islands     Kanto   Cave    M/D/N   Horde       28-60   -\nTanoby Ruins        Kanto   S.Rod   M/D/N   Rare        28-40   -\nTrainer Tower       Kanto   S.Rod   M/D/N   Rare        28-40   -\nTreasure Beach      Kanto   S.Rod   M/D/N   Rare        28-40   -\nWater Labyrinth     Kanto   S.Rod   M/D/N   Rare        28-40   -\nWater Path          Kanto   S.Rod   M/D/N   Rare        28-40   -\nDriftveil City      Unova   Fishing M/D/N   Special     35-70   -\nRoute 4             Unova   Fishing M/D/N   Special     55-60   -\nRoute 3             Unova   Fishing M/D/N   Special     55-60   -\n```');
  	}
// Pokedex : 100
    if (message.content.toLowerCase() === '?voltorb') {
    	message.channel.send('```md\nVoltorb\n> PokeDex Number : 100\n> Egg Group : Genderless\n> Evolution : Voltorb → Electrode (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nPower Plant         Kanto   Inside  M/D/N   Uncommon    28-30   -\nRoute 10            Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Horde       12-13   -\nNew Mauville        Hoenn   Cave    M/D/N   V.Common    22-26   -\nNew Mauville        Hoenn   Cave    M/D/N   Horde       20-24   -\nRoute 110           Hoenn   Grass   M/D/N   Rare        13      -\n```');
  	}
// Pokedex : 101
    if (message.content.toLowerCase() === '?electrode') {
    	message.channel.send('```md\nElectrode\n> PokeDex Number : 101\n> Egg Group : Genderless\n> Evolution : Voltorb → Electrode (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nPower Plant         Kanto   Inside  M/D/N   Rare        30-34   -\n```');
  	}
// Pokedex : 102
    if (message.content.toLowerCase() === '?exeggcute') {
    	message.channel.send('```md\nExeggcute\n> PokeDex Number : 102\n> Egg Group : Plant\n> Evolution : Exeggcute → Exeggutor (Use Leafstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    41-43   -\nRoute 23            Kanto   Grass   M/D/N   Uncommon    38-42   -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    26-28   -\n```');
  	}
// Pokedex : 103
    if (message.content.toLowerCase() === '?exeggutor') {
    	message.channel.send('```md\nExeggutor\n> PokeDex Number : 103\n> Egg Group : Plant\n> Evolution : Exeggcute → Exeggutor (Use Leafstone)\nNo Wild Locations Found.```');
  	}
// Pokedex : 104
    if (message.content.toLowerCase() === '?cubone') {
    	message.channel.send('```md\nCubone\n> PokeDex Number : 104\n> Egg Group : Monster\n> Evolution : Cubone → Marowak (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Tower       Kanto   Inside  M/D/N   Rare        15-19   -\nPokemon Tower       Kanto   Indise  M/D/N   Horde       13-17   -\nRock Tunnel         Kanto   Cave    M/D     Rare        15-17   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        24-26   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\n```');
  	}
// Pokedex : 105
    if (message.content.toLowerCase() === '?marowak') {
    	message.channel.send('```md\nMarowak\n> PokeDex Number : 105\n> Egg Group : Monster\n> Evolution : Cubone → Marowak (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nSafari Zone         Kanto   Grass   M/D/N   V.Rare      28-30   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nSevault Canyon      Kanto   Grass   M/D/N   Horde       48-50   -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-48   -\nVictory Road        Kanto   Cave    M/D/N   Horde       44-46   -\nRoute 15            Unova   Grass   M/D/N   V.Common    47      -\nRoute 15            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 15            Unova   D.Grass M/D/N   V.Common    52      -\n```');
  	}
// Pokedex : 106
    if (message.content.toLowerCase() === '?hitmonlee') {
    	message.channel.send('```md\nHitmonlee\n> PokeDex Number : 106\n> Egg Group : Humanoid\n> Evolution 1 : Tyrogue → Hitmonlee (Lv.20 + Atk > Def)\n> Evolution 2 : Tyrogue → Hitmonchan (Lv.20 + Atk < Def)\n> Evolution 3 : Tyrogue → Hitmontop (Lv.20 + Atk = Def)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Kanto   Cave    M/D/N   V.Rare      44      -\n```');
  	}
// Pokedex : 107
    if (message.content.toLowerCase() === '?hitmonchan') {
    	message.channel.send('```md\nHitmonchan\n> PokeDex Number : 107\n> Egg Group : Humanoid\n> Evolution 1 : Tyrogue → Hitmonlee (Lv.20 + Atk > Def)\n> Evolution 2 : Tyrogue → Hitmonchan (Lv.20 + Atk < Def)\n> Evolution 3 : Tyrogue → Hitmontop (Lv.20 + Atk = Def)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Kanto   Cave    M/D/N   Rare        44      -\n```');
  	}
// Pokedex : 108
    if (message.content.toLowerCase() === '?lickitung') {
    	message.channel.send('```md\nLickitung\n> PokeDex Number : 108\n> Egg Group : Monster\n> Evolution : Lickitung → Lickilicky (Lv.Up + Rollout)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nCerulean Cave       Kanto   Cave    M/D/N   Horde       52-54   -\nSafari Zone         Kanto   Grass   M/D/N   V.Rare      26-28   -\nChallengers Cave    Unova   Cave    M/D/N   Common      49-50   -\nChallengers Cave    Unova   Cave    M/D/N   Horde       46-47   -\nRoute 215           Sinnoh  Grass   M/D/N   Rare        20      -\n```');
  	}
// Pokedex : 109
    if (message.content.toLowerCase() === '?koffing') {
    	message.channel.send('```md\nKoffing\n> PokeDex Number : 109\n> Egg Group : Chaos\n> Evolution : Koffing → Weezing (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nCeladon City        Kanto   Water   M/D/N   Rare        30-35   -\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    28-30   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       27-29   -\nPower Plant         Kanto   Inside  M/D/N   Uncommon    28-30   -\nFiery Path          Hoenn   Cave    M/D/N   Uncommon    15-16   -\nStark Mountain      Sinnoh  Cave    M/D/N   Rare        53      -\n```');
  	}
// Pokedex : 110
    if (message.content.toLowerCase() === '?weezing') {
    	message.channel.send('```md\nWeezing\n> PokeDex Number : 110\n> Egg Group : Chaos\n> Evolution : Koffing → Weezing (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Rare        35      -\nPower Plant         Kanto   Inside  M/D/N   Rare        35      -\nRoute 227           Sinnoh  Grass   M/D/N   Uncommon    52      -\nStark Mountain      Sinnoh  Cave    M/D/N   Uncommon    55-56   -\nStark Mountain      Sinnoh  Grass   M/D/N   Uncommon    52-55   -\n```');
  	}
// Pokedex : 111
    if (message.content.toLowerCase() === '?rhyhorn') {
    	message.channel.send('```md\nRhyhorn\n> PokeDex Number : 111\n> Egg Group : Monster , Field\n> Evolution : Rhyhorn → Rhydon (Lv.42) → Rhyperior (Hold Protector + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-58   -\nRock Tunnel         Kanto   Cave    M/D/N   Rare        15-17   -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    25-28   -\nVictory Road        Kanto   Cave    M/D/N   Uncommon    42-46   -\nSafari Zone         Hoenn   Grass   M/D/N   Rare        28-30   -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommon    21-24   -\nRoute 214           Sinnoh  Grass   M/D/N   Horde       21-22   -\nRoute 227           Sinnoh  Grass   M/D/N   Rare        52      -\nStark Mountain      Sinnoh  Cave    M/D/N   V.Rare      52      -\nStark Mountain      Sinnoh  Grass   M/D/N   Rare        52      -\nVictory Road        Sinnoh  Cave    M/D/N   Rare        41      -\n```');
  	}
// Pokedex : 112
    if (message.content.toLowerCase() === '?rhydon') {
    	message.channel.send('```md\nRhydon\n> PokeDex Number : 112\n> Egg Group : Monster , Field\n> Evolution : Rhyhorn → Rhydon (Lv.42) → Rhyperior (Hold Protector + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Uncommon    54-60   -\nVictory Road        Kanto   Cave    M/D/N   Uncommon    44-48   -\nVictory Road        Kanto   Cave    M/D/N   Horde       42-44   -\nRoute 227           Sinnoh  Grass   M/D/N   Common      54      -\nRoute 228           Sinnoh  Grass   M/D/N   Common      50-52   -\nStark Mountain      Sinnoh  Cave    M/D/N   Uncommon    54-55   -\nStark Mountain      Sinnoh  Grass   M/D/N   Common      54-55   -\nVictory Road        Sinnoh  Cave    M/D/N   Rare        42-43   -\nVictory Road        Sinnoh  Cave    M/D/N   Horde       42      -\n```');
  	}
// Pokedex : 113
    if (message.content.toLowerCase() === '?chansey') {
    	message.channel.send('```md\nChansey\n> PokeDex Number : 113\n> Egg Group : Fairy\n> Evolution : Happiny → Chansey (Lv.Up + Hold Oval Stone + Day Time) → Blissey (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nSafari Zone         Kanto   Grass   M/D/N   Rare        26      -\n```');
  	}
// Pokedex : 114
    if (message.content.toLowerCase() === '?tangela') {
    	message.channel.send('```md\nTangela\n> PokeDex Number : 114\n> Egg Group : Plant\n> Evolution : Tangela → Tangrowth (Lv.Up + AncientPower)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 21            Kanto   Grass   M/D/N   V.Common    28-35   -\nRoute 21            Kanto   Grass   M/D/N   Horde       26-28   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        25-28   -\nTreasure Beach      Kanto   Grass   M/D/N   Horde       34-36   -\nTreasure Beach      Kanto   Grass   M/D/N   V.Common    36-38   -\nGiant Chasm         Unova   Grass   M/D/N   Uncommon    47-49   -\nGiant Chasm         Unova   D.Grass M/D/N   Uncommon    52-54   -\nGiant Chasm         Unova   D.Grass M/D/N   Horde       50-52   -\nRoute 13            Unova   Grass   M/D/N   Common      47-49   -\nRoute 13            Unova   D.Grass M/D/N   Common      52-54   -\nGreat Marsh         Unova   Inside  M/D/N   V.Rare      30-31   -\n```');
  	}
// Pokedex : 115
    if (message.content.toLowerCase() === '?kangaskhan') {
    	message.channel.send('```md\nKangaskhan\n> PokeDex Number : 115\n> Egg Group : Monster\n#Map                Region  Type    Time    Rarity      Level   Item\nSafari Zone         Kanto   Grass   M/D/N   V.Rare      26-28   -\n```');
  	}
// Pokedex : 116
    if (message.content.toLowerCase() === '?horsea') {
    	message.author.send('```md\nHorsea\n> PokeDex Number : 116\n> Egg Group : Water A, Dragon\n> Evolution : Horsea → Seadra (Lv.32) → Seaking (Hold Dragon Scale + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nBond Bridge         Kanto   S.Rod   M/D/N   Common      25-40   -\nCerulean City       Kanto   G.Rod   M/D/N   Common      10-25   -\nCerulean City       Kanto   S.Rod   M/D/N   Common      25-40   -\nCinnabar Island     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Island         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nFive Island         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Isle Meadow    Kanto   G.Rod   M/D/N   V.Common    10-25   -\nFive Isle Meadow    Kanto   S.Rod   M/D/N   Common      25-40   -\nGreen Path          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nGreen Path          Kanto   S.Rod   M/D/N   Common      25-40   -\nIcefall Cave        Kanto   G.Rod   M/D/N   Common      10-25   -\nIcefall Cave        Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nKindle Road         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nKindle Road         Kanto   S.Rod   M/D/N   V.Common    25-40   -\nMemorial Pillar     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nMemorial Pillar     Kanto   S.Rod   M/D/N   Common      25-40   -\nOne Island          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nOne Island          Kanto   S.Rod   M/D/N   Common      25-40   -\n```');
    	message.author.send('```md\nOutcast Island      Kanto   G.Rod   M/D/N   V.Common    10-25   -\nOutcast Island      Kanto   S.Rod   M/D/N   Common      25-40   -\nPallet Town         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nPallet Town         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nResort Gorgeous     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nResort Gorgeous     Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 4             Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 4             Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 10            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 10            Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 11            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 11            Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 12            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 12            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 13            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 13            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 19            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 19            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 20            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 20            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 21            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 21            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 24            Kanto   S.Rod   M/D/N   Common      25-40   -\n```');
    	message.author.send('```md\nS.S Anne            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nS.S Anne            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSeafoam Islands     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nSeafoam Islands     Kanto   S.Rod   M/D/N   Common      25-40   -\nSeafoam Islands     Kanto   Water   M/D/N   Uncommon    30-40   -\nTanoby Ruins        Kanto   G.Rod   M/D/N   V.Common    10-25   -\nTanoby Ruins        Kanto   S.Rod   M/D/N   Common      25-40   -\nTrainer Tower       Kanto   G.Rod   M/D/N   V.Common    10-25   -\nTrainer Tower       Kanto   S.Rod   M/D/N   Common      25-40   -\nTreasure Beach      Kanto   G.Rod   M/D/N   V.Common    10-25   -\nTreasure Beach      Kanto   S.Rod   M/D/N   V.Common    25-40   -\nVermilion City      Kanto   G.Rod   M/D/N   V.Common    10-25   -\nVermilion City      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nWater Labyrinth     Kanto   G.Rod   M/D/N   V.Common    10-25   -\nWater Labyrinth     Kanto   S.Rod   M/D/N   Common      25-40   -\nWater Path          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nWater Path          Kanto   S.Rod   M/D/N   Common      25-40   -\nRoute 130           Hoenn   S.Rod   M/D/N   Common      30-40   -\nRoute 131           Hoenn   S.Rod   M/D/N   Common      30-40   -\nRoute 132           Hoenn   S.Rod   M/D/N   Common      30-40   -\nRoute 133           Hoenn   S.Rod   M/D/N   Common      30-40   -\nRoute 134           Hoenn   S.Rod   M/D/N   Common      30-40   -\nSealed Chamber      Hoenn   S.Rod   M/D/N   Common      30-40   -\nP2 Laboratory       Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 17            Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 18            Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 226           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\n```');
  	}
// Pokedex : 117
    if (message.content.toLowerCase() === '?seadra') {
    	message.channel.send('```md\nSeadra\n> PokeDex Number : 117\n> Egg Group : Water A, Dragon\n> Evolution : Horsea → Seadra (Lv.32) → Seaking (Hold Dragon Scale + Trade\n#Map                Region  Type    Time    Rarity      Level   Item\nBond Bridge         Kanto   S.Rod   M/D/N   Uncommon    32-40   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Uncommon    32-40   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Rare        32-40   -\nFive Island         Kanto   S.Rod   M/D/N   Rare        32-40   -\nFive Isle Meadow    Kanto   S.Rod   M/D/N   Rare        32-40   -\nGreen Path          Kanto   S.Rod   M/D/N   Rare        32-40   -\nIcefall Cave        Kanto   S.Rod   M/D/N   V.Rare      32-40   -\nKindle Road         Kanto   S.Rod   M/D/N   Rare        32-40   -\nMemorial Pillar     Kanto   S.Rod   M/D/N   Rare        32-40   -\nOne Island          Kanto   S.Rod   M/D/N   Rare        32-40   -\nOutcast Island      Kanto   S.Rod   M/D/N   Rare        32-40   -\nPallet Town         Kanto   S.Rod   M/D/N   Rare        32-40   -\nResort Gorgeous     Kanto   S.Rod   M/D/N   Rare        32-40   -\nRoute 11            Kanto   S.Rod   M/D/N   Uncommon    32-40   -\nRoute 12            Kanto   S.Rod   M/D/N   Rare        32-40   -\nRoute 13            Kanto   S.Rod   M/D/N   Rare        32-40   -\nRoute 19            Kanto   S.Rod   M/D/N   Rare        32-40   -\nRoute 20            Kanto   S.Rod   M/D/N   Rare        32-40   -\nRoute 21            Kanto   S.Rod   M/D/N   Rare        32-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Rare        32-40   -\n```');
    	message.channel.send('```md\nSeafoam Islands     Kanto   S.Rod   M/D/N   Rare        32-40   -\nTanoby Ruins        Kanto   S.Rod   M/D/N   Rare        32-40   -\nTrainer Tower       Kanto   S.Rod   M/D/N   Rare        32-40   -\nTreasure Beach      Kanto   S.Rod   M/D/N   Uncommon    32-40   -\nWater Labyrinth     Kanto   S.Rod   M/D/N   Rare        32-40   -\nWater Path          Kanto   S.Rod   M/D/N   Rare        32-40   -\nRoute 130           Hoenn   S.Rod   M/D/N   Rare        32-40   -\nRoute 131           Hoenn   S.Rod   M/D/N   Rare        32-40   -\nRoute 132           Hoenn   S.Rod   M/D/N   Rare        32-40   -\nRoute 133           Hoenn   S.Rod   M/D/N   Rare        32-40   -\nRoute 134           Hoenn   S.Rod   M/D/N   Rare        32-40   -\nSealed Chamber      Hoenn   S.Rod   M/D/N   Rare        32-40   -\nP2 Laboratory       Unova   Fishing M/D/N   Special     35-60   -\nRoute 17            Unova   Fishing M/D/N   Special     55-60   -\nRoute 18            Unova   Fishing M/D/N   Special     55-60   -\nRoute 226           Sinnoh  S.Rod   M/D/N   V.Common    32-55   -\n```');
  	}
// Pokedex : 118
    if (message.content.toLowerCase() === '?goldeen') {
    	message.author.send('```md\nGoldeen\n> PokeDex Number : 118\n> Egg Group : Water B\n> Evolution : Goldeen → Seaking (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   G.Rod   M/D/N   V.Common    10-25   -\nBerry Forest        Kanto   S.Rod   M/D/N   V.Common    25-40   -\nCape Brink          Kanto   G.Rod   M/D/N   V.Common    10-25   -\nCerulean Cave       Kanto   S.Rod   M/D/N   V.Common    10-25   -\nCerulean City       Kanto   Water   M/D/N   V.Common    30-35   -\nCerulean City       Kanto   Water   M/D/N   Horde       30-35   -\nCerulean City       Kanto   G.Rod   M/D/N   Common      10-25   -\nFour Island         Kanto   G.Rod   M/D/N   Common      10-25   -\nFuchsia City        Kanto   G.Rod   M/D/N   Common      10-25   -\nFuchsia City        Kanto   S.Rod   M/D/N   V.Common    25-40   -\nIcefall Cave        Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 4             Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 4             Kanto   Water   M/D/N   Horde       30-35   -\nRoute 4             Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 4             Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 4             Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 6             Kanto   G.Rod   M/D/N   Common      10-25   -\n```');
    	message.author.send('```md\nRoute 10            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 10            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 10            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 10            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 10            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 11            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 12            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 12            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 13            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 13            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 22            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 22            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   Water   M/D/N   V.Common    30-35   -\nRoute 24            Kanto   Water   M/D/N   Horde       30-35   -\nRoute 24            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 24            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 24            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 25            Kanto   Water   M/D/N   Common      30-35   -\nRoute 25            Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 25            Kanto   G.Rod   M/D/N   V.Common    10-25   -\nRoute 25            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\n```');
    	message.author.send('```md\nRuin Valley         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nSafari Zone         Kanto   G.Rod   M/D/N   V.Common    10-25   -\nSafari Zone         Kanto   S.Rod   M/D/N   Common      25-40   -\nViridian City       Kanto   G.Rod   M/D/N   V.Common    10-25   -\nViridian City       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nMeteor Falls        Kanto   O.Rod   M/D/N   V.Common    5-15    -\nMeteor Falls        Kanto   G.Rod   M/D/N   Common      15-30   -\nPetalburg City      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nPetalburg City      Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 102           Hoenn   Water   M/D/N   Rare        20-30   -\nRoute 102           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 102           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 111           Hoenn   Water   M/D/N   Rare        20-30   -\nRoute 111           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 111           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 114           Hoenn   Water   M/D/N   Rare        20-30   -\nRoute 114           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 114           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 117           Hoenn   Water   M/D/N   Rare        20-30   -\nRoute 117           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 117           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 120           Hoenn   Water   M/D/N   Rare        25-30   -\nRoute 120           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 120           Hoenn   G.Rod   M/D/N   Common      15-30   -\nRoute 123           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 123           Hoenn   G.Rod   M/D/N   Common      15-30   -\n```');
    	message.author.send('```md\nSafari Zone         Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSafari Zone         Hoenn   G.Rod   M/D/N   Common      15-30   -\nSafari Zone         Hoenn   S.Rod   M/D/N   V.Common    30-40   -\nScorched Slab       Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nScorched Slab       Hoenn   G.Rod   M/D/N   Common      15-30   -\nVictory Road        Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nVictory Road        Hoenn   G.Rod   M/D/N   Common      15-30   -\nAbundant Shrine     Unova   S.Rod   M/D/N   V.Common    35-55   -\nLostlorn Forest     Unova   S.Rod   M/D/N   V.Common    35-55   -\nLostlorn Forest     Unova   Fishing M/D/N   Special     35-70   -\nPinwheel Forest     Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 3             Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 11            Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 14            Unova   S.Rod   M/D/N   V.Common    35-55   -\nStriaton City       Unova   S.Rod   M/D/N   V.Common    35-55   -\nCelestic Town       Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nLake Acuity         Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nLake Valor          Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nLake Verity         Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nResort Arena        Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 203           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 204           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 208           Sinnoh  G.Rod   M/D/N   Common      10-25   -\nRoute 209           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 212           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 214           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 229           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nSendoff Spring      Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nTwinleaf Town       Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\n```');
  	}
// Pokedex : 119
    if (message.content.toLowerCase() === '?seaking') {
    	message.channel.send('```md\nSeaking\n> PokeDex Number : 119\n> Egg Group : Water B\n> Evolution : Goldeen → Seaking (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   S.Rod   M/D/N   V.Common    33-40   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Uncommon    33-40   -\nCerulean City       Kanto   Water   M/D/N   Uncommon    33-35   -\nCerulean City       Kanto   S.Rod   M/D/N   Uncommon    33-40   -\nFuchsia City        Kanto   S.Rod   M/D/N   V.Common    33-40   -\nRoute 4             Kanto   Water   M/D/N   Rare        30-35   -\nRoute 4             Kanto   S.Rod   M/D/N   Uncommon    33-40   -\nRoute 10            Kanto   Water   M/D/N   Uncommon    33-35   -\nRoute 10            Kanto   S.Rod   M/D/N   Rare        33-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Rare        33-40   -\nRoute 24            Kanto   Water   M/D/N   Rare        33-35   -\nRoute 24            Kanto   S.Rod   M/D/N   Uncommon    33-40   -\nRoute 25            Kanto   Water   M/D/N   Uncommon    33-35   -\nRoute 25            Kanto   Water   M/D/N   Horde       33-35   -\nRoute 25            Kanto   S.Rod   M/D/N   Rare        33-40   -\nSafari Zone         Kanto   S.Rod   M/D/N   Common      33-40   -\n```');
    	message.channel.send('```md\nSafari Zone         Hoenn   S.Rod   M/D/N   Uncommon    33-40   -\nAbundant Shrine     Unova   Fishing M/D/N   Special     60-65   -\nRoute 3             Unova   Fishing M/D/N   Special     55-60   -\nRoute 11            Unova   Fishing M/D/N   Special     55-60   -\nRoute 14            Unova   Fishing M/D/N   Special     55-60   -\nStriaton City       Unova   Fishing M/D/N   Special     55-60   -\nCelestic Town       Sinnoh  S.Rod   M/D/N   Rare        40-45   -\nLake Acuity         Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nLake Valor          Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nLake Verity         Sinnoh  G.Rod   M/D/N   Rare        33-35   -\nLake Verity         Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nRoute 203           Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nRoute 204           Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nRoute 208           Sinnoh  S.Rod   M/D/N   Common      33-35   -\nRoute 209           Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nRoute 212           Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nRoute 214           Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nRoute 229           Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nSendoff Spring      Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\nTwinleaf Town       Sinnoh  S.Rod   M/D/N   V.Common    33-35   -\n```');
  	}
// Pokedex : 120
    if (message.content.toLowerCase() === '?staryu') {
    	message.channel.send('```md\nStaryu\n> PokeDex Number : 120\n> Egg Group : Genderless\n> Evolution : Staryu → Starmie (Use Waterstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean City       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nCerulean City       Kanto   G.Rod   N       Rare        10-25   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Island         Kanto   S.Rod   M/D/N   Common      25-40   -\nIcefall Cave        Kanto   S.Rod   M/D/N   Rare        25-40   -\nOne Island          Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nPallet Town         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 19            Kanto   G.Rod   N       Rare        10-25   -\nRoute 19            Kanto   S.Rod   N       Uncommon    25-40   -\nRoute 20            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 21            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nS.S Anne            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSeafoam Island      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nVermilion City      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nAqua Hideout        Hoenn   S.Rod   M/D/N   Rare        40      -\nAqua Hideout        Hoenn   S.Rod   M/D/N   Uncommon    30-40   -\nLilycove City       Hoenn   S.Rod   M/D/N   Common      30-40   -\nRoute 13            Unova   Water   M/D/N   V.Common    35-55   -\nCanalave City       Sinnoh  S.Rod   M/D/N   Common      20-50   -\nSunyshore City      Sinnoh  S.Rod   M/D/N   Uncommon    20-40   -\n```');
  	}
// Pokedex : 121
    if (message.content.toLowerCase() === '?starmie') {
    	message.channel.send('```md\nStarmie\n> PokeDex Number : 121\n> Egg Group : Genderless\n> Evolution : Staryu → Starmie (Use Waterstone)\nNo Wild Locations Found.```');
  	}
// Pokedex : 122
    if (message.content.toLowerCase() === '?mrmime') {
    	message.channel.send('```md\nMr. Mime\n> PokeDex Number : 122\n> Egg Group : Humanoid\n> Evolution : Mime Jr. → Mr. Mime (Lv.Up + Mimic)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 21            Kanto   Grass   M/D/N   Rare        30-32   -\nRoute 209           Sinnoh  Grass   M/D/N   Rare        17-19   -\nRoute 210           Sinnoh  Grass   M/D/N   Rare        19-20   -\nRoute 218           Sinnoh  Grass   M/D/N   Uncommon    29-31   -\nRoute 222           Sinnoh  Grass   M/D/N   Rare        41-42   -\n```');
  	}
// Pokedex : 123
    if (message.content.toLowerCase() === '?scyther') {
    	message.channel.send('```md\nScyther\n> PokeDex Number : 123\n> Egg Group : Bug\n> Evolution : Scyther → Scizor (Hold Metal Coat + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nSafari Zone         Kanto   Grass   M/D/N   V.Rare      26-28   -\nRoute 210           Sinnoh  Grass   M/D/N   Rare        19-29   -\nRoute 215           Sinnoh  Grass   M/D/N   Rare        20-22   -\nRoute 229           Sinnoh  Grass   M/D/N   Rare        52      -\n```');
  	}
// Pokedex : 124
    if (message.content.toLowerCase() === '?jynx') {
    	message.channel.send('```md\nJynx\n> PokeDex Number : 124\n> Egg Group : Humanoid\n> Evolution : Smoochum → Jynx (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nSeafoam Island      Kanto   Cave    M/D/N   Rare        28-32   -\nGiant Chasm         Sinnoh  Cave    M/D/N   Rare        48-50   -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Rare        50-56   -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Horde       51      -\n```');
  	}
// Pokedex : 125
    if (message.content.toLowerCase() === '?electabuzz') {
    	message.channel.send('```md\nElectabuzz\n> PokeDex Number : 125\n> Egg Group : Humanoid\n> Evolution : Elekid → Electabuzz (Lv.30) → Electivire (Hold Electirizer + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nPower Plant         Kanto   Inside  M/D/N   Rare        32-35   -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommon    39-41   -\nRoute 222           Sinnoh  Grass   M/D     Horde       38-39   -\n```');
  	}
// Pokedex : 126
    if (message.content.toLowerCase() === '?magmar') {
    	message.channel.send('```md\nMagmar\n> PokeDex Number : 126\n> Egg Group : Humanoid\n> Evolution : Magby → Magmar (Lv.30) → Magmortar (Hold Magmarizer + Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Ember            Kanto   Grass   M/D/N   Rare        38-42   -\nPokemon Mansion     Kanto   Inside  M/D/N   Rare        30-34   -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Uncommon    30-31   -\nFuego Ironworks     Sinnoh  Grass   M/D     Horde       30      -\n```');
  	}
// Pokedex : 127
    if (message.content.toLowerCase() === '?pinsir') {
    	message.channel.send('```md\nPinsir\n> PokeDex Number : 127\n> Egg Group : Bug\n#Map                Region  Type    Time    Rarity      Level   Item\nSafari Zone         Kanto   Grass   M/D/N   V.Rare      38-42   -\nSafari Zone         Hoenn   Grass   M/D/N   V.Rare      30-34   -\nRoute 12            Unova   Grass   M/D/N   Rare        30-34   -\nRoute 12            Unova   D.Grass M/D/N   Rare        30-31   -\nRoute 229           Sinnoh  Grass   M/D/N   Rare        30      -\n```');
  	}
// Pokedex : 128
    if (message.content.toLowerCase() === '?tauros') {
    	message.channel.send('```md\nTauros\n> PokeDex Number : 128\n> Egg Group : Field\n#Map                Region  Type    Time    Rarity      Level   Item\nSafari Zone         Kanto   Grass   M/D/N   V.Rare      26-28   -\n```');
  	}
// Pokedex : 129
    if (message.content.toLowerCase() === '?magikarp') {
    	message.author.send('```md\nMagikarp\n> PokeDex Number : 129\n> Egg Group : Water B , Dragon\n> Evolution : Magikarp → Gyarados (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   O.Rod   M/D/N   V.Common    5-10    -\nBerry Forest        Kanto   G.Rod   M/D/N   Common      10-25   -\nBond Bridge         Kanto   O.Rod   M/D/N   V.Common    5-10    -\nBond Bridge         Kanto   G.Rod   M/D/N   Common      10-25   -\nCape Brink          Kanto   O.Rod   M/D/N   V.Common    5-10    -\nCape Brink          Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nCeladon City        Kanto   O.Rod   M/D/N   V.Common    5-10    -\nCeladon City        Kanto   G.Rod   M/D/N   V.Common    10-25   -\nCeladon City        Kanto   S.Rod   M/D/N   V.Common    25-40   -\nCerulean Cave       Kanto   O.Rod   M/D/N   V.Common    5-10    -\nCerulean Cave       Kanto   G.Rod   M/D/N   Common      10-25   -\nCerulean City       Kanto   O.Rod   M/D/N   V.Common    5-10    -\nCerulean City       Kanto   G.Rod   M/D/N   Common      10-25   -\nCinnabar Island     Kanto   O.Rod   M/D/N   V.Common    5-10    -\nCinnabar Island     Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nFive Island         Kanto   O.Rod   M/D/N   V.Common    5-10    -\nFive Island         Kanto   G.Rod   M/D/N   Common      10-25   -\nFive Isle Meadow    Kanto   O.Rod   M/D/N   V.Common    5-10    -\nFive Isle Meadow    Kanto   G.Rod   M/D/N   Common      10-25   -\nFour Island         Kanto   O.Rod   M/D/N   V.Common    5-10    -\nFour Island         Kanto   G.Rod   M/D/N   Common      10-25   -\nFuchsia City        Kanto   Water   M/D/N   Uncommon    30-35   -\nFuchsia City        Kanto   O.Rod   M/D/N   V.Common    5-10    -\nFuchsia City        Kanto   G.Rod   M/D/N   Common      10-25   -\n```');
    	message.author.send('```md\nGreen Path          Kanto   O.Rod   M/D/N   V.Common    5-10    -\nGreen Path          Kanto   G.Rod   M/D/N   Common      10-25   -\nIcefall Cave        Kanto   O.Rod   M/D/N   V.Common    5-10    -\nIcefall Cave        Kanto   G.Rod   M/D/N   Common      10-25   -\nKindle Road         Kanto   O.Rod   M/D/N   V.Common    5-10    -\nKindle Road         Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nMemorial Pillar     Kanto   O.Rod   M/D/N   V.Common    5-10    -\nMemorial Pillar     Kanto   G.Rod   M/D/N   Common      10-25   -\nOutcast Island      Kanto   O.Rod   M/D/N   V.Common    5-10    -\nOutcast Island      Kanto   G.Rod   M/D/N   Common      10-25   -\nPallet Town         Kanto   O.Rod   M/D/N   V.Common    5-10    -\nPallet Town         Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nResort Gorgeous     Kanto   O.Rod   M/D/N   V.Common    5-10    -\nResort Gorgeous     Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 4             Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 4             Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 4             Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 6             Kanto   O.Rod   M/D/N   Uncommon    5-10    -\nRoute 6             Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 6             Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 10            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 10            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 10            Kanto   S.Rod   M/D/N   Rare        25-40   -\n```');
    	message.author.send('```md\nRoute 11            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 11            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 12            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 12            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 12            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 13            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 13            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 13            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 19            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 19            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 20            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 20            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 21            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 21            Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nRoute 22            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 22            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 22            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 24            Kanto   G.Rod   M/D/N   Common      10-25   -\nRoute 24            Kanto   S.Rod   M/D/N   Rare        25-40   -\nRoute 25            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRoute 25            Kanto   G.Rod   M/D/N   Common      10-25   -\n```');
    	message.author.send('```md\nRuin Valley         Kanto   O.Rod   M/D/N   V.Common    5-10    -\nRuin Valley         Kanto   G.Rod   M/D/N   Common      10-25   -\nS.S Anne            Kanto   O.Rod   M/D/N   V.Common    5-10    -\nS.S Anne            Kanto   G.Rod   M/D/N   Common      10-25   -\nSafari Zone         Kanto   O.Rod   M/D/N   V.Common    5-10    -\nSafari Zone         Kanto   G.Rod   M/D/N   Common      10-25   -\nSafari Zone         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSeafoam Island      Kanto   O.Rod   M/D/N   V.Common    5-10    -\nSeafoam Island      Kanto   G.Rod   M/D/N   Uncommon    10-25   -\nTanoby Ruins        Kanto   O.Rod   M/D/N   V.Common    5-10    -\nTanoby Ruins        Kanto   G.Rod   M/D/N   Common      10-25   -\nTrainer Tower       Kanto   O.Rod   M/D/N   V.Common    5-10    -\nTrainer Tower       Kanto   G.Rod   M/D/N   Common      10-25   -\nTreasure Beach      Kanto   O.Rod   M/D/N   V.Common    5-10    -\nTreasure Beach      Kanto   G.Rod   M/D/N   Common      10-25   -\nVermilion City      Kanto   O.Rod   M/D/N   V.Common    5-10    -\nVermilion City      Kanto   G.Rod   M/D/N   Common      10-25   -\nViridian City       Kanto   O.Rod   M/D/N   V.Common    5-10    -\nViridian City       Kanto   G.Rod   M/D/N   Common      10-25   -\nViridian City       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nWater Labyrinth     Kanto   O.Rod   M/D/N   V.Common    5-10    -\nWater Labyrinth     Kanto   G.Rod   M/D/N   Common      10-25   -\nWater Path          Kanto   O.Rod   M/D/N   V.Common    5-10    -\nWater Path          Kanto   G.Rod   M/D/N   Common      10-25   -\n```');
    	message.author.send('```md\nAbandoned Ship      Hoenn   O.Rod   M/D/N   V.Common    5-10    -\nAbandoned Ship      Hoenn   G.Rod   M/D/N   V.Common    10-25   -\nAqua Hideout        Hoenn   O.Rod   M/D/N   V.Common    10-25   -\nAqua Hideout        Hoenn   G.Rod   M/D/N   V.Common    25      -\nAqua Hideout        Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nAqua Hideout        Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nBattle Frontier     Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nBattle Frontier     Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nDewford Town        Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nDewford Town        Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nEver Grande City    Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nEver Grande City    Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nLilycove City       Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nLilycove City       Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nMeteor Falls        Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nMeteor Falls        Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nMossdeep City       Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nMossdeep City       Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nPacifidlog Town     Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nPacifidlog Town     Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nPetalburg City      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nPetalburg City      Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n```');
    	message.author.send('```md\nRoute 102           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 102           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 103           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 103           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 104           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 104           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 104           Hoenn   S.Rod   M/D/N   V.Common    30-40   -\nRoute 105           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 105           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 106           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 106           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 107           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 107           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 108           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 108           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n Route 109           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 109           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n Route 110           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 110           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n Route 111           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 111           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n Route 114           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 114           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 115           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 115           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 117           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 117           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n```');
    	message.author.send('```md\nRoute 118           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 118           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 119           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 119           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 120           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 120           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 121           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 121           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 122           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 122           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 123           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 123           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 124           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 124           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 125           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 125           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 126           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 126           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 127           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 127           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 128           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 128           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 129           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 129           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 130           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 130           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 131           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 131           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n```');
    	message.author.send('```md\nRoute 132           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 132           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 133           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 133           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nRoute 134           Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nRoute 134           Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nSafari Zone         Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSafari Zone         Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nScorched Slab       Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nScorched Slab       Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nSeafloor Cavern     Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSeafloor Cavern     Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nSealed chamber      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSealed chamber      Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nShoal Cave          Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nShoal Cave          Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nSlateport City      Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSlateport City      Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nSootopolis City     Hoenn   Water   M/D/N   V.Common    30-35   -\nSootopolis City     Hoenn   Water   M/D/N   Horde       30-35   -\nSootopolis City     Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nSootopolis City     Hoenn   G.Rod   M/D/N   V.Common    15-30   -\nSootopolis City     Hoenn   S.Rod   M/D/N   V.Common    30-40   -\nVictory Road        Hoenn   O.Rod   M/D/N   V.Common    5-15    -\nVictory Road        Hoenn   G.Rod   M/D/N   V.Common    15-30   -\n```');
    	message.author.send('```md\nCanalave City       Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nCanalave City       Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nCelestic Town       Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nCelestic Town       Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nEterna City         Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nEterna City         Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nFuego Ironworks     Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nFuego Ironworks     Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nGreat Marsh         Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nGreat Marsh         Sinnoh  G.Rod   M/D/N   Rare        10-25   -\nIron Island         Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nIron Island         Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nLake Acuity         Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nLake Acuity         Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nLake Valor          Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nLake Valor          Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nLake Verity         Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nLake Verity         Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nMt. Coronet         Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nMt. Coronet         Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\n```');
    	message.author.send('```md\nOreburgh Gate       Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nOreburgh Gate       Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nPastoria City       Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nPastoria City       Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nPokemon League      Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nPokemon League      Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRavaged Path        Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRavaged Path        Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nResort Arena        Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nResort Arena        Sinnoh  G.Rod   M/D/N   V.Common    10-35   -\nResort Arena        Sinnoh  S.Rod   M/D/N   V.Common    1-100   -\nRoute 203           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 203           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 204           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 204           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 205           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 205           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 208           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 208           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 209           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 209           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\n```');
    	message.author.send('```md\nRoute 210           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 210           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 212           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 212           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 213           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 213           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 214           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 214           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 218           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 218           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 219           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 219           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 220           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 220           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 221           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 221           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 222           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 222           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 223           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 223           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 224           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 224           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 225           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 225           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\n```');
    	message.author.send('```md\nRoute 226           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 226           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 227           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 227           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 228           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 228           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 229           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 229           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nRoute 230           Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nRoute 230           Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nSendoff Spring      Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nSendoff Spring      Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nSunyshore City      Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nSunyshore City      Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nTwinleaf Town       Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nTwinleaf Town       Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nValley Windworks    Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nValley Windworks    Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\nVictory Road        Sinnoh  O.Rod   M/D/N   V.Common    5-15    -\nVictory Road        Sinnoh  G.Rod   M/D/N   V.Common    10-25   -\n```');
  	}
// Pokedex : 130
    if (message.content.toLowerCase() === '?gyarados') {
    	message.author.send('```md\nGyarados\n> PokeDex Number : 130\n> Egg Group : Water B , Dragon\n> Evolution : Magikarp → Gyarados (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nBond Bridge         Kanto   S.Rod   M/D/N   Common      25-40   -\nCape Brink          Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nCerulean Cave       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nCerulean City       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nCinnabar Island     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Island         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFive Isle Meadow    Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFour Island         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFuchsia City        Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nFuchsia City        Kanto   G.Rod   M/D/N   Rare        20-25   -\nGreen Path          Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nIcefall Cave        Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nKindle Road         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nMemorial Pillar     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nOne Island          Kanto   G.Rod   M/D/N   Uncommon    20-25   -\nOutcast Island      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nPallet Town         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nResort Gorgeous     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\n```');
    	message.author.send('```md\nRoute 4             Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 6             Kanto   G.Rod   M/D/N   Uncommon    20-25   -\nRoute 10            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 11            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 12            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 13            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 19            Kanto   G.Rod   M/D/N   Rare        20-25   -\nRoute 20            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 21            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 22            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 23            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 24            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nRoute 25            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\n```');
    	message.author.send('```md\nRuin Valley         Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nS.S Anne            Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSeafoam Island      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nTanoby Ruins        Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nTrainer Tower       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nTreasure Beach      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nVermilion City      Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nViridian City       Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nWater Labyrinth     Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nWater Path          Kanto   S.Rod   M/D/N   Uncommon    25-40   -\nSootopolis City     Hoenn   S.Rod   M/D/N   Rare        30-40   -\nDragonspiral Tower  Unova   S.Rod   M/D/N   Special     55-60   -\nCanalave City       Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nCelestic Town       Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nEterna City         Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nFuego Ironworks     Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nGreat Marsh         Sinnoh  G.Rod   M/D/N   V.Rare      20-25   -\nGreat Marsh         Sinnoh  S.Rod   M/D/N   Rare        30-55   -\nIron Island         Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nLake Acuity         Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nLake Valor          Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nLake Verity         Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nMt. Coronet         Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nOreburgh Gate       Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nPastoria City       Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nPokemon League      Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRavaged Path        Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\n```');
    	message.author.send('```md\nRoute 203           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 204           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 205           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 208           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 209           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 210           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 212           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 213           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 214           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 218           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 219           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 220           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 221           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 222           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 223           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 224           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 225           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 226           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 227           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 228           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 229           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nRoute 230           Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nSendoff Spring      Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nSunyshore City      Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nTwinleaf Town       Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nValley Windworks    Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\nVictory Road        Sinnoh  S.Rod   M/D/N   V.Common    30-55   -\n```');
  	}
// Pokedex : 131
    if (message.content.toLowerCase() === '?lapras') {
    	message.channel.send('```md\nLapras\n> PokeDex Number : 131\n> Egg Group : Monster , Water A\n#Map                Region  Type    Time    Rarity      Level   Item\nIcefall Cave        Kanto   Water   M/D/N   V.Rare      40-50   -\nRoute 19            Kanto   Water   M/D/N   Rare        30-35   -\nRoute 20            Kanto   Water   M/D/N   Rare        30-35   -\nUndella Bay         Unova   Water   M/D/N   Special     60-65   -\nVillage Bridge      Unova   Water   M/D/N   Special     60-65   -\nVictory Road        Sinnoh  Water   M/D/N   V.Rare      40-55   -\n```');
  	}
// Pokedex : 132
    if (message.content.toLowerCase() === '?ditto') {
    	message.channel.send('```md\nDitto\n> PokeDex Number : 132\n> Egg Group : Ditto\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nPokemon Mansion     Kanto   Inside  M/D/N   Rare        30      -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-30   -\nRoute 13            Kanto   Grass   M/D/N   Rare        25      -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    25      -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    25      -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\nDesert Underpass    Hoenn   Cave    M/D/N   V.Common    40-45   -\nGiant Chasm         Unova   Grass   M/D/N   Uncommon    53-55   -\nGiant Chasm         Unova   D.Grass M/D/N   Uncommon    58-60   -\nP2 Laboratory       Unova   Grass   M/D/N   Special     36-38   -\nRoute 5             Unova   Grass   M/D/N   Special     23-25   -\n```');
  	}
// Pokedex : 133
    if (message.content.toLowerCase() === '?eevee') {
    	message.channel.send('```md\nEevee\n> PokeDex Number : 133\n> Egg Group : Field\n> Evolution 1 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 2 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 3 : Eevee → Flareon (Use Firestone)\n> Evolution 4 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 5 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 6 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 7 : Eevee → Glaceon (Lv.Up near Icy Rock)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 17            Kanto   Grass   M/D/N   Rare        22      -\n```');
  	}
// Pokedex : 134
    if (message.content.toLowerCase() === '?vaporeon') {
    	message.channel.send('```md\nVaporeon\n> PokeDex Number : 134\n> Egg Group : Field\n> Evolution 1 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 2 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 3 : Eevee → Flareon (Use Firestone)\n> Evolution 4 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 5 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 6 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 7 : Eevee → Glaceon (Lv.Up near Icy Rock)\nNo Wild Locations Found.```');
  	}
// Pokedex : 135
    if (message.content.toLowerCase() === '?jolteon') {
    	message.channel.send('```md\nJolteon\n> PokeDex Number : 135\n> Egg Group : Field\n> Evolution 1 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 2 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 3 : Eevee → Flareon (Use Firestone)\n> Evolution 4 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 5 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 6 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 7 : Eevee → Glaceon (Lv.Up near Icy Rock)\nNo Wild Locations Found.```');
  	}
// Pokedex : 136
    if (message.content.toLowerCase() === '?flareon') {
    	message.channel.send('```md\nFlareon\n> PokeDex Number : 136\n> Egg Group : Field\n> Evolution 1 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 2 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 3 : Eevee → Flareon (Use Firestone)\n> Evolution 4 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 5 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 6 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 7 : Eevee → Glaceon (Lv.Up near Icy Rock)\nNo Wild Locations Found.```');
  	}
// Pokedex : 137
    if (message.content.toLowerCase() === '?porygon') {
    	message.channel.send('```md\nPorygon\n> PokeDex Number : 137\n> Egg Group : Genderless\n> Evolution : Porygon → Porygon2 (Hold Up-Grade + Trade) → Porygon-Z (Hold Dubious Disc + Trade)\nNo Wild Locations Found.```');
  	}
// Pokedex : 138
    if (message.content.toLowerCase() === '?omanyte') {
    	message.channel.send('```md\nOmanyte\n> PokeDex Number : 138\n> Egg Group : Water A , Water C\n> Evolution : Omanyte → Omastar (Lv.40)\nNo Wild Locations Found.```');
  	}
// Pokedex : 139
    if (message.content.toLowerCase() === '?omastar') {
    	message.channel.send('```md\nOmastar\n> PokeDex Number : 139\n> Egg Group : Water A , Water C\n> Evolution : Omanyte → Omastar (Lv.40)\nNo Wild Locations Found.```');
  	}
// Pokedex : 140
    if (message.content.toLowerCase() === '?kabuto') {
    	message.channel.send('```md\nKabuto\n> PokeDex Number : 140\n> Egg Group : Water A , Water C\n> Evolution : Kabuto → Kabutops (Lv.40)\nNo Wild Locations Found.```');
  	}
// Pokedex : 141
    if (message.content.toLowerCase() === '?kabutops') {
    	message.channel.send('```md\nKabutops\n> PokeDex Number : 141\n> Egg Group : Water A , Water C\n> Evolution : Kabuto → Kabutops (Lv.40)\nNo Wild Locations Found.```');
  	}
// Pokedex : 142
    if (message.content.toLowerCase() === '?aerodactyl') {
    	message.channel.send('```md\nAerodactyl\n> PokeDex Number : 142\n> Egg Group : Flying\nNo Wild Locations Found.```');
  	}
// Pokedex : 143
    if (message.content.toLowerCase() === '?snorlax') {
    	message.channel.send('```md\nSnorlax\n> PokeDex Number : 143\n> Egg Group : Monster\n> Evolution : Munchlax → Snorlax (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\n```');
  	}
// Pokedex : 144
    if (message.content.toLowerCase() === '?articuno') {
    	message.channel.send('???');
  	}
// Pokedex : 145
    if (message.content.toLowerCase() === '?zapdos') {
    	message.channel.send('???');
  	}
// Pokedex : 146
    if (message.content.toLowerCase() === '?moltres') {
    	message.channel.send('???');
  	}
// Pokedex : 147
    if (message.content.toLowerCase() === '?dratini') {
    	message.channel.send('```md\nDratini\n> PokeDex Number : 147\n> Egg Group : Water A , Dragon\n> Evolution : Dragon → Dragonair (Lv.30) → Dragonite(Lv.55)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Kanto   S.Rod   M/D/N   Rare        25-30   -\nSafari Zone         Kanto   S.Rod   M/D/N   Uncommon    25-30   -\nDragonspiral Tower  Unova   S.Rod   M/D/N   Uncommon    25-40   -\nMt.Coronet          Sinnoh  S.Rod   M/D/N   Common      15-25   -\n```');
  	}
// Pokedex : 148
    if (message.content.toLowerCase() === '?dragonair') {
    	message.channel.send('```md\nDragonair\n> PokeDex Number : 148\n> Egg Group : Water A , Dragon\n> Evolution : Dragon → Dragonair (Lv.30) → Dragonite(Lv.55)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Kanto   S.Rod   M/D/N   V.Rare      30      -\nSafari Zone         Kanto   S.Rod   M/D/N   Rare        30      -\nDragonspiral Tower  Unova   S.Rod   M/D/N   Rare        30-40   -\nMt.Coronet          Sinnoh  S.Rod   M/D/N   Rare        30-55   -\n```');
  	}
// Pokedex : 149
    if (message.content.toLowerCase() === '?dragonite') {
    	message.channel.send('```md\nDragonite\n> PokeDex Number : 149\n> Egg Group : Water A , Dragon\n> Evolution : Dragon → Dragonair (Lv.30) → Dragonite(Lv.55)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Fishing M/D/N   Special     55-60   -\n```');
  	}
// Pokedex : 150
    if (message.content.toLowerCase() === '?mewtwo') {
    	message.channel.send('???');
  	}
// Pokedex : 151
    if (message.content.toLowerCase() === '?mew') {
    	message.channel.send('???');
  	}

// GEN-4

// Pokedex : 387
    if (message.content.toLowerCase() === '?turtwig') {
    	message.channel.send('```md\nTurtwig\n> PokeDex Number : 387\n> Egg Group : Monster , Plant\n> Evolution : Turtwig → Grotle (Lv.18) → Torterra (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nSendoff Spring      Sinnoh  Grass   M/D/N   Rare        35      -\n```');
  	}
// Pokedex : 388
    if (message.content.toLowerCase() === '?grotle') {
    	message.channel.send('```md\nGrotle\n> PokeDex Number : 388\n> Egg Group : Monster , Plant\n> Evolution : Turtwig → Grotle (Lv.18) → Torterra (Lv.32)\nNo Wild Locations Found.```');
  	}
// Pokedex : 389
    if (message.content.toLowerCase() === '?torterra') {
    	message.channel.send('```md\nTorterra\n> PokeDex Number : 389\n> Egg Group : Monster , Plant\n> Evolution : Turtwig → Grotle (Lv.18) → Torterra (Lv.32)\nNo Wild Locations Found.```');
  	}
// Pokedex : 390
    if (message.content.toLowerCase() === '?chimchar') {
    	message.channel.send('```md\nChimchar\n> PokeDex Number : 390\n> Egg Group : Field , Humanoid\n> Evolution : Chimchar → Monferno (Lv.14) → Infernape (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nValor Lakefront     Sinnoh  Grass   M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 391
    if (message.content.toLowerCase() === '?monferno') {
    	message.channel.send('```md\nMonferno\n> PokeDex Number : 391\n> Egg Group : Field , Humanoid\n> Evolution : Chimchar → Monferno (Lv.14) → Infernape (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 392
    if (message.content.toLowerCase() === '?infernape') {
    	message.channel.send('```md\nInfernape\n> PokeDex Number : 392\n> Egg Group : Field , Humanoid\n> Evolution : Chimchar → Monferno (Lv.14) → Infernape (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 393
    if (message.content.toLowerCase() === '?piplup') {
    	message.channel.send('```md\nPiplup\n> PokeDex Number : 393\n> Egg Group : Water A , Field\n> Evolution : Piplup → Prinplup (Lv.16) → Empoleon (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nLake Acuity         Sinnoh  Grass   M/D/N   Rare        20      -\n```');
  	}
// Pokedex : 394
    if (message.content.toLowerCase() === '?prinplup') {
    	message.channel.send('```md\nPrinplup\n> PokeDex Number : 394\n> Egg Group : Water A , Field\n> Evolution : Piplup → Prinplup (Lv.16) → Empoleon (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 395
    if (message.content.toLowerCase() === '?empoleon') {
    	message.channel.send('```md\nEmpoleon\n> PokeDex Number : 395\n> Egg Group : Water A , Field\n> Evolution : Piplup → Prinplup (Lv.16) → Empoleon (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 396
    if (message.content.toLowerCase() === '?starly') {
    	message.channel.send('```md\nStarly\n> PokeDex Number : 396\n> Egg Group : Flying\n> Evolution : Starly → Staravia (Lv.14) → Staraptor (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D     V.Rare      27-29   -\nLake Verity         Sinnoh  Grass   M/D/N   Common      2-4     -\nRoute 201           Sinnoh  Grass   M/D/N   Common      2-3     -\nRoute 202           Sinnoh  Grass   M/D/N   Uncommon    2-4     -\nRoute 203           Sinnoh  Grass   M/D/N   Uncommon    4-7     -\nRoute 204           Sinnoh  Grass   M/D/N   Uncommon    4-11    -\nRoute 209           Sinnoh  Grass   M/D/N   Uncommon    17-18   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    21-22   -\n```');
  	}
// Pokedex : 397
    if (message.content.toLowerCase() === '?staravia') {
    	message.channel.send('```md\nStaravia\n> PokeDex Number : 397\n> Egg Group : Flying\n> Evolution : Starly → Staravia (Lv.14) → Staraptor (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nLake Valor          Sinnoh  Grass   M/D/N   Uncommon    38-40   -\nRoute 209           Sinnoh  Grass   M/D/N   Uncommon    18-19   -\nRoute 210           Sinnoh  Grass   M/D     Horde       17-19   -\nRoute 210           Sinnoh  Grass   M/D/N   Uncommon    19      -\nRoute 212           Sinnoh  Grass   M/D     Horde       21-22   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    21-23   -\nRoute 215           Sinnoh  Grass   M/D     Horde       19-20   -\nRoute 215           Sinnoh  Grass   M/D/N   Uncommon    19-22   -\nSendoff Spring      Sinnoh  Grass   M/D/N   Uncommon    38-40   -\nTrophy Garden       Sinnoh  Grass   M/D/N   Uncommon    22-24   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Uncommon    25-27   -\n```');
  	}
// Pokedex : 398
    if (message.content.toLowerCase() === '?staraptor') {
    	message.channel.send('```md\nStaraptor\n> PokeDex Number : 398\n> Egg Group : Flying\n> Evolution : Starly → Staravia (Lv.14) → Staraptor (Lv.34)\nNo Wild Locations Found.```');
  	}
// Pokedex : 399
    if (message.content.toLowerCase() === '?bidoof') {
    	message.channel.send('```md\nBidoof\n> PokeDex Number : 399\n> Egg Group : Water A , Field\n> Evolution : Bidoof → Bibarel (Lv.15)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/D/N   Uncommon    12      -\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-29   -\nLake Verity         Sinnoh  Grass   M/D/N   V.Common    2-4     -\nRoute 201           Sinnoh  Grass   M/D/N   V.Common    2-4     -\nRoute 202           Sinnoh  Grass   M/D/N   V.Common    2-4     -\nRoute 203           Sinnoh  Grass   M/D/N   V.Common    4-7     -\nRoute 204           Sinnoh  Grass   M/D/N   V.Common    4-11    -\nRoute 204           Sinnoh  Grass   M/D/N   Horde       7-8     -\nRoute 205           Sinnoh  Grass   M/D/N   Uncommon    9-14    -\nRoute 205           Sinnoh  Grass   M/D/N   Horde       10-12   -\nRoute 208           Sinnoh  Grass   M/D/N   Uncommon    18-19   -\nRoute 211           Sinnoh  Grass   M/D/N   Common      14      -\nRoute 211           Sinnoh  Grass   M/D/N   Horde       12-14   -\nValley Windworks    Sinnoh  Grass   M/D/N   Uncommon    9-10    -\n```');
  	}
// Pokedex : 400
    if (message.content.toLowerCase() === '?bibarel') {
    	message.channel.send('```md\nBibarel\n> PokeDex Number : 400\n> Egg Group : Water A , Field\n> Evolution : Bidoof → Bibarel (Lv.15)\n#Map                Region  Type    Time    Rarity      Level   Item\nVillage Bridge      Unova   Grass   M/D/N   Common      47-49   -\nVillage Bridge      Unova   D.Grass M/D/N   Common      52-54   -\nVillage Bridge      Unova   D.Grass M/D/N   Horde       50-52   -\nVillage Bridge      Unova   Grass   N       Horde       45-47   -\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      28-30   -\nLake Acuity         Sinnoh  Grass   M/D/N   Uncommon    39-40   -\nLake Valor          Sinnoh  Grass   M/D/N   Horde       36-38   -\nLake Valor          Sinnoh  Grass   M/D/N   V.Common    39-41   -\nRoute 208           Sinnoh  Grass   M/D/N   Rare        18-20   -\nRoute 209           Sinnoh  Grass   M/D/N   Horde       16-18   -\nRoute 209           Sinnoh  Grass   M/D/N   V.Common    19-20   -\nRoute 210           Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 212           Sinnoh  Grass   M/D/N   Rare        24-25   -\nSendoff Spring      Sinnoh  Grass   M/D/N   Horde       36-37   -\nSendoff Spring      Sinnoh  Grass   M/D/N   V.Common    37-38   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Common      25-27   -\nValor Lakefront     Sinnoh  Grass   M/D     Horde       25-26   -\n```');
  	}
// Pokedex : 401
    if (message.content.toLowerCase() === '?kricketot') {
    	message.channel.send('```md\nKricketot\n> PokeDex Number : 401\n> Egg Group : Bug\n> Evolution : Kricketot → Kricketune (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/N     Rare        10      -\nRoute 201           Sinnoh  Grass   M/N     Uncommon    3       -\nRoute 202           Sinnoh  Grass   M/N     Uncommon    3-4     -\nRoute 203           Sinnoh  Grass   M/N     Uncommon    4-5     -\nRoute 204           Sinnoh  Grass   M/N     Uncommon    3-9     -\nRoute 204           Sinnoh  Grass   N       Horde       7-8     -\nRoute 205           Sinnoh  Grass   M/N     Rare        12-13   -\nRoute 206           Sinnoh  Grass   M/N     Uncommon    16-17   -\nRoute 207           Sinnoh  Grass   M/N     Uncommon    5-6     -\n```');
  	}
// Pokedex : 402
    if (message.content.toLowerCase() === '?kricketune') {
    	message.channel.send('```md\nKricketune\n> PokeDex Number : 402\n> Egg Group : Bug\n> Evolution : Kricketot → Kricketune (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/N     V.Common    47-50   -\nDreamyard           Unova   D.Grass M/N     Horde       46-47   -\nRoute 206           Sinnoh  Grass   M/N     Rare        17-18   -\nRoute 210           Sinnoh  Grass   M/N     Uncommon    19-21   -\nRoute 210           Sinnoh  Grass   N       Horde       17-19   -\nRoute 212           Sinnoh  Grass   M/D/N   Common      22-25   -\nRoute 212           Sinnoh  Grass   N       Horde       21-22   -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommon    23-24   -\nRoute 215           Sinnoh  Grass   M/D/N   Uncommon    20-22   -\nTrophy Garden       Sinnoh  Grass   M/D/N   Common      22-23   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Uncommon    27      -\n```');
  	}
// Pokedex : 403
    if (message.content.toLowerCase() === '?shinx') {
    	message.channel.send('```md\nShinx\n> PokeDex Number : 403\n> Egg Group : Field\n> Evolution : Shinx → Luxio (Lv.15) → Luxray (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nFuego Ironworks     Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 202           Sinnoh  Grass   M/D/N   V.Common    3-4     -\nRoute 203           Sinnoh  Grass   M/D/N   V.Common    4-5     -\nRoute 204           Sinnoh  Grass   M/D/N   Uncommon    4-10    -\nValley Windworks    Sinnoh  Grass   M/D/N   Horde       8-9     -\nValley Windworks    Sinnoh  Grass   M/D/N   Common      10      -\n```');
  	}
// Pokedex : 404
    if (message.content.toLowerCase() === '?luxio') {
    	message.channel.send('```md\nLuxio\n> PokeDex Number : 404\n> Egg Group : Field\n> Evolution : Shinx → Luxio (Lv.15) → Luxray (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nFuego Ironworks     Sinnoh  Grass   M/D/N   Rare        29      -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Horde       27-28   -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommon    38-40   -\n```');
  	}
// Pokedex : 405
    if (message.content.toLowerCase() === '?luxray') {
    	message.channel.send('```md\nLuxray\n> PokeDex Number : 405\n> Egg Group : Field\n> Evolution : Shinx → Luxio (Lv.15) → Luxray (Lv.30)\nNo Wild Locations Found.```');
  	}
// Pokedex : 406
    if (message.content.toLowerCase() === '?budew') {
    	message.channel.send('```md\nBudew\n> PokeDex Number : 406\n> Egg Group : Cannot Breed\n> Evolution : Budew → Roselia (Happiness + Day Time) → Roserade (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/D/N   Common      10-12   -\nEterna Forest       Sinnoh  Grass   M/D     Horde       10      -\nGreat Marsh         Sinnoh  Inside  M/D     V.Rare      27-29   -\nRoute 204           Sinnoh  Grass   M/D/N   Common      3-10    -\nRoute 205           Sinnoh  Grass   M/D/N   Uncommon    12-14   -\nRoute 208           Sinnoh  Grass   M/D/N   Uncommon    18-19   -\nRoute 208           Sinnoh  Grass   M/D/N   Horde       16-17   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    21-22   -\n```');
  	}
// Pokedex : 407
    if (message.content.toLowerCase() === '?roserade') {
    	message.channel.send('```md\nRoserade\n> PokeDex Number : 407\n> Egg Group : Fairy , Plant\n> Evolution : Budew → Roselia (Happiness + Day Time) → Roserade (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 408
    if (message.content.toLowerCase() === '?cranidos') {
    	message.channel.send('```md\nCranidos\n> PokeDex Number : 408\n> Egg Group : Monster\n> Evolution : Cranidos → Rampardos (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 409
    if (message.content.toLowerCase() === '?rampardos') {
    	message.channel.send('```md\nRampardos\n> PokeDex Number : 409\n> Egg Group : Monster\n> Evolution : Cranidos → Rampardos (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 410
    if (message.content.toLowerCase() === '?shieldon') {
    	message.channel.send('```md\nShieldon\n> PokeDex Number : 410\n> Egg Group : Monster\n> Evolution : Shieldon → Bastiodon (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 411
    if (message.content.toLowerCase() === '?bastiodon') {
    	message.channel.send('```md\nBastiodon\n> PokeDex Number : 411\n> Egg Group : Monster\n> Evolution : Shieldon → Bastiodon (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 412
    if (message.content.toLowerCase() === '?burmy') {
    	message.channel.send('```md\nBurmy\n> PokeDex Number : 412\n> Egg Group : Bug\n> Evolution : Burmy → Wormadam (Lv.20 + Female)\n> Evolution : Burmy → Mothim   (Lv.20 + Male)\n#Map                Region  Type    Time    Rarity      Level   Item\nHoney Tree          Sinnoh  H.Tree  M/D/N   Uncommon    5-20    -\n```');
  	}
// Pokedex : 413
    if (message.content.toLowerCase() === '?wormadam') {
    	message.channel.send('```md\nWormadam\n> PokeDex Number : 413\n> Egg Group : Bug\n> Evolution : Burmy → Wormadam (Lv.20 + Female)\n> Evolution : Burmy → Mothim   (Lv.20 + Male)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 414
    if (message.content.toLowerCase() === '?mothim') {
    	message.channel.send('```md\nMothim\n> PokeDex Number : 414\n> Egg Group : Bug\n> Evolution 1 : Burmy → Wormadam (Lv.20 + Female)\n> Evolution 2 : Burmy → Mothim   (Lv.20 + Male)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 415
    if (message.content.toLowerCase() === '?combee') {
    	message.channel.send('```md\nCombee\n> PokeDex Number : 415\n> Egg Group : Bug\n> Evolution : Combee → Vespiquen (Lv.21 - Female)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 12            Unova   Grass   M/D/N   Uncommon    47      -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    52      -\nHoney Tree          Sinnoh  H.Tree  M/D/N   Uncommon    5-20    -\n```');
  	}
// Pokedex : 416
    if (message.content.toLowerCase() === '?vespiquen') {
    	message.channel.send('```md\nVespiquen\n> PokeDex Number : 416\n> Egg Group : Bug\n> Evolution : Combee → Vespiquen (Lv.21 - Female)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 417
    if (message.content.toLowerCase() === '?pachirisu') {
    	message.channel.send('```md\nPachirisu\n> PokeDex Number : 417\n> Egg Group : Field , Fairy\n#Map                Region  Type    Time    Rarity      Level   Item\nFuego Ironworks     Sinnoh  Grass   M/D/N   Rare        29      -\nRoute 205           Sinnoh  Grass   M/D/N   Rare        9-14    -\nValley Windworks    Sinnoh  Grass   M/D/N   Horde       8-9     -\nValley Windworks    Sinnoh  Grass   M/D/N   Rare        9-11    -\n```');
  	}
// Pokedex : 418
    if (message.content.toLowerCase() === '?buizel') {
    	message.channel.send('```md\nBuizel\n> PokeDex Number : 418\n> Egg Group : Water A , Field\n> Evolution : Buizel → Floatzel (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Unova   Grass   M/D/N   Special     12-14   -\nRoute 11            Unova   Water   M/D/N   V.Common    35-55   -\nRoute 11            Unova   Water   M/D/N   Horde       35-55   -\nRoute 14            Unova   Water   M/D/N   V.Common    35-55   -\nRoute 14            Unova   Water   M/D/N   Horde       35-55   -\nRoute 205           Sinnoh  Grass   M/D/N   V.Common    10-14   -\nRoute 205           Sinnoh  Grass   M/D/N   Horde       8-12    -\nRoute 212           Sinnoh  Grass   M/D/N   Rare        23-25   -\nRoute 213           Sinnoh  Grass   N       Horde       22-23   -\nRoute 213           Sinnoh  Grass   M/D/N   V.Common    23-25   -\nRoute 224           Sinnoh  Grass   M/D/N   Rare        49      -\nValley Windworks    Sinnoh  Grass   M/D/N   Common      9-11    -\n```');
  	}
// Pokedex : 419
    if (message.content.toLowerCase() === '?floatzel') {
    	message.channel.send('```md\nFloatzel\n> PokeDex Number : 419\n> Egg Group : Water A , Field\n> Evolution : Buizel → Floatzel (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Special     28-29   -\nMoor Of Icirrus     Unova   Water   M/D/N   Special     39-40   -\nRoute 3             Unova   Water   M/D/N   Special     30-40   -\nRoute 6             Unova   Water   M/D/N   Special     30-40   -\nRoute 11            Unova   Water   M/D/N   Special     60-65   -\nRoute 14            Unova   Water   M/D/N   Special     60-65   -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Common      29-31   -\nRoute 213           Sinnoh  Grass   M/D/N   Uncommon    26      -\nRoute 218           Sinnoh  Grass   M/D/N   V.Common    29-31   -\nRoute 218           Sinnoh  Grass   M/D/N   Horde       28-29   -\nRoute 221           Sinnoh  Grass   M/D/N   Common      28-31   -\nRoute 222           Sinnoh  Grass   M/D/N   Common      38-42   -\nRoute 222           Sinnoh  Grass   M/D/N   Horde       38-39   -\nRoute 224           Sinnoh  Grass   M/D/N   Common      53-54   -\nRoute 230           Sinnoh  Grass   M/D/N   Common      50-52   -\nVictory Road        Sinnoh  Cave    M/D/N   Common      42-51   -\nVictory Road        Sinnoh  Cave    M/D/N   Horde       41-48   -\nVictory Road        Sinnoh  Water   M/D/N   V.Common    30-55   -\nVictory Road        Sinnoh  Water   M/D/N   Horde       30-50   -\n```');
  	}
// Pokedex : 420
    if (message.content.toLowerCase() === '?cherubi') {
    	message.channel.send('```md\nCherubi\n> PokeDex Number : 420\n> Egg Group : Plant , Fairy\n> Evolution : Cherubi → Cherrim (Lv.25)\n#Map                Region  Type    Time    Rarity      Level   Item\nHoney Tree          Sinnoh  H.Tree  M/D/N   Uncommon    5-20    -\n```');
  	}
// Pokedex : 421
    if (message.content.toLowerCase() === '?cherrim') {
    	message.channel.send('```md\nCherrim\n> PokeDex Number : 421\n> Egg Group : Plant , Fairy\n> Evolution : Cherubi → Cherrim (Lv.25)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 422
    if (message.content.toLowerCase() === '?shellos') {
    	message.channel.send('```md\nShellos\n> PokeDex Number : 422\n> Egg Group : Water A , Chaos\n> Evolution : Shellos → Gastrodon (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanalave City       Sinnoh  Water   M/D/N   Uncommon    20-30   -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Uncommon    28      -\nFuego Ironworks     Sinnoh  Water   M/D/N   Common      20-30   -\nPastoria City       Sinnoh  Water   M/D/N   Uncommon    20-30   -\nRoute 205           Sinnoh  Grass   M/D/N   V.Common    9-14    -\nRoute 205           Sinnoh  Grass   M/D/N   Horde       8-9     -\nRoute 205           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 205           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    23-26   -\nRoute 212           Sinnoh  Grass   M/D/N   Horde       22-23   -\nRoute 212           Sinnoh  Water   M/D/N   Uncommon    20-30   -\nRoute 212           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 213           Sinnoh  Grass   M/D/N   V.Common    24-26   -\nRoute 213           Sinnoh  Grass   M/D/N   Horde       22-23   -\nRoute 213           Sinnoh  Water   M/D/N   Common      20-30   -\nRoute 213           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 218           Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 218           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 221           Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 224           Sinnoh  Grass   M/D/N   Rare        49      -\nValley Windworks    Sinnoh  Grass   M/D/N   V.Common    9-12    -\nValley Windworks    Sinnoh  Water   M/D/N   V.Common    20-30   -\nValley Windworks    Sinnoh  Water   M/D/N   Horde       20-30   -\n```');
  	}
// Pokedex : 423
    if (message.content.toLowerCase() === '?gastrodon') {
    	message.channel.send('```md\nGastrodon\n> PokeDex Number : 423\n> Egg Group : Water A , Chaos\n> Evolution : Shellos → Gastrodon (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanalave City       Sinnoh  Water   M/D/N   Rare        30-40   -\nFuego Windworks     Sinnoh  Grass   M/D/N   Uncommon    30-31   -\nFuego Windworks     Sinnoh  Water   M/D/N   Rare        30-40   -\nPastoria City       Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 205           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 212           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 213           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 218           Sinnoh  Grass   M/D/N   Uncommon    30      -\nRoute 218           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 221           Sinnoh  Grass   M/D/N   Uncommon    30      -\nRoute 221           Sinnoh  Grass   M/D/N   Horde       30      -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommon    40-42   -\nRoute 224           Sinnoh  Grass   M/D/N   Common      52-53   -\nRoute 224           Sinnoh  Grass   M/D/N   Horde       49      -\nRoute 224           Sinnoh  Water   M/D/N   Common      35-55   -\nRoute 230           Sinnoh  Grass   M/D/N   Rare        51      -\nValley Windworks    Sinnoh  Water   M/D/N   Rare        30-40   -\n```');
  	}
// Pokedex : 424
    if (message.content.toLowerCase() === '?ambipom') {
    	message.channel.send('```md\nAmbipom\n> PokeDex Number : 424\n> Egg Group : Field\n> Evolution : Aipom → Ambipom (Lv.Up + Double Hit)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 425
    if (message.content.toLowerCase() === '?drifloon') {
    	message.channel.send('```md\nDrifloon\n> PokeDex Number : 425\n> Egg Group : Chaos\n> Evolution : Drifloon → Drifblim (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Shadow  M/D/N   Special     32-33   -\nValley Windworks    Sinnoh  Grass   M/D/N   Uncommon    10      -\n```');
  	}
// Pokedex : 426
    if (message.content.toLowerCase() === '?drifblim') {
    	message.channel.send('```md\nDrifblim\n> PokeDex Number : 426\n> Egg Group : Chaos\n> Evolution : Drifloon → Drifblim (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Shadow  M/D/N   Special     32-33   -\nGiant Chasm         Unova   Grass   M/D/N   Rare        49      -\nGiant Chasm         Unova   D.Grass M/D/N   Rare        54      -\nRoute 13            Unova   Grass   M/D/N   Uncommon    49      -\nRoute 13            Unova   D.Grass M/D/N   Uncommon    54      -\nRoute 13            Unova   Grass   N       Horde       46-47   -\nRoute 14            Unova   Grass   M/D/N   Uncommon    49      -\nRoute 14            Unova   D.Grass M/D/N   Uncommon    54      -\n```');
  	}
// Pokedex : 427
    if (message.content.toLowerCase() === '?buneary') {
    	message.channel.send('```md\nBuneary\n> PokeDex Number : 427\n> Egg Group : Field , Humanoid\n> Evolution : Buneary → Lopunny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/D/N   Common      11-13   -\nEterna Forest       Sinnoh  Grass   M/D/N   Horde       10      -\n```');
  	}
// Pokedex : 428
    if (message.content.toLowerCase() === '?lopunny') {
    	message.channel.send('```md\nLopunny\n> PokeDex Number : 428\n> Egg Group : Field , Humanoid\n> Evolution : Buneary → Lopunny (Happiness)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 429
    if (message.content.toLowerCase() === '?mismagius') {
    	message.channel.send('```md\nMismagius\n> PokeDex Number : 429\n> Egg Group : Chaos\n> Evolution : Misdreavus → Mismagius (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 430
    if (message.content.toLowerCase() === '?honchkrow') {
    	message.channel.send('```md\nHonchkrow\n> PokeDex Number : 430\n> Egg Group : Flying\n> Evolution : Murkrow → Honchkrow (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Shadow  M/D/N   Special     60-65   -\nAbundant Shrine     Unova   Shadow  M/D/N   Special     32-33   -\nRoute 10            Unova   Shadow  M/D/N   Special     43-44   -\n```');
  	}
// Pokedex : 431
    if (message.content.toLowerCase() === '?glameow') {
    	message.channel.send('```md\nGlameow\n> PokeDex Number : 431\n> Egg Group : Field\n> Evolution : Glameow → Purugly (Lv.38)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 218           Sinnoh  Grass   M/D/N   Uncommom    29-30   -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommom    40      -\n```');
  	}
// Pokedex : 432
    if (message.content.toLowerCase() === '?purugly') {
    	message.channel.send('```md\nPurugly\n> PokeDex Number : 432\n> Egg Group : Field\n> Evolution : Glameow → Purugly (Lv.38)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 222           Sinnoh  Grass   M/D/N   Rare        41-42   -\nRoute 229           Sinnoh  Grass   M/D/N   Horde       48-50   -\nRoute 229           Sinnoh  Grass   M/D/N   Uncommom    50      -\n```');
  	}
// Pokedex : 433
    if (message.content.toLowerCase() === '?chingling') {
    	message.channel.send('```md\nChingling\n> PokeDex Number : 433\n> Egg Group : Cannot Breed\n> Evolution : Chingling → Chimecho (Happiness + Night)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 434
    if (message.content.toLowerCase() === '?stunky') {
    	message.channel.send('```md\nStunky\n> PokeDex Number : 434\n> Egg Group : Field\n> Evolution : Stunky → Skuntank (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 206           Sinnoh  Grass   M/D/N   Horde       14-16   -\nRoute 206           Sinnoh  Grass   M/D/N   Uncommom    16-18   -\nRoute 208           Sinnoh  Grass   M/D/N   Uncommom    18      -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommom    23-24   -\nRoute 214           Sinnoh  Grass   M/D/N   Horde       21-22   -\nRoute 221           Sinnoh  Grass   M/D/N   Uncommom    28      -\n```');
  	}
// Pokedex : 435
    if (message.content.toLowerCase() === '?skuntank') {
    	message.channel.send('```md\nSkuntank\n> PokeDex Number : 435\n> Egg Group : Field\n> Evolution : Stunky → Skuntank (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 221           Sinnoh  Grass   M/D/N   Rare        34      -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommom    51      -\n```');
  	}
// Pokedex : 436
    if (message.content.toLowerCase() === '?bronzor') {
    	message.channel.send('```md\nBronzor\n> PokeDex Number : 436\n> Egg Group : Genderless\n> Evolution : Bronzor → Bronzong (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nMT.Coronet          Sinnoh  Cave    M/D/N   Rare        14-36   -\nMT.Coronet          Sinnoh  Cave    M/D/N   Horde       13-37   -\nRoute 206           Sinnoh  Grass   M/D/N   Uncommom    16-18   -\nRoute 211           Sinnoh  Grass   M/D/N   Uncommom    14-29   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Rare        44-64   -\nWayward Cave        Sinnoh  Cave    M/D/N   Commom      18-20   -\nWayward Cave        Sinnoh  Cave    M/D/N   Horde       14-17   -\n```');
  	}
// Pokedex : 437
    if (message.content.toLowerCase() === '?bronzong') {
    	message.channel.send('```md\nBronzong\n> PokeDex Number : 437\n> Egg Group : Genderless\n> Evolution : Bronzor → Bronzong (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Sinnoh  Grass   M/D/N   Commom      48-50   -\nAbundant Shrine     Sinnoh  Grass   M/D/N   Horde       46-47   -\nAbundant Shrine     Sinnoh  D.Grass M/D/N   Commom      53-55   -\nMT.Coronet          Sinnoh  Cave    M/D/N   Commom      37-42   -\nMT.Coronet          Sinnoh  Cave    M/D/N   Horde       37      -\nMT.Coronet          Sinnoh  Grass   M/D/N   Rare        39-40   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Uncommom    45-66   -\n```');
  	}
// Pokedex : 438
    if (message.content.toLowerCase() === '?bonsly') {
    	message.channel.send('```md\nBonsly\n> PokeDex Number : 438\n> Egg Group : Cannot Breed\n> Evolution : Bonsly → Sudowoodo (Lv.Up + Mimic)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 439
    if (message.content.toLowerCase() === '?mimejr') {
    	message.channel.send('```md\nMime Jr.\n> PokeDex Number : 439\n> Egg Group : Cannot Breed\n> Evolution : Mime Jr. → Mr.Mime (Lv.Up + Mimic)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 440
    if (message.content.toLowerCase() === '?happiny') {
    	message.channel.send('```md\nHappiny\n> PokeDex Number : 440\n> Egg Group : Cannot Breed\n> Evolution : Happiny → Chansey (Lv.Up+ Hold Ovalstone + Day Time) → Blissey (Happiness)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 441
    if (message.content.toLowerCase() === '?chatot') {
    	message.channel.send('```md\nChatot\n> PokeDex Number : 441\n> Egg Group : Flying\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 213           Sinnoh  Grass   M/D     Commom      23-25   -\nRoute 213           Sinnoh  Grass   M/D     Horde       22-23   -\nRoute 218           Sinnoh  Grass   M/D     Uncommom    28-30   -\nRoute 222           Sinnoh  Grass   M/D     Rare        38-41   -\nRoute 224           Sinnoh  Grass   M/D     Uncommom    52-54   -\n```');
  	}
// Pokedex : 442
    if (message.content.toLowerCase() === '?spiritomb') {
    	message.channel.send('```md\nSpiritomb\n> PokeDex Number : 442\n> Egg Group : Chaos\n#Map                Region  Type    Time    Rarity      Level   Item\nTurnback Cave       Sinnoh  Rocks   M/D/N   V.Rare      50-55   -\n```');
  	}
// Pokedex : 443
    if (message.content.toLowerCase() === '?gible') {
    	message.channel.send('```md\nGible\n> PokeDex Number : 443\n> Egg Group : Monster , Dragon\n> Evolution : Gible → Garbite (Lv.24) → Garchomp (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nWayward Cave        Sinnoh  Cave    M/D/N   Commom      17-20   -\nWayward Cave        Sinnoh  Cave    M/D/N   Horde       15-17   -\n```');
  	}
// Pokedex : 444
    if (message.content.toLowerCase() === '?gabite') {
    	message.channel.send('```md\nGabite\n> PokeDex Number : 444\n> Egg Group : Monster , Dragon\n> Evolution : Gible → Garbite (Lv.24) → Garchomp (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Sinnoh  Cave    M/D/N   Rare        41-50   -\nVictory Road        Sinnoh  Cave    M/D/N   Horde       47-49   -\n```');
  	}
// Pokedex : 445
    if (message.content.toLowerCase() === '?garchomp') {
    	message.channel.send('```md\nGarchomp\n> PokeDex Number : 445\n> Egg Group : Monster , Dragon\n> Evolution : Gible → Garbite (Lv.24) → Garchomp (Lv.48)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 446
    if (message.content.toLowerCase() === '?munchlax') {
    	message.channel.send('```md\nMunchlax\n> PokeDex Number : 446\n> Egg Group : Cannot Breed\n> Evolution : Munchlax → Snorlax (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nHoney Tree          Sinnoh  H.Tree  M/D/N   V.Rare      5-20    -\n```');
  	}
// Pokedex : 447
    if (message.content.toLowerCase() === '?riolu') {
    	message.channel.send('```md\nRiolu\n> PokeDex Number : 447\n> Egg Group : Cannot Breed\n> Evolution : Riolu → Lucario (Happiness + Day Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave   Unova   Cave    M/D/N   Rare        49-50   -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nIron Island         Sinnoh  Cave    M/D/N   Rare        30      -\n```');
  	}
// Pokedex : 448
    if (message.content.toLowerCase() === '?lucario') {
    	message.channel.send('```md\nLucario\n> PokeDex Number : 448\n> Egg Group : Field , Humanoid\n> Evolution : Riolu → Lucario (Happiness + Day Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave   Unova   D.Cloud M/D/N   Special     60-65    -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41    -\n```');
  	}
// Pokedex : 449
    if (message.content.toLowerCase() === '?hippopotas') {
    	message.channel.send('```md\nHippopotas\n> PokeDex Number : 449\n> Egg Group : Field\n> Evolution : Hippopotas → Hippowdon (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nManiac Tunnel       Sinnoh  Cave    M/D/N   Commom      22-26   -\nManiac Tunnel       Sinnoh  Cave    M/D/N   Horde       22-25   -\nRuin Maniac Cave    Sinnoh  Cave    M/D/N   Uncommom    22-25   -\n```');
  	}
// Pokedex : 450
    if (message.content.toLowerCase() === '?hippowdon') {
    	message.channel.send('```md\nHippowdon\n> PokeDex Number : 450\n> Egg Group : Field\n> Evolution : Hippopotas → Hippowdon (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 228           Sinnoh  Grass   M/D/N   Commom      50-51   -\n```');
  	}
// Pokedex : 451
    if (message.content.toLowerCase() === '?skorupi') {
    	message.channel.send('```md\nSkorupi\n> PokeDex Number : 451\n> Egg Group : Bug , Water C\n> Evolution : Skorupi → Drapion (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-30   -\n```');
  	}
// Pokedex : 452
    if (message.content.toLowerCase() === '?drapion') {
    	message.channel.send('```md\nDrapion\n> PokeDex Number : 452\n> Egg Group : Bug , Water C\n> Evolution : Skorupi → Drapion (Lv.40)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 453
    if (message.content.toLowerCase() === '?croagunk') {
    	message.channel.send('```md\nCroagunk\n> PokeDex Number : 453\n> Egg Group : Humanoid\n> Evolution : Croagunk → Toxicroak (Lv.37)\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-30   -\nRoute 212           Sinnoh  Grass   M/D/N   Rare        24-25   -\n```');
  	}
// Pokedex : 454
    if (message.content.toLowerCase() === '?toxicroak') {
    	message.channel.send('```md\nToxicroak\n> PokeDex Number : 454\n> Egg Group : Humanoid\n> Evolution : Croagunk → Toxicroak (Lv.37)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 455
    if (message.content.toLowerCase() === '?carnivine') {
    	message.channel.send('```md\nCarnivine\n> PokeDex Number : 455\n> Egg Group : Plant\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-30   -\n```');
  	}
// Pokedex : 456
    if (message.content.toLowerCase() === '?finneon') {
    	message.channel.send('```md\nFinneon\n> PokeDex Number : 456\n> Egg Group : Water B\n> Evolution : Finneon → Lumineon (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nP2 Laboratory       Unova   S.Rod   M/D/N   V.Commom    35-55   -\nRoute 17            Unova   S.Rod   M/D/N   V.Commom    35-55   -\nRoute 18            Unova   S.Rod   M/D/N   V.Commom    35-55   -\nCanalave City       Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nFuego Ironworks     Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nIron Island         Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 205           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 218           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 219           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 220           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 221           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nValley Windworks    Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\n```');
  	}
// Pokedex : 457
    if (message.content.toLowerCase() === '?lumineon') {
    	message.channel.send('```md\nLumineon\n> PokeDex Number : 457\n> Egg Group : Water B\n> Evolution : Finneon → Lumineon (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nP2 Laboratory       Unova   Fishing M/D/N   Special     35-70   -\nRoute 17            Unova   Fishing M/D/N   Special     55-60   -\nRoute 18            Unova   Fishing M/D/N   Special     55-60   -\nCanalave City       Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nFuego Ironworks     Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nIron Island         Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nRoute 205           Sinnoh  S.Rod   M/D/N   V.Commom    31-50   -\nRoute 218           Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nRoute 219           Sinnoh  S.Rod   M/D/N   Rare        31-35   -\nRoute 219           Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nRoute 220           Sinnoh  S.Rod   M/D/N   Rare        31-55   -\nRoute 220           Sinnoh  S.Rod   M/D/N   Commom      31-55   -\nRoute 221           Sinnoh  S.Rod   M/D/N   Rare        31-55   -\nRoute 221           Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nValley Windworks    Sinnoh  S.Rod   M/D/N   V.Commom    31-50   -\n```');
  	}
// Pokedex : 458
    if (message.content.toLowerCase() === '?mantyke') {
    	message.channel.send('```md\nMantyke\n> PokeDex Number : 458\n> Egg Group : Cannot Breed\n> Evolution : Mantyke → Mantine (Lv.Up + Remoriad In Party)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 459
    if (message.content.toLowerCase() === '?snover') {
    	message.channel.send('```md\nSnover\n> PokeDex Number : 459\n> Egg Group : Monster , Plant\n> Evolution : Snover → Abomasnow (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nAcuity Lakefront    Sinnoh  Grass   M/D     Horde       32-33   -\nAcuity Lakefront    Sinnoh  Grass   M/D/N   V.Common    32-35   -\nLake Acuity         Sinnoh  Grass   M/D/N   Horde       36-38   -\nLake Acuity         Sinnoh  Grass   M/D/N   V.Common    38-40   -\nMT.Coronet          Sinnoh  Grass   M/D/N   Common      36-38   -\nRoute 216           Sinnoh  Grass   M/D/N   Horde       32-33   -\nRoute 216           Sinnoh  Grass   M/D/N   V.Common    32-35   -\nRoute 217           Sinnoh  Grass   M/D/N   V.Common    32-35   -\nRoute 217           Sinnoh  Grass   M/D/N   Horde       32-33   -\n```');
  	}
// Pokedex : 460
    if (message.content.toLowerCase() === '?abomasnow') {
    	message.channel.send('```md\nAbomasnow\n> PokeDex Number : 460\n> Egg Group : Monster , Plant\n> Evolution : Snover → Abomasnow (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nMT.Coronet          Sinnoh  Grass   M/D/N   Horde       40      -\nMT.Coronet          Sinnoh  Grass   M/D/N   Common      40      -\n```');
  	}
// Pokedex : 461
    if (message.content.toLowerCase() === '?weavile') {
    	message.channel.send('```md\nWeavile\n> PokeDex Number : 461\n> Egg Group : Field\n> Evolution : Sneasel → Weavile (Lv.Up + Hold Razor Claw + Night Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Special     37-38   -\nGiant Chasm         Unova   D.Cloud M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 462
    if (message.content.toLowerCase() === '?magnezone') {
    	message.channel.send('```md\nMagnezone\n> PokeDex Number : 462\n> Egg Group : Genderless\n> Evolution : Magnemite → Magneton (Lv.30) → Magnezone (Lv.Up at Magnetic Field)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 463
    if (message.content.toLowerCase() === '?lickilicky') {
    	message.channel.send('```md\nLickilicky\n> PokeDex Number : 463\n> Egg Group : Monster\n> Evolution : Lickitung → Lickilicky (Lv.Up + Rollout)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 464
    if (message.content.toLowerCase() === '?rhyperior') {
    	message.channel.send('```md\nRhyperior\n> PokeDex Number : 464\n> Egg Group : Monster , Field\n> Evolution : Rhyhorn → Rhydon (Lv.42) → Rhyperior (Hold Protector + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 465
    if (message.content.toLowerCase() === '?tangrowth') {
    	message.channel.send('```md\nTangrowth\n> PokeDex Number : 465\n> Egg Group : Plant\n> Evolution : Tangela → Tangrowth (Lv.Up + AncientPower)\n#Map                Region  Type    Time    Rarity      Level   Item\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\nRoute 13            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 466
    if (message.content.toLowerCase() === '?electivire') {
    	message.channel.send('```md\nElectivire\n> PokeDex Number : 466\n> Egg Group : Humanoid\n> Evolution : Elekid → Electabuzz (Lv.30) → Electivire (Hold Electirizer + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 467
    if (message.content.toLowerCase() === '?magmortar') {
    	message.channel.send('```md\nMagmortar\n> PokeDex Number : 467\n> Egg Group : Humanoid\n> Evolution : Magby → Magmar (Lv.30) → Magmortar (Hold Magmarizer + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 468
    if (message.content.toLowerCase() === '?togekiss') {
    	message.channel.send('```md\nTogekiss\n> PokeDex Number : 468\n> Egg Group : Flying , Fairy\n> Evolution : Togepi → Togetic (Happiness) → Togekiss (Use Shinystone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 469
    if (message.content.toLowerCase() === '?yanmega') {
    	message.channel.send('```md\nYanmega\n> PokeDex Number : 469\n> Egg Group : Bug\n> Evolution : Yanma → Yanmega (Lv.Up + AncientPower)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 470
    if (message.content.toLowerCase() === '?leafeon') {
    	message.channel.send('```md\nLeafeon\n> PokeDex Number : 470\n> Egg Group 1 : Field\n> Evolution 2 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 3 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 4 : Eevee → Flareon (Use Firestone)\n> Evolution 5 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 6 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 7 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 8 : Eevee → Glaceon (Lv.Up near Icy Rock)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 471
    if (message.content.toLowerCase() === '?glaceon') {
    	message.channel.send('```md\nGlaceon\n> PokeDex Number : 471\n> Egg Group 1 : Field\n> Evolution 2 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 3 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 4 : Eevee → Flareon (Use Firestone)\n> Evolution 5 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 6 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 7 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 8 : Eevee → Glaceon (Lv.Up near Icy Rock)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 472
    if (message.content.toLowerCase() === '?gliscor') {
    	message.channel.send('```md\nGliscor\n> PokeDex Number : 472\n> Egg Group : Bug\n> Evolution : Gligar → Gliscor (Lv.Up + Hold Razor Fang + Night Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   Grass   M/D/N   Special     60-65   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   Grass   M/D/N   Special     60-65   -\nRoute 15            Unova   Shadow  M/D/N   Special     60-65   -\nVictory Road        Unova   Shadow  M/D/N   Special     45-48   -\n```');
  	}
// Pokedex : 473
    if (message.content.toLowerCase() === '?mamoswine') {
    	message.channel.send('```md\nMamoswine\n> PokeDex Number : 473\n> Egg Group : Field\n> Evolution : Swinub → Piloswine (Lv.33) → Mamoswine (Lv.Up + AncientPower)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Special     37-38   -\nGiant Chasm         Unova   D.Cloud M/D/N   Special     60-65   -\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 474
    if (message.content.toLowerCase() === '?porygonz') {
    	message.channel.send('```md\nPorygon-Z\n> PokeDex Number : 474\n> Egg Group : Genderless\n> Evolution : Porygon → Porygon2 (Hold Up-Grade + Trade) → Porygon-Z (Hold Dubious Disc + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 475
    if (message.content.toLowerCase() === '?gallade') {
    	message.channel.send('```md\nGallade\n> PokeDex Number : 475\n> Egg Group : Chaos\n> Evolution : Ralts → Kirlia (Lv.20) → Gardevoir (Lv.30)\n> Evolution : Ralts → Kirlia (Lv.20) → Gallade (Use Dawnstone + Male Gender)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 476
    if (message.content.toLowerCase() === '?probopass') {
    	message.channel.send('```md\nProbopass\n> PokeDex Number : 476\n> Egg Group : Mineral\n> Evolution : Nosepass → Probopass (Lv.Up at Magnetic Field)\n#Map                Region  Type    Time    Rarity      Level   Item\nMT.Coronet          Sinnoh  Rocks   M/D/N   Uncommom    42      -\n```');
  	}
// Pokedex : 477
    if (message.content.toLowerCase() === '?dusknoir') {
    	message.channel.send('```md\nDusknoir\n> PokeDex Number : 477\n> Egg Group : Chaos\n> Evolution : Duskull → Dusclops (Lv.37) → Dusknoir (Hold Reaper Cloth + Trade)\nNo Wild Locations Found.```');
  	}
// Pokedex : 478
    if (message.content.toLowerCase() === '?froslass') {
    	message.channel.send('```md\nFroslass\n> PokeDex Number : 478\n> Egg Group : Fairy , Mineral\n> Evolution : Snorunt → Glalie (Lv.42)\n> Evolution : Snorunt → Froslass (Use Dawnstone + Female Gender)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 479
    if (message.content.toLowerCase() === '?rotom') {
      message.channel.send('```md\nRotom\n> PokeDex Number : 479\n> Egg Group : Genderless\n#Map                Region  Type    Time    Rarity      Level   Item\nOld Chateau         Sinnoh  Inside  M/D/N   Rare        15      -\n```');
  	}

// GEN-5

// Pokedex : 495
    if (message.content.toLowerCase() === '?snivy') {
    	message.channel.send('```md\nSnivy\n> PokeDex Number : 495\n> Egg Group : Field , Plant\n> Evolution : Snivy → Servine (Lv.17) → Serperior (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare        20      -\n```');
  	}
// Pokedex : 496
    if (message.content.toLowerCase() === '?servine') {
    	message.channel.send('```md\nServine\n> PokeDex Number : 496\n> Egg Group : Field , Plant\n> Evolution : Snivy → Servine (Lv.17) → Serperior (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 497
    if (message.content.toLowerCase() === '?serperior') {
    	message.channel.send('```md\nSerperior\n> PokeDex Number : 497\n> Egg Group : Field , Plant\n> Evolution : Snivy → Servine (Lv.17) → Serperior (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 498
    if (message.content.toLowerCase() === '?tepig') {
    	message.channel.send('```md\nTepig\n> PokeDex Number : 498\n> Egg Group : Field\n> Evolution : Tepig → Pignite (Lv.17) → Emboar (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nTwist Mountain      Unova   Cave    M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 499
    if (message.content.toLowerCase() === '?pignite') {
    	message.channel.send('```md\nPignite\n> PokeDex Number : 499\n> Egg Group : Field\n> Evolution : Tepig → Pignite (Lv.17) → Emboar (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 500
    if (message.content.toLowerCase() === '?emboar') {
    	message.channel.send('```md\nEmboar\n> PokeDex Number : 500\n> Egg Group : Field\n> Evolution : Tepig → Pignite (Lv.17) → Emboar (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 501
    if (message.content.toLowerCase() === '?oshawott') {
    	message.channel.send('```md\nOshawott\n> PokeDex Number : 501\n> Egg Group : Field\n> Evolution : Oshawott → Dewott (Lv.17) → Samurott (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Water   M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 502
    if (message.content.toLowerCase() === '?dewott') {
    	message.channel.send('```md\nDewott\n> PokeDex Number : 502\n> Egg Group : Field\n> Evolution : Oshawott → Dewott (Lv.17) → Samurott (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 503
    if (message.content.toLowerCase() === '?samurott') {
    	message.channel.send('```md\nSamurott\n> PokeDex Number : 503\n> Egg Group : Field\n> Evolution : Oshawott → Dewott (Lv.17) → Samurott (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 504
    if (message.content.toLowerCase() === '?patrat') {
    	message.channel.send('```md\nPatrat\n> PokeDex Number : 504\n> Egg Group : Field\n> Evolution : Patrat → Watchog (Lv.20)\n#Map                Region  Type   	Time    Rarity      Level   Item\nDreamyard           Unova   Grass  	M/D/N   V.Common 	8-11    -\nRoute 1             Unova   Grass  	M/D/N   V.Common 	2-4     -\nRoute 2             Unova   Grass  	M/D/N   V.Common 	4-7     -\nRoute 3             Unova   Grass   M/D/N   Common      8       -\nRoute 3             Unova   D.Grass M/D/N   Common      10      -\n```');
  	}
// Pokedex : 505
    if (message.content.toLowerCase() === '?watchog') {
    	message.channel.send('```md\nWatchog\n> PokeDex Number : 505\n> Egg Group : Field\n> Evolution : Patrat → Watchog (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/D/N   Uncommon    47      -\nP2 Laboratory       Unova   Grass   M/D/N   V.Common    28-31   -\nRoute 1             Unova   D.Grass M/D/N   V.Common    32-35   -\nRoute 1             Unova   D.Grass M/D/N   Horde       30-32   -\nRoute 7             Unova   Grass   M/D/N   Common      27-29   -\nRoute 7             Unova   Grass   M/D/N   Horde       27-29   -\nRoute 7             Unova   D.Grass M/D/N   Common      31-33   -\nRoute 15            Unova   D.Grass M/D/N   Rare        55      -\nRoute 18            Unova   Grass   M/D/N   Common      28-30   -\nRoute 18            Unova   D.Grass M/D/N   Common      32-34   -\n```');
  	}
// Pokedex : 506
    if (message.content.toLowerCase() === '?lillipup') {
    	message.channel.send('```md\nLillipup\n> PokeDex Number : 506\n> Egg Group : Field\n> Evolution : Lillipup → Herdier (Lv.16) → Stoutland (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 1             Unova   Grass   M/D/N   V.Common    2-4     -\nRoute 2             Unova   Grass   M/D/N   V.Common    4-7     -\nRoute 3             Unova   Grass   M/D/N   Uncommon    9       -\nRoute 3             Unova   D.Grass M/D/N   Uncommon    11      -\n```');
  	}
// Pokedex : 507
    if (message.content.toLowerCase() === '?herdier') {
    	message.channel.send('```md\nHerdier\n> PokeDex Number : 507\n> Egg Group : Field\n> Evolution : Lillipup → Herdier (Lv.16) → Stoutland (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   V.Common    21-23   -\nCold Storage        Unova   Grass   M/D/N   Horde       19-20   -\nCold Storage        Unova   D.Grass M/D/N   V.Common    25-27   -\nP2 Laboratory       Unova   Grass   M/D/N   V.Common    28-31   -\nP2 Laboratory       Unova   Grass   M/D/N   Horde       27-28   -\nRoute 1             Unova   D.Grass M/D/N   V.Common    32-34   -\nRoute 10            Unova   Grass   M/D/N   Common      33-34   -\nRoute 10            Unova   D.Grass M/D/N   Common      38-39   -\nRoute 10            Unova   Grass   M/D/N   Horde       32-33   -\nRoute 10            Unova   D.Grass M/D/N   Horde       39      -\n```');
  	}
// Pokedex : 508
    if (message.content.toLowerCase() === '?stoutland') {
    	message.channel.send('```md\nStoutland\n> PokeDex Number : 508\n> Egg Group : Field\n> Evolution : Lillipup → Herdier (Lv.16) → Stoutland (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Unova   Grass   M/D/N   Special     36-44   -\n```');
  	}
// Pokedex : 509
    if (message.content.toLowerCase() === '?purrloin') {
    	message.channel.send('```md\nPurrloin\n> PokeDex Number : 509\n> Egg Group : Field\n> Evolution : Purrloin → Liepard (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   Grass   M/D/N   V.Common    8-11    -\nRoute 2             Unova   Grass   M/D/N   V.Common    4-5     -\nRoute 3             Unova   Grass   M/D/N   Common      9       -\nRoute 3             Unova   D.Grass M/D/N   Common      11      -\nRoute 3             Unova   Grass   N       Horde       7-8     -\nRoute 3             Unova   D.Grass N       Horde       8-9     -\n```');
  	}
// Pokedex : 510
    if (message.content.toLowerCase() === '?liepard') {
    	message.channel.send('```md\nLiepard\n> PokeDex Number : 510\n> Egg Group : Field\n> Evolution : Purrloin → Liepard (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/D/N   Uncommon    47      -\nDreamyard           Unova   D.Grass M/D/N   Horde       46-47   -\nRoute 5             Unova   Grass   M/D/N   Common      20-22   -\nRoute 5             Unova   D.Grass M/D/N   Common      23-25   -\nRoute 5             Unova   D.Grass M/D/N   Horde       23-25   -\nRoute 9             Unova   Grass   M/D/N   Uncommon    33      -\nRoute 9             Unova   D.Grass M/D/N   Uncommon    33      -\nRoute 16            Unova   Grass   M/D/N   Common      20-22   -\nRoute 16            Unova   D.Grass M/D/N   Common      23-25   -\n```');
  	}
// Pokedex : 511
    if (message.content.toLowerCase() === '?pansage') {
    	message.channel.send('```md\nPansage\n> PokeDex Number : 511\n> Egg Group : Field\n> Evolution : Pansage → Simisage (Use Leafstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare        19-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Rare        32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Rare        14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Rare        22-25   -\n```');
  	}
// Pokedex : 512
    if (message.content.toLowerCase() === '?simisage') {
    	message.channel.send('```md\nSimisage\n> PokeDex Number : 512\n> Egg Group : Field\n> Evolution : Pansage → Simisage (Use Leafstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 513
    if (message.content.toLowerCase() === '?pansear') {
    	message.channel.send('```md\nPansear\n> PokeDex Number : 513\n> Egg Group : Field\n> Evolution : Pansear → Simisear (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare        19-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Rare        32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Rare        14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Rare        22-25   -\n```');
  	}
// Pokedex : 514
    if (message.content.toLowerCase() === '?simisear') {
    	message.channel.send('```md\nSimisear\n> PokeDex Number : 514\n> Egg Group : Field\n> Evolution : Pansear → Simisear (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 515
    if (message.content.toLowerCase() === '?panpour') {
    	message.channel.send('```md\nPanpour\n> PokeDex Number : 515\n> Egg Group : Field\n> Evolution : Panpour → Simipour (Use Waterstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare        19-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Rare        32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Rare        14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Rare        22-25   -\n```');
  	}
// Pokedex : 516
    if (message.content.toLowerCase() === '?simipour') {
    	message.channel.send('```md\nSimipour\n> PokeDex Number : 516\n> Egg Group : Field\n> Evolution : Panpour → Simipour (Use Waterstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 517
    if (message.content.toLowerCase() === '?munna') {
    	message.channel.send('```md\nMunna\n> PokeDex Number : 517\n> Egg Group : Field\n> Evolution : Munna → Musharna (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/D/N   V.Common    48-49   -\nDreamyard           Unova   Grass   M/D/N   V.Common    8-10    -\n```');
  	}
// Pokedex : 518
    if (message.content.toLowerCase() === '?musharna') {
    	message.channel.send('```md\nMusharna\n> PokeDex Number : 518\n> Egg Group : Field\n> Evolution : Munna → Musharna (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   Grass   M/D/N   Special     10-12   -\n```');
  	}
// Pokedex : 519
    if (message.content.toLowerCase() === '?pidove') {
    	message.channel.send('```md\nPidove\n> PokeDex Number : 519\n> Egg Group : Flying\n> Evolution : Pidove → Tranquill (Lv.21) → Unfezant (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    12-16   -\nPinwheel Forest     Unova   Grass   M/D     Horde       10-12   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    14-15   -\nRoute 3             Unova   Grass   M/D/N   V.Common    8-11    -\nRoute 3             Unova   Grass   M/D     Horde       7-8     -\nRoute 3             Unova   D.Grass M/D/N   V.Common    10-13   -\nRoute 3             Unova   D.Grass M/D     Horde       8-9     -\n```');
  	}
// Pokedex : 520
    if (message.content.toLowerCase() === '?tranquill') {
    	message.channel.send('```md\nTranquill\n> PokeDex Number : 520\n> Egg Group : Flying\n> Evolution : Pidove → Tranquill (Lv.21) → Unfezant (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Uncommon    21-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Uncommon    34-35   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    23-24   -\nRoute 6             Unova   D.Grass M/D/N   Horde       24-26   -\nRoute 12            Unova   Grass   M/D/N   Common      48-50   -\nRoute 12            Unova   D.Grass M/D/N   Common      53-55   -\nRoute 12            Unova   D.Grass M/D/N   Horde       50-52   -\n```');
  	}
// Pokedex : 521
    if (message.content.toLowerCase() === '?unfezant') {
    	message.channel.send('```md\nUnfezant\n> PokeDex Number : 521\n> Egg Group : Flying\n> Evolution : Pidove → Tranquill (Lv.21) → Unfezant (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Shadow  M/D/N   Special     32-42   -\nRoute 7             Unova   Grass   M/D/N   Special     32      -\nRoute 12            Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 522
    if (message.content.toLowerCase() === '?blitzle') {
    	message.channel.send('```md\nBlitzle\n> PokeDex Number : 522\n> Egg Group : Field\n> Evolution : Blitzle → Zebstrika (Lv.27)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Unova   Grass   M/D/N   Common      8-11    -\nRoute 3             Unova   D.Grass M/D/N   Common      10-13   -\nRoute 3             Unova   D.Grass M/D/N   Horde       8-9     -\n```');
  	}
// Pokedex : 523
    if (message.content.toLowerCase() === '?zebstrika') {
    	message.channel.send('```md\nZebstrika\n> PokeDex Number : 523\n> Egg Group : Field\n> Evolution : Blitzle → Zebstrika (Lv.27)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 7             Unova   Grass   M/D/N   Common      27-29   -\nRoute 7             Unova   D.Grass M/D/N   Common      31-33   -\nRoute 7             Unova   D.Grass M/D/N   Horde       28-30   -\n```');
  	}
// Pokedex : 524
    if (message.content.toLowerCase() === '?roggenrola') {
    	message.channel.send('```md\nRoggenrola\n> PokeDex Number : 524\n> Egg Group : Mineral\n> Evolution : Roggenrola → Boldore (Lv.25) → Gigalith (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nWellspring Cave     Unova   Cave    M/D/N   Common      10-13   -\n```');
  	}
// Pokedex : 525
    if (message.content.toLowerCase() === '?boldore') {
    	message.channel.send('```md\nBoldore\n> PokeDex Number : 525\n> Egg Group : Mineral\n> Evolution : Roggenrola → Boldore (Lv.25) → Gigalith (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave   Unova   Cave    M/D/N   Uncommon    48      -\nChallengers Cave   Unova   Cave    M/D/N   Horde       46-47   -\nChargestone Cave    Unova   Cave    M/D/N   Uncommon    24      -\nGiant Chasm         Unova   Cave    M/D/N   Rare        49      -\nGuidance Chamber    Unova   Cave    M/D/N   V.Common    28-31   -\nMistralton Cave     Unova   Cave    M/D/N   V.Common    28-31   -\nMistralton Cave     Unova   Cave    M/D/N   Horde       26-28   -\nTrial Chamber       Unova   Cave    M/D/N   V.Common    39-41   -\nTwist Mountain      Unova   Cave    M/D/N   Common      29-30   -\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\nVictory Road        Unova   Cave    M/D/N   V.Common    37-41   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\nWellspring Cave     Unova   Cave    M/D/N   V.Common    28-31   -\nWellspring Cave     Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 526
    if (message.content.toLowerCase() === '?gigalith') {
    	message.channel.send('```md\nGigalith\n> PokeDex Number : 526\n> Egg Group : Mineral\n> Evolution : Roggenrola → Boldore (Lv.25) → Gigalith (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Unova   D.Cloud M/D/N   Special     45-48   -\n```');
  	}
// Pokedex : 527
    if (message.content.toLowerCase() === '?woobat') {
    	message.channel.send('```md\nWoobat\n> PokeDex Number : 527\n> Egg Group : Flying , Field\n> Evolution : Woobat → Swoobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave    Unova   Cave    M/D/N   Common      47      -\nGuidance Chamber    Unova   Cave    M/D/N   V.Common    28-30   -\nGuidance Chamber    Unova   Cave    M/D/N   Horde       26-28   -\nMistralton Cave     Unova   Cave    M/D/N   V.Common    28-30   -\nMistralton Cave     Unova   Cave    M/D/N   Horde       26-28   -\nTrial Chamber       Unova   Cave    M/D/N   Common      39-42   -\nTrial Chamber       Unova   Cave    M/D/N   Horde       37-39   -\nTwist Mountain      Unova   Cave    M/D/N   Uncommon    28-30   -\nVictory Road        Unova   Cave    M/D/N   Common      37-42   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\nWellspring Cave     Unova   Cave    M/D/N   V.Common    10-31   -\nWellspring Cave     Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 528
    if (message.content.toLowerCase() === '?swoobat') {
    	message.channel.send('```md\nSwoobat\n> PokeDex Number : 528\n> Egg Group : Flying , Field\n> Evolution : Woobat → Swoobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nWellspring Cave     Unova   D.Cloud M/D/N   Special     12-15   -\n```');
  	}
// Pokedex : 529
    if (message.content.toLowerCase() === '?drillbur') {
    	message.channel.send('```md\nDrillbur\n> PokeDex Number : 529\n> Egg Group : Field\n> Evolution : Drillbur → Excadrill (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   D.Cloud M/D/N   Special     30-31   -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41   -\nMistralton Cave     Unova   D.Cloud M/D/N   Special     35-40   -\nTwist Mountain      Unova   D.Cloud M/D/N   Special     33-34   -\nWellspring Cave     Unova   D.Cloud M/D/N   Special     10-15   -\n```');
  	}
// Pokedex : 530
    if (message.content.toLowerCase() === '?excadrill') {
    	message.channel.send('```md\nExcadrill\n> PokeDex Number : 530\n> Egg Group : Field\n> Evolution : Drillbur → Excadrill (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave    Unova   D.Cloud M/D/N   Special     60-65   -\nChargestone Cave    Unova   D.Cloud M/D/N   Special     31      -\nGiant Chasm         Unova   D.Cloud M/D/N   Special     57-65   -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41   -\nMistralton Cave     Unova   D.Cloud M/D/N   Special     35-40   -\nTrial Chamber       Unova   D.Cloud M/D/N   Special     39-42   -\nTwist Mountain      Unova   D.Cloud M/D/N   Special     33-34   -\nVictory Road        Unova   D.Cloud M/D/N   Special     45-48   -\n```');
  	}
// Pokedex : 531
    if (message.content.toLowerCase() === '?audino') {
    	message.channel.send('```md\nAudino\n> PokeDex Number : 531\n> Egg Group : Fairy\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Special     28-29   -\nDreamyard           Unova   Grass   M/D/N   Special     10-12   -\nP2 Laboratory       Unova   Grass   M/D/N   Special     36-38   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nRoute 1             Unova   Grass   M/D/N   Special     3-4     -\nRoute 2             Unova   Grass   M/D/N   Special     6-7     -\nRoute 3             Unova   Grass   M/D/N   Special     12-14   -\nRoute 5             Unova   Grass   M/D/N   Special     23-25   -\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\nRoute 7             Unova   Grass   M/D/N   Special     31-32   -\nRoute 10            Unova   Grass   M/D/N   Special     33-36   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\nRoute 18            Unova   Grass   M/D/N   Special     38-40   -\n```');
  	}
// Pokedex : 532
    if (message.content.toLowerCase() === '?timburr') {
    	message.channel.send('```md\nTimburr\n> PokeDex Number : 532\n> Egg Group : Humanoid\n> Evolution : Timburr → Gurdurr (Lv.25) → Conkeldurr (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   D.Grass M/D/N   Horde       23-24   -\nCold Storage        Unova   Grass   M/D/N   Uncommon    21-22   -\nCold Storage        Unova   D.Grass M/D/N   Uncommon    25-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    13-14   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    15-16   -\nPinwheel Forest     Unova   D.Grass M/D/N   Horde       12-14   -\n```');
  	}
// Pokedex : 533
    if (message.content.toLowerCase() === '?gurdurr') {
    	message.channel.send('```md\nGurdurr\n> PokeDex Number : 533\n> Egg Group : Humanoid\n> Evolution : Timburr → Gurdurr (Lv.25) → Conkeldurr (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\nTwist Mountain      Unova   Cave    M/D/N   Uncommon    29      -\n```');
  	}
// Pokedex : 534
    if (message.content.toLowerCase() === '?conkeldurr') {
    	message.channel.send('```md\nConkeldurr\n> PokeDex Number : 534\n> Egg Group : Humanoid\n> Evolution : Timburr → Gurdurr (Lv.25) → Conkeldurr (Trade)\nNo wild location found.\n```');
  	}
// Pokedex : 535
    if (message.content.toLowerCase() === '?tympole') {
    	message.channel.send('```md\nTympole\n> PokeDex Number : 535\n> Egg Group : Water A\n> Evolution : Tympole → Palpitoad (Lv.25) → Seismitoad (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   Common      12-15   -\nPinwheel Forest     Unova   Grass   M/D/N   Horde       10-12   -\nPinwheel Forest     Unova   D.Grass M/D/N   Common      14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Horde       12-14   -\n```');
  	}
// Pokedex : 536
    if (message.content.toLowerCase() === '?palpitoad') {
    	message.channel.send('```md\nPalpitoad\n> PokeDex Number : 536\n> Egg Group : Water A\n> Evolution : Tympole → Palpitoad (Lv.25) → Seismitoad (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Grass   M/D/N   V.Common    30-33   -\nMoor of Icirrus     Unova   Grass   M/D/N   V.Common    30-33   -\nMoor of Icirrus     Unova   Grass   M/D/N   Horde       28-30   -\nRoute 8             Unova   Grass   M/D/N   V.Common    30-33   -\nRoute 8             Unova   Grass   M/D/N   Horde       28-30   -\n```');
  	}
// Pokedex : 537
    if (message.content.toLowerCase() === '?seismitoad') {
    	message.channel.send('```md\nSeismitoad\n> PokeDex Number : 537\n> Egg Group : Water A\n> Evolution : Tympole → Palpitoad (Lv.25) → Seismitoad (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Water   M/D/N   Special     36-40   -\nMoor of Icirrus     Unova   Water   M/D/N   Special     39-40   -\nRoute 8             Unova   Water   M/D/N   Special     39-40   -\n```');
  	}
// Pokedex : 538
    if (message.content.toLowerCase() === '?throh') {
    	message.channel.send('```md\nThroh\n> PokeDex Number : 538\n> Egg Group : Humanoid\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   V.Rare      12-15   -\nPinwheel Forest     Unova   D.Grass M/D/N   V.Rare      14-17   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nRoute 10            Unova   Grass   M/D/N   Rare        33-36   -\nRoute 10            Unova   D.Grass M/D/N   Rare        38-41   -\nRoute 10            Unova   Grass   M/D/N   Special     36      -\nRoute 15            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 15            Unova   Grass   M/D/N   Common      48-49   -\nRoute 15            Unova   D.Grass M/D/N   Common      53-54   -\nRoute 18            Unova   Grass   M/D/N   Uncommon    29-31   -\nRoute 18            Unova   Grass   M/D     Horde       27-28   -\nRoute 18            Unova   D.Grass M/D/N   Uncommon    33-35   -\n```');
  	}
// Pokedex : 539
    if (message.content.toLowerCase() === '?sawk') {
    	message.channel.send('```md\nSawk\n> PokeDex Number : 539\n> Egg Group : Humanoid\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   V.Rare      12-15   -\nPinwheel Forest     Unova   D.Grass M/D/N   V.Rare      14-17   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nRoute 10            Unova   Grass   M/D/N   Rare        33-36   -\nRoute 10            Unova   D.Grass M/D/N   Rare        38-41   -\nRoute 15            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 15            Unova   Grass   M/D/N   Common      48-49   -\nRoute 15            Unova   D.Grass M/D/N   Common      53-54   -\nRoute 18            Unova   Grass   M/D/N   Uncommon    29-31   -\nRoute 18            Unova   Grass   M/D     Horde       27-28   -\nRoute 18            Unova   D.Grass M/D/N   Uncommon    33-35   -\n```');
  	}
// Pokedex : 540
    if (message.content.toLowerCase() === '?sewaddle') {
    	message.channel.send('```md\nSewaddle\n> PokeDex Number : 540\n> Egg Group : Bug\n> Evolution : Sewaddle → Swadloon (Lv.20) → Leavanny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   Common      14-17   -\nPinwheel Forest     Unova   Grass   M/D     Horde       13-14   -\n```');
  	}
// Pokedex : 541
    if (message.content.toLowerCase() === '?swadloon') {
    	message.channel.send('```md\nSwadloon\n> PokeDex Number : 541\n> Egg Group : Bug\n> Evolution : Sewaddle → Swadloon (Lv.20) → Leavanny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Common      20-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Common      33-35   -\nLostlorn Forest     Unova   D.Grass M/D/N   Horde       31-32   -\nPinwheel Forest     Unova   D.Grass M/D/N   Common      22-25   -\nRoute 6             Unova   Grass   M/D/N   Uncommon    23      -\nRoute 6             Unova   D.Grass M/D/N   Uncommon    27      -\n```');
  	}
// Pokedex : 542
    if (message.content.toLowerCase() === '?leavanny') {
    	message.channel.send('```md\nLeavanny\n> PokeDex Number : 542\n> Egg Group : Bug\n> Evolution : Sewaddle → Swadloon (Lv.20) → Leavanny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\n```');
  	}
// Pokedex : 543
    if (message.content.toLowerCase() === '?venipede') {
    	message.channel.send('```md\nVenipede\n> PokeDex Number : 543\n> Egg Group : Bug\n> Evolution : Venipede → Whirlipede (Lv.22) → Scolipede (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   V.Common    20-21   -\nLostlorn Forest     Unova   Grass   M/D/N   Horde       18-19   -\nLostlorn Forest     Unova   D.Grass M/D/N   V.Common    33-34   -\nPinwheel Forest     Unova   Grass   M/D/N   V.Common    15-16   -\nPinwheel Forest     Unova   Grass   N       Horde       13-14   -\n```');
  	}
// Pokedex : 544
    if (message.content.toLowerCase() === '?whirlipde') {
    	message.channel.send('```md\nWhirlipede\n> PokeDex Number : 544\n> Egg Group : Bug\n> Evolution : Venipede → Whirlipede (Lv.22) → Scolipede (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   D.Grass M/D/N   V.Common    23-24   -\nPinwheel Forest     Unova   D.Grass N       Horde       22      -\n```');
  	}
// Pokedex : 545
    if (message.content.toLowerCase() === '?scolipede') {
    	message.channel.send('```md\nScolipede\n> PokeDex Number : 545\n> Egg Group : Bug\n> Evolution : Venipede → Whirlipede (Lv.22) → Scolipede (Lv.30)\nNo wild location found.\n```');
  	}
// Pokedex : 546
    if (message.content.toLowerCase() === '?cottonee') {
    	message.channel.send('```md\nCottonee\n> PokeDex Number : 546\n> Egg Group : Plant , Fairy\n> Evolution : Cottonee → Whimsicott (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Common      48      -\nAbundant Shrine     Unova   D.Grass M/D/N   Common      53      -\nLostlorn Forest     Unova   Grass   M/D/N   Uncommon    19-22   -\nLostlorn Forest     Unova   Grass   M/D     Horde       18-19   -\nLostlorn Forest     Unova   D.Grass M/D/N   Uncommon    32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    22-25   -\nPinwheel Forest     Unova   D.Grass M/D     Horde       20-22   -\n```');
  	}
// Pokedex : 547
    if (message.content.toLowerCase() === '?whimsicott') {
    	message.channel.send('```md\nWhimsicott\n> PokeDex Number : 547\n> Egg Group : Plant , Fairy\n> Evolution : Cottonee → Whimsicott (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 548
    if (message.content.toLowerCase() === '?petilil') {
    	message.channel.send('```md\nPetilil\n> PokeDex Number : 548\n> Egg Group : Plant\n> Evolution : Petilil → Lilligant (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Common      48      -\nAbundant Shrine     Unova   D.Grass M/D/N   Common      53      -\nLostlorn Forest     Unova   Grass   M/D/N   Uncommon    19-22   -\nLostlorn Forest     Unova   Grass   M/D     Horde       18-19   -\nLostlorn Forest     Unova   D.Grass M/D/N   Uncommon    32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    22-25   -\nPinwheel Forest     Unova   D.Grass M/D     Horde       20-22   -\n```');
  	}
// Pokedex : 549
    if (message.content.toLowerCase() === '?lilligant') {
    	message.channel.send('```md\nLilligant\n> PokeDex Number : 549\n> Egg Group : Plant\n> Evolution : Petilil → Lilligant (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 550
    if (message.content.toLowerCase() === '?basculin') {
    	message.author.send('```md\nBasculin\n> PokeDex Number : 550\n> Egg Group : Water B\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Water   D/M/N   V.Common    35-55   -\nAbundant Shrine     Unova   S.Rod   D/M/N   V.Common    35-55   -\nAbundant Shrine     Unova   Water   D/M/N   Special     60-65   -\nAbundant Shrine     Unova   Fishing D/M/N   Special     60-65   -\nChallengers Cave    Unova   Water   D/M/N   V.Common    35-55   -\nChallengers Cave    Unova   Water   D/M/N   Horde       35-55   -\nChallengers Cave    Unova   S.Rod   D/M/N   V.Common    35-55   -\nChallengers Cave    Unova   Water   D/M/N   Special     60-65   -\nChallengers Cave    Unova   Fishing D/M/N   Special     55-60   -\nDragonspiral Tower  Unova   Water   D/M/N   V.Common    25-35   -\nDragonspiral Tower  Unova   Water   D/M/N   Horde       25-35   -\nDragonspiral Tower  Unova   S.Rod   D/M/N   V.Common    35-55   -\nDragonspiral Tower  Unova   Water   D/M/N   Special     39-40   -\nDragonspiral Tower  Unova   Fishing D/M/N   Special     55-60   -\n```');
    	message.author.send('```md\nGiant Chasm         Unova   S.Rod   D/M/N   V.Common    35-55   -\nGiant Chasm         Unova   Water   D/M/N   Special     45-60   -\nGiant Chasm         Unova   Fishing D/M/N   Special     35-60   -\nGiant Chasm         Unova   Water   D/M/N   V.Common    35-55   -\nLostlorn Forest     Unova   Water   D/M/N   V.Common    25-35   -\nLostlorn Forest     Unova   Water   D/M/N   Horde       25-35   -\nLostlorn Forest     Unova   S.Rod   D/M/N   V.Common    35-55   -\nLostlorn Forest     Unova   Water   D/M/N   Special     10-20   -\nLostlorn Forest     Unova   Fishing D/M/N   Special     35-60   -\nPinwheel Forest     Unova   Water   D/M/N   V.Common    25-35   -\nPinwheel Forest     Unova   Water   D/M/N   Horde       25-35   -\nPinwheel Forest     Unova   S.Rod   D/M/N   V.Common    35-55   -\nPinwheel Forest     Unova   Water   D/M/N   Special     30-40   -\nPinwheel Forest     Unova   Fishing D/M/N   Special     55-60   -\n```');
    	message.author.send('```md\nRoute 1             Unova   Water   D/M/N   V.Common    25-35   -\nRoute 1             Unova   Water   D/M/N   Horde       25-35   -\nRoute 1             Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 1             Unova   Water   D/M/N   Special     30-40   -\nRoute 1             Unova   Fishing D/M/N   Special     55-60   -\nRoute 3             Unova   Water   D/M/N   V.Common    25-35   -\nRoute 3             Unova   Water   D/M/N   Horde       25-35   -\nRoute 3             Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 3             Unova   Water   D/M/N   Special     30-40   -\nRoute 3             Unova   Fishing D/M/N   Special     55-60   -\nRoute 6             Unova   Water   D/M/N   V.Common    25-35   -\nRoute 6             Unova   Water   D/M/N   Horde       25-35   -\nRoute 6             Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 6             Unova   Water   D/M/N   Special     30-40   -\nRoute 6             Unova   Fishing D/M/N   Special     55-60   -\nRoute 11            Unova   Water   D/M/N   V.Common    35-55   -\nRoute 11            Unova   Water   D/M/N   Horde       35-55   -\nRoute 11            Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 11            Unova   Water   D/M/N   Special     60-65   -\nRoute 11            Unova   Fishing D/M/N   Special     55-60   -\nRoute 14            Unova   Water   D/M/N   V.Common    35-55   -\nRoute 14            Unova   Water   D/M/N   Horde       35-55   -\nRoute 14            Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 14            Unova   Water   D/M/N   Special     60-65   -\nRoute 14            Unova   Fishing D/M/N   Special     55-60   -\n```');
    	message.author.send('```md\nStrialton City      Unova   Water   D/M/N   V.Common    25-35   -\nStrialton City      Unova   Water   D/M/N   Horde       25-35   -\nStrialton City      Unova   S.Rod   D/M/N   V.Common    35-55   -\nStrialton City      Unova   Water   D/M/N   Special     30-40   -\nStrialton City      Unova   Fishing D/M/N   Special     55-60   -\nVictory Road        Unova   Water   D/M/N   V.Common    35-55   -\nVictory Road        Unova   Water   D/M/N   Horde       35-55   -\nVictory Road        Unova   S.Rod   D/M/N   V.Common    35-55   -\nVictory Road        Unova   Water   D/M/N   Special     45-48   -\nVictory Road        Unova   Fishing D/M/N   Special     55-60   -\nVillage Bridge      Unova   Water   D/M/N   V.Common    35-55   -\nVillage Bridge      Unova   Water   D/M/N   Horde       35-55   -\nVillage Bridge      Unova   S.Rod   D/M/N   V.Common    35-55   -\nVillage Bridge      Unova   Water   D/M/N   Special     60-65   -\nVillage Bridge      Unova   Fishing D/M/N   Special     60-65   -\nWellspring Cave     Unova   Water   D/M/N   V.Common    25-35   -\nWellspring Cave     Unova   Water   D/M/N   Horde       25-35   -\nWellspring Cave     Unova   S.Rod   D/M/N   V.Common    35-55   -\nWellspring Cave     Unova   Water   D/M/N   Special     10-40   -\nWellspring Cave     Unova   Fishing D/M/N   Special     35-60   -\n```');
    }
// Pokedex : 551
    if (message.content.toLowerCase() === '?sandile') {
    	message.channel.send('```md\nSandile\n> PokeDex Number : 551\n> Egg Group : Field\n> Evolution : Sandile → Krokorok (Lv.29) → Krookodile (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   D/M/N   V.Common    19-22   -\nDesert Resort       Unova   Grass   D/M/N   Horde       17-19   -\nRelic Castle        Unova   Cave    D/M/N   V.Rare      19-22   -\nRelic Castle        Unova   Cave    D/M/N   Horde       18-19   -\nRoute 4             Unova   Grass   D/M/N   V.Common    15-18   -\n```');
  	}
// Pokedex : 552
    if (message.content.toLowerCase() === '?krokorok') {
    	message.channel.send('```md\nKrokorok\n> PokeDex Number : 552\n> Egg Group : Field\n> Evolution : Sandile → Krokorok (Lv.29) → Krookodile (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   V.Common    34-50   -\nRelic Castle        Unova   Cave    M/D/N   Horde       32-47   -\n```');
  	}
// Pokedex : 553
    if (message.content.toLowerCase() === '?krokodile') {
    	message.channel.send('```md\nKrokodile\n> PokeDex Number : 553\n> Egg Group : Field\n> Evolution : Sandile → Krokorok (Lv.29) → Krookodile (Lv.40)\nNo wild location found.\n```');
  	}
// Pokedex : 554
    if (message.content.toLowerCase() === '?darumaka') {
    	message.channel.send('```md\nDarumaka\n> PokeDex Number : 554\n> Egg Group : Field\n> Evolution : Darumaka → Darmanitan (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   V.Common    19-20   -\nDesert Resort       Unova   Grass   M/D/N   Horde       17-19   -\nRoute 4             Unova   Grass   M/D/N   V.Common    15-18   -\nRoute 4             Unova   Grass   M/D/N   Horde       14-15   -\n```');
  	}
// Pokedex : 555
    if (message.content.toLowerCase() === '?darmanitan') {
    	message.channel.send('```md\nDarmanitan\n> PokeDex Number : 555\n> Egg Group : Field\n> Evolution : Darumaka → Darmanitan (Lv.35)\nNo wild location found.\n```');
  	}
// Pokedex : 556
    if (message.content.toLowerCase() === '?maractus') {
    	message.channel.send('```md\nMaractus\n> PokeDex Number : 556\n> Egg Group : Plant\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   Uncommon    20      -\nDesert Resort       Unova   Grass   N       Horde       17-19   -\n```');
  	}
// Pokedex : 557
    if (message.content.toLowerCase() === '?dwebble') {
    	message.channel.send('```md\nDwebble\n> PokeDex Number : 557\n> Egg Group : Bug\n> Evolution : Dwebble → Crustle (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   Uncommon    20-22   -\nRoute 18            Unova   Grass   M/D/N   Common      30-31   -\n```');
  	}
// Pokedex : 558
    if (message.content.toLowerCase() === '?crustle') {
    	message.channel.send('```md\nCrustle\n> PokeDex Number : 558\n> Egg Group : Bug\n> Evolution : Dwebble → Crustle (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 18            Unova   D.Grass M/D/N   Common      34-35   -\nRoute 18            Unova   D.Grass M/D/N   Horde       34      -\n```');
  	}
// Pokedex : 559
    if (message.content.toLowerCase() === '?scraggy') {
    	message.channel.send('```md\nScraggy\n> PokeDex Number : 559\n> Egg Group : Field , Dragon\n> Evolution : Scraggy → Scrafty (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   V.Common    20      -\nP2 Laboratory       Unova   Grass   M/D/N   Common      29-31   -\nRoute 1             Unova   D.Grass M/D/N   V.Common    32-35   -\nRoute 1             Unova   Grass   M/D/N   Special     3-4     -\nRoute 4             Unova   Grass   M/D/N   V.Common    16-17   -\nRoute 18            Unova   Grass   M/D/N   V.Common    28-31   -\nRoute 18            Unova   Grass   M/D/N   Horde       27-28   -\nRoute 18            Unova   D.Grass M/D/N   V.Common    32-35   -\n```');
  	}
// Pokedex : 560
    if (message.content.toLowerCase() === '?scrafty') {
    	message.channel.send('```md\nScrafty\n> PokeDex Number : 560\n> Egg Group : Field , Dragon\n> Evolution : Scraggy → Scrafty (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 18            Unova   Grass   M/D/N   Special     39-40   -\n```');
  	}
// Pokedex : 561
    if (message.content.toLowerCase() === '?sigilyph') {
    	message.channel.send('```md\nSigilyph\n> PokeDex Number : 561\n> Egg Group : Flying\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Shadow  M/D/N   Special     22-24   -\nDesert Resort       Unova   Grass   M/D/N   Rare        20      -\nDesert Resort       Unova   Grass   M/D/N   Horde       17-19   -\nRoute 4             Unova   Shadow  M/D/N   Special     19-21   -\n```');
  	}
// Pokedex : 562
    if (message.content.toLowerCase() === '?yamask') {
    	message.channel.send('```md\nYamask\n> PokeDex Number : 562\n> Egg Group : Mineral , Chaos\n> Evolution : Yamask → Cofagrigus (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   Rare        19-22   -\nRelic Castle        Unova   Cave    M/D/N   Horde       18-19   -\n```');
  	}
// Pokedex : 563
    if (message.content.toLowerCase() === '?cofagrigus') {
    	message.channel.send('```md\nCofagrigus\n> PokeDex Number : 563\n> Egg Group : Mineral , Chaos\n> Evolution : Yamask → Cofagrigus (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   V.Common    34-49   -\nRelic Castle        Unova   Cave    M/D/N   Horde       34-47   -\n```');
  	}
// Pokedex : 564
    if (message.content.toLowerCase() === '?tirtouga') {
    	message.channel.send('```md\nTirtouga\n> PokeDex Number : 564\n> Egg Group : Water A , Water C\n> Evolution : Tirtouga → Carracosta (Lv.37)\nNo wild location found.\n```');
  	}
// Pokedex : 565
    if (message.content.toLowerCase() === '?carracosta') {
    	message.channel.send('```md\nCarracosta\n> PokeDex Number : 565\n> Egg Group : Water A , Water C\n> Evolution : Tirtouga → Carracosta (Lv.37)\nNo wild location found.\n```');
  	}
// Pokedex : 566
    if (message.content.toLowerCase() === '?archen') {
    	message.channel.send('```md\nArchen\n> PokeDex Number : 566\n> Egg Group : Flying , Water C\n> Evolution : Archen → Archeops (Level 37)\nNo wild location found.\n```');
  	}
// Pokedex : 567
    if (message.content.toLowerCase() === '?archeops') {
    	message.channel.send('```md\nArcheops\n> PokeDex Number : 567\n> Egg Group : Flying , Water C\n> Evolution : Archen → Archeops (Lv.37)\nNo wild location found.\n```');
  	}
// Pokedex : 568
    if (message.content.toLowerCase() === '?trubbish') {
    	message.channel.send('```md\nTrubbish\n> PokeDex Number : 568\n> Egg Group : Mineral\n> Evolution : Trubbish → Garbodor (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Unova   Grass   M/D/N   Common      19-21   -\nRoute 5             Unova   D.Grass M/D/N   Common      22-24   -\nRoute 16            Unova   Grass   M/D/N   Common      19-21   -\nRoute 16            Unova   D.Grass M/D/N   Common      22-24   -\nRoute 16            Unova   D.Grass M/D/N   Horde       21-22   -\n```');
  	}
// Pokedex : 569
    if (message.content.toLowerCase() === '?garbodor') {
    	message.channel.send('```md\nGarbodor\n> PokeDex Number : 569\n> Egg Group : Mineral\n> Evolution : Trubbish → Garbodor (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Uncommon    31-33   -\nRoute 9             Unova   D.Grass M/D/N   Uncommon    31-33   -\n```');
  	}
// Pokedex : 570
    if (message.content.toLowerCase() === '?zorua') {
    	message.channel.send('```md\nZorua\n> PokeDex Number : 570\n> Egg Group : Field\n> Evolution : Zorua → Zoroark (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   D       Horde       18-19   -\n```');
  	}
// Pokedex : 571
    if (message.content.toLowerCase() === '?zoroark') {
    	message.channel.send('```md\nZoroark\n> PokeDex Number : 571\n> Egg Group : Field\n> Evolution : Zorua → Zoroark (Lv.30)\nNo wild location found.\n```');
  	}
// Pokedex : 572
    if (message.content.toLowerCase() === '?minccino') {
    	message.channel.send('```md\nMinccino\n> PokeDex Number : 572\n> Egg Group : Field\n> Evolution : Minccino → Cinccino (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Uncommon    20      -\nCold Storage        Unova   D.Grass M/D/N   Uncommon    24      -\nRoute 5             Unova   Grass   M/D/N   V.Common    19-22   -\nRoute 5             Unova   Grass   M/D/N   Horde       18-19   -\nRoute 5             Unova   D.Grass M/D/N   V.Common    22-25   -\nRoute 9             Unova   Grass   M/D/N   Common      32      -\nRoute 9             Unova   D.Grass M/D/N   Common      32      -\nRoute 16            Unova   Grass   M/D/N   V.Common    19-22   -\nRoute 16            Unova   D.Grass M/D/N   V.Common    22-25   -\nRoute 16            Unova   D.Grass M/D/N   Horde       21-22   -\n```');
  	}
// Pokedex : 573
    if (message.content.toLowerCase() === '?cinccino') {
    	message.channel.send('```md\nCinccino\n> PokeDex Number : 573\n> Egg Group : Field\n> Evolution : Minccino → Cinccino (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Special     28-29   -\nRoute 5             Unova   Grass   M/D/N   Special     23-25   -\nRoute 9             Unova   Grass   M/D/N   Special     41-42   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\n```');
  	}
// Pokedex : 574
    if (message.content.toLowerCase() === '?gothita') {
    	message.channel.send('```md\nGothita\n> PokeDex Number : 574\n> Egg Group : Humanoid\n> Evolution : Gothita → Gothorita (Lv.32) → Gothitelle (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Unova   Grass   M/D/N   Common      19-22   -\nRoute 5             Unova   D.Grass M/D/N   Common      22-25   -\nRoute 16            Unova   Grass   M/D/N   Common      19-22   -\nRoute 16            Unova   Grass   M/D/N   Horde       18-19   -\nRoute 16            Unova   D.Grass M/D/N   Common      22-25   -\n```');
  	}
// Pokedex : 575
    if (message.content.toLowerCase() === '?gothorita') {
    	message.channel.send('```md\nGothorita\n> PokeDex Number : 575\n> Egg Group : Humanoid\n> Evolution : Gothita → Gothorita (Lv.32) → Gothitelle (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Common      32-34   -\nRoute 9             Unova   D.Grass M/D/N   Common      32-34   -\nRoute 9             Unova   D.Grass M/D/N   Horde       32      -\n```');
  	}
// Pokedex : 576
    if (message.content.toLowerCase() === '?gothitelle') {
    	message.channel.send('```md\nGothitelle\n> PokeDex Number : 576\n> Egg Group : Humanoid\n> Evolution : Gothita → Gothorita (Lv.32) → Gothitelle (Lv.41)\nNo wild location found.\n```');
  	}
// Pokedex : 577
    if (message.content.toLowerCase() === '?solosis') {
    	message.channel.send('```md\nSolosis\n> PokeDex Number : 577\n> Egg Group : Chaos\n> Evolution : Solosis → Duosion (Lv.32) → Reuniclus (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Unova   Grass   M/D/N   Common      19-22   -\nRoute 5             Unova   D.Grass M/D/N   Common      22-25   -\nRoute 16            Unova   Grass   M/D/N   Common      19-22   -\nRoute 16            Unova   Grass   M/D/N   Horde       19      -\nRoute 16            Unova   D.Grass M/D/N   Common      22-25   -\n```');
  	}
// Pokedex : 578
    if (message.content.toLowerCase() === '?duosion') {
    	message.channel.send('```md\nDuosion\n> PokeDex Number : 578\n> Egg Group : Chaos\n> Evolution : Solosis → Duosion (Lv.32) → Reuniclus (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Common      32-34   -\nRoute 9             Unova   D.Grass M/D/N   Common      32-34   -\nRoute 9             Unova   Grass   M/D/N   Horde       32      -\n```');
  	}
// Pokedex : 579
    if (message.content.toLowerCase() === '?reuniclus') {
    	message.channel.send('```md\nReuniclus\n> PokeDex Number : 579\n> Egg Group : Chaos\n> Evolution : Solosis → Duosion (Lv.32) → Reuniclus (Lv.41)\nNo wild location found.\n```');
  	}
// Pokedex : 580
    if (message.content.toLowerCase() === '?ducklett') {
    	message.channel.send('```md\nDucklett\n> PokeDex Number : 580\n> Egg Group : Water A , Flying\n> Evolution : Ducklett → Swanna (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Shadow  M/D/N   Special     29-30   -\nCold Storage        Unova   Shadow  M/D/N   Special     28-29   -\nDriftveil D.Bridge  Unova   Shadow  M/D/N   Special     27-28   -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 3             Unova   Shadow  M/D/N   Special     12-14   -\nRoute 6             Unova   Shadow  M/D/N   Special     29-30   -\nTwist Mountain      Uonva   Shadow  M/D/N   Special     33-34   -\n```');
  	}
// Pokedex : 581
    if (message.content.toLowerCase() === '?swanna') {
    	message.channel.send('```md\nSwanna\n> PokeDex Number : 581\n> Egg Group : Water A , Flying\n> Evolution : Ducklett → Swanna (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Shadow  M/D/N   Special     60-65   -\nMarvelous Bridge    Unova   Grass   M/D/N   Special     47-50   -\nMarvelous Bridge    Unova   Shadow  M/D/N   Special     60-65   -\nMoor of Icirrus     Unova   Shadow  M/D/N   Special     39-40   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 14            Unova   Shadow  M/D/N   Special     60-65   -\nVillage Bridge      Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 582
    if (message.content.toLowerCase() === '?vanillite') {
    	message.channel.send('```md\nVanillite\n> PokeDex Number : 582\n> Egg Group : Mineral\n> Evolution : Vanillite → Vanillish (Lv.35) → Vanilluxe (Lv.47)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Horde       19-20   -\nCold Storage        Unova   D.Grass M/D/N   Horde       23-24   -\nCold Storage        Unova   Grass   M/D/N   V.Common    20-23   -\nCold Storage        Unova   D.Grass M/D/N   V.Common    24-27   -\nDragonspiral Tower  Unova   Grass   M/D/N   Common      31-33   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\nRoute 6             Unova   Grass   M/D/N   Uncommon    23-25   -\nRoute 6             Unova   D.Grass M/D/N   Uncommon    27-29   -\n```');
  	}
// Pokedex : 583
    if (message.content.toLowerCase() === '?vanillish') {
    	message.channel.send('```md\nVanillish\n> PokeDex Number : 583\n> Egg Group : Mineral\n> Evolution : Vanillite → Vanillish (Lv.35) → Vanilluxe (Lv.47)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   D.Grass M/D/N   Common      35-37   -\nDragonspiral Tower  Unova   D.Grass M/D/N   Horde       35      -\n```');
  	}
// Pokedex : 584
    if (message.content.toLowerCase() === '?vanilluxe') {
    	message.channel.send('```md\nVanilluxe\n> PokeDex Number : 584\n> Egg Group : Mineral\n> Evolution : Vanillite → Vanillish (Lv.35) → Vanilluxe (Lv.47)\nNo wild location found.\n```');
  	}
// Pokedex : 585
    if (message.content.toLowerCase() === '?deerling') {
    	message.channel.send('```md\nDeerling\n> PokeDex Number : 585\n> Egg Group : Field\n> Evolution : Deerling → Sawsbuck (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   V.Common    31-32   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\nRoute 6             Unova   Grass   M/D/N   V.Common    23-25   -\nRoute 6             Unova   Grass   M/D/N   Horde       21-22   -\nRoute 6             Unova   D.Grass M/D/N   V.Common    26-28   -\nRoute 7             Unova   Grass   M/D/N   Common      26      -\nRoute 7             Unova   D.Grass M/D/N   Common      30      -\n```');
  	}
// Pokedex : 586
    if (message.content.toLowerCase() === '?sawsbuck') {
    	message.channel.send('```md\nSawsbuck\n> PokeDex Number : 586\n> Egg Group : Field\n> Evolution : Deerling → Sawsbuck (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   D.Grass M/D/N   V.Common    34-36   -\n```');
  	}
// Pokedex : 587
    if (message.content.toLowerCase() === '?emolga') {
    	message.channel.send('```md\nEmolga\n> PokeDex Number : 587\n> Egg Group : Field\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\nDragonspiral Tower  Unova   Grass   M/D/N   Special     37-38   -\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nRoute 5             Unova   Grass   M/D/N   Special     23-25   -\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\nRoute 7             Unova   Grass   M/D/N   Special     31-32   -\nRoute 9             Unova   Grass   M/D/N   Special     41-42   -\nRoute 10            Unova   Grass   M/D/N   Special     34-44   -\nRoute 11            Unova   Grass   M/D/N   Special     60-65   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\nRoute 13            Unova   Grass   M/D/N   Special     60-65   -\nRoute 14            Unova   Grass   M/D/N   Special     60-65   -\nRoute 15            Unova   Grass   M/D/N   Special     60-65   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\nVillage Bridge      Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 588
    if (message.content.toLowerCase() === '?karrablast') {
    	message.channel.send('```md\nKarrablast\n> PokeDex Number : 588\n> Egg Group : Bug\n> Evolution : Karrablast → Escavalier (Trade for Shelmet)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Grass   M/D/N   Common      22-24   -\nRoute 6             Unova   Grass   M/D/N   Horde       21-22   -\nRoute 6             Unova   D.Grass M/D/N   Common      26-28   -\nRoute 11            Unova   Grass   M/D/N   Rare        49      -\nRoute 11            Unova   D.Grass M/D/N   Rare        54      -\n```');
  	}
// Pokedex : 589
    if (message.content.toLowerCase() === '?escavalier') {
    	message.channel.send('```md\nEscavalier\n> PokeDex Number : 589\n> Egg Group : Bug\n> Evolution : Karrablast → Escavalier (Trade for Shelmet)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\nRoute 11            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 590
    if (message.content.toLowerCase() === '?foongus') {
    	message.channel.send('```md\nFoongus\n> PokeDex Number : 590\n> Egg Group : Plant\n> Evolution : Foongus → Amoongus (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Grass   M/D/N   Common      23-25   -\nRoute 6             Unova   D.Grass M/D/N   Common      27-29   -\nRoute 7             Unova   Grass   M/D/N   Uncommon    27-29   -\nRoute 7             Unova   D.Grass M/D/N   Uncommon    31-33   -\nRoute 10            Unova   Grass   M/D/N   Common      34-35   -\n```');
  	}
// Pokedex : 591
    if (message.content.toLowerCase() === '?amoogus') {
    	message.channel.send('```md\nAmoongus\n> PokeDex Number : 591\n> Egg Group : Plant\n> Evolution : Foongus → Amoongus (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Unova   D.Grass M/D/N   Common      39-40   -\nRoute 10            Unova   D.Grass M/D/N   Horde       39      -\nRoute 11            Unova   Grass   M/D/N   Uncommon    48      -\nRoute 11            Unova   D.Grass M/D/N   Uncommon    53      -\nRoute 11            Unova   D.Grass M/D/N   Horde       50-52   -\n```');
  	}
// Pokedex : 592
    if (message.content.toLowerCase() === '?frillish') {
    	message.channel.send('```md\nFrillish\n> PokeDex Number : 592\n> Egg Group : Chaos\n> Evolution : Frillish → Jellicent (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nDriftveil City      Unova   Water   M/D/N   V.Common    25-35   -\nDriftveil City      Unova   Water   M/D/N   Horde       25-35   -\nP2 Laboratory       Unova   Water   M/D/N   V.Common    25-35   -\nP2 Laboratory       Unova   Water   M/D/N   Horde       25-35   -\nRoute 4             Unova   Water   M/D/N   V.Common    25-35   -\nRoute 4             Unova   Water   M/D/N   Horde       25-35   -\nRoute 17            Unova   Water   M/D/N   V.Common    25-35   -\nRoute 17            Unova   Water   M/D/N   Horde       25-35   -\nRoute 18            Unova   Water   M/D/N   V.Common    25-35   -\nRoute 18            Unova   Water   M/D/N   Horde       25-35   -\n```');
  	}
// Pokedex : 593
    if (message.content.toLowerCase() === '?jellicent') {
    	message.channel.send('```md\nJellicent\n> PokeDex Number : 593\n> Egg Group : Chaos\n> Evolution : Frillish → Jellicent (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nDriftveil City      Unova   Water   M/D/N   Special     40      -\nP2 Laboratory       Unova   Water   M/D/N   Special     40      -\nRoute 4             Unova   Water   M/D/N   Special     40      -\nRoute 13            Unova   Water   M/D/N   Special     60-65   -\nRoute 17            Unova   Water   M/D/N   Special     40      -\nRoute 18            Unova   Water   M/D/N   Special     40      -\n```');
  	}
// Pokedex : 594
    if (message.content.toLowerCase() === '?alomomola') {
    	message.channel.send('```md\nAlomomola\n> PokeDex Number : 594\n> Egg Group : Water A , Water B\n#Map                Region  Type    Time    Rarity      Level   Item\nDriftveil City      Unova   Water   M/D/N   Special     20-30   -\nP2 Laboratory       Unova   Water   M/D/N   Special     10-20   -\nRoute 1             Unova   Water   D       Special     30-40   -\nRoute 4             Unova   Water   M/D/N   Special     30-40   -\nRoute 13            Unova   Water   M/D/N   Special     60-65   -\nRoute 17            Unova   Water   M/D/N   Special     30-40   -\nRoute 18            Unova   Water   M/D/N   Special     30-40   -\nUndella Bay         Unova   Water   M/D/N   Special     60-65   -\nUndella Town        Unova   Water   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 595
    if (message.content.toLowerCase() === '?joltik') {
    	message.channel.send('```md\nJoltik\n> PokeDex Number : 595\n> Egg Group : Bug\n> Evolution : Joltik → Galvantula (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Common    24-27   -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\n```');
  	}
// Pokedex : 596
    if (message.content.toLowerCase() === '?garvantula') {
    	message.channel.send('```md\nGalvantula\n> PokeDex Number : 596\n> Egg Group : Bug\n> Evolution : Joltik → Galvantula (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 597
    if (message.content.toLowerCase() === '?ferroseed') {
    	message.channel.send('```md\nFerroseed\n> PokeDex Number : 597\n> Egg Group : Plant , Mineral\n> Evolution : Ferroseed → Ferrothorn (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Common    24-26   -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\n```');
  	}
// Pokedex : 598
    if (message.content.toLowerCase() === '?ferrothorn') {
    	message.channel.send('```md\nFerrothorn\n> PokeDex Number : 598\n> Egg Group : Plant , Mineral\n> Evolution : Ferroseed → Ferrothorn (Lv.40)\nNo wild location found.\n```');
  	}
// Pokedex : 599
    if (message.content.toLowerCase() === '?klink') {
    	message.channel.send('```md\nKlink\n> PokeDex Number : 599\n> Egg Group : Gendeless\n> Evolution : Klink → Klang (Lv.38) → Klinklang (Lv.49)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Common    25-27   -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\nP2 Laboratory       Unova   Grass   M/D/N   Uncommon    29-31   -\n```');
  	}
// Pokedex : 600
    if (message.content.toLowerCase() === '?klang') {
    	message.channel.send('```md\nKlang\n> PokeDex Number : 600\n> Egg Group : Gendeless\n> Evolution : Klink → Klang (Lv.38) → Klinklang (Lv.49)\nNo wild location found.\n```');
  	}
// Pokedex : 601
    if (message.content.toLowerCase() === '?klinklang') {
    	message.channel.send('```md\nKlinklang\n> PokeDex Number : 601\n> Egg Group : Gendeless\n> Evolution : Klink → Klang (Lv.38) → Klinklang (Lv.49)\nNo wild location found.\n```');
  	}
// Pokedex : 602
    if (message.content.toLowerCase() === '?tynamo') {
    	message.channel.send('```md\nTynamo\n> PokeDex Number : 602\n> Egg Group : Chaos\n> Evolution : Tynamo → Eelektrik (Lv.39) → Eelektross (Use Thunderstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Rare      27      -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\n```');
  	}
// Pokedex : 603
    if (message.content.toLowerCase() === '?eelektrik') {
    	message.channel.send('```md\nEelektrik\n> PokeDex Number : 603\n> Egg Group : Chaos\n> Evolution : Tynamo → Eelektrik (Lv.39) → Eelektross (Use Thunderstone)\nNo wild location found.\n```');
  	}
// Pokedex : 604
    if (message.content.toLowerCase() === '?eelektross') {
    	message.channel.send('```md\nEelektross\n> PokeDex Number : 604\n> Egg Group : Chaos\n> Evolution : Tynamo → Eelektrik (Lv.39) → Eelektross (Use Thunderstone)\nNo wild location found.\n```');
  	}
// Pokedex : 605
    if (message.content.toLowerCase() === '?elgyem') {
    	message.channel.send('```md\nElgyem\n> PokeDex Number : 605\n> Egg Group : Humanoid\n> Evolution : Elgyem → Beheeyem (Lv.42)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Grass   M/D/N   V.Common    26-29   -\nCelestial Tower     Unvoa   Grass   M/D/N   Horde       25-26   -\n```');
  	}
// Pokedex : 606
    if (message.content.toLowerCase() === '?beheeyem') {
    	message.channel.send('```md\nBeheeyem\n> PokeDex Number : 606\n> Egg Group : Humanoid\n> Evolution : Elgyem → Beheeyem (Lv.42)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 14            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 14            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 14            Unova   D.Grass M/D/N   Uncommon    53-55   -\n```');
  	}
// Pokedex : 607
    if (message.content.toLowerCase() === '?litwick') {
    	message.channel.send('```md\nLitwick\n> PokeDex Number : 607\n> Egg Group : Chaos\n> Evolution : Litwick → Lampent (Lv.41) → Chandelure (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Grass   M/D/N   V.Common    26-29   -\nCelestial Tower     Unvoa   Grass   M/D/N   Horde       25-26   -\n```');
  	}
// Pokedex : 608
    if (message.content.toLowerCase() === '?lampent') {
    	message.channel.send('```md\nLampent\n> PokeDex Number : 608\n> Egg Group : Chaos\n> Evolution : Litwick → Lampent (Lv.41) → Chandelure (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nNo wild location found.```');
  	}
// Pokedex : 609
    if (message.content.toLowerCase() === '?chandelure') {
    	message.channel.send('```md\nChandelure\n> PokeDex Number : 609\n> Egg Group : Chaos\n> Evolution : Litwick → Lampent (Lv.41) → Chandelure (Use Duskstone)\nNo wild location found.\n```');
  	}
// Pokedex : 610
    if (message.content.toLowerCase() === '?axew') {
    	message.channel.send('```md\nAxew\n> PokeDex Number : 610\n> Egg Group : Monster , Dragon\n> Evolution : Axew → Fraxure (Lv.38) → Haxorus (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nGuidance Chamber    Unova   Cave    M/D/N   Common      30-31   -\nGuidance Chamber    Unova   Cave    M/D/N   Horde       26-28   -\nMistralton Cave     Unova   Cave    M/D/N   Common      30-31   -\n```');
  	}
// Pokedex : 611
    if (message.content.toLowerCase() === '?fraxure') {
    	message.channel.send('```md\nFraxure\n> PokeDex Number : 611\n> Egg Group : Monster , Dragon\n> Evolution : Axew → Fraxure (Lv.38) → Haxorus (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nMistralton Cave     Unova   D.Cloud M/D/N   Special     38-40   -\nVictory Road        Unova   Grass   M/D/N   Rare        40      -\n```');
  	}
// Pokedex : 612
    if (message.content.toLowerCase() === '?haxorus') {
    	message.channel.send('```md\nHaxorus\n> PokeDex Number : 612\n> Egg Group : Monster , Dragon\n> Evolution : Axew → Fraxure (Lv.38) → Haxorus (Lv.48)\nNo wild location found. \n```');
  	}
// Pokedex : 613
    if (message.content.toLowerCase() === '?cubchoo') {
    	message.channel.send('```md\nCubchoo\n> PokeDex Number : 613\n> Egg Group : Field\n> Evolution : Cubchoo → Beartic (Lv.37)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Uncommon    33      -\nRoute 7             Unova   Grass   M/D/N   Common      26-28   -\nRoute 7             Unova   D.Grass M/D/N   Common      30-32   -\nTwist Mountain      Unova   Cave    M/D/N   V.Common    28-31   -\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 614
    if (message.content.toLowerCase() === '?beartic') {
    	message.channel.send('```md\nBeartic\n> PokeDex Number : 614\n> Egg Group : Field\n> Evolution : Cubchoo → Beartic (Lv.37)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   D.Grass M/D/N   Uncommon    37      -\nDragonspiral Tower  Unova   D.Grass M/D/N   Horde       37      -\n```');
  	}
// Pokedex : 615
    if (message.content.toLowerCase() === '?cryogonal') {
    	message.channel.send('```md\nCryogonal\n> PokeDex Number : 615\n> Egg Group : Genderless\n#Map                Region  Type    Time    Rarity      Level   Item\nTwist Mountain      Unova   Cave    M/D/N   Rare        31      -\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 616
    if (message.content.toLowerCase() === '?shelmet') {
    	message.channel.send('```md\nShelmet\n> PokeDex Number : 616\n> Egg Group : Bug\n> Evolution : Shelmet → Accelgor (Trade for Karrablast)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Grass   M/D/N   V.Common    30-33   -\nIcirrus City        Unova   Grass   M/D/N   Horde       28-30   -\nMoor of Icirrus     Unova   Grass   M/D/N   V.Common    30-33   -\nRoute 6             Unova   Grass   M/D/N   Rare        22-24   -\nRoute 6             Unova   D.Grass M/D/N   Rare        26-28   -\nRoute 8             Unova   Grass   M/D/N   V.Common    30-33   -\n```');
  	}
// Pokedex : 617
    if (message.content.toLowerCase() === '?accelgor') {
    	message.channel.send('```md\nAccelgor\n> PokeDex Number : 617\n> Egg Group : Bug\n> Evolution : Shelmet → Accelgor (Trade for Karrablast)\nNo wild location found.\n```');
  	}
// Pokedex : 618
    if (message.content.toLowerCase() === '?stunfisk') {
    	message.channel.send('```md\nStunfisk\n> PokeDex Number : 618\n> Egg Group : Water A , Chaos\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Grass   M/D/N   Common      31-32   -\nIcirrus City        Unova   Water   M/D/N   V.Common    25-35   -\nIcirrus City        Unova   Water   M/D/N   Horde       25-35   -\nIcirrus City        Unova   S.Rod   M/D/N   V.Common    35-55   -\nIcirrus City        Unova   Fishing M/D/N   Special     55-60   -\nMoor of Icirrus     Unova   Grass   M/D/N   Common      31-32   -\nMoor of Icirrus     Unova   Water   M/D/N   V.Common    25-35   -\nMoor of Icirrus     Unova   Water   M/D/N   Horde       25-35   -\nMoor of Icirrus     Unova   S.Rod   M/D/N   V.Common    35-55   -\nMoor of Icirrus     Unova   Fishing M/D/N   Special     55-60   -\nRoute 8             Unova   Grass   M/D/N   Common      31-32   -\nRoute 8             Unova   Grass   M/D/N   Horde       28-30   -\nRoute 8             Unova   Water   M/D/N   V.Common    25-35   -\nRoute 8             Unova   Water   M/D/N   Horde       25-35   -\nRoute 8             Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 8             Unova   Fishing M/D/N   Special     55-60   -\n```');
  	}
// Pokedex : 619
    if (message.content.toLowerCase() === '?mienfoo') {
    	message.channel.send('```md\nMienfoo\n> PokeDex Number : 619\n> Egg Group : Field , Humanoid\n> Evolution : Mienfoo → Mienshao (Lv.50)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   V.Common    30-33   -\nDragonspiral Tower  Unova   D.Grass M/D/N   V.Common    33-37   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\nRoute 14            Unova   Grass   M/D/N   Uncommon    49      -\nRoute 14            Unova   D.Grass M/D/N   Uncommon    54      -\nTrial Chamber       Unova   Cave    M/D/N   Uncommon    41      -\nTrial Chamber       Unova   Cave    M/D/N   Horde       37-39   -\nVictory Road        Unova   Cave    M/D/N   Uncommon    39-41   -\nVictory Road        Unova   Grass   M/D/N   Common      38-40   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\n```');
  	}
// Pokedex : 620
    if (message.content.toLowerCase() === '?mienshao') {
    	message.channel.send('```md\nMienshao\n> PokeDex Number : 620\n> Egg Group : Field , Humanoid\n> Evolution : Mienfoo → Mienshao (Lv.50)\nNo wild location found.\n```');
  	}
// Pokedex : 621
    if (message.content.toLowerCase() === '?druddigon') {
    	message.channel.send('```md\nDruddigon\n> PokeDex Number : 621\n> Egg Group : Dragon , Monster\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\n```');
  	}
// Pokedex : 622
    if (message.content.toLowerCase() === '?golett') {
    	message.channel.send('```md\nGolett\n> PokeDex Number : 622\n> Egg Group : Genderless\n> Evolution : Golett → Golurk (Lv.43)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Uncommon    30-33   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\n```');
  	}
// Pokedex : 623
    if (message.content.toLowerCase() === '?golurk') {
    	message.channel.send('```md\nGolurk\n> PokeDex Number : 623\n> Egg Group : Genderless\n> Evolution : Golett → Golurk (Lv.43)\nNo wild location found.\n```');
  	}
// Pokedex : 624
    if (message.content.toLowerCase() === '?pawniard') {
    	message.channel.send('```md\nPawniard\n> PokeDex Number : 624\n> Egg Group : Humanoid\n> Evolution : Pawniard → Bisharp (Lv.52)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Common      31-34   -\nRoute 9             Unova   D.Grass M/D/N   Common      31-34   -\nRoute 11            Unova   Grass   M/D/N   Rare        50      -\n```');
  	}
// Pokedex : 625
    if (message.content.toLowerCase() === '?bisharp') {
    	message.channel.send('```md\nBisharp\n> PokeDex Number : 625\n> Egg Group : Humanoid\n> Evolution : Pawniard → Bisharp (Lv.52)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   D.Grass M/D/N   Rare        55      -\n```');
  	}
// Pokedex : 626
    if (message.content.toLowerCase() === '?bouffalant') {
    	message.channel.send('```md\nBouffalant\n> PokeDex Number : 626\n> Egg Group : Field\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Unova   Grass   M/D/N   Common      34-35   -\nRoute 10            Unova   Grass   M/D/N   Horde       32-33   -\nRoute 10            Unova   D.Grass M/D/N   Common      39-40   -\n```');
  	}
// Pokedex : 627
    if (message.content.toLowerCase() === '?rufflet') {
    	message.channel.send('```md\nRufflet\n> PokeDex Number : 627\n> Egg Group : Flying\n> Evolution : Rufflet → Braviary (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Shadow  M/D/N   Special     22-24   -\nDreamyard           Unova   Shadow  M/D/N   Special     6-7     -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 2             Unova   Shadow  M/D/N   Special     6-7     -\nRoute 4             Unova   Shadow  M/D/N   Special     19-21   -\nRoute 10            Unova   Grass   M/D/N   Uncommon    4-36    -\nRoute 10            Unova   D.Grass M/D/N   Uncommon    39-41   -\nRoute 11            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 18            Unova   Shadow  M/D/N   Special     36-38   -\nVictory Road        Unova   Grass   M/D/N   Common      37-40   -\nVillage Bridge      Unova   Grass   M/D/N   Common      48-50   -\nVillage Bridge      Unova   Grass   M/D/N   Horde       45-47   -\nVillage Bridge      Unova   D.Grass M/D/N   Common      53-55   -\n```');
  	}
// Pokedex : 628
    if (message.content.toLowerCase() === '?braviary') {
    	message.channel.send('```md\nBraviary\n> PokeDex Number : 628\n> Egg Group : Flying\n> Evolution : Rufflet → Braviary (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   D.Grass M/D/N   Uncommon    54-55   -\nRoute 12            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 629
    if (message.content.toLowerCase() === '?vullaby') {
    	message.channel.send('```md\nVullaby\n> PokeDex Number : 629\n> Egg Group : Flying\n> Evolution : Vullaby → Mandibuzz (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Shadow  M/D/N   Special     22-24   -\nDreamyard           Unova   Shadow  M/D/N   Special     6-7     -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 2             Unova   Shadow  M/D/N   Special     6-7     -\nRoute 4             Unova   Shadow  M/D/N   Special     19-21   -\nRoute 10            Unova   Grass   M/D/N   Uncommon    4-36    -\nRoute 10            Unova   D.Grass M/D/N   Uncommon    39-41   -\nRoute 11            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 18            Unova   Shadow  M/D/N   Special     36-38   -\nVictory Road        Unova   Grass   M/D/N   Common      37-40   -\nVillage Bridge      Unova   Grass   M/D/N   Common      48-50   -\nVillage Bridge      Unova   Grass   M/D/N   Horde       45-47   -\nVillage Bridge      Unova   D.Grass M/D/N   Common      53-55   -\n```');
  	}
// Pokedex : 630
    if (message.content.toLowerCase() === '?mandibuzz') {
    	message.channel.send('```md\nMandibuzz\n> PokeDex Number : 630\n> Egg Group : Flying\n> Evolution : Vullaby → Mandibuzz (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   D.Grass M/D/N   Uncommon    54-55   -\nRoute 12            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 631
    if (message.content.toLowerCase() === '?heatmor') {
    	message.channel.send('```md\nHeatmor\n> PokeDex Number : 631\n> Egg Group : Field\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Unova   Grass   M/D/N   V.Common    37-40   -\nVictory Road        Unova   Grass   M/D/N   Horde       36-37   -\n```');
  	}
// Pokedex : 632
    if (message.content.toLowerCase() === '?durant') {
    	message.channel.send('```md\nDurant\n> PokeDex Number : 632\n> Egg Group : Bug\n#Map                Region  Type    Time    Rarity      Level   Item\nTrial Chamber       Unova   Cave    M/D/N   V.Common    39-42   -\nTrial Chamber       Unova   Cave    M/D/N   Horde       37-39   -\nVictory Road        Unova   Cave    M/D/N   V.Common    37-42   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\n```');
  	}
// Pokedex : 633
    if (message.content.toLowerCase() === '?deino') {
    	message.channel.send('```md\nDeino\n> PokeDex Number : 633\n> Egg Group : Dragon\n> Evolution : Deino → Zweilous (Lv.50) → Hydreigon (Lv.64)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Unova   Cave    M/D/N   Rare        38-40   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-37   -\n```');
  	}
// Pokedex : 634
    if (message.content.toLowerCase() === '?zweilous') {
    	message.channel.send('```md\nZweilous\n> PokeDex Number : 634\n> Egg Group : Dragon\n> Evolution : Deino → Zweilous (Lv.50) → Hydreigon (Lv.64)\nNo wild location found.\n```');
  	}
// Pokedex : 635
    if (message.content.toLowerCase() === '?hydreigon') {
    	message.channel.send('```md\nHydreigon\n> PokeDex Number : 635\n> Egg Group : Dragon\n> Evolution : Deino → Zweilous (Lv.50) → Hydreigon (Lv.64)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 15            Unova   Shadow  M/D/N   Special     64-65   -\n```');
  	}
// Pokedex : 636
    if (message.content.toLowerCase() === '?larvesta') {
    	message.channel.send('```md\nLarvesta\n> PokeDex Number : 636\n> Egg Group : Bug\n> Evolution : Larvesta → Volcarona (Lv.59)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   Rare        47-49   -\n```');
  	}
// Pokedex : 637
    if (message.content.toLowerCase() === '?volcarona') {
    	message.channel.send('```md\nVolcarona\n> PokeDex Number : 637\n> Egg Group : Bug\n> Evolution : Larvesta → Volcarona (Lv.59)\nNo wild location found.\n```');
  	}
// Pokedex : 638
    if (message.content.toLowerCase() === '?cobalion') {
    	message.channel.send('???');
  	}
// Pokedex : 639
    if (message.content.toLowerCase() === '?terrakion') {
    	message.channel.send('???');
  	}
// Pokedex : 640
    if (message.content.toLowerCase() === '?virizion') {
    	message.channel.send('???');
  	}
// Pokedex : 641
    if (message.content.toLowerCase() === '?tornadus') {
    	message.channel.send('???');
  	}
// Pokedex : 642
    if (message.content.toLowerCase() === '?thundurus') {
    	message.channel.send('???');
  	}
// Pokedex : 643
    if (message.content.toLowerCase() === '?reshiram') {
    	message.channel.send('```md\nReshiram\n> PokeDex Number : 643\n> Egg Group : Cannot Breed\nNo wild location found.\n```');
  	}
// Pokedex : 644
    if (message.content.toLowerCase() === '?zekrom') {
    	message.channel.send('```md\nZekrom\n> PokeDex Number : 644\n> Egg Group : Cannot Breed\nNo wild location found.\n```');
  	}
// Pokedex : 645
    if (message.content.toLowerCase() === '?landorus') {
    	message.channel.send('???');
  	}
// Pokedex : 646
    if (message.content.toLowerCase() === '?kyurem') {
    	message.channel.send('???');
  	}
// Pokedex : 647
    if (message.content.toLowerCase() === '?keldeo') {
    	message.channel.send('???');
  	}
// Pokedex : 648
    if (message.content.toLowerCase() === '?meloetta') {
    	message.channel.send('???');
  	}
// Pokedex : 641
    if (message.content.toLowerCase() === '?genesect') {
    	message.channel.send('???');
  	}

// Item Dex

// Dive Ball
  if (message.content.toLowerCase() === '^item dive ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Dive Ball')
	.setDescription('**Price** : $1,500\n**Rate** : x3.0\n**Effect** : Diving , Surfing , or Fishing\n**Location** : Mossdeep City\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/9/9a/Dream_Dive_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Dusk Ball
  if (message.content.toLowerCase() === '^item dusk ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Dusk Ball')
	.setDescription('**Price** : $1,400\n**Rate** : x3.5\n**Effect** : Inside a Cave or Night Time\n**Location** : Shopping Mall or Veilstones Department Store\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/5/59/Dream_Dusk_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Great Ball
  if (message.content.toLowerCase() === '^item great ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Great Ball')
	.setDescription('**Price** : $600\n**Rate** : x1.5\n**Effect** : None\n**Location** : Everywhere\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/b/bf/Dream_Great_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Heal Ball
  if (message.content.toLowerCase() === '^item heal ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Heal Ball')
	.setDescription('**Price** : $500\n**Rate** : x1.0\n**Effect** : Restores HP and Removes Status Ailments\n**Location** : Shopping Mall or Veilstones Department Store\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/0/0e/Dream_Heal_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Luxury Ball
  if (message.content.toLowerCase() === '^item luxury ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Luxury Ball')
	.setDescription('**Price** : $1,000\n**Rate** : x1.0\n**Effect** : Increases Happiness\n**Location** : Shopping Mall or Verdanturf Town\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/7/7e/Dream_Luxury_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Master Ball
  if (message.content.toLowerCase() === '^item master ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Master Ball')
	.setDescription('**Rate** : x255.0\n**Effect** : 100% Success\n**Location** : Stories\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/9/95/Dream_Master_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Nest Ball
  if (message.content.toLowerCase() === '^item nest ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Nest Ball')
	.setDescription('**Price** : $1,000\n**Rate** : x3.0 (< Lv. 20) , x2.0 (< Lv. 30) , x1.0 (>Lv. 30)\n**Effect** : Depends on Levels\n**Location** : Shopping Mall , Verdenturf Town , or Veilstones Department Store\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/8/8c/Dream_Nest_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Net Ball
  if (message.content.toLowerCase() === '^item net ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Net Ball')
	.setDescription('**Price** : $1,000\n**Rate** : x3.0\n**Effect** : Water or Bug Type\n**Location** : Shopping Mall , Mossdeep City , or Veilstones Department Store\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/a/a0/Dream_Net_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Quick Ball
  if (message.content.toLowerCase() === '^item quick ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Quick Ball')
	.setDescription('**Price** : $1,200\n**Rate** : x4.0\n**Effect** : First Turn\n**Location** : Shoppiing Mall or Veilstones Department Store\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/9/90/Dream_Quick_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Poke Ball
  if (message.content.toLowerCase() === '^item poke ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Poke Ball')
	.setDescription('**Price** : $200\n**Rate** : x1.0\n**Effect** : None\n**Location** : Everywhere\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Premier Ball
  if (message.content.toLowerCase() === '^item premier ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Premier Ball')
	.setDescription('**Rate** : x1.5\n**Effect** : None\n**Location** : PokeMMO Event Prize\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/6/64/Dream_Premier_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Repeat Ball
  if (message.content.toLowerCase() === '^item repeat ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Repeat Ball')
	.setDescription('**Price** : $1,350\n**Rate** : x2.5\n**Effect** : Caught Pokemon\n**Location** : Shopping Mall , Rustboro City or Veilstones Department Store\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/d/df/Dream_Repeat_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Safari Ball
  if (message.content.toLowerCase() === '^item safari ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Safari Ball')
	.setDescription('**Rate** : x1.5\n**Effect** : Only Safari\n**Location** : Safari Zone\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/1/15/Dream_Safari_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Timer Ball
  if (message.content.toLowerCase() === '^item timer ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Timer Ball')
	.setDescription('**Price** : $900\n**Rate** : x1.0 (<11th Turns) , x2.0 (<21st Turns) , x3.0 (>21st Turns)\n**Effect** : Depends on Turns\n**Location** : Shopping Mall, Rustboro City or Veilstones Department Store\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/f/f0/Dream_Timer_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Ultra Ball
  if (message.content.toLowerCase() === '^item ultra ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Ultra Ball')
	.setDescription('**Price** : $1,200\n**Rate** : x2.0\n**Effect** : None\n**Location** : Everywhere\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/a/a8/Dream_Ultra_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }



});
client.login(process.env.BOT_TOKEN);




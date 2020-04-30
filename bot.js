const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const activities_list = ["PokeMMO","Nonstop","with Oh My Girl","with Arin","with Startear","with Waifu"]; 
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

client.on('message', message => {
    if (message.content === '?about') {
    	message.channel.send('```md\nTeam phát triển MMO Bot bao gồm\nGen 1st : Startear\nGen 2nd : liiih\nGen 3rd : dragoncv\nGen 4th : DXgamer\nGen 5th : SniderLane\n```');
  	}
    if (message.content === '?startear') {
    	message.channel.send('https://i.imgur.com/YxJTidU.png');
  	}
    if (message.content === '?emprovjp') {
    	message.channel.send('https://i.imgur.com/y9oCTLn.png');
  	}
    if (message.content === '?random') {
    	message.channel.send(Math.floor(Math.random() * 100) + 1);
  	}
// Send the user's avatar URL
    if (message.content === '?avatar') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
        }





// Dive Ball
  if (message.content === '^item dive ball') {
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
  if (message.content === '^item dusk ball') {
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
  if (message.content === '^item great ball') {
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
  if (message.content === '^item heal ball') {
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
  if (message.content === '^item luxury ball') {
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
  if (message.content === '^item master ball') {
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
  if (message.content === '^item nest ball') {
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
  if (message.content === '^item net ball') {
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
  if (message.content === '^item quick ball') {
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
  if (message.content === '^item poke ball') {
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
  if (message.content === '^item premier ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Premier Ball')
	.setDescription('**Rate** : x1.0\n**Effect** : None\n**Location** : PokeMMO Event Prize\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/6/64/Dream_Premier_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }
// Repeat Ball
  if (message.content === '^item repeat ball') {
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
  if (message.content === '^item safari ball') {
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
  if (message.content === '^item timer ball') {
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
  if (message.content === '^item ultra ball') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setTitle('Ultra Ball')
	.setDescription('**Price** : $1,200\n**Rate** : x2.0\n**Effect** : None\n**Location** : Everywhere\n')
	.setThumbnail('https://cdn.bulbagarden.net/upload/a/a8/Dream_Ultra_Ball_Sprite.png')
	.setTimestamp()
	.setFooter('MMOVietnamese', 'https://i.imgur.com/M89H3PF.png');
    message.channel.send(embed);
  }

// POKEMMO DEX NATIONAL 
// GEN-1
// Pokedex : 001
    if (message.content === '?bulbasaur') {
    	message.channel.send('```md\nBulbasaur\n> PokeDex Number : 001\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Kanto   Grass   M/D/N   Rare        10      -\n```');
  	}
// Pokedex : 002
    if (message.content === '?ivysaur') {
    	message.channel.send('```md\nIvysaur\n> PokeDex Number : 002\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 003
    if (message.content === '?venusaur') {
    	message.channel.send('```md\nVenusaur\n> PokeDex Number : 003\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 004
    if (message.content === '?charmander') {
    	message.channel.send('```md\nCharmander\n> PokeDex Number : 004\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRock Tunnel         Kanto   Cave    M/D/N   Rare        15      -\n```');
  	}
// Pokedex : 005
    if (message.content === '?charmeleon') {
    	message.channel.send('```md\nCharmeleon\n> PokeDex Number : 005\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 006
    if (message.content === '?charizard') {
    	message.channel.send('```md\nCharizard\n> PokeDex Number : 006\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 007
    if (message.content === '?squirtle') {
    	message.channel.send('```md\nSquirtle\n> PokeDex Number : 007\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 008
    if (message.content === '?wartortle') {
    	message.channel.send('```md\nWartortle\n> PokeDex Number : 008\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 009
    if (message.content === '?blastoise') {
    	message.channel.send('```md\nBlastoise\n> PokeDex Number : 009\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 010
    if (message.content === '?caterpie') {
    	message.channel.send('```md\nCaterpie\n> PokeDex Number : 010\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nRoute 2             Kanto   Grass   M/D/N   Rare        3-5     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    11-12   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    11-12   -\nVirdian Forest      Kanto   Grass   M/D/N   Common      5-7     -\n```');
  	}
// Pokedex : 011
    if (message.content === '?metapod') {
    	message.channel.send('```md\nMetapod\n> PokeDex Number : 011\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nPattern Bush        Kanto   Grass   M/D/N   Horde       48-50   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12      -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12      -\nVirdian Forest      Kanto   Grass   M/D/N   Uncommon    7       -\nRoute 12            Unova   Grass   M/D/N   Uncommon    48-49   -\n```');
  	}
// Pokedex : 012
    if (message.content === '?butterfree') {
    	message.channel.send('```md\nButterfree\n> PokeDex Number : 012\n> Egg Group : Bug\n> Evolution : Caterpie → Metapod (Lv.7) → Butterfree (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Rare        50-52   -\nRoute 24            Kanto   Grass   M       Uncommon    12      -\nRoute 25            Kanto   Grass   M/D     Uncommon    12      -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    53-54   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 013
    if (message.content === '?weedle') {
    	message.channel.send('```md\nWeedle\n> PokeDex Number : 013\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nRoute 2             Kanto   Grass   M/D/N   Rare        3-5     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    11-12   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    11-12   -\nVirdian Forest      Kanto   Grass   M/D/N   Common      5-7     -\n```');
  	}
// Pokedex : 014
    if (message.content === '?kakuna') {
    	message.channel.send('```md\nKakuna\n> PokeDex Number : 014\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map            Region  Type    Time    Rarity      Level   Item\nPattern Bush    Kanto   Grass   M/D/N   Uncommon    50-52   -\nPattern Bush    Kanto   Grass   M/D/N   Horde       48-50   -\nRoute 24        Kanto   Grass   M/D/N   Uncommon    12      -\nRoute 25        Kanto   Grass   M/D/N   Uncommon    12      -\nVirdian Forest  Kanto   Grass   M/D/N   Uncommon    7       -\nRoute 12        Unova   Grass   M/D/N   Uncommon    48-49   -\n```');
  	}
// Pokedex : 015
    if (message.content === '?beedrill') {
    	message.channel.send('```md\nBeedrill\n> PokeDex Number : 015\n> Egg Group : Bug\n> Evolution : Weedle → Kakuna (Lv.7) → Beedrill (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nPattern Bush        Kanto   Grass   M/D/N   Uncommon    50-52   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    53-54   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 016
    if (message.content === '?pidgey') {
    	message.channel.send('```md\nPidgey\n> PokeDex Number : 016\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 1             Kanto   Grass   M/D/N   V.Common    2-5     -\nRoute 2             Kanto   Grass   M/D/N   Common      4-6     -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 8             Kanto   Grass   D       Horde       15-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    13-17   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    23-27   -\nRoute 12            Kanto   Grass   M/D     Horde       20-22   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    25-27   -\nRoute 14            Kanto   Grass   M/D     Rare        27      -\nRoute 15            Kanto   Grass   M/D/N   Rare        27      -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 24            Kanto   Grass   M/D     Horde       8-9     -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/D/N   Uncommon    12-14   -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    5-7     -\nRoute 229           Kanto   Grass   M/D/N   Rare        47-50   -\n```');
  	}
// Pokedex : 017
    if (message.content === '?pidgeotto') {
    	message.channel.send('```md\nPidgeotto\n> PokeDex Number : 017\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nBond Bridge         Kanto   Grass   M/D     Uncommon    42-44   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Horde       46-48   -\nFile Isle Meadow    Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 12            Kanto   Grass   M/D     Rare        26-28   -\nRoute 13            Kanto   Grass   M/D     Rare        29      -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    29      -\nRoute 15            Kanto   Grass   M/D/N   Rare        29      -\nRoute 21            Kanto   Grass   M/D/N   Rare        30-32   -\n```');
  	}
// Pokedex : 018
    if (message.content === '?pidgeotto') {
    	message.channel.send('```md\nPidgeot\n> PokeDex Number : 018\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 019
    if (message.content === '?rattata') {
    	message.channel.send('```md\nRattata\n> PokeDex Number : 019\n> Egg Group : Field\n> Evolution : Rattata → Raticate (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    28-30   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-29   -\nRoute 1             Kanto   Grass   M/D/N   V.Common    2-4     -\nRoute 2             Kanto   Grass   M/D/N   Common      3-5     -\nRoute 3             Kanto   Grass   M/D/N   Common      5-8     -\nRoute 4             Kanto   Grass   M/D/N   Common      8-12    -\nRoute 4             Kanto   Grass   M/D/N   Horde       7-8     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 7             Kanto   Grass   M/D/N   Horde       15-17   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    17-18   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 9             Kanto   Grass   M/D/N   Horde       12-13   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    12-16   -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        22-25   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    24-26   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 22            Kanto   Grass   M/D/N   V.Common    3-5     -\nRoute 225           Sinnoh  Grass   M/D/N   Rare        47      -\nRoute 226           Sinnoh  Grass   M/D/N   Rare        47      -\n```');
  	}
// Pokedex : 020
    if (message.content === '?raticate') {
    	message.channel.send('```md\nRaticate\n> PokeDex Number : 020\n> Egg Group : Field\n> Evolution : Rattata → Raticate (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    32-38   -\nPokemon Mansion     Kanto   Inside  M/D/N   Horde       28-30   -\nRoute 7             Kanto   Grass   N       Rare        20-22   -\nRoute 8             Kanto   Grass   N       Rare        20-22   -\nRoute 9             Kanto   Grass   M/D/N   Rare        20      -\nRoute 10            Kanto   Grass   M/D/N   Rare        20      -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 16            Kanto   Grass   M/D/N   Horde       20      -\nRoute 17            Kanto   Grass   M/D/N   Uncommon    25-29   -\nRoute 17            Kanto   Grass   M/D/N   Horde       20-22   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 18            Kanto   Grass   M/D/N   Horde       23-24   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    30-32   -\nDreamyard           Unova   D.Grass M/D/N   V.Common    47-50   -\nDreamyard           Unova   D.Grass M/D/N   Horde       46-47   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    50-52   -\nRoute 225           Sinnoh  Grass   M/D/N   Horde       48-50   -\nRoute 226           Sinnoh  Grass   M/D/N   Common      51-52   -\nRoute 226           Sinnoh  Grass   M/D     Horde       48-50   -\n```');
  	}
// Pokedex : 021
    if (message.content === '?spearow') {
    	message.channel.send('```md\nSpearow\n> PokeDex Number : 021\n> Egg Group : Flying\n> Evolution : Spearow → Fearow (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    39-41   -\nKindle Road         Kanto   Grass   M/D/N   Rare        36-38   -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    38-40   -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-8     -\nRoute 4             Kanto   Grass   M/D     Horde       7-8     -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 9             Kanto   Grass   M/D     Horde       12-13   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    13-17   -\nRoute 16            Kanto   Grass   M/D/N   Rare        20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        22-25   -\nRoute 18            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 22            Kanto   Grass   M/D/N   Uncommon    3-5     -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    36-38   -\nWater Path          Kanto   Grass   M/D/N   Rare        48-50   -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 2             Unova   Shadow  M/D/N   Special     6-7     -\nRoute 18            Unova   Shadow  M/D/N   Special     36-38   -\nRoute 225           Sinnoh  Grass   M/D/N   Rare        47      -\nRoute 226           Sinnoh  Grass   M/D     Rare        47      -\n```');
  	}
// Pokedex : 022
    if (message.content === '?fearow') {
    	message.channel.send('```md\nFearow\n> PokeDex Number : 022\n> Egg Group : Flying\n> Evolution : Spearow → Fearow (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanyon Entrance     Kanto   Grass   M/D     Horde       46-48   -\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    41-43   -\nKindle Road         Kanto   Grass   M/D/N   Rare        37-39   -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 9             Kanto   Grass   M/D     Rare        20      -\nRoute 10            Kanto   Grass   M/D     Rare        20      -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    22-25   -\nRoute 17            Kanto   Grass   M/D     Horde       20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        26-28   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Rare        40-44   -\nRuin Valley         Kanto   Grass   M/D/N   Horde       48-50   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    37-39   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\n```');
    message.channel.send('```md\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 10            Unova   Shadow  M/D/N   Special     43-44   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   D.Grass M/D/N   Horde       50-52   -\nRoute 15            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 15            Unova   D.Grass M/D/N   Uncommon    53-55   -\nVictory Road        Unova   Shadow  M/D/N   Special     45-48   -\nRoute 225           Sinnoh  Grass   M/D     Horde       49-50   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    50-52   -\nRoute 226           Sinnoh  Grass   M/D     Uncommon    51-53   -\nRoute 227           Sinnoh  Grass   M/D     Horde       50-51   -\nRoute 227           Sinnoh  Grass   M/D/N   Uncommon    51-53   -\nStark Mountain      Sinnoh  Grass   M/D/N   Uncommon    54-55   -\n```');
  	}
// Pokedex : 023
    if (message.content === '?ekans') {
    	message.channel.send('```md\nEkans> PokeDex Number : 023\n> Egg Group : Field , Dragon\n> Evolution : Ekans → Arbok (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 11            Kanto   Grass   M/D/N   Common      12-16   -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\n```');
  	}
// Pokedex : 024
    if (message.content === '?arbok') {
    	message.channel.send('```md\nArbok> PokeDex Number : 024> Egg Group : Field , Dragon\n> Evolution : Ekans → Arbok (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 23            Kanto   Grass   M/D/N   Uncommon    44      -\nRoute 23            Kanto   Grass   M/D/N   Horde       38-39   -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\n```');
  	}
// Pokedex : 025
    if (message.content === '?pikachu') {
    	message.channel.send('```md\nPikachu\n> PokeDex Number : 025\n> Egg Group : Field , Fairy\n> Evolution : Pichu → Pikachu (Happiness) → Raichu (Use Thunderstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nPower Plant         Kanto   Inside  M/D/N   Common      28-30   -\nPower Plant         Kanto   Inside  M/D/N   Horde       26-28   -\nRoute 1             Kanto   Grass   M/D/N   V.Rare      2       -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    5-7     -\nSafari Zone         Hoenn   Grass   M/D/N   Rare        28-30   -\nTrophy Garden       Sinnoh  Grass   M/D/N   Horde       21-22   -\nTrophy Garden       Sinnoh  Grass   M/D/N   V.Common    22-24   -\n```');
  	}
// Pokedex : 026
    if (message.content === '?raichu') {
    	message.channel.send('```md\nRaichu\n> PokeDex Number : 026\n> Egg Group : Field , Fairy\n> Evolution : Pichu → Pikachu (Happiness) → Raichu (Use Thunderstone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 027
    if (message.content === '?sandshrew') {
    	message.channel.send('```md\nSandshrew\n> PokeDex Number : 027\n> Egg Group : Field\n> Evolution : Sandshrew → Sandslash (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Moon             Kanto   Cave    M/D/N   Rare        7-10    -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 4             Kanto   Grass   M/D/N   Uncommon    8-12    -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 11            Kanto   Grass   M/D/N   Uncommon    12-16   -\nRoute 23            Kanto   Grass   M/D/N   Rare        38-42   -\nMirage Tower        Hoenn   Cave    M/D/N   V.Common    20-23   -\nMirage Tower        Hoenn   Cave    M/D     Horde       18-20   -\nRoute 111           Hoenn   Grass   M/D/N   V.Common    20-23   -\nRoute 111           Hoenn   Grass   M/D     Horde       18-20   -\nRoute 113           Hoenn   Grass   M/D/N   Common      15-18   -\n```');
  	}
// Pokedex : 028
    if (message.content === '?sandslash') {
    	message.channel.send('```md\nSandslash\n> PokeDex Number : 028\n> Egg Group : Field\n> Evolution : Sandshrew → Sandslash (Lv.22)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 23            Kanto   Grass   M/D/N   Uncommon    44      -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\nVictory Road        Kanto   Cave    M/D/N   Horde       44-46   -\nRelic Castle        Unova   Cave    M/D/N   Common      47-50   -\nRelic Castle        Unova   Cave    M/D/N   Horde       45-47   -\n```');
  	}
// Pokedex : 029
    if (message.content === '?nidoran(f)') {
    	message.channel.send('```md\nNidoran (F)\n> PokeDex Number : 029\n> Egg Group : Monster , Field\n> Evolution : Nidoran (F) → Nidorina (Lv.16) → Nidoqueen (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 2             Kanto   Grass   M/D/N   Uncommon    4-6     -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 22            Kanto   Grass   M/D/N   Uncommon    3-5     -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    24-26   -\n```');
  	}
// Pokedex : 030
    if (message.content === '?nidorina') {
    	message.channel.send('```md\nNidorina\n> PokeDex Number : 030\n> Egg Group : Monster , Field\n> Evolution : Nidoran (F) → Nidorina (Lv.16) → Nidoqueen (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 10            Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    26-28   -\nRoute 14            Kanto   Grass   M/D/N   Horde       23-24   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Uncommon    40-42   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        31      -\n```');
  	}
// Pokedex : 031
    if (message.content === '?nidoqueen') {
    	message.channel.send('```md\nNidoqueen\n> PokeDex Number : 031\n> Egg Group : Monster , Field\n> Evolution : Nidoran (F) → Nidorina (Lv.16) → Nidoqueen (Use Moonstone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 032
    if (message.content === '?nidoran(m)') {
    	message.channel.send('```md\nNidoran (M)\n> PokeDex Number : 032\n> Egg Group : Monster , Field\n> Evolution : Nidoran (M) → Nidorino (Lv.16) → Nidoking (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 2             Kanto   Grass   M/D/N   Uncommon    4-6     -\nRoute 3             Kanto   Grass   M/D/N   Uncommon    6-7     -\nRoute 9             Kanto   Grass   M/D/N   Uncommon    14-17   -\nRoute 10            Kanto   Grass   M/D/N   Rare        14-17   -\nRoute 22            Kanto   Grass   M/D/N   Uncommon    3-5     -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    24-26   -\n```');
  	}
// Pokedex : 033
    if (message.content === '?nidorino') {
    	message.channel.send('```md\nNidorino\n> PokeDex Number : 033\n> Egg Group : Monster , Field\n> Evolution : Nidoran (M) → Nidorino (Lv.16) → Nidoking (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 10            Kanto   Grass   M/D/N   Rare        16-18   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    26-28   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    23-24   -\nRoute 15            Kanto   Grass   M/D/N   Horde       28-30   -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Uncommon    40-42   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        31      -\n```');
  	}
// Pokedex : 034
    if (message.content === '?nidoking') {
    	message.channel.send('```md\nNidoking\n> PokeDex Number : 034\n> Egg Group : Monster , Field\n> Evolution : Nidoran (M) → Nidorino (Lv.16) → Nidoking (Use Moonstone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 035
    if (message.content === '?clefairy') {
    	message.channel.send('```md\nClefairy\n> PokeDex Number : 035\n> Egg Group : Fairy\n> Evolution : Cleffa → Clefairy (Happiness) → Clefable (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Moon             Kanto   Cave    M/D/N   Rare        8-12    -\nRoute 3             Kanto   Grass   N       Rare        6-7     -\nRoute 4             Kanto   Grass   N       Rare        8-12    -\nGiant Chasm         Unova   Grass   M/D/N   Uncommon    52-54   -\nGiant Chasm         Unova   D.Grass M/D/N   Uncommon    57-59   -\nVillage Bridge      Unova   Grass   M/D/N   Special     60-65   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Uncommon    13-42   -\nMt.Coronet          Sinnoh  Grass   M/D/N   Uncommon    38-39   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       37      -\n```');
  	}
// Pokedex : 036
    if (message.content === '?clefable') {
    	message.channel.send('```md\nClefable\n> PokeDex Number : 036\n> Egg Group : Fairy\n> Evolution : Cleffa → Clefairy (Happiness) → Clefable (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\nVillage Bridge      Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 037
    if (message.content === '?vulpix') {
    	message.channel.send('```md\nVulpix\n> PokeDex Number : 037\n> Egg Group : Field\n> Evolution : Vulpix → Ninetales (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nPokemon Mansion     Kanto   Inside  M/D/N   Uncommon    30-32   -\nPokemon Mansion     Kanto   Inside  M/N     Horde       28-30   -\nRoute 5             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-14   -\nRoute 7             Kanto   Grass   M       Uncommon    19-22   -\nRoute 7             Kanto   Grass   M/D/N   Horde       15-17   -\nRoute 8             Kanto   Grass   M/D/N   Uncommon    19-22   -\nRoute 8             Kanto   Grass   M/N     Horde       15-17   -\nMt.Pyre             Hoenn   Grass   M/D/N   Common      29-31   -\nMt.Pyre             Hoenn   Grass   M/D/N   Horde       27-29   -\nAbundant Shrine     Unova   Grass   M/D/N   Common      47      -\nAbundant Shrine     Unova   D.Grass M/D/N   Common      52      -\nAbundant Shrine     Unova   D.Grass M/D/N   Horde       50-52   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\n```');
  	}
// Pokedex : 038
    if (message.content === '?ninetales') {
    	message.channel.send('```md\nNinetales\n> PokeDex Number : 038\n> Egg Group : Field\n> Evolution : Vulpix → Ninetales (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbudant Shrine      Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 039
    if (message.content === '?jigglypuff') {
    	message.channel.send('```md\nJigglypuff\n> PokeDex Number : 039\n> Egg Group : Fairy\n> Evolution : Igglypuff → Jigglypuff (Happiness) → Wigglytuff (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Kanto   Grass   M/D/N   Rare        5-7     -\nRoute 4             Kanto   Grass   M/D/N   Rare        8-12    -\nRoute 5             Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 6             Kanto   Grass   M/D/N   Rare        12-15   -\nRoute 7             Kanto   Grass   M/D/N   Rare        17-18   -\nRoute 8             Kanto   Grass   M/D/N   Rare        17-18   -\nRoute 115           Hoenn   Grass   M/D/N   V.Common    24-25   -\nRoute 115           Hoenn   Grass   M/D/N   Horde       22-23   -\nDreamyard           Sinnoh  Grass   M/D/N   Special     10-12   -\nRoute 2             Unova   Grass   M/D/N   Special     6-7     -\nRoute 14            Unova   Grass   M/D/N   Common      48      -\nRoute 14            Unova   Grass   M/D/N   Common      53      -\nRoute 14            Unova   D.Grass M/D/N   Horde       50-52   -\n```');
  	}
// Pokedex : 040
    if (message.content === '?wigglytuff') {
    	message.channel.send('```md\nWigglytuff\n> PokeDex Number : 040\n> Egg Group : Fairy\n> Evolution : Igglypuff → Jigglypuff (Happiness) → Wigglytuff (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 14            Kanto   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 041
    if (message.content === '?zubat') {
    	message.channel.send('```md\n Zubat\n> PokeDex Number : 041\n> Egg Group : Flying\n> Evolution : Zubat → Golbat (Lv.22) → Crobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nAltering Cave       Kanto   Cave    M/D/N   Uncommon    8-25    -\nDigletts Cave       Kanto   Cave    M/D/N   Uncommon    15-18   -\nIcefall Cave        Kanto   Cave    M/D/N   Uncommon    48-50   -\nLost Cave           Kanto   Cave    M/D/N   Uncommon    50-52   -\nMt.Moon             Kanto   Cave    M/D/N   Common      7-11    -\nMt.Moon             Kanto   Cave    M/D/N   Horde       5-6     -\nPokemon Tower       Kanto   Inside  M/D/N   Rare        15-19   -\nPokemon Tower       Kanto   Inside  M/D/N   Horde       13-17   -\nRock Tunnel         Kanto   Cave    M/D/N   Common      15-16   -\nRock Tunnel         Kanto   Cave    M/D/N   Horde       13-15   -\nRoute 3             Kanto   Grass   N       Uncommon    6-8     -\nRoute 4             Kanto   Grass   N       Uncommon    8-12    -\nRoute 9             Kanto   Grass   N       Rare        14-17   -\nRoute 10            Kanto   Grass   N       Rare        14-17   -\nSeafoam Islands     Kanto   Cave    M/D/N   Uncommon    26-32   -\nVictory Road        Kanto   Cave    M/D/N   Rare        42-46   -\n```');
    	message.channel.send('```md\nAltering Cave       Hoenn   Cave    M/D/N   Uncommon    8-25    -\nGranite Cave        Hoenn   Cave    M/D/N   Common      9-13    -\nGranite Cave        Hoenn   Cave    M/D/N   Horde       8-11    -\nMeteor Falls        Hoenn   Water   M/D/N   V.Common    20-40   -\nMeteor Falls        Hoenn   Cave    M/D/N   Common      16-20   -\nMeteor Falls        Hoenn   Water   M/D/N   Horde       20-30   -\nScorched Slab       Hoenn   Water   M/D/N   V.Common    25-30   -\nScorched Slab       Hoenn   Water   M/D/N   Horde       25-30   -\nSeafloor Cavern     Hoenn   Cave    M/D/N   Uncommon    33-36   -\nSeafloor Cavern     Hoenn   Water   M/D/N   Uncommon    30-35   -\nSealed Chamber      Hoenn   Water   M/D/N   Uncommon    30-40   -\nShoal Cave          Hoenn   Water   M/D/N   Uncommon    30-35   -\nShoal Cave          Hoenn   Cave    M/D/N   Uncommon    31      -\nVictory Road        Hoenn   Cave    M/D/N   Rare        36-38   -\n```');
    	message.channel.send('```md\nAcuity Lakefront    Sinnoh  Grass   N       Rare        35      -\nIron Island         Sinnoh  Cave    M/D/N   V.Rare      30      -\nMt.Coronet          Sinnoh  Water   M/D/N   V.Common    20-30   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Rare        14-19   -\nMt.Coronet          Sinnoh  Water   M/D/N   Horde       20-30   -\nOreburgh Gate       Sinnoh  Cave    M/D/N   V.Common    5-10    -\nOreburgh Gate       Sinnoh  Cave    M/D/N   Horde       6-7     -\nOreburgh Gate       Sinnoh  Water   M/D/N   V.Common    20-30   -\nOreburgh Gate       Sinnoh  Water   M/D/N   Horde       20-30   -\nOreburgh Mine       Sinnoh  Cave    M/D/N   Common      6-10    -\nRavaged Path        Sinnoh  Cave    M/D/N   V.Common    4-6     -\nRavaged Path        Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 203           Sinnoh  Grass   N       Uncommon    4-5     -\nRoute 204           Sinnoh  Grass   N       Uncommon    3-8     -\nRoute 206           Sinnoh  Grass   N       Uncommon    17      -\nRoute 207           Sinnoh  Grass   N       Uncommon    5-6     -\nRoute 208           Sinnoh  Grass   N       Uncommon    19      -\nRoute 208           Sinnoh  Grass   N       Horde       16-17   -\nRoute 209           Sinnoh  Cave    M/D/N   V.Common    17-21   -\nRoute 209           Sinnoh  Cave    M/D/N   Horde       16-21   -\nRoute 209           Sinnoh  Grass   N       Uncommon    19      -\nRoute 211           Sinnoh  Grass   N       Uncommon    14-28   -\nRoute 214           Sinnoh  Grass   N       Uncommon    22      -\nRoute 216           Sinnoh  Grass   N       Rare        32-33   -\nRoute 217           Sinnoh  Grass   N       Rare        35      -\nWayward Cave        Sinnoh  Cave    M/D/N   Common      17-19   -\n```');
  	}
// Pokedex : 042
    if (message.content === '?golbat') {
    	message.channel.send('```md\n Golbat\n> PokeDex Number : 042\n> Egg Group : Flying\n> Evolution : Zubat → Golbat (Lv.22) → Crobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nIcefall Cave        Kanto   Cave    M/D/N   Uncommon    48-50   -\nIcefall Cave        Kanto   Cave    M/D/N   Horde       46-48   -\nLost Cave           Kanto   Cave    M/D/N   Common      50-52   -\nLost Cave           Kanto   Cave    M/D/N   Horde       48-50   -\nPokemon Tower       Kanto   Inside  M/D/N   Rare        22      -\nPokemon Tower       Kanto   Inside  M/D/N   Horde       13-17   -\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        26-34   -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\n```');
    	message.channel.send('```md\n Cave Of Origin      Hoenn   Cave    M/D/N   V.Common    33-36   -\nCave Of Origin      Hoenn   Cave    M/D/N   Horde       30-34   -\nMeteor Falls        Hoenn   Water   M/D/N   V.Common    37-45   -\nMeteor Falls        Hoenn   Water   M/D/N   Common      30-40   -\nMeteor Falls        Hoenn   Cave    M/D/N   Horde       30-40   -\nScorched Slab       Hoenn   Cave    M/D/N   V.Common    26-29   -\nScorched Slab       Hoenn   Water   M/D/N   Horde       24-26   -\nScorched Slab       Hoenn   Cave    M/D/N   V.Common    25-30   -\nSeafloor Cavern     Hoenn   Cave    M/D/N   V.Common    33-36   -\nSeafloor Cavern     Hoenn   Cave    M/D/N   Horde       32-33   -\nSeafloor Cavern     Hoenn   Water   M/D/N   V.Common    30-35   -\nSealed Chamber      Hoenn   Water   M/D/N   Common      30-40   -\nShoal Cave          Hoenn   Water   M/D/N   Horde       30-35   -\nShoal Cave          Hoenn   Cave    M/D/N   Common      31-34   -\nShoal Cave          Hoenn   Water   M/D/N   Uncommon    30-35   -\nShoal Cave          Hoenn   Cave    M/D/N   Horde       31-32   -\nSky Pillar          Hoenn   Cave    M/D/N   Common      37-38   -\nSky Pillar          Hoenn   Cave    M/D/N   Horde       35-37   -\nVictory Road        Hoenn   Cave    M/D/N   Common      38-44   -\nVictory Road        Hoenn   Cave    M/D/N   Horde       39-40   -\nVictory Road        Hoenn   Water   M/D/N   V.Common    30-40   -\nVictory Road        Hoenn   Water   M/D/N   Horde       30-40   -\nGiant Chasm         Unova   Cave    M/D/N   Uncommon    47      -\nGiant Chasm         Unova   Grass   M/D/N   Uncommon    48-50   -\nGiant Chasm         Unova   Grass   M/D/N   Horde       46-47   -\nGiant Chasm         Unova   D.Grass M/D/N   Uncommon    53-55   -\n```');
    	message.channel.send('```md\n Route 13            Sinnoh  Grass   M/D/N   Common      48-50   -\nRoute 13            Sinnoh  D.Grass M/D/N   Common      53-55   -\nIron Island         Sinnoh  Cave    M/D/N   Common      31-33   -\nIron Island         Sinnoh  Cave    M/D/N   Horde       29-33   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Uncommon    33-41   -\nMt.Coronet          Sinnoh  Grass   N       Uncommon    38-39   -\nMt.Coronet          Sinnoh  Water   M/D/N   Uncommon    22-40   -\nMt.Coronet          Sinnoh  Water   M/D/N   Horde       22-40   -\nMt.Coronet          Sinnoh  Cave    M/D/N   Horde       31-32   -\nOreburgh Gate       Sinnoh  Water   M/D/N   Uncommon    22-40   -\nRavaged Path        Sinnoh  Water   M/D/N   Uncommon    22-40   -\nRavaged Path        Sinnoh  Water   M/D/N   Horde       22-30   -\nRoute 209           Sinnoh  Cave    M/D/N   Rare        22-23   -\nRoute 227           Sinnoh  Grass   N       Uncommon    51      -\nSendoff Spring      Sinnoh  Grass   N       Uncommon    38      -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Common      50-56   -\nSnowpoint Temple    Sinnoh  Cave    M/D/N   Horde       47-50   -\nStark Mountain      Sinnoh  Cave    M/D/N   Uncommon    54-56   -\nStark Mountain      Sinnoh  Grass   N       Uncommon    51-54   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Common      45-66   -\nVictory Road        Sinnoh  Cave    M/D/N   Rare        43-52   -\nVictory Road        Sinnoh  Water   M/D/N   V.Common    35-55   -\nVictory Road        Sinnoh  Water   M/D/N   Horde       30-50   -\n```');
  	}
// Pokedex : 043
    if (message.content === '?oddish') {
    	message.channel.send('```md\n Oddish\n> PokeDex Number : 043\n> Egg Group : Plant\n> Evolution 1 : Oddish → Gloom (Lv.21) → Vileplume (Use Leafstone)\n> Evolution 2 : Oddish → Gloom (Lv.21) → Bellossom (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Rare        41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nCape Brink          Kanto   Grass   M/D/N   Rare        39-41   -\nRoute 2             Kanto   Grass   M/D/N   Uncommon    3-4     -\nRoute 5             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 6             Kanto   Grass   M/D/N   Uncommon    12-15   -\nRoute 7             Kanto   Grass   M/D/N   Uncommon    18-20   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    22-26   -\nRoute 13            Kanto   Grass   M/N     Horde       22-23   -\nRoute 14            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 15            Kanto   Grass   M/D/N   Rare        24-26   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    27-29   -\nRoute 24            Kanto   Grass   M/D/N   Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/N     Uncommon    12-14   -\nRoute 25            Kanto   Grass   M/D/N   Horde       8-10    -\nViridian Forest     Kanto   Grass   M/D/N   Uncommon    4-6     -\nWater Path          Kanto   Grass   M/D/N   Rare        48-50   -\n```');
    	message.channel.send('```md\nRoute 110           Hoenn   Grass   M/D/N   Uncommon    13      -\nRoute 117           Hoenn   Grass   N       Uncommon    14      -\nRoute 117           Hoenn   Grass   M/D/N   Horde       11-12   -\nRoute 119           Hoenn   Grass   M/D/N   Common      24-27   -\nRoute 120           Hoenn   Grass   M/D/N   Uncommon    25-27   -\nRoute 121           Hoenn   Grass   M/D/N   Uncommon    27-29   -\nRoute 123           Hoenn   Grass   M/D/N   Rare        28-30   -\nSafari Zone         Sinnoh  Grass   M/D/N   Rare        27-29   -\nRoute 224           Sinnoh  Grass   N       Uncommon    49      -\nRoute 229           Sinnoh  Grass   M/D/N   Rare        47-50   -\nRoute 230           Sinnoh  Grass   N       Uncommon    47      -\n```');
  	}
// Pokedex : 044
    if (message.content === '?gloom') {
    	message.channel.send('```md\n Gloom\n> PokeDex Number : 044\n> Egg Group : Plant\n> Evolution 1 : Oddish → Gloom (Lv.21) → Vileplume (Use Leafstone)\n> Evolution 2 : Oddish → Gloom (Lv.21) → Bellossom (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    42-44   -\nBond Bridge         Kanto   Grass   M/D/N   Horde       39-41   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 12            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    30      -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 21            Kanto   Grass   M/D/N   Uncommon    30-32   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 119           Hoenn   Grass   M/D/N   Uncommon    25-27   -\nRoute 119           Hoenn   Grass   M/D/N   Horde       23-24   -\nRoute 120           Hoenn   Grass   M/D/N   Uncommon    25-27   -\nRoute 121           Hoenn   Grass   M/D/N   Uncommon    28-30   -\nRoute 123           Hoenn   Grass   M/D/N   Uncommon    29-31   -\nSafari Zone         Hoenn   Grass   M/D/N   Rare        28-30   -\nRoute 224           Sinnoh  Grass   N       Rare        53      -\nRoute 229           Sinnoh  Grass   M/D/N   Uncommon    51-52   -\nRoute 230           Sinnoh  Grass   M/D/N   Rare        50      -\n```');
  	}
// Pokedex : 045
    if (message.content === '?vileplume') {
    	message.channel.send('```md\n Vileplume\n> PokeDex Number : 045\n> Egg Group : Plant\n> Evolution 1 : Oddish → Gloom (Lv.21) → Vileplume (Use Leafstone)\n> Evolution 2 : Oddish → Gloom (Lv.21) → Bellossom (Use Sunstone)\nNo Wild Locations Found.```');
  	}
// Pokedex : 046
    if (message.content === '?paras') {
    	message.channel.send('```md\n Paras\n> PokeDex Number : 046\n> Egg Group : Bug , Plant\n> Evolution : Paras → Parasect (Lv.24)\n#Map                Region  Type    Time    Rarity      Level   Item\nMt.Moon             Kanto   Cave    M/D/N   V.Common    8-12    -\nMt.Moon             Kanto   Cave    M/D/N   Horde       5-6     -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    24-26   -\n```');
  	}
// Pokedex : 047
    if (message.content === '?parasect') {
    	message.channel.send('```md\n Parasect\n> PokeDex Number : 047\n#Map                Region  Type    Time    Rarity      Level   Item\nCerulean Cave       Kanto   Cave    M/D/N   Rare        54-60   -\nCerulean Cave       Kanto   Cave    M/D/N   Horde       54-56   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        30      -\n```');
  	}
// Pokedex : 048
    if (message.content === '?venonat') {
    	message.channel.send('```md\n Venonat\n> PokeDex Number : 048\n> Egg Group : Bug\n> Evolution : Venonat → Venomoth (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    41-43   -\nBond Bridge         Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 9             Kanto   Grass   N       Uncommon    14-17   -\nRoute 10            Kanto   Grass   N       Rare        14-17   -\nRoute 12            Kanto   Grass   M/D/N   Common      24-26   -\nRoute 12            Kanto   Grass   N       Horde       20-22   -\nRoute 13            Kanto   Grass   M/D/N   Uncommon    24-26   -\nRoute 14            Kanto   Grass   M/D/N   Uncommon    24-26   -\nRoute 15            Kanto   Grass   M/D/N   Rare        25-27   -\nRoute 24            Kanto   Grass   N       Rare        12-14   -\nRoute 24            Kanto   Grass   N       Horde       8-9     -\nRoute 25            Kanto   Grass   N       Rare        12-14   -\nSafari Zone         Kanto   Grass   M/D/N   Rare        24-26   -\n```');
  	}
// Pokedex : 049
    if (message.content === '?venomoth') {
    	message.channel.send('```md\n Venomoth\n> PokeDex Number : 049\n> Egg Group : Bug\n> Evolution : Venonat → Venomoth (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nBerry Forest        Kanto   Grass   M/D/N   Uncommon    43-45   -\nCerulean Cave       Kanto   Cave    N       Rare        54-58   -\nRoute 13            Kanto   Grass   N       Rare        31      -\nRoute 14            Kanto   Grass   N       Rare        31      -\nRoute 15            Kanto   Grass   M/D/N   Uncommon    31      -\nSafari Zone         Kanto   Grass   M/D/N   Uncommon    31      -\nVictory Road        Kanto   Cave    M/D/N   Rare        44-46   -\nDreamyard           Unova   D.Grass N       Rare        48-50   -\n```');
  	}
// Pokedex : 050
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 052
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 053
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 054
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 055
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 056
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 057
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 058
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 059
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 060
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 061
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 062
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 063
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 064
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 065
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 066
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 067
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 068
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 069
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 070
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 071
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 072
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 073
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 074
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 075
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 076
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 077
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 078
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 079
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 080
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 081
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 082
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 083
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 084
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 085
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 086
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 087
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 088
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 089
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 090
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 091
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 092
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 093
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 094
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 095
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 096
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 097
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 098
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 099
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 100
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 101
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 102
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 103
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 104
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 105
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 106
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 107
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 108
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 109
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 110
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 111
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 112
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 113
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 114
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 115
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 116
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 117
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 118
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 119
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 120
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 121
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 122
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 123
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 124
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 125
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 126
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 127
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 128
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 129
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 130
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 131
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 132
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 133
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 134
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 135
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 136
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 137
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 138
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 139
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 140
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 141
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 142
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 143
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 144
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 145
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 146
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 147
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 148
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 149
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 150
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 151
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 387
    if (message.content === '?turtwig') {
    	message.channel.send('```md\nTurtwig\n> PokeDex Number : 387\n> Egg Group : Monster , Plant\n> Evolution : Turtwig → Grotle (Lv.18) → Torterra (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nSendoff Spring      Sinnoh  Grass   M/D/N   Rare        35      -\n```');
  	}
// Pokedex : 388
    if (message.content === '?grotle') {
    	message.channel.send('```md\nGrotle\n> PokeDex Number : 388\n> Egg Group : Monster , Plant\n> Evolution : Turtwig → Grotle (Lv.18) → Torterra (Lv.32)\nNo Wild Locations Found.```');
  	}
// Pokedex : 389
    if (message.content === '?torterra') {
    	message.channel.send('```md\nTorterra\n> PokeDex Number : 389\n> Egg Group : Monster , Plant\n> Evolution : Turtwig → Grotle (Lv.18) → Torterra (Lv.32)\nNo Wild Locations Found.```');
  	}
// Pokedex : 390
    if (message.content === '?chimchar') {
    	message.channel.send('```md\nChimchar\n> PokeDex Number : 390\n> Egg Group : Field , Humanoid\n> Evolution : Chimchar → Monferno (Lv.14) → Infernape (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nValor Lakefront     Sinnoh  Grass   M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 391
    if (message.content === '?monferno') {
    	message.channel.send('```md\nMonferno\n> PokeDex Number : 391\n> Egg Group : Field , Humanoid\n> Evolution : Chimchar → Monferno (Lv.14) → Infernape (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 392
    if (message.content === '?infernape') {
    	message.channel.send('```md\nInfernape\n> PokeDex Number : 392\n> Egg Group : Field , Humanoid\n> Evolution : Chimchar → Monferno (Lv.14) → Infernape (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 393
    if (message.content === '?piplup') {
    	message.channel.send('```md\nPiplup\n> PokeDex Number : 393\n> Egg Group : Water A , Field\n> Evolution : Piplup → Prinplup (Lv.16) → Empoleon (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nLake Acuity         Sinnoh  Grass   M/D/N   Rare        20      -\n```');
  	}
// Pokedex : 394
    if (message.content === '?prinplup') {
    	message.channel.send('```md\nPrinplup\n> PokeDex Number : 394\n> Egg Group : Water A , Field\n> Evolution : Piplup → Prinplup (Lv.16) → Empoleon (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 395
    if (message.content === '?empoleon') {
    	message.channel.send('```md\nEmpoleon\n> PokeDex Number : 395\n> Egg Group : Water A , Field\n> Evolution : Piplup → Prinplup (Lv.16) → Empoleon (Lv.36)\nNo Wild Locations Found.```');
  	}
// Pokedex : 396
    if (message.content === '?starly') {
    	message.channel.send('```md\nStarly\n> PokeDex Number : 396\n> Egg Group : Flying\n> Evolution : Starly → Staravia (Lv.14) → Staraptor (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D     V.Rare      27-29   -\nLake Verity         Sinnoh  Grass   M/D/N   Common      2-4     -\nRoute 201           Sinnoh  Grass   M/D/N   Common      2-3     -\nRoute 202           Sinnoh  Grass   M/D/N   Uncommon    2-4     -\nRoute 203           Sinnoh  Grass   M/D/N   Uncommon    4-7     -\nRoute 204           Sinnoh  Grass   M/D/N   Uncommon    4-11    -\nRoute 209           Sinnoh  Grass   M/D/N   Uncommon    17-18   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    21-22   -\n```');
  	}
// Pokedex : 397
    if (message.content === '?staravia') {
    	message.channel.send('```md\nStaravia\n> PokeDex Number : 397\n> Egg Group : Flying\n> Evolution : Starly → Staravia (Lv.14) → Staraptor (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nLake Valor          Sinnoh  Grass   M/D/N   Uncommon    38-40   -\nRoute 209           Sinnoh  Grass   M/D/N   Uncommon    18-19   -\nRoute 210           Sinnoh  Grass   M/D     Horde       17-19   -\nRoute 210           Sinnoh  Grass   M/D/N   Uncommon    19      -\nRoute 212           Sinnoh  Grass   M/D     Horde       21-22   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    21-23   -\nRoute 215           Sinnoh  Grass   M/D     Horde       19-20   -\nRoute 215           Sinnoh  Grass   M/D/N   Uncommon    19-22   -\nSendoff Spring      Sinnoh  Grass   M/D/N   Uncommon    38-40   -\nTrophy Garden       Sinnoh  Grass   M/D/N   Uncommon    22-24   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Uncommon    25-27   -\n```');
  	}
// Pokedex : 398
    if (message.content === '?staraptor') {
    	message.channel.send('```md\nStaraptor\n> PokeDex Number : 398\n> Egg Group : Flying\n> Evolution : Starly → Staravia (Lv.14) → Staraptor (Lv.34)\nNo Wild Locations Found.```');
  	}
// Pokedex : 399
    if (message.content === '?bidoof') {
    	message.channel.send('```md\nBidoof\n> PokeDex Number : 399\n> Egg Group : Water A , Field\n> Evolution : Bidoof → Bibarel (Lv.15)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/D/N   Uncommon    12      -\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-29   -\nLake Verity         Sinnoh  Grass   M/D/N   V.Common    2-4     -\nRoute 201           Sinnoh  Grass   M/D/N   V.Common    2-4     -\nRoute 202           Sinnoh  Grass   M/D/N   V.Common    2-4     -\nRoute 203           Sinnoh  Grass   M/D/N   V.Common    4-7     -\nRoute 204           Sinnoh  Grass   M/D/N   V.Common    4-11    -\nRoute 204           Sinnoh  Grass   M/D/N   Horde       7-8     -\nRoute 205           Sinnoh  Grass   M/D/N   Uncommon    9-14    -\nRoute 205           Sinnoh  Grass   M/D/N   Horde       10-12   -\nRoute 208           Sinnoh  Grass   M/D/N   Uncommon    18-19   -\nRoute 211           Sinnoh  Grass   M/D/N   Common      14      -\nRoute 211           Sinnoh  Grass   M/D/N   Horde       12-14   -\nValley Windworks    Sinnoh  Grass   M/D/N   Uncommon    9-10    -\n```');
  	}
// Pokedex : 400
    if (message.content === '?bibarel') {
    	message.channel.send('```md\nBibarel\n> PokeDex Number : 400\n> Egg Group : Water A , Field\n> Evolution : Bidoof → Bibarel (Lv.15)\n#Map                Region  Type    Time    Rarity      Level   Item\nVillage Bridge      Unova   Grass   M/D/N   Common      47-49   -\nVillage Bridge      Unova   D.Grass M/D/N   Common      52-54   -\nVillage Bridge      Unova   D.Grass M/D/N   Horde       50-52   -\nVillage Bridge      Unova   Grass   N       Horde       45-47   -\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      28-30   -\nLake Acuity         Sinnoh  Grass   M/D/N   Uncommon    39-40   -\nLake Valor          Sinnoh  Grass   M/D/N   Horde       36-38   -\nLake Valor          Sinnoh  Grass   M/D/N   V.Common    39-41   -\nRoute 208           Sinnoh  Grass   M/D/N   Rare        18-20   -\nRoute 209           Sinnoh  Grass   M/D/N   Horde       16-18   -\nRoute 209           Sinnoh  Grass   M/D/N   V.Common    19-20   -\nRoute 210           Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 212           Sinnoh  Grass   M/D/N   Rare        24-25   -\nSendoff Spring      Sinnoh  Grass   M/D/N   Horde       36-37   -\nSendoff Spring      Sinnoh  Grass   M/D/N   V.Common    37-38   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Common      25-27   -\nValor Lakefront     Sinnoh  Grass   M/D     Horde       25-26   -\n```');
  	}
// Pokedex : 401
    if (message.content === '?kricketot') {
    	message.channel.send('```md\nKricketot\n> PokeDex Number : 401\n> Egg Group : Bug\n> Evolution : Kricketot → Kricketune (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/N     Rare        10      -\nRoute 201           Sinnoh  Grass   M/N     Uncommon    3       -\nRoute 202           Sinnoh  Grass   M/N     Uncommon    3-4     -\nRoute 203           Sinnoh  Grass   M/N     Uncommon    4-5     -\nRoute 204           Sinnoh  Grass   M/N     Uncommon    3-9     -\nRoute 204           Sinnoh  Grass   N       Horde       7-8     -\nRoute 205           Sinnoh  Grass   M/N     Rare        12-13   -\nRoute 206           Sinnoh  Grass   M/N     Uncommon    16-17   -\nRoute 207           Sinnoh  Grass   M/N     Uncommon    5-6     -\n```');
  	}
// Pokedex : 402
    if (message.content === '?kricketune') {
    	message.channel.send('```md\nKricketune\n> PokeDex Number : 402\n> Egg Group : Bug\n> Evolution : Kricketot → Kricketune (Lv.10)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/N     V.Common    47-50   -\nDreamyard           Unova   D.Grass M/N     Horde       46-47   -\nRoute 206           Sinnoh  Grass   M/N     Rare        17-18   -\nRoute 210           Sinnoh  Grass   M/N     Uncommon    19-21   -\nRoute 210           Sinnoh  Grass   N       Horde       17-19   -\nRoute 212           Sinnoh  Grass   M/D/N   Common      22-25   -\nRoute 212           Sinnoh  Grass   N       Horde       21-22   -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommon    23-24   -\nRoute 215           Sinnoh  Grass   M/D/N   Uncommon    20-22   -\nTrophy Garden       Sinnoh  Grass   M/D/N   Common      22-23   -\nValor Lakefront     Sinnoh  Grass   M/D/N   Uncommon    27      -\n```');
  	}
// Pokedex : 403
    if (message.content === '?shinx') {
    	message.channel.send('```md\nShinx\n> PokeDex Number : 403\n> Egg Group : Field\n> Evolution : Shinx → Luxio (Lv.15) → Luxray (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nFuego Ironworks     Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 202           Sinnoh  Grass   M/D/N   V.Common    3-4     -\nRoute 203           Sinnoh  Grass   M/D/N   V.Common    4-5     -\nRoute 204           Sinnoh  Grass   M/D/N   Uncommon    4-10    -\nValley Windworks    Sinnoh  Grass   M/D/N   Horde       8-9     -\nValley Windworks    Sinnoh  Grass   M/D/N   Common      10      -\n```');
  	}
// Pokedex : 404
    if (message.content === '?luxio') {
    	message.channel.send('```md\nLuxio\n> PokeDex Number : 404\n> Egg Group : Field\n> Evolution : Shinx → Luxio (Lv.15) → Luxray (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nFuego Ironworks     Sinnoh  Grass   M/D/N   Rare        29      -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Horde       27-28   -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommon    38-40   -\n```');
  	}
// Pokedex : 405
    if (message.content === '?luxray') {
    	message.channel.send('```md\nLuxray\n> PokeDex Number : 405\n> Egg Group : Field\n> Evolution : Shinx → Luxio (Lv.15) → Luxray (Lv.30)\nNo Wild Locations Found.```');
  	}
// Pokedex : 406
    if (message.content === '?budew') {
    	message.channel.send('```md\nBudew\n> PokeDex Number : 406\n> Egg Group : Cannot Breed\n> Evolution : Budew → Roselia (Happiness + Day Time) → Roserade (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/D/N   Common      10-12   -\nEterna Forest       Sinnoh  Grass   M/D     Horde       10      -\nGreat Marsh         Sinnoh  Inside  M/D     V.Rare      27-29   -\nRoute 204           Sinnoh  Grass   M/D/N   Common      3-10    -\nRoute 205           Sinnoh  Grass   M/D/N   Uncommon    12-14   -\nRoute 208           Sinnoh  Grass   M/D/N   Uncommon    18-19   -\nRoute 208           Sinnoh  Grass   M/D/N   Horde       16-17   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    21-22   -\n```');
  	}
// Pokedex : 407
    if (message.content === '?roserade') {
    	message.channel.send('```md\nRoserade\n> PokeDex Number : 407\n> Egg Group : Fairy , Plant\n> Evolution : Budew → Roselia (Happiness + Day Time) → Roserade (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 408
    if (message.content === '?cranidos') {
    	message.channel.send('```md\nCranidos\n> PokeDex Number : 408\n> Egg Group : Monster\n> Evolution : Cranidos → Rampardos (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 409
    if (message.content === '?rampardos') {
    	message.channel.send('```md\nRampardos\n> PokeDex Number : 409\n> Egg Group : Monster\n> Evolution : Cranidos → Rampardos (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 410
    if (message.content === '?shieldon') {
    	message.channel.send('```md\nShieldon\n> PokeDex Number : 410\n> Egg Group : Monster\n> Evolution : Shieldon → Bastiodon (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 411
    if (message.content === '?bastiodon') {
    	message.channel.send('```md\nBastiodon\n> PokeDex Number : 411\n> Egg Group : Monster\n> Evolution : Shieldon → Bastiodon (Lv.30)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 412
    if (message.content === '?burmy') {
    	message.channel.send('```md\nBurmy\n> PokeDex Number : 412\n> Egg Group : Bug\n> Evolution : Burmy → Wormadam (Lv.20 + Female)\n> Evolution : Burmy → Mothim   (Lv.20 + Male)\n#Map                Region  Type    Time    Rarity      Level   Item\nHoney Tree          Sinnoh  H.Tree  M/D/N   Uncommon    5-20    -\n```');
  	}
// Pokedex : 413
    if (message.content === '?wormadam') {
    	message.channel.send('```md\nWormadam\n> PokeDex Number : 413\n> Egg Group : Bug\n> Evolution : Burmy → Wormadam (Lv.20 + Female)\n> Evolution : Burmy → Mothim   (Lv.20 + Male)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 414
    if (message.content === '?mothim') {
    	message.channel.send('```md\nMothim\n> PokeDex Number : 414\n> Egg Group : Bug\n> Evolution 1 : Burmy → Wormadam (Lv.20 + Female)\n> Evolution 2 : Burmy → Mothim   (Lv.20 + Male)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 415
    if (message.content === '?combee') {
    	message.channel.send('```md\nCombee\n> PokeDex Number : 415\n> Egg Group : Bug\n> Evolution : Combee → Vespiquen (Lv.21 - Female)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 12            Unova   Grass   M/D/N   Uncommon    47      -\nRoute 12            Unova   D.Grass M/D/N   Uncommon    52      -\nHoney Tree          Sinnoh  H.Tree  M/D/N   Uncommon    5-20    -\n```');
  	}
// Pokedex : 416
    if (message.content === '?vespiquen') {
    	message.channel.send('```md\nVespiquen\n> PokeDex Number : 416\n> Egg Group : Bug\n> Evolution : Combee → Vespiquen (Lv.21 - Female)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 417
    if (message.content === '?pachirisu') {
    	message.channel.send('```md\nPachirisu\n> PokeDex Number : 417\n> Egg Group : Field , Fairy\n#Map                Region  Type    Time    Rarity      Level   Item\nFuego Ironworks     Sinnoh  Grass   M/D/N   Rare        29      -\nRoute 205           Sinnoh  Grass   M/D/N   Rare        9-14    -\nValley Windworks    Sinnoh  Grass   M/D/N   Horde       8-9     -\nValley Windworks    Sinnoh  Grass   M/D/N   Rare        9-11    -\n```');
  	}
// Pokedex : 418
    if (message.content === '?buizel') {
    	message.channel.send('```md\nBuizel\n> PokeDex Number : 418\n> Egg Group : Water A , Field\n> Evolution : Buizel → Floatzel (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Unova   Grass   M/D/N   Special     12-14   -\nRoute 11            Unova   Water   M/D/N   V.Common    35-55   -\nRoute 11            Unova   Water   M/D/N   Horde       35-55   -\nRoute 14            Unova   Water   M/D/N   V.Common    35-55   -\nRoute 14            Unova   Water   M/D/N   Horde       35-55   -\nRoute 205           Sinnoh  Grass   M/D/N   V.Common    10-14   -\nRoute 205           Sinnoh  Grass   M/D/N   Horde       8-12    -\nRoute 212           Sinnoh  Grass   M/D/N   Rare        23-25   -\nRoute 213           Sinnoh  Grass   N       Horde       22-23   -\nRoute 213           Sinnoh  Grass   M/D/N   V.Common    23-25   -\nRoute 224           Sinnoh  Grass   M/D/N   Rare        49      -\nValley Windworks    Sinnoh  Grass   M/D/N   Common      9-11    -\n```');
  	}
// Pokedex : 419
    if (message.content === '?floatzel') {
    	message.channel.send('```md\nFloatzel\n> PokeDex Number : 419\n> Egg Group : Water A , Field\n> Evolution : Buizel → Floatzel (Lv.26)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Special     28-29   -\nMoor Of Icirrus     Unova   Water   M/D/N   Special     39-40   -\nRoute 3             Unova   Water   M/D/N   Special     30-40   -\nRoute 6             Unova   Water   M/D/N   Special     30-40   -\nRoute 11            Unova   Water   M/D/N   Special     60-65   -\nRoute 14            Unova   Water   M/D/N   Special     60-65   -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Common      29-31   -\nRoute 213           Sinnoh  Grass   M/D/N   Uncommon    26      -\nRoute 218           Sinnoh  Grass   M/D/N   V.Common    29-31   -\nRoute 218           Sinnoh  Grass   M/D/N   Horde       28-29   -\nRoute 221           Sinnoh  Grass   M/D/N   Common      28-31   -\nRoute 222           Sinnoh  Grass   M/D/N   Common      38-42   -\nRoute 222           Sinnoh  Grass   M/D/N   Horde       38-39   -\nRoute 224           Sinnoh  Grass   M/D/N   Common      53-54   -\nRoute 230           Sinnoh  Grass   M/D/N   Common      50-52   -\nVictory Road        Sinnoh  Cave    M/D/N   Common      42-51   -\nVictory Road        Sinnoh  Cave    M/D/N   Horde       41-48   -\nVictory Road        Sinnoh  Water   M/D/N   V.Common    30-55   -\nVictory Road        Sinnoh  Water   M/D/N   Horde       30-50   -\n```');
  	}
// Pokedex : 420
    if (message.content === '?cherubi') {
    	message.channel.send('```md\nCherubi\n> PokeDex Number : 420\n> Egg Group : Plant , Fairy\n> Evolution : Cherubi → Cherrim (Lv.25)\n#Map                Region  Type    Time    Rarity      Level   Item\nHoney Tree          Sinnoh  H.Tree  M/D/N   Uncommon    5-20    -\n```');
  	}
// Pokedex : 421
    if (message.content === '?cherrim') {
    	message.channel.send('```md\nCherrim\n> PokeDex Number : 421\n> Egg Group : Plant , Fairy\n> Evolution : Cherubi → Cherrim (Lv.25)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 422
    if (message.content === '?shellos') {
    	message.channel.send('```md\nShellos\n> PokeDex Number : 422\n> Egg Group : Water A , Chaos\n> Evolution : Shellos → Gastrodon (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanalave City       Sinnoh  Water   M/D/N   Uncommon    20-30   -\nFuego Ironworks     Sinnoh  Grass   M/D/N   Uncommon    28      -\nFuego Ironworks     Sinnoh  Water   M/D/N   Common      20-30   -\nPastoria City       Sinnoh  Water   M/D/N   Uncommon    20-30   -\nRoute 205           Sinnoh  Grass   M/D/N   V.Common    9-14    -\nRoute 205           Sinnoh  Grass   M/D/N   Horde       8-9     -\nRoute 205           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 205           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 212           Sinnoh  Grass   M/D/N   Uncommon    23-26   -\nRoute 212           Sinnoh  Grass   M/D/N   Horde       22-23   -\nRoute 212           Sinnoh  Water   M/D/N   Uncommon    20-30   -\nRoute 212           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 213           Sinnoh  Grass   M/D/N   V.Common    24-26   -\nRoute 213           Sinnoh  Grass   M/D/N   Horde       22-23   -\nRoute 213           Sinnoh  Water   M/D/N   Common      20-30   -\nRoute 213           Sinnoh  Water   M/D/N   Horde       20-30   -\nRoute 218           Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 218           Sinnoh  Water   M/D/N   V.Common    20-30   -\nRoute 221           Sinnoh  Grass   M/D/N   Uncommon    28      -\nRoute 224           Sinnoh  Grass   M/D/N   Rare        49      -\nValley Windworks    Sinnoh  Grass   M/D/N   V.Common    9-12    -\nValley Windworks    Sinnoh  Water   M/D/N   V.Common    20-30   -\nValley Windworks    Sinnoh  Water   M/D/N   Horde       20-30   -\n```');
  	}
// Pokedex : 423
    if (message.content === '?gastrodon') {
    	message.channel.send('```md\nGastrodon\n> PokeDex Number : 423\n> Egg Group : Water A , Chaos\n> Evolution : Shellos → Gastrodon (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanalave City       Sinnoh  Water   M/D/N   Rare        30-40   -\nFuego Windworks     Sinnoh  Grass   M/D/N   Uncommon    30-31   -\nFuego Windworks     Sinnoh  Water   M/D/N   Rare        30-40   -\nPastoria City       Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 205           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 212           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 213           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 218           Sinnoh  Grass   M/D/N   Uncommon    30      -\nRoute 218           Sinnoh  Water   M/D/N   Rare        30-40   -\nRoute 221           Sinnoh  Grass   M/D/N   Uncommon    30      -\nRoute 221           Sinnoh  Grass   M/D/N   Horde       30      -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommon    40-42   -\nRoute 224           Sinnoh  Grass   M/D/N   Common      52-53   -\nRoute 224           Sinnoh  Grass   M/D/N   Horde       49      -\nRoute 224           Sinnoh  Water   M/D/N   Common      35-55   -\nRoute 230           Sinnoh  Grass   M/D/N   Rare        51      -\nValley Windworks    Sinnoh  Water   M/D/N   Rare        30-40   -\n```');
  	}
// Pokedex : 424
    if (message.content === '?ambipom') {
    	message.channel.send('```md\nAmbipom\n> PokeDex Number : 424\n> Egg Group : Field\n> Evolution : Aipom → Ambipom (Lv.Up + Double Hit)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 425
    if (message.content === '?drifloon') {
    	message.channel.send('```md\nDrifloon\n> PokeDex Number : 425\n> Egg Group : Chaos\n> Evolution : Drifloon → Drifblim (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Shadow  M/D/N   Special     32-33   -\nValley Windworks    Sinnoh  Grass   M/D/N   Uncommon    10      -\n```');
  	}
// Pokedex : 426
    if (message.content === '?drifblim') {
    	message.channel.send('```md\nDrifblim\n> PokeDex Number : 426\n> Egg Group : Chaos\n> Evolution : Drifloon → Drifblim (Lv.28)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Shadow  M/D/N   Special     32-33   -\nGiant Chasm         Unova   Grass   M/D/N   Rare        49      -\nGiant Chasm         Unova   D.Grass M/D/N   Rare        54      -\nRoute 13            Unova   Grass   M/D/N   Uncommon    49      -\nRoute 13            Unova   D.Grass M/D/N   Uncommon    54      -\nRoute 13            Unova   Grass   N       Horde       46-47   -\nRoute 14            Unova   Grass   M/D/N   Uncommon    49      -\nRoute 14            Unova   D.Grass M/D/N   Uncommon    54      -\n```');
  	}
// Pokedex : 427
    if (message.content === '?buneary') {
    	message.channel.send('```md\nBuneary\n> PokeDex Number : 427\n> Egg Group : Field , Humanoid\n> Evolution : Buneary → Lopunny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nEterna Forest       Sinnoh  Grass   M/D/N   Common      11-13   -\nEterna Forest       Sinnoh  Grass   M/D/N   Horde       10      -\n```');
  	}
// Pokedex : 428
    if (message.content === '?lopunny') {
    	message.channel.send('```md\nLopunny\n> PokeDex Number : 428\n> Egg Group : Field , Humanoid\n> Evolution : Buneary → Lopunny (Happiness)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 429
    if (message.content === '?mismagius') {
    	message.channel.send('```md\nMismagius\n> PokeDex Number : 429\n> Egg Group : Chaos\n> Evolution : Misdreavus → Mismagius (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 430
    if (message.content === '?honchkrow') {
    	message.channel.send('```md\nHonchkrow\n> PokeDex Number : 430\n> Egg Group : Flying\n> Evolution : Murkrow → Honchkrow (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Shadow  M/D/N   Special     60-65   -\nAbundant Shrine     Unova   Shadow  M/D/N   Special     32-33   -\nRoute 10            Unova   Shadow  M/D/N   Special     43-44   -\n```');
  	}
// Pokedex : 431
    if (message.content === '?glameow') {
    	message.channel.send('```md\nGlameow\n> PokeDex Number : 431\n> Egg Group : Field\n> Evolution : Glameow → Purugly (Lv.38)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 218           Sinnoh  Grass   M/D/N   Uncommom    29-30   -\nRoute 222           Sinnoh  Grass   M/D/N   Uncommom    40      -\n```');
  	}
// Pokedex : 432
    if (message.content === '?purugly') {
    	message.channel.send('```md\nPurugly\n> PokeDex Number : 432\n> Egg Group : Field\n> Evolution : Glameow → Purugly (Lv.38)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 222           Sinnoh  Grass   M/D/N   Rare        41-42   -\nRoute 229           Sinnoh  Grass   M/D/N   Horde       48-50   -\nRoute 229           Sinnoh  Grass   M/D/N   Uncommom    50      -\n```');
  	}
// Pokedex : 433
    if (message.content === '?chingling') {
    	message.channel.send('```md\nChingling\n> PokeDex Number : 433\n> Egg Group : Cannot Breed\n> Evolution : Chingling → Chimecho (Happiness + Night)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 434
    if (message.content === '?stunky') {
    	message.channel.send('```md\nStunky\n> PokeDex Number : 434\n> Egg Group : Field\n> Evolution : Stunky → Skuntank (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 206           Sinnoh  Grass   M/D/N   Horde       14-16   -\nRoute 206           Sinnoh  Grass   M/D/N   Uncommom    16-18   -\nRoute 208           Sinnoh  Grass   M/D/N   Uncommom    18      -\nRoute 214           Sinnoh  Grass   M/D/N   Uncommom    23-24   -\nRoute 214           Sinnoh  Grass   M/D/N   Horde       21-22   -\nRoute 221           Sinnoh  Grass   M/D/N   Uncommom    28      -\n```');
  	}
// Pokedex : 435
    if (message.content === '?skuntank') {
    	message.channel.send('```md\nSkuntank\n> PokeDex Number : 435\n> Egg Group : Field\n> Evolution : Stunky → Skuntank (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 221           Sinnoh  Grass   M/D/N   Rare        34      -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommom    51      -\n```');
  	}
// Pokedex : 436
    if (message.content === '?bronzor') {
    	message.channel.send('```md\nBronzor\n> PokeDex Number : 436\n> Egg Group : Genderless\n> Evolution : Bronzor → Bronzong (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nMT.Coronet          Sinnoh  Cave    M/D/N   Rare        14-36   -\nMT.Coronet          Sinnoh  Cave    M/D/N   Horde       13-37   -\nRoute 206           Sinnoh  Grass   M/D/N   Uncommom    16-18   -\nRoute 211           Sinnoh  Grass   M/D/N   Uncommom    14-29   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Rare        44-64   -\nWayward Cave        Sinnoh  Cave    M/D/N   Commom      18-20   -\nWayward Cave        Sinnoh  Cave    M/D/N   Horde       14-17   -\n```');
  	}
// Pokedex : 437
    if (message.content === '?bronzong') {
    	message.channel.send('```md\nBronzong\n> PokeDex Number : 437\n> Egg Group : Genderless\n> Evolution : Bronzor → Bronzong (Lv.33)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Sinnoh  Grass   M/D/N   Commom      48-50   -\nAbundant Shrine     Sinnoh  Grass   M/D/N   Horde       46-47   -\nAbundant Shrine     Sinnoh  D.Grass M/D/N   Commom      53-55   -\nMT.Coronet          Sinnoh  Cave    M/D/N   Commom      37-42   -\nMT.Coronet          Sinnoh  Cave    M/D/N   Horde       37      -\nMT.Coronet          Sinnoh  Grass   M/D/N   Rare        39-40   -\nTurnback Cave       Sinnoh  Inside  M/D/N   Uncommom    45-66   -\n```');
  	}
// Pokedex : 438
    if (message.content === '?bonsly') {
    	message.channel.send('```md\nBonsly\n> PokeDex Number : 438\n> Egg Group : Cannot Breed\n> Evolution : Bonsly → Sudowoodo (Lv.Up + Mimic)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 439
    if (message.content === '?mimejr') {
    	message.channel.send('```md\nMime Jr.\n> PokeDex Number : 439\n> Egg Group : Cannot Breed\n> Evolution : Mime Jr. → Mr.Mime (Lv.Up + Mimic)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 440
    if (message.content === '?happiny') {
    	message.channel.send('```md\nHappiny\n> PokeDex Number : 440\n> Egg Group : Cannot Breed\n> Evolution : Happiny → Chansey (Lv.Up+ Hold Ovalstone + Day Time) → Blissey (Happiness)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 441
    if (message.content === '?chatot') {
    	message.channel.send('```md\nChatot\n> PokeDex Number : 441\n> Egg Group : Flying\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 213           Sinnoh  Grass   M/D     Commom      23-25   -\nRoute 213           Sinnoh  Grass   M/D     Horde       22-23   -\nRoute 218           Sinnoh  Grass   M/D     Uncommom    28-30   -\nRoute 222           Sinnoh  Grass   M/D     Rare        38-41   -\nRoute 224           Sinnoh  Grass   M/D     Uncommom    52-54   -\n```');
  	}
// Pokedex : 442
    if (message.content === '?spiritomb') {
    	message.channel.send('```md\nSpiritomb\n> PokeDex Number : 442\n> Egg Group : Chaos\n#Map                Region  Type    Time    Rarity      Level   Item\nTurnback Cave       Sinnoh  Rocks   M/D/N   V.Rare      50-55   -\n```');
  	}
// Pokedex : 443
    if (message.content === '?gible') {
    	message.channel.send('```md\nGible\n> PokeDex Number : 443\n> Egg Group : Monster , Dragon\n> Evolution : Gible → Garbite (Lv.24) → Garchomp (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nWayward Cave        Sinnoh  Cave    M/D/N   Commom      17-20   -\nWayward Cave        Sinnoh  Cave    M/D/N   Horde       15-17   -\n```');
  	}
// Pokedex : 444
    if (message.content === '?gabite') {
    	message.channel.send('```md\nGabite\n> PokeDex Number : 444\n> Egg Group : Monster , Dragon\n> Evolution : Gible → Garbite (Lv.24) → Garchomp (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Sinnoh  Cave    M/D/N   Rare        41-50   -\nVictory Road        Sinnoh  Cave    M/D/N   Horde       47-49   -\n```');
  	}
// Pokedex : 445
    if (message.content === '?garchomp') {
    	message.channel.send('```md\nGarchomp\n> PokeDex Number : 445\n> Egg Group : Monster , Dragon\n> Evolution : Gible → Garbite (Lv.24) → Garchomp (Lv.48)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 446
    if (message.content === '?munchlax') {
    	message.channel.send('```md\nMunchlax\n> PokeDex Number : 446\n> Egg Group : Cannot Breed\n> Evolution : Munchlax → Snorlax (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nHoney Tree          Sinnoh  H.Tree  M/D/N   V.Rare      5-20    -\n```');
  	}
// Pokedex : 447
    if (message.content === '?riolu') {
    	message.channel.send('```md\nRiolu\n> PokeDex Number : 447\n> Egg Group : Cannot Breed\n> Evolution : Riolu → Lucario (Happiness + Day Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave   Unova   Cave    M/D/N   Rare        49-50   -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nIron Island         Sinnoh  Cave    M/D/N   Rare        30      -\n```');
  	}
// Pokedex : 448
    if (message.content === '?lucario') {
    	message.channel.send('```md\nLucario\n> PokeDex Number : 448\n> Egg Group : Field , Humanoid\n> Evolution : Riolu → Lucario (Happiness + Day Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave   Unova   D.Cloud M/D/N   Special     60-65    -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41    -\n```');
  	}
// Pokedex : 449
    if (message.content === '?hippopotas') {
    	message.channel.send('```md\nHippopotas\n> PokeDex Number : 449\n> Egg Group : Field\n> Evolution : Hippopotas → Hippowdon (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nManiac Tunnel       Sinnoh  Cave    M/D/N   Commom      22-26   -\nManiac Tunnel       Sinnoh  Cave    M/D/N   Horde       22-25   -\nRuin Maniac Cave    Sinnoh  Cave    M/D/N   Uncommom    22-25   -\n```');
  	}
// Pokedex : 450
    if (message.content === '?hippowdon') {
    	message.channel.send('```md\nHippowdon\n> PokeDex Number : 450\n> Egg Group : Field\n> Evolution : Hippopotas → Hippowdon (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 228           Sinnoh  Grass   M/D/N   Commom      50-51   -\n```');
  	}
// Pokedex : 451
    if (message.content === '?skorupi') {
    	message.channel.send('```md\nSkorupi\n> PokeDex Number : 451\n> Egg Group : Bug , Water C\n> Evolution : Skorupi → Drapion (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-30   -\n```');
  	}
// Pokedex : 452
    if (message.content === '?drapion') {
    	message.channel.send('```md\nDrapion\n> PokeDex Number : 452\n> Egg Group : Bug , Water C\n> Evolution : Skorupi → Drapion (Lv.40)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 453
    if (message.content === '?croagunk') {
    	message.channel.send('```md\nCroagunk\n> PokeDex Number : 453\n> Egg Group : Humanoid\n> Evolution : Croagunk → Toxicroak (Lv.37)\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-30   -\nRoute 212           Sinnoh  Grass   M/D/N   Rare        24-25   -\n```');
  	}
// Pokedex : 454
    if (message.content === '?toxicroak') {
    	message.channel.send('```md\nToxicroak\n> PokeDex Number : 454\n> Egg Group : Humanoid\n> Evolution : Croagunk → Toxicroak (Lv.37)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 455
    if (message.content === '?carnivine') {
    	message.channel.send('```md\nCarnivine\n> PokeDex Number : 455\n> Egg Group : Plant\n#Map                Region  Type    Time    Rarity      Level   Item\nGreat Marsh         Sinnoh  Inside  M/D/N   V.Rare      27-30   -\n```');
  	}
// Pokedex : 456
    if (message.content === '?finneon') {
    	message.channel.send('```md\nFinneon\n> PokeDex Number : 456\n> Egg Group : Water B\n> Evolution : Finneon → Lumineon (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nP2 Laboratory       Unova   S.Rod   M/D/N   V.Commom    35-55   -\nRoute 17            Unova   S.Rod   M/D/N   V.Commom    35-55   -\nRoute 18            Unova   S.Rod   M/D/N   V.Commom    35-55   -\nCanalave City       Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nFuego Ironworks     Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nIron Island         Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 205           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 218           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 219           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 220           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nRoute 221           Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\nValley Windworks    Sinnoh  G.Rod   M/D/N   V.Commom    10-25   -\n```');
  	}
// Pokedex : 457
    if (message.content === '?lumineon') {
    	message.channel.send('```md\nLumineon\n> PokeDex Number : 457\n> Egg Group : Water B\n> Evolution : Finneon → Lumineon (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nP2 Laboratory       Unova   Fishing M/D/N   Special     35-70   -\nRoute 17            Unova   Fishing M/D/N   Special     55-60   -\nRoute 18            Unova   Fishing M/D/N   Special     55-60   -\nCanalave City       Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nFuego Ironworks     Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nIron Island         Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nRoute 205           Sinnoh  S.Rod   M/D/N   V.Commom    31-50   -\nRoute 218           Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nRoute 219           Sinnoh  S.Rod   M/D/N   Rare        31-35   -\nRoute 219           Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nRoute 220           Sinnoh  S.Rod   M/D/N   Rare        31-55   -\nRoute 220           Sinnoh  S.Rod   M/D/N   Commom      31-55   -\nRoute 221           Sinnoh  S.Rod   M/D/N   Rare        31-55   -\nRoute 221           Sinnoh  S.Rod   M/D/N   V.Commom    31-55   -\nValley Windworks    Sinnoh  S.Rod   M/D/N   V.Commom    31-50   -\n```');
  	}
// Pokedex : 458
    if (message.content === '?mantyke') {
    	message.channel.send('```md\nMantyke\n> PokeDex Number : 458\n> Egg Group : Cannot Breed\n> Evolution : Mantyke → Mantine (Lv.Up + Remoriad In Party)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 459
    if (message.content === '?snover') {
    	message.channel.send('```md\nSnover\n> PokeDex Number : 459\n> Egg Group : Monster , Plant\n> Evolution : Snover → Abomasnow (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nAcuity Lakefront    Sinnoh  Grass   M/D     Horde       32-33   -\nAcuity Lakefront    Sinnoh  Grass   M/D/N   V.Common    32-35   -\nLake Acuity         Sinnoh  Grass   M/D/N   Horde       36-38   -\nLake Acuity         Sinnoh  Grass   M/D/N   V.Common    38-40   -\nMT.Coronet          Sinnoh  Grass   M/D/N   Common      36-38   -\nRoute 216           Sinnoh  Grass   M/D/N   Horde       32-33   -\nRoute 216           Sinnoh  Grass   M/D/N   V.Common    32-35   -\nRoute 217           Sinnoh  Grass   M/D/N   V.Common    32-35   -\nRoute 217           Sinnoh  Grass   M/D/N   Horde       32-33   -\n```');
  	}
// Pokedex : 460
    if (message.content === '?abomasnow') {
    	message.channel.send('```md\nAbomasnow\n> PokeDex Number : 460\n> Egg Group : Monster , Plant\n> Evolution : Snover → Abomasnow (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nMT.Coronet          Sinnoh  Grass   M/D/N   Horde       40      -\nMT.Coronet          Sinnoh  Grass   M/D/N   Common      40      -\n```');
  	}
// Pokedex : 461
    if (message.content === '?weavile') {
    	message.channel.send('```md\nWeavile\n> PokeDex Number : 461\n> Egg Group : Field\n> Evolution : Sneasel → Weavile (Lv.Up + Hold Razor Claw + Night Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Special     37-38   -\nGiant Chasm         Unova   D.Cloud M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 462
    if (message.content === '?magnezone') {
    	message.channel.send('```md\nMagnezone\n> PokeDex Number : 462\n> Egg Group : Genderless\n> Evolution : Magnemite → Magneton (Lv.30) → Magnezone (Lv.Up at Magnetic Field)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 463
    if (message.content === '?lickilicky') {
    	message.channel.send('```md\nLickilicky\n> PokeDex Number : 463\n> Egg Group : Monster\n> Evolution : Lickitung → Lickilicky (Lv.Up + Rollout)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 464
    if (message.content === '?rhyperior') {
    	message.channel.send('```md\nRhyperior\n> PokeDex Number : 464\n> Egg Group : Monster , Field\n> Evolution : Rhyhorn → Rhydon (Lv.42) → Rhyperior (Hold Protector + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 465
    if (message.content === '?tangrowth') {
    	message.channel.send('```md\nTangrowth\n> PokeDex Number : 465\n> Egg Group : Plant\n> Evolution : Tangela → Tangrowth (Lv.Up + AncientPower)\n#Map                Region  Type    Time    Rarity      Level   Item\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\nRoute 13            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 466
    if (message.content === '?electivire') {
    	message.channel.send('```md\nElectivire\n> PokeDex Number : 466\n> Egg Group : Humanoid\n> Evolution : Elekid → Electabuzz (Lv.30) → Electivire (Hold Electirizer + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 467
    if (message.content === '?magmortar') {
    	message.channel.send('```md\nMagmortar\n> PokeDex Number : 467\n> Egg Group : Humanoid\n> Evolution : Magby → Magmar (Lv.30) → Magmortar (Hold Magmarizer + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 468
    if (message.content === '?togekiss') {
    	message.channel.send('```md\nTogekiss\n> PokeDex Number : 468\n> Egg Group : Flying , Fairy\n> Evolution : Togepi → Togetic (Happiness) → Togekiss (Use Shinystone)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 469
    if (message.content === '?yanmega') {
    	message.channel.send('```md\nYanmega\n> PokeDex Number : 469\n> Egg Group : Bug\n> Evolution : Yanma → Yanmega (Lv.Up + AncientPower)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 470
    if (message.content === '?leafeon') {
    	message.channel.send('```md\nLeafeon\n> PokeDex Number : 470\n> Egg Group 1 : Field\n> Evolution 2 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 3 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 4 : Eevee → Flareon (Use Firestone)\n> Evolution 5 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 6 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 7 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 8 : Eevee → Glaceon (Lv.Up near Icy Rock)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 471
    if (message.content === '?glaceon') {
    	message.channel.send('```md\nGlaceon\n> PokeDex Number : 471\n> Egg Group 1 : Field\n> Evolution 2 : Eevee → Vaporeon (Use Waterstone)\n> Evolution 3 : Eevee → Jolteon (Use Thunderstone)\n> Evolution 4 : Eevee → Flareon (Use Firestone)\n> Evolution 5 : Eevee → Espeon (Happiness + Day Time)\n> Evolution 6 : Eevee → Umbreon (Happiness + Night Time)\n> Evolution 7 : Eevee → Leafeon (Lv.Up near Mossy Rock)\n> Evolution 8 : Eevee → Glaceon (Lv.Up near Icy Rock)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 472
    if (message.content === '?gliscor') {
    	message.channel.send('```md\nGliscor\n> PokeDex Number : 472\n> Egg Group : Bug\n> Evolution : Gligar → Gliscor (Lv.Up + Hold Razor Fang + Night Time)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   Grass   M/D/N   Special     60-65   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   Grass   M/D/N   Special     60-65   -\nRoute 15            Unova   Shadow  M/D/N   Special     60-65   -\nVictory Road        Unova   Shadow  M/D/N   Special     45-48   -\n```');
  	}
// Pokedex : 473
    if (message.content === '?mamoswine') {
    	message.channel.send('```md\nMamoswine\n> PokeDex Number : 473\n> Egg Group : Field\n> Evolution : Swinub → Piloswine (Lv.33) → Mamoswine (Lv.Up + AncientPower)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Special     37-38   -\nGiant Chasm         Unova   D.Cloud M/D/N   Special     60-65   -\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 474
    if (message.content === '?porygonz') {
    	message.channel.send('```md\nPorygon-Z\n> PokeDex Number : 474\n> Egg Group : Genderless\n> Evolution : Porygon → Porygon2 (Hold Up-Grade + Trade) → Porygon-Z (Hold Dubious Disc + Trade)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 475
    if (message.content === '?gallade') {
    	message.channel.send('```md\nGallade\n> PokeDex Number : 475\n> Egg Group : Chaos\n> Evolution : Ralts → Kirlia (Lv.20) → Gardevoir (Lv.30)\n> Evolution : Ralts → Kirlia (Lv.20) → Gallade (Use Dawnstone + Male Gender)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 476
    if (message.content === '?probopass') {
    	message.channel.send('```md\nProbopass\n> PokeDex Number : 476\n> Egg Group : Mineral\n> Evolution : Nosepass → Probopass (Lv.Up at Magnetic Field)\n#Map                Region  Type    Time    Rarity      Level   Item\nMT.Coronet          Sinnoh  Rocks   M/D/N   Uncommom    42      -\n```');
  	}
// Pokedex : 477
    if (message.content === '?dusknoir') {
    	message.channel.send('```md\nDusknoir\n> PokeDex Number : 477\n> Egg Group : Chaos\n> Evolution : Duskull → Dusclops (Lv.37) → Dusknoir (Hold Reaper Cloth + Trade)\nNo Wild Locations Found.```');
  	}
// Pokedex : 478
    if (message.content === '?froslass') {
    	message.channel.send('```md\nFroslass\n> PokeDex Number : 478\n> Egg Group : Fairy , Mineral\n> Evolution : Snorunt → Glalie (Lv.42)\n> Evolution : Snorunt → Froslass (Use Dawnstone + Female Gender)\nNo Wild Locations Found.\n```');
  	}
// Pokedex : 479
    if (message.content === '?rotom') {
      message.channel.send('```md\nRotom\n> PokeDex Number : 479\n> Egg Group : Genderless\n#Map                Region  Type    Time    Rarity      Level   Item\nOld Chateau         Sinnoh  Inside  M/D/N   Rare        15      -\n```');
  	}
// Pokedex : 495
    if (message.content === '?snivy') {
    	message.channel.send('```md\nSnivy\n> PokeDex Number : 495\n> Egg Group : Field , Plant\n> Evolution : Snivy → Servine (Lv.17) → Serperior (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare       20      -\n```');
  	}
// Pokedex : 496
    if (message.content === '?servine') {
    	message.channel.send('```md\nServine\n> PokeDex Number : 496\n> Egg Group : Field , Plant\n> Evolution : Snivy → Servine (Lv.17) → Serperior (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 497
    if (message.content === '?serperior') {
    	message.channel.send('```md\nSerperior\n> PokeDex Number : 497\n> Egg Group : Field , Plant\n> Evolution : Snivy → Servine (Lv.17) → Serperior (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 498
    if (message.content === '?tepig') {
    	message.channel.send('```md\nTepig\n> PokeDex Number : 498\n> Egg Group : Field\n> Evolution : Tepig → Pignite (Lv.17) → Emboar (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nTwist Mountain      Unova   Cave    M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 499
    if (message.content === '?pignite') {
    	message.channel.send('```md\nPignite\n> PokeDex Number : 499\n> Egg Group : Field\n> Evolution : Tepig → Pignite (Lv.17) → Emboar (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 500
    if (message.content === '?emboar') {
    	message.channel.send('```md\nEmboar\n> PokeDex Number : 500\n> Egg Group : Field\n> Evolution : Tepig → Pignite (Lv.17) → Emboar (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 501
    if (message.content === '?oshawott') {
    	message.channel.send('```md\nOshawott\n> PokeDex Number : 501\n> Egg Group : Field\n> Evolution : Oshawott → Dewott (Lv.17) → Samurott (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Water   M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 502
    if (message.content === '?dewott') {
    	message.channel.send('```md\nDewott\n> PokeDex Number : 502\n> Egg Group : Field\n> Evolution : Oshawott → Dewott (Lv.17) → Samurott (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 503
    if (message.content === '?samurott') {
    	message.channel.send('```md\nSamurott\n> PokeDex Number : 503\n> Egg Group : Field\n> Evolution : Oshawott → Dewott (Lv.17) → Samurott (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 504
    if (message.content === '?patrat') {
    	message.channel.send('```md\nPatrat\n> PokeDex Number : 504\n> Egg Group : Field\n> Evolution : Patrat → Watchog (Lv.20)\n#Map                Region  Type   	Time    Rarity      Level   Item\nDreamyard           Unova   Grass  	M/D/N   V.Common 	8-11    -\nRoute 1             Unova   Grass  	M/D/N   V.Common 	2-4     -\nRoute 2             Unova   Grass  	M/D/N   V.Common 	4-7     -\nRoute 3             Unova   Grass   M/D/N   Common      8       -\nRoute 3             Unova   D.Grass M/D/N   Common      10      -\n```');
  	}
// Pokedex : 505
    if (message.content === '?watchog') {
    	message.channel.send('```md\nWatchog\n> PokeDex Number : 505\n> Egg Group : Field\n> Evolution : Patrat → Watchog (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/D/N   Uncommon    47      -\nP2 Laboratory       Unova   Grass   M/D/N   V.Common    28-31   -\nRoute 1             Unova   D.Grass M/D/N   V.Common    32-35   -\nRoute 1             Unova   D.Grass M/D/N   Horde       30-32   -\nRoute 7             Unova   Grass   M/D/N   Common      27-29   -\nRoute 7             Unova   Grass   M/D/N   Horde       27-29   -\nRoute 7             Unova   D.Grass M/D/N   Common      31-33   -\nRoute 15            Unova   D.Grass M/D/N   Rare        55      -\nRoute 18            Unova   Grass   M/D/N   Common      28-30   -\nRoute 18            Unova   D.Grass M/D/N   Common      32-34   -\n```');
  	}
// Pokedex : 506
    if (message.content === '?lillipup') {
    	message.channel.send('```md\nLillipup\n> PokeDex Number : 506\n> Egg Group : Field\n> Evolution : Lillipup → Herdier (Lv.16) → Stoutland (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 1             Unova   Grass   M/D/N   V.Common    2-4     -\nRoute 2             Unova   Grass   M/D/N   V.Common    4-7     -\nRoute 3             Unova   Grass   M/D/N   Uncommon    9       -\nRoute 3             Unova   D.Grass M/D/N   Uncommon    11      -\n```');
  	}
// Pokedex : 507
    if (message.content === '?herdier') {
    	message.channel.send('```md\nHerdier\n> PokeDex Number : 507\n> Egg Group : Field\n> Evolution : Lillipup → Herdier (Lv.16) → Stoutland (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   V.Common    21-23   -\nCold Storage        Unova   Grass   M/D/N   Horde       19-20   -\nCold Storage        Unova   D.Grass M/D/N   V.Common    25-27   -\nP2 Laboratory       Unova   Grass   M/D/N   V.Common    28-31   -\nP2 Laboratory       Unova   Grass   M/D/N   Horde       27-28   -\nRoute 1             Unova   D.Grass M/D/N   V.Common    32-34   -\nRoute 10            Unova   Grass   M/D/N   Common      33-34   -\nRoute 10            Unova   D.Grass M/D/N   Common      38-39   -\nRoute 10            Unova   Grass   M/D/N   Horde       32-33   -\nRoute 10            Unova   D.Grass M/D/N   Horde       39      -\n```');
  	}
// Pokedex : 508
    if (message.content === '?stoutland') {
    	message.channel.send('```md\nStoutland\n> PokeDex Number : 508\n> Egg Group : Field\n> Evolution : Lillipup → Herdier (Lv.16) → Stoutland (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Unova   Grass   M/D/N   Special     36-44   -\n```');
  	}
// Pokedex : 509
    if (message.content === '?purrloin') {
    	message.channel.send('```md\nPurrloin\n> PokeDex Number : 509\n> Egg Group : Field\n> Evolution : Purrloin → Liepard (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   Grass   M/D/N   V.Common    8-11    -\nRoute 2             Unova   Grass   M/D/N   V.Common    4-5     -\nRoute 3             Unova   Grass   M/D/N   Common      9       -\nRoute 3             Unova   D.Grass M/D/N   Common      11      -\nRoute 3             Unova   Grass   N       Horde       7-8     -\nRoute 3             Unova   D.Grass N       Horde       8-9     -\n```');
  	}
// Pokedex : 510
    if (message.content === '?liepard') {
    	message.channel.send('```md\nLiepard\n> PokeDex Number : 510\n> Egg Group : Field\n> Evolution : Purrloin → Liepard (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/D/N   Uncommon    47      -\nDreamyard           Unova   D.Grass M/D/N   Horde       46-47   -\nRoute 5             Unova   Grass   M/D/N   Common      20-22   -\nRoute 5             Unova   D.Grass M/D/N   Common      23-25   -\nRoute 5             Unova   D.Grass M/D/N   Horde       23-25   -\nRoute 9             Unova   Grass   M/D/N   Uncommon    33      -\nRoute 9             Unova   D.Grass M/D/N   Uncommon    33      -\nRoute 16            Unova   Grass   M/D/N   Common      20-22   -\nRoute 16            Unova   D.Grass M/D/N   Common      23-25   -\n```');
  	}
// Pokedex : 511
    if (message.content === '?pansage') {
    	message.channel.send('```md\nPansage\n> PokeDex Number : 511\n> Egg Group : Field\n> Evolution : Pansage → Simisage (Use Leafstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare        19-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Rare        32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Rare        14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Rare        22-25   -\n```');
  	}
// Pokedex : 512
    if (message.content === '?simisage') {
    	message.channel.send('```md\nSimisage\n> PokeDex Number : 512\n> Egg Group : Field\n> Evolution : Pansage → Simisage (Use Leafstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 513
    if (message.content === '?pansear') {
    	message.channel.send('```md\nPansear\n> PokeDex Number : 513\n> Egg Group : Field\n> Evolution : Pansear → Simisear (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare        19-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Rare        32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Rare        14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Rare        22-25   -\n```');
  	}
// Pokedex : 514
    if (message.content === '?simisear') {
    	message.channel.send('```md\nSimisear\n> PokeDex Number : 514\n> Egg Group : Field\n> Evolution : Pansear → Simisear (Use Firestone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 515
    if (message.content === '?panpour') {
    	message.channel.send('```md\nPanpour\n> PokeDex Number : 515\n> Egg Group : Field\n> Evolution : Panpour → Simipour (Use Waterstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Rare        19-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Rare        32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Rare        14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Rare        22-25   -\n```');
  	}
// Pokedex : 516
    if (message.content === '?simipour') {
    	message.channel.send('```md\nSimipour\n> PokeDex Number : 516\n> Egg Group : Field\n> Evolution : Panpour → Simipour (Use Waterstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 517
    if (message.content === '?munna') {
    	message.channel.send('```md\nMunna\n> PokeDex Number : 517\n> Egg Group : Field\n> Evolution : Munna → Musharna (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   D.Grass M/D/N   V.Common    48-49   -\nDreamyard           Unova   Grass   M/D/N   V.Common    8-10    -\n```');
  	}
// Pokedex : 518
    if (message.content === '?musharna') {
    	message.channel.send('```md\nMusharna\n> PokeDex Number : 518\n> Egg Group : Field\n> Evolution : Munna → Musharna (Use Moonstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nDreamyard           Unova   Grass   M/D/N   Special     10-12   -\n```');
  	}
// Pokedex : 519
    if (message.content === '?pidove') {
    	message.channel.send('```md\nPidove\n> PokeDex Number : 519\n> Egg Group : Flying\n> Evolution : Pidove → Tranquill (Lv.21) → Unfezant (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    12-16   -\nPinwheel Forest     Unova   Grass   M/D     Horde       10-12   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    14-15   -\nRoute 3             Unova   Grass   M/D/N   V.Common    8-11    -\nRoute 3             Unova   Grass   M/D     Horde       7-8     -\nRoute 3             Unova   D.Grass M/D/N   V.Common    10-13   -\nRoute 3             Unova   D.Grass M/D     Horde       8-9     -\n```');
  	}
// Pokedex : 520
    if (message.content === '?tranquill') {
    	message.channel.send('```md\nTranquill\n> PokeDex Number : 520\n> Egg Group : Flying\n> Evolution : Pidove → Tranquill (Lv.21) → Unfezant (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Uncommon    21-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Uncommon    34-35   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    23-24   -\nRoute 6             Unova   D.Grass M/D/N   Horde       24-26   -\nRoute 12            Unova   Grass   M/D/N   Common      48-50   -\nRoute 12            Unova   D.Grass M/D/N   Common      53-55   -\nRoute 12            Unova   D.Grass M/D/N   Horde       50-52   -\n```');
  	}
// Pokedex : 521
    if (message.content === '?unfezant') {
    	message.channel.send('```md\nUnfezant\n> PokeDex Number : 521\n> Egg Group : Flying\n> Evolution : Pidove → Tranquill (Lv.21) → Unfezant (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Shadow  M/D/N   Special     32-42   -\nRoute 7             Unova   Grass   M/D/N   Special     32      -\nRoute 12            Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 522
    if (message.content === '?blitzle') {
    	message.channel.send('```md\nBlitzle\n> PokeDex Number : 522\n> Egg Group : Field\n> Evolution : Blitzle → Zebstrika (Lv.27)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 3             Unova   Grass   M/D/N   Common      8-11    -\nRoute 3             Unova   D.Grass M/D/N   Common      10-13   -\nRoute 3             Unova   D.Grass M/D/N   Horde       8-9     -\n```');
  	}
// Pokedex : 523
    if (message.content === '?zebstrika') {
    	message.channel.send('```md\nZebstrika\n> PokeDex Number : 523\n> Egg Group : Field\n> Evolution : Blitzle → Zebstrika (Lv.27)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 7             Unova   Grass   M/D/N   Common      27-29   -\nRoute 7             Unova   D.Grass M/D/N   Common      31-33   -\nRoute 7             Unova   D.Grass M/D/N   Horde       28-30   -\n```');
  	}
// Pokedex : 524
    if (message.content === '?roggenrola') {
    	message.channel.send('```md\nRoggenrola\n> PokeDex Number : 524\n> Egg Group : Mineral\n> Evolution : Roggenrola → Boldore (Lv.25) → Gigalith (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nWellspring Cave     Unova   Cave    M/D/N   Common      10-13   -\n```');
  	}
// Pokedex : 525
    if (message.content === '?boldore') {
    	message.channel.send('```md\nBoldore\n> PokeDex Number : 525\n> Egg Group : Mineral\n> Evolution : Roggenrola → Boldore (Lv.25) → Gigalith (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave   Unova   Cave    M/D/N   Uncommon    48      -\nChallengers Cave   Unova   Cave    M/D/N   Horde       46-47   -\nChargestone Cave    Unova   Cave    M/D/N   Uncommon    24      -\nGiant Chasm         Unova   Cave    M/D/N   Rare        49      -\nGuidance Chamber    Unova   Cave    M/D/N   V.Common    28-31   -\nMistralton Cave     Unova   Cave    M/D/N   V.Common    28-31   -\nMistralton Cave     Unova   Cave    M/D/N   Horde       26-28   -\nTrial Chamber       Unova   Cave    M/D/N   V.Common    39-41   -\nTwist Mountain      Unova   Cave    M/D/N   Common      29-30   -\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\nVictory Road        Unova   Cave    M/D/N   V.Common    37-41   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\nWellspring Cave     Unova   Cave    M/D/N   V.Common    28-31   -\nWellspring Cave     Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 526
    if (message.content === '?gigalith') {
    	message.channel.send('```md\nGigalith\n> PokeDex Number : 526\n> Egg Group : Mineral\n> Evolution : Roggenrola → Boldore (Lv.25) → Gigalith (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Unova   D.Cloud M/D/N   Special     45-48   -\n```');
  	}
// Pokedex : 527
    if (message.content === '?woobat') {
    	message.channel.send('```md\nWoobat\n> PokeDex Number : 527\n> Egg Group : Flying , Field\n> Evolution : Woobat → Swoobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave    Unova   Cave    M/D/N   Common      47      -\nGuidance Chamber    Unova   Cave    M/D/N   V.Common    28-30   -\nGuidance Chamber    Unova   Cave    M/D/N   Horde       26-28   -\nMistralton Cave     Unova   Cave    M/D/N   V.Common    28-30   -\nMistralton Cave     Unova   Cave    M/D/N   Horde       26-28   -\nTrial Chamber       Unova   Cave    M/D/N   Common      39-42   -\nTrial Chamber       Unova   Cave    M/D/N   Horde       37-39   -\nTwist Mountain      Unova   Cave    M/D/N   Uncommon    28-30   -\nVictory Road        Unova   Cave    M/D/N   Common      37-42   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\nWellspring Cave     Unova   Cave    M/D/N   V.Common    10-31   -\nWellspring Cave     Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 528
    if (message.content === '?swoobat') {
    	message.channel.send('```md\nSwoobat\n> PokeDex Number : 528\n> Egg Group : Flying , Field\n> Evolution : Woobat → Swoobat (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nWellspring Cave     Unova   D.Cloud M/D/N   Special     12-15   -\n```');
  	}
// Pokedex : 529
    if (message.content === '?drillbur') {
    	message.channel.send('```md\nDrillbur\n> PokeDex Number : 529\n> Egg Group : Field\n> Evolution : Drillbur → Excadrill (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   D.Cloud M/D/N   Special     30-31   -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41   -\nMistralton Cave     Unova   D.Cloud M/D/N   Special     35-40   -\nTwist Mountain      Unova   D.Cloud M/D/N   Special     33-34   -\nWellspring Cave     Unova   D.Cloud M/D/N   Special     10-15   -\n```');
  	}
// Pokedex : 530
    if (message.content === '?excadrill') {
    	message.channel.send('```md\nExcadrill\n> PokeDex Number : 530\n> Egg Group : Field\n> Evolution : Drillbur → Excadrill (Lv.31)\n#Map                Region  Type    Time    Rarity      Level   Item\nChallengers Cave    Unova   D.Cloud M/D/N   Special     60-65   -\nChargestone Cave    Unova   D.Cloud M/D/N   Special     31      -\nGiant Chasm         Unova   D.Cloud M/D/N   Special     57-65   -\nGuidance Chamber    Unova   D.Cloud M/D/N   Special     36-41   -\nMistralton Cave     Unova   D.Cloud M/D/N   Special     35-40   -\nTrial Chamber       Unova   D.Cloud M/D/N   Special     39-42   -\nTwist Mountain      Unova   D.Cloud M/D/N   Special     33-34   -\nVictory Road        Unova   D.Cloud M/D/N   Special     45-48   -\n```');
  	}
// Pokedex : 531
    if (message.content === '?audino') {
    	message.channel.send('```md\nAudino\n> PokeDex Number : 531\n> Egg Group : Fairy\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Special     28-29   -\nDreamyard           Unova   Grass   M/D/N   Special     10-12   -\nP2 Laboratory       Unova   Grass   M/D/N   Special     36-38   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nRoute 1             Unova   Grass   M/D/N   Special     3-4     -\nRoute 2             Unova   Grass   M/D/N   Special     6-7     -\nRoute 3             Unova   Grass   M/D/N   Special     12-14   -\nRoute 5             Unova   Grass   M/D/N   Special     23-25   -\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\nRoute 7             Unova   Grass   M/D/N   Special     31-32   -\nRoute 10            Unova   Grass   M/D/N   Special     33-36   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\nRoute 18            Unova   Grass   M/D/N   Special     38-40   -\n```');
  	}
// Pokedex : 532
    if (message.content === '?timburr') {
    	message.channel.send('```md\nTimburr\n> PokeDex Number : 532\n> Egg Group : Humanoid\n> Evolution : Timburr → Gurdurr (Lv.25) → Conkeldurr (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   D.Grass M/D/N   Horde       23-24   -\nCold Storage        Unova   Grass   M/D/N   Uncommon    21-22   -\nCold Storage        Unova   D.Grass M/D/N   Uncommon    25-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    13-14   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    15-16   -\nPinwheel Forest     Unova   D.Grass M/D/N   Horde       12-14   -\n```');
  	}
// Pokedex : 533
    if (message.content === '?gurdurr') {
    	message.channel.send('```md\nGurdurr\n> PokeDex Number : 533\n> Egg Group : Humanoid\n> Evolution : Timburr → Gurdurr (Lv.25) → Conkeldurr (Trade)\n#Map                Region  Type    Time    Rarity      Level   Item\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\nTwist Mountain      Unova   Cave    M/D/N   Uncommon    29      -\n```');
  	}
// Pokedex : 534
    if (message.content === '?conkeldurr') {
    	message.channel.send('```md\nConkeldurr\n> PokeDex Number : 534\n> Egg Group : Humanoid\n> Evolution : Timburr → Gurdurr (Lv.25) → Conkeldurr (Trade)\nNo wild location found.\n```');
  	}
// Pokedex : 535
    if (message.content === '?tympole') {
    	message.channel.send('```md\nTympole\n> PokeDex Number : 535\n> Egg Group : Water A\n> Evolution : Tympole → Palpitoad (Lv.25) → Seismitoad (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   Common      12-15   -\nPinwheel Forest     Unova   Grass   M/D/N   Horde       10-12   -\nPinwheel Forest     Unova   D.Grass M/D/N   Common      14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Horde       12-14   -\n```');
  	}
// Pokedex : 536
    if (message.content === '?palpitoad') {
    	message.channel.send('```md\nPalpitoad\n> PokeDex Number : 536\n> Egg Group : Water A\n> Evolution : Tympole → Palpitoad (Lv.25) → Seismitoad (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Grass   M/D/N   V.Common    30-33   -\nMoor of Icirrus     Unova   Grass   M/D/N   V.Common    30-33   -\nMoor of Icirrus     Unova   Grass   M/D/N   Horde       28-30   -\nRoute 8             Unova   Grass   M/D/N   V.Common    30-33   -\nRoute 8             Unova   Grass   M/D/N   Horde       28-30   -\n```');
  	}
// Pokedex : 537
    if (message.content === '?seismitoad') {
    	message.channel.send('```md\nSeismitoad\n> PokeDex Number : 537\n> Egg Group : Water A\n> Evolution : Tympole → Palpitoad (Lv.25) → Seismitoad (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Water   M/D/N   Special     36-40   -\nMoor of Icirrus     Unova   Water   M/D/N   Special     39-40   -\nRoute 8             Unova   Water   M/D/N   Special     39-40   -\n```');
  	}
// Pokedex : 538
    if (message.content === '?throh') {
    	message.channel.send('```md\nThroh\n> PokeDex Number : 538\n> Egg Group : Humanoid\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   V.Rare      12-15   -\nPinwheel Forest     Unova   D.Grass M/D/N   V.Rare      14-17   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nRoute 10            Unova   Grass   M/D/N   Rare        33-36   -\nRoute 10            Unova   D.Grass M/D/N   Rare        38-41   -\nRoute 10            Unova   Grass   M/D/N   Special     36      -\nRoute 15            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 15            Unova   Grass   M/D/N   Common      48-49   -\nRoute 15            Unova   D.Grass M/D/N   Common      53-54   -\nRoute 18            Unova   Grass   M/D/N   Uncommon    29-31   -\nRoute 18            Unova   Grass   M/D     Horde       27-28   -\nRoute 18            Unova   D.Grass M/D/N   Uncommon    33-35   -\n```');
  	}
// Pokedex : 539
    if (message.content === '?sawk') {
    	message.channel.send('```md\nSawk\n> PokeDex Number : 539\n> Egg Group : Humanoid\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   V.Rare      12-15   -\nPinwheel Forest     Unova   D.Grass M/D/N   V.Rare      14-17   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     13-15   -\nRoute 10            Unova   Grass   M/D/N   Rare        33-36   -\nRoute 10            Unova   D.Grass M/D/N   Rare        38-41   -\nRoute 15            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 15            Unova   Grass   M/D/N   Common      48-49   -\nRoute 15            Unova   D.Grass M/D/N   Common      53-54   -\nRoute 18            Unova   Grass   M/D/N   Uncommon    29-31   -\nRoute 18            Unova   Grass   M/D     Horde       27-28   -\nRoute 18            Unova   D.Grass M/D/N   Uncommon    33-35   -\n```');
  	}
// Pokedex : 540
    if (message.content === '?sewaddle') {
    	message.channel.send('```md\nSewaddle\n> PokeDex Number : 540\n> Egg Group : Bug\n> Evolution : Sewaddle → Swadloon (Lv.20) → Leavanny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   Grass   M/D/N   Common      14-17   -\nPinwheel Forest     Unova   Grass   M/D     Horde       13-14   -\n```');
  	}
// Pokedex : 541
    if (message.content === '?swadloon') {
    	message.channel.send('```md\nSwadloon\n> PokeDex Number : 541\n> Egg Group : Bug\n> Evolution : Sewaddle → Swadloon (Lv.20) → Leavanny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Common      20-22   -\nLostlorn Forest     Unova   D.Grass M/D/N   Common      33-35   -\nLostlorn Forest     Unova   D.Grass M/D/N   Horde       31-32   -\nPinwheel Forest     Unova   D.Grass M/D/N   Common      22-25   -\nRoute 6             Unova   Grass   M/D/N   Uncommon    23      -\nRoute 6             Unova   D.Grass M/D/N   Uncommon    27      -\n```');
  	}
// Pokedex : 542
    if (message.content === '?leavanny') {
    	message.channel.send('```md\nLeavanny\n> PokeDex Number : 542\n> Egg Group : Bug\n> Evolution : Sewaddle → Swadloon (Lv.20) → Leavanny (Happiness)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\n```');
  	}
// Pokedex : 543
    if (message.content === '?venipede') {
    	message.channel.send('```md\nVenipede\n> PokeDex Number : 543\n> Egg Group : Bug\n> Evolution : Venipede → Whirlipede (Lv.22) → Scolipede (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   M/D/N   V.Common    20-21   -\nLostlorn Forest     Unova   Grass   M/D/N   Horde       18-19   -\nLostlorn Forest     Unova   D.Grass M/D/N   V.Common    33-34   -\nPinwheel Forest     Unova   Grass   M/D/N   V.Common    15-16   -\nPinwheel Forest     Unova   Grass   N       Horde       13-14   -\n```');
  	}
// Pokedex : 544
    if (message.content === '?whirlipde') {
    	message.channel.send('```md\nWhirlipede\n> PokeDex Number : 544\n> Egg Group : Bug\n> Evolution : Venipede → Whirlipede (Lv.22) → Scolipede (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nPinwheel Forest     Unova   D.Grass M/D/N   V.Common    23-24   -\nPinwheel Forest     Unova   D.Grass N       Horde       22      -\n```');
  	}
// Pokedex : 545
    if (message.content === '?scolipede') {
    	message.channel.send('```md\nScolipede\n> PokeDex Number : 545\n> Egg Group : Bug\n> Evolution : Venipede → Whirlipede (Lv.22) → Scolipede (Lv.30)\nNo wild location found.\n```');
  	}
// Pokedex : 546
    if (message.content === '?cottonee') {
    	message.channel.send('```md\nCottonee\n> PokeDex Number : 546\n> Egg Group : Plant , Fairy\n> Evolution : Cottonee → Whimsicott (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Common      48      -\nAbundant Shrine     Unova   D.Grass M/D/N   Common      53      -\nLostlorn Forest     Unova   Grass   M/D/N   Uncommon    19-22   -\nLostlorn Forest     Unova   Grass   M/D     Horde       18-19   -\nLostlorn Forest     Unova   D.Grass M/D/N   Uncommon    32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    22-25   -\nPinwheel Forest     Unova   D.Grass M/D     Horde       20-22   -\n```');
  	}
// Pokedex : 547
    if (message.content === '?whimsicott') {
    	message.channel.send('```md\nWhimsicott\n> PokeDex Number : 547\n> Egg Group : Plant , Fairy\n> Evolution : Cottonee → Whimsicott (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 548
    if (message.content === '?petilil') {
    	message.channel.send('```md\nPetilil\n> PokeDex Number : 548\n> Egg Group : Plant\n> Evolution : Petilil → Lilligant (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Common      48      -\nAbundant Shrine     Unova   D.Grass M/D/N   Common      53      -\nLostlorn Forest     Unova   Grass   M/D/N   Uncommon    19-22   -\nLostlorn Forest     Unova   Grass   M/D     Horde       18-19   -\nLostlorn Forest     Unova   D.Grass M/D/N   Uncommon    32-35   -\nPinwheel Forest     Unova   Grass   M/D/N   Uncommon    14-17   -\nPinwheel Forest     Unova   D.Grass M/D/N   Uncommon    22-25   -\nPinwheel Forest     Unova   D.Grass M/D     Horde       20-22   -\n```');
  	}
// Pokedex : 549
    if (message.content === '?lilligant') {
    	message.channel.send('```md\nLilligant\n> PokeDex Number : 549\n> Egg Group : Plant\n> Evolution : Petilil → Lilligant (Use Sunstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nPinwheel Forest     Unova   Grass   M/D/N   Special     17-19   -\n```');
  	}
// Pokedex : 550
    if (message.content === '?basculin') {
    	message.channel.send('```md\nBasculin\n> PokeDex Number : 550\n> Egg Group : Water B\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Water   D/M/N   V.Common    35-55   -\nAbundant Shrine     Unova   S.Rod   D/M/N   V.Common    35-55   -\nAbundant Shrine     Unova   Water   D/M/N   Special     60-65   -\nAbundant Shrine     Unova   Fishing D/M/N   Special     60-65   -\nChallengers Cave    Unova   Water   D/M/N   V.Common    35-55   -\nChallengers Cave    Unova   Water   D/M/N   Horde       35-55   -\nChallengers Cave    Unova   S.Rod   D/M/N   V.Common    35-55   -\nChallengers Cave    Unova   Water   D/M/N   Special     60-65   -\nChallengers Cave    Unova   Fishing D/M/N   Special     55-60   -\nDragonspiral Tower  Unova   Water   D/M/N   V.Common    25-35   -\nDragonspiral Tower  Unova   Water   D/M/N   Horde       25-35   -\nDragonspiral Tower  Unova   S.Rod   D/M/N   V.Common    35-55   -\nDragonspiral Tower  Unova   Water   D/M/N   Special     39-40   -\nDragonspiral Tower  Unova   Fishing D/M/N   Special     55-60   -\n```');
    	message.channel.send('```md\nGiant Chasm         Unova   S.Rod   D/M/N   V.Common    35-55   -\nGiant Chasm         Unova   Water   D/M/N   Special     45-60   -\nGiant Chasm         Unova   Fishing D/M/N   Special     35-60   -\nGiant Chasm         Unova   Water   D/M/N   V.Common    35-55   -\nLostlorn Forest     Unova   Water   D/M/N   V.Common    25-35   -\nLostlorn Forest     Unova   Water   D/M/N   Horde       25-35   -\nLostlorn Forest     Unova   S.Rod   D/M/N   V.Common    35-55   -\nLostlorn Forest     Unova   Water   D/M/N   Special     10-20   -\nLostlorn Forest     Unova   Fishing D/M/N   Special     35-60   -\nPinwheel Forest     Unova   Water   D/M/N   V.Common    25-35   -\nPinwheel Forest     Unova   Water   D/M/N   Horde       25-35   -\nPinwheel Forest     Unova   S.Rod   D/M/N   V.Common    35-55   -\nPinwheel Forest     Unova   Water   D/M/N   Special     30-40   -\nPinwheel Forest     Unova   Fishing D/M/N   Special     55-60   -\n```');
    	message.channel.send('```md\nRoute 1             Unova   Water   D/M/N   V.Common    25-35   -\nRoute 1             Unova   Water   D/M/N   Horde       25-35   -\nRoute 1             Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 1             Unova   Water   D/M/N   Special     30-40   -\nRoute 1             Unova   Fishing D/M/N   Special     55-60   -\nRoute 3             Unova   Water   D/M/N   V.Common    25-35   -\nRoute 3             Unova   Water   D/M/N   Horde       25-35   -\nRoute 3             Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 3             Unova   Water   D/M/N   Special     30-40   -\nRoute 3             Unova   Fishing D/M/N   Special     55-60   -\nRoute 6             Unova   Water   D/M/N   V.Common    25-35   -\nRoute 6             Unova   Water   D/M/N   Horde       25-35   -\nRoute 6             Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 6             Unova   Water   D/M/N   Special     30-40   -\nRoute 6             Unova   Fishing D/M/N   Special     55-60   -\nRoute 11            Unova   Water   D/M/N   V.Common    35-55   -\nRoute 11            Unova   Water   D/M/N   Horde       35-55   -\nRoute 11            Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 11            Unova   Water   D/M/N   Special     60-65   -\nRoute 11            Unova   Fishing D/M/N   Special     55-60   -\nRoute 14            Unova   Water   D/M/N   V.Common    35-55   -\nRoute 14            Unova   Water   D/M/N   Horde       35-55   -\nRoute 14            Unova   S.Rod   D/M/N   V.Common    35-55   -\nRoute 14            Unova   Water   D/M/N   Special     60-65   -\nRoute 14            Unova   Fishing D/M/N   Special     55-60   -\n```');
    	message.channel.send('```md\nStrialton City      Unova   Water   D/M/N   V.Common    25-35   -\nStrialton City      Unova   Water   D/M/N   Horde       25-35   -\nStrialton City      Unova   S.Rod   D/M/N   V.Common    35-55   -\nStrialton City      Unova   Water   D/M/N   Special     30-40   -\nStrialton City      Unova   Fishing D/M/N   Special     55-60   -\nVictory Road        Unova   Water   D/M/N   V.Common    35-55   -\nVictory Road        Unova   Water   D/M/N   Horde       35-55   -\nVictory Road        Unova   S.Rod   D/M/N   V.Common    35-55   -\nVictory Road        Unova   Water   D/M/N   Special     45-48   -\nVictory Road        Unova   Fishing D/M/N   Special     55-60   -\nVillage Bridge      Unova   Water   D/M/N   V.Common    35-55   -\nVillage Bridge      Unova   Water   D/M/N   Horde       35-55   -\nVillage Bridge      Unova   S.Rod   D/M/N   V.Common    35-55   -\nVillage Bridge      Unova   Water   D/M/N   Special     60-65   -\nVillage Bridge      Unova   Fishing D/M/N   Special     60-65   -\nWellspring Cave     Unova   Water   D/M/N   V.Common    25-35   -\nWellspring Cave     Unova   Water   D/M/N   Horde       25-35   -\nWellspring Cave     Unova   S.Rod   D/M/N   V.Common    35-55   -\nWellspring Cave     Unova   Water   D/M/N   Special     10-40   -\nWellspring Cave     Unova   Fishing D/M/N   Special     35-60   -\n```');
    }
// Pokedex : 551
    if (message.content === '?sandile') {
    	message.channel.send('```md\nSandile\n> PokeDex Number : 551\n> Egg Group : Field\n> Evolution : Sandile → Krokorok (Lv.29) → Krookodile (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   D/M/N   V.Common    19-22   -\nDesert Resort       Unova   Grass   D/M/N   Horde       17-19   -\nRelic Castle        Unova   Cave    D/M/N   V.Rare      19-22   -\nRelic Castle        Unova   Cave    D/M/N   Horde       18-19   -\nRoute 4             Unova   Grass   D/M/N   V.Common    15-18   -\n```');
  	}
// Pokedex : 552
    if (message.content === '?krokorok') {
    	message.channel.send('```md\nKrokorok\n> PokeDex Number : 552\n> Egg Group : Field\n> Evolution : Sandile → Krokorok (Lv.29) → Krookodile (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   V.Common    34-50   -\nRelic Castle        Unova   Cave    M/D/N   Horde       32-47   -\n```');
  	}
// Pokedex : 553
    if (message.content === '?krokodile') {
    	message.channel.send('```md\nKrokodile\n> PokeDex Number : 553\n> Egg Group : Field\n> Evolution : Sandile → Krokorok (Lv.29) → Krookodile (Lv.40)\nNo wild location found.\n```');
  	}
// Pokedex : 554
    if (message.content === '?darumaka') {
    	message.channel.send('```md\nDarumaka\n> PokeDex Number : 554\n> Egg Group : Field\n> Evolution : Darumaka → Darmanitan (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   V.Common    19-20   -\nDesert Resort       Unova   Grass   M/D/N   Horde       17-19   -\nRoute 4             Unova   Grass   M/D/N   V.Common    15-18   -\nRoute 4             Unova   Grass   M/D/N   Horde       14-15   -\n```');
  	}
// Pokedex : 555
    if (message.content === '?darmanitan') {
    	message.channel.send('```md\nDarmanitan\n> PokeDex Number : 555\n> Egg Group : Field\n> Evolution : Darumaka → Darmanitan (Lv.35)\nNo wild location found.\n```');
  	}
// Pokedex : 556
    if (message.content === '?maractus') {
    	message.channel.send('```md\nMaractus\n> PokeDex Number : 556\n> Egg Group : Plant\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   Uncommon    20      -\nDesert Resort       Unova   Grass   N       Horde       17-19   -\n```');
  	}
// Pokedex : 557
    if (message.content === '?dwebble') {
    	message.channel.send('```md\nDwebble\n> PokeDex Number : 557\n> Egg Group : Bug\n> Evolution : Dwebble → Crustle (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   Uncommon    20-22   -\nRoute 18            Unova   Grass   M/D/N   Common      30-31   -\n```');
  	}
// Pokedex : 558
    if (message.content === '?crustle') {
    	message.channel.send('```md\nCrustle\n> PokeDex Number : 558\n> Egg Group : Bug\n> Evolution : Dwebble → Crustle (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 18            Unova   D.Grass M/D/N   Common      34-35   -\nRoute 18            Unova   D.Grass M/D/N   Horde       34      -\n```');
  	}
// Pokedex : 559
    if (message.content === '?scraggy') {
    	message.channel.send('```md\nScraggy\n> PokeDex Number : 559\n> Egg Group : Field , Dragon\n> Evolution : Scraggy → Scrafty (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Grass   M/D/N   V.Common    20      -\nP2 Laboratory       Unova   Grass   M/D/N   Common      29-31   -\nRoute 1             Unova   D.Grass M/D/N   V.Common    32-35   -\nRoute 1             Unova   Grass   M/D/N   Special     3-4     -\nRoute 4             Unova   Grass   M/D/N   V.Common    16-17   -\nRoute 18            Unova   Grass   M/D/N   V.Common    28-31   -\nRoute 18            Unova   Grass   M/D/N   Horde       27-28   -\nRoute 18            Unova   D.Grass M/D/N   V.Common    32-35   -\n```');
  	}
// Pokedex : 560
    if (message.content === '?scrafty') {
    	message.channel.send('```md\nScrafty\n> PokeDex Number : 560\n> Egg Group : Field , Dragon\n> Evolution : Scraggy → Scrafty (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 18            Unova   Grass   M/D/N   Special     39-40   -\n```');
  	}
// Pokedex : 561
    if (message.content === '?sigilyph') {
    	message.channel.send('```md\nSigilyph\n> PokeDex Number : 561\n> Egg Group : Flying\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Shadow  M/D/N   Special     22-24   -\nDesert Resort       Unova   Grass   M/D/N   Rare        20      -\nDesert Resort       Unova   Grass   M/D/N   Horde       17-19   -\nRoute 4             Unova   Shadow  M/D/N   Special     19-21   -\n```');
  	}
// Pokedex : 562
    if (message.content === '?yamask') {
    	message.channel.send('```md\nYamask\n> PokeDex Number : 562\n> Egg Group : Mineral , Chaos\n> Evolution : Yamask → Cofagrigus (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   Rare        19-22   -\nRelic Castle        Unova   Cave    M/D/N   Horde       18-19   -\n```');
  	}
// Pokedex : 563
    if (message.content === '?cofagrigus') {
    	message.channel.send('```md\nCofagrigus\n> PokeDex Number : 563\n> Egg Group : Mineral , Chaos\n> Evolution : Yamask → Cofagrigus (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   V.Common    34-49   -\nRelic Castle        Unova   Cave    M/D/N   Horde       34-47   -\n```');
  	}
// Pokedex : 564
    if (message.content === '?tirtouga') {
    	message.channel.send('```md\nTirtouga\n> PokeDex Number : 564\n> Egg Group : Water A , Water C\n> Evolution : Tirtouga → Carracosta (Lv.37)\nNo wild location found.\n```');
  	}
// Pokedex : 565
    if (message.content === '?carracosta') {
    	message.channel.send('```md\nCarracosta\n> PokeDex Number : 565\n> Egg Group : Water A , Water C\n> Evolution : Tirtouga → Carracosta (Lv.37)\nNo wild location found.\n```');
  	}
// Pokedex : 566
    if (message.content === '?archen') {
    	message.channel.send('```md\nArchen\n> PokeDex Number : 566\n> Egg Group : Flying , Water C\n> Evolution : Archen → Archeops (Level 37)\nNo wild location found.\n```');
  	}
// Pokedex : 567
    if (message.content === '?archeops') {
    	message.channel.send('```md\nArcheops\n> PokeDex Number : 567\n> Egg Group : Flying , Water C\n> Evolution : Archen → Archeops (Lv.37)\nNo wild location found.\n```');
  	}
// Pokedex : 568
    if (message.content === '?trubbish') {
    	message.channel.send('```md\nTrubbish\n> PokeDex Number : 568\n> Egg Group : Mineral\n> Evolution : Trubbish → Garbodor (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Unova   Grass   M/D/N   Common      19-21   -\nRoute 5             Unova   D.Grass M/D/N   Common      22-24   -\nRoute 16            Unova   Grass   M/D/N   Common      19-21   -\nRoute 16            Unova   D.Grass M/D/N   Common      22-24   -\nRoute 16            Unova   D.Grass M/D/N   Horde       21-22   -\n```');
  	}
// Pokedex : 569
    if (message.content === '?garbodor') {
    	message.channel.send('```md\nGarbodor\n> PokeDex Number : 569\n> Egg Group : Mineral\n> Evolution : Trubbish → Garbodor (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Uncommon    31-33   -\nRoute 9             Unova   D.Grass M/D/N   Uncommon    31-33   -\n```');
  	}
// Pokedex : 570
    if (message.content === '?zorua') {
    	message.channel.send('```md\nZorua\n> PokeDex Number : 570\n> Egg Group : Field\n> Evolution : Zorua → Zoroark (Lv.30)\n#Map                Region  Type    Time    Rarity      Level   Item\nLostlorn Forest     Unova   Grass   D       Horde       18-19   -\n```');
  	}
// Pokedex : 571
    if (message.content === '?zoroark') {
    	message.channel.send('```md\nZoroark\n> PokeDex Number : 571\n> Egg Group : Field\n> Evolution : Zorua → Zoroark (Lv.30)\nNo wild location found.\n```');
  	}
// Pokedex : 572
    if (message.content === '?minccino') {
    	message.channel.send('```md\nMinccino\n> PokeDex Number : 572\n> Egg Group : Field\n> Evolution : Minccino → Cinccino (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Uncommon    20      -\nCold Storage        Unova   D.Grass M/D/N   Uncommon    24      -\nRoute 5             Unova   Grass   M/D/N   V.Common    19-22   -\nRoute 5             Unova   Grass   M/D/N   Horde       18-19   -\nRoute 5             Unova   D.Grass M/D/N   V.Common    22-25   -\nRoute 9             Unova   Grass   M/D/N   Common      32      -\nRoute 9             Unova   D.Grass M/D/N   Common      32      -\nRoute 16            Unova   Grass   M/D/N   V.Common    19-22   -\nRoute 16            Unova   D.Grass M/D/N   V.Common    22-25   -\nRoute 16            Unova   D.Grass M/D/N   Horde       21-22   -\n```');
  	}
// Pokedex : 573
    if (message.content === '?cinccino') {
    	message.channel.send('```md\nCinccino\n> PokeDex Number : 573\n> Egg Group : Field\n> Evolution : Minccino → Cinccino (Use Shinystone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Special     28-29   -\nRoute 5             Unova   Grass   M/D/N   Special     23-25   -\nRoute 9             Unova   Grass   M/D/N   Special     41-42   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\n```');
  	}
// Pokedex : 574
    if (message.content === '?gothita') {
    	message.channel.send('```md\nGothita\n> PokeDex Number : 574\n> Egg Group : Humanoid\n> Evolution : Gothita → Gothorita (Lv.32) → Gothitelle (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Unova   Grass   M/D/N   Common      19-22   -\nRoute 5             Unova   D.Grass M/D/N   Common      22-25   -\nRoute 16            Unova   Grass   M/D/N   Common      19-22   -\nRoute 16            Unova   Grass   M/D/N   Horde       18-19   -\nRoute 16            Unova   D.Grass M/D/N   Common      22-25   -\n```');
  	}
// Pokedex : 575
    if (message.content === '?gothorita') {
    	message.channel.send('```md\nGothorita\n> PokeDex Number : 575\n> Egg Group : Humanoid\n> Evolution : Gothita → Gothorita (Lv.32) → Gothitelle (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Common      32-34   -\nRoute 9             Unova   D.Grass M/D/N   Common      32-34   -\nRoute 9             Unova   D.Grass M/D/N   Horde       32      -\n```');
  	}
// Pokedex : 576
    if (message.content === '?gothitelle') {
    	message.channel.send('```md\nGothitelle\n> PokeDex Number : 576\n> Egg Group : Humanoid\n> Evolution : Gothita → Gothorita (Lv.32) → Gothitelle (Lv.41)\nNo wild location found.\n```');
  	}
// Pokedex : 577
    if (message.content === '?solosis') {
    	message.channel.send('```md\nSolosis\n> PokeDex Number : 577\n> Egg Group : Chaos\n> Evolution : Solosis → Duosion (Lv.32) → Reuniclus (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Unova   Grass   M/D/N   Common      19-22   -\nRoute 5             Unova   D.Grass M/D/N   Common      22-25   -\nRoute 16            Unova   Grass   M/D/N   Common      19-22   -\nRoute 16            Unova   Grass   M/D/N   Horde       19      -\nRoute 16            Unova   D.Grass M/D/N   Common      22-25   -\n```');
  	}
// Pokedex : 578
    if (message.content === '?duosion') {
    	message.channel.send('```md\nDuosion\n> PokeDex Number : 578\n> Egg Group : Chaos\n> Evolution : Solosis → Duosion (Lv.32) → Reuniclus (Lv.41)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Common      32-34   -\nRoute 9             Unova   D.Grass M/D/N   Common      32-34   -\nRoute 9             Unova   Grass   M/D/N   Horde       32      -\n```');
  	}
// Pokedex : 579
    if (message.content === '?reuniclus') {
    	message.channel.send('```md\nReuniclus\n> PokeDex Number : 579\n> Egg Group : Chaos\n> Evolution : Solosis → Duosion (Lv.32) → Reuniclus (Lv.41)\nNo wild location found.\n```');
  	}
// Pokedex : 580
    if (message.content === '?ducklett') {
    	message.channel.send('```md\nDucklett\n> PokeDex Number : 580\n> Egg Group : Water A , Flying\n> Evolution : Ducklett → Swanna (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Shadow  M/D/N   Special     29-30   -\nCold Storage        Unova   Shadow  M/D/N   Special     28-29   -\nDriftveil D.Bridge  Unova   Shadow  M/D/N   Special     27-28   -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 3             Unova   Shadow  M/D/N   Special     12-14   -\nRoute 6             Unova   Shadow  M/D/N   Special     29-30   -\nTwist Mountain      Uonva   Shadow  M/D/N   Special     33-34   -\n```');
  	}
// Pokedex : 581
    if (message.content === '?swanna') {
    	message.channel.send('```md\nSwanna\n> PokeDex Number : 581\n> Egg Group : Water A , Flying\n> Evolution : Ducklett → Swanna (Lv.35)\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Shadow  M/D/N   Special     60-65   -\nMarvelous Bridge    Unova   Grass   M/D/N   Special     47-50   -\nMarvelous Bridge    Unova   Shadow  M/D/N   Special     60-65   -\nMoor of Icirrus     Unova   Shadow  M/D/N   Special     39-40   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 14            Unova   Shadow  M/D/N   Special     60-65   -\nVillage Bridge      Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 582
    if (message.content === '?vanillite') {
    	message.channel.send('```md\nVanillite\n> PokeDex Number : 582\n> Egg Group : Mineral\n> Evolution : Vanillite → Vanillish (Lv.35) → Vanilluxe (Lv.47)\n#Map                Region  Type    Time    Rarity      Level   Item\nCold Storage        Unova   Grass   M/D/N   Horde       19-20   -\nCold Storage        Unova   D.Grass M/D/N   Horde       23-24   -\nCold Storage        Unova   Grass   M/D/N   V.Common    20-23   -\nCold Storage        Unova   D.Grass M/D/N   V.Common    24-27   -\nDragonspiral Tower  Unova   Grass   M/D/N   Common      31-33   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\nRoute 6             Unova   Grass   M/D/N   Uncommon    23-25   -\nRoute 6             Unova   D.Grass M/D/N   Uncommon    27-29   -\n```');
  	}
// Pokedex : 583
    if (message.content === '?vanillish') {
    	message.channel.send('```md\nVanillish\n> PokeDex Number : 583\n> Egg Group : Mineral\n> Evolution : Vanillite → Vanillish (Lv.35) → Vanilluxe (Lv.47)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   D.Grass M/D/N   Common      35-37   -\nDragonspiral Tower  Unova   D.Grass M/D/N   Horde       35      -\n```');
  	}
// Pokedex : 584
    if (message.content === '?vanilluxe') {
    	message.channel.send('```md\nVanilluxe\n> PokeDex Number : 584\n> Egg Group : Mineral\n> Evolution : Vanillite → Vanillish (Lv.35) → Vanilluxe (Lv.47)\nNo wild location found.\n```');
  	}
// Pokedex : 585
    if (message.content === '?deerling') {
    	message.channel.send('```md\nDeerling\n> PokeDex Number : 585\n> Egg Group : Field\n> Evolution : Deerling → Sawsbuck (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   V.Common    31-32   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\nRoute 6             Unova   Grass   M/D/N   V.Common    23-25   -\nRoute 6             Unova   Grass   M/D/N   Horde       21-22   -\nRoute 6             Unova   D.Grass M/D/N   V.Common    26-28   -\nRoute 7             Unova   Grass   M/D/N   Common      26      -\nRoute 7             Unova   D.Grass M/D/N   Common      30      -\n```');
  	}
// Pokedex : 586
    if (message.content === '?sawsbuck') {
    	message.channel.send('```md\nSawsbuck\n> PokeDex Number : 586\n> Egg Group : Field\n> Evolution : Deerling → Sawsbuck (Lv.34)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   D.Grass M/D/N   V.Common    34-36   -\n```');
  	}
// Pokedex : 587
    if (message.content === '?emolga') {
    	message.channel.send('```md\nEmolga\n> PokeDex Number : 587\n> Egg Group : Field\n#Map                Region  Type    Time    Rarity      Level   Item\nAbundant Shrine     Unova   Grass   M/D/N   Special     60-65   -\nDragonspiral Tower  Unova   Grass   M/D/N   Special     37-38   -\nGiant Chasm         Unova   Grass   M/D/N   Special     60-65   -\nLostlorn Forest     Unova   Grass   M/D/N   Special     24-26   -\nRoute 5             Unova   Grass   M/D/N   Special     23-25   -\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\nRoute 7             Unova   Grass   M/D/N   Special     31-32   -\nRoute 9             Unova   Grass   M/D/N   Special     41-42   -\nRoute 10            Unova   Grass   M/D/N   Special     34-44   -\nRoute 11            Unova   Grass   M/D/N   Special     60-65   -\nRoute 12            Unova   Grass   M/D/N   Special     60-65   -\nRoute 13            Unova   Grass   M/D/N   Special     60-65   -\nRoute 14            Unova   Grass   M/D/N   Special     60-65   -\nRoute 15            Unova   Grass   M/D/N   Special     60-65   -\nRoute 16            Unova   Grass   M/D/N   Special     23-25   -\nVillage Bridge      Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 588
    if (message.content === '?karrablast') {
    	message.channel.send('```md\nKarrablast\n> PokeDex Number : 588\n> Egg Group : Bug\n> Evolution : Karrablast → Escavalier (Trade for Shelmet)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Grass   M/D/N   Common      22-24   -\nRoute 6             Unova   Grass   M/D/N   Horde       21-22   -\nRoute 6             Unova   D.Grass M/D/N   Common      26-28   -\nRoute 11            Unova   Grass   M/D/N   Rare        49      -\nRoute 11            Unova   D.Grass M/D/N   Rare        54      -\n```');
  	}
// Pokedex : 589
    if (message.content === '?escavalier') {
    	message.channel.send('```md\nEscavalier\n> PokeDex Number : 589\n> Egg Group : Bug\n> Evolution : Karrablast → Escavalier (Trade for Shelmet)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Grass   M/D/N   Special     29-30   -\nRoute 11            Unova   Grass   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 590
    if (message.content === '?foongus') {
    	message.channel.send('```md\nFoongus\n> PokeDex Number : 590\n> Egg Group : Plant\n> Evolution : Foongus → Amoongus (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 6             Unova   Grass   M/D/N   Common      23-25   -\nRoute 6             Unova   D.Grass M/D/N   Common      27-29   -\nRoute 7             Unova   Grass   M/D/N   Uncommon    27-29   -\nRoute 7             Unova   D.Grass M/D/N   Uncommon    31-33   -\nRoute 10            Unova   Grass   M/D/N   Common      34-35   -\n```');
  	}
// Pokedex : 591
    if (message.content === '?amoogus') {
    	message.channel.send('```md\nAmoongus\n> PokeDex Number : 591\n> Egg Group : Plant\n> Evolution : Foongus → Amoongus (Lv.39)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Unova   D.Grass M/D/N   Common      39-40   -\nRoute 10            Unova   D.Grass M/D/N   Horde       39      -\nRoute 11            Unova   Grass   M/D/N   Uncommon    48      -\nRoute 11            Unova   D.Grass M/D/N   Uncommon    53      -\nRoute 11            Unova   D.Grass M/D/N   Horde       50-52   -\n```');
  	}
// Pokedex : 592
    if (message.content === '?frillish') {
    	message.channel.send('```md\nFrillish\n> PokeDex Number : 592\n> Egg Group : Chaos\n> Evolution : Frillish → Jellicent (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nDriftveil City      Unova   Water   M/D/N   V.Common    25-35   -\nDriftveil City      Unova   Water   M/D/N   Horde       25-35   -\nP2 Laboratory       Unova   Water   M/D/N   V.Common    25-35   -\nP2 Laboratory       Unova   Water   M/D/N   Horde       25-35   -\nRoute 4             Unova   Water   M/D/N   V.Common    25-35   -\nRoute 4             Unova   Water   M/D/N   Horde       25-35   -\nRoute 17            Unova   Water   M/D/N   V.Common    25-35   -\nRoute 17            Unova   Water   M/D/N   Horde       25-35   -\nRoute 18            Unova   Water   M/D/N   V.Common    25-35   -\nRoute 18            Unova   Water   M/D/N   Horde       25-35   -\n```');
  	}
// Pokedex : 593
    if (message.content === '?jellicent') {
    	message.channel.send('```md\nJellicent\n> PokeDex Number : 593\n> Egg Group : Chaos\n> Evolution : Frillish → Jellicent (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nDriftveil City      Unova   Water   M/D/N   Special     40      -\nP2 Laboratory       Unova   Water   M/D/N   Special     40      -\nRoute 4             Unova   Water   M/D/N   Special     40      -\nRoute 13            Unova   Water   M/D/N   Special     60-65   -\nRoute 17            Unova   Water   M/D/N   Special     40      -\nRoute 18            Unova   Water   M/D/N   Special     40      -\n```');
  	}
// Pokedex : 594
    if (message.content === '?alomomola') {
    	message.channel.send('```md\nAlomomola\n> PokeDex Number : 594\n> Egg Group : Water A , Water B\n#Map                Region  Type    Time    Rarity      Level   Item\nDriftveil City      Unova   Water   M/D/N   Special     20-30   -\nP2 Laboratory       Unova   Water   M/D/N   Special     10-20   -\nRoute 1             Unova   Water   D       Special     30-40   -\nRoute 4             Unova   Water   M/D/N   Special     30-40   -\nRoute 13            Unova   Water   M/D/N   Special     60-65   -\nRoute 17            Unova   Water   M/D/N   Special     30-40   -\nRoute 18            Unova   Water   M/D/N   Special     30-40   -\nUndella Bay         Unova   Water   M/D/N   Special     60-65   -\nUndella Town        Unova   Water   M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 595
    if (message.content === '?joltik') {
    	message.channel.send('```md\nJoltik\n> PokeDex Number : 595\n> Egg Group : Bug\n> Evolution : Joltik → Galvantula (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Common    24-27   -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\n```');
  	}
// Pokedex : 596
    if (message.content === '?garvantula') {
    	message.channel.send('```md\nGalvantula\n> PokeDex Number : 596\n> Egg Group : Bug\n> Evolution : Joltik → Galvantula (Lv.36)\nNo wild location found.\n```');
  	}
// Pokedex : 597
    if (message.content === '?ferroseed') {
    	message.channel.send('```md\nFerroseed\n> PokeDex Number : 597\n> Egg Group : Plant , Mineral\n> Evolution : Ferroseed → Ferrothorn (Lv.40)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Common    24-26   -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\n```');
  	}
// Pokedex : 598
    if (message.content === '?ferrothorn') {
    	message.channel.send('```md\nFerrothorn\n> PokeDex Number : 598\n> Egg Group : Plant , Mineral\n> Evolution : Ferroseed → Ferrothorn (Lv.40)\nNo wild location found.\n```');
  	}
// Pokedex : 599
    if (message.content === '?klink') {
    	message.channel.send('```md\nKlink\n> PokeDex Number : 599\n> Egg Group : Gendeless\n> Evolution : Klink → Klang (Lv.38) → Klinklang (Lv.49)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Common    25-27   -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\nP2 Laboratory       Unova   Grass   M/D/N   Uncommon    29-31   -\n```');
  	}
// Pokedex : 600
    if (message.content === '?klang') {
    	message.channel.send('```md\nKlang\n> PokeDex Number : 600\n> Egg Group : Gendeless\n> Evolution : Klink → Klang (Lv.38) → Klinklang (Lv.49)\nNo wild location found.\n```');
  	}
// Pokedex : 601
    if (message.content === '?klinklang') {
    	message.channel.send('```md\nKlinklang\n> PokeDex Number : 601\n> Egg Group : Gendeless\n> Evolution : Klink → Klang (Lv.38) → Klinklang (Lv.49)\nNo wild location found.\n```');
  	}
// Pokedex : 602
    if (message.content === '?tynamo') {
    	message.channel.send('```md\nTynamo\n> PokeDex Number : 602\n> Egg Group : Chaos\n> Evolution : Tynamo → Eelektrik (Lv.39) → Eelektross (Use Thunderstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nChargestone Cave    Unova   Cave    M/D/N   V.Rare      27      -\nChargestone Cave    Unova   Cave    M/D/N   Horde       22-24   -\n```');
  	}
// Pokedex : 603
    if (message.content === '?eelektrik') {
    	message.channel.send('```md\nEelektrik\n> PokeDex Number : 603\n> Egg Group : Chaos\n> Evolution : Tynamo → Eelektrik (Lv.39) → Eelektross (Use Thunderstone)\nNo wild location found.\n```');
  	}
// Pokedex : 604
    if (message.content === '?eelektross') {
    	message.channel.send('```md\nEelektross\n> PokeDex Number : 604\n> Egg Group : Chaos\n> Evolution : Tynamo → Eelektrik (Lv.39) → Eelektross (Use Thunderstone)\nNo wild location found.\n```');
  	}
// Pokedex : 605
    if (message.content === '?elgyem') {
    	message.channel.send('```md\nElgyem\n> PokeDex Number : 605\n> Egg Group : Humanoid\n> Evolution : Elgyem → Beheeyem (Lv.42)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Grass   M/D/N   V.Common    26-29   -\nCelestial Tower     Unvoa   Grass   M/D/N   Horde       25-26   -\n```');
  	}
// Pokedex : 606
    if (message.content === '?beheeyem') {
    	message.channel.send('```md\nBeheeyem\n> PokeDex Number : 606\n> Egg Group : Humanoid\n> Evolution : Elgyem → Beheeyem (Lv.42)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 14            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 14            Unova   Grass   M/D/N   Horde       46-47   -\nRoute 14            Unova   D.Grass M/D/N   Uncommon    53-55   -\n```');
  	}
// Pokedex : 607
    if (message.content === '?litwick') {
    	message.channel.send('```md\nLitwick\n> PokeDex Number : 607\n> Egg Group : Chaos\n> Evolution : Litwick → Lampent (Lv.41) → Chandelure (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nCelestial Tower     Unova   Grass   M/D/N   V.Common    26-29   -\nCelestial Tower     Unvoa   Grass   M/D/N   Horde       25-26   -\n```');
  	}
// Pokedex : 608
    if (message.content === '?lampent') {
    	message.channel.send('```md\nLampent\n> PokeDex Number : 608\n> Egg Group : Chaos\n> Evolution : Litwick → Lampent (Lv.41) → Chandelure (Use Duskstone)\n#Map                Region  Type    Time    Rarity      Level   Item\nNo wild location found.```');
  	}
// Pokedex : 609
    if (message.content === '?chandelure') {
    	message.channel.send('```md\nChandelure\n> PokeDex Number : 609\n> Egg Group : Chaos\n> Evolution : Litwick → Lampent (Lv.41) → Chandelure (Use Duskstone)\nNo wild location found.\n```');
  	}
// Pokedex : 610
    if (message.content === '?axew') {
    	message.channel.send('```md\nAxew\n> PokeDex Number : 610\n> Egg Group : Monster , Dragon\n> Evolution : Axew → Fraxure (Lv.38) → Haxorus (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nGuidance Chamber    Unova   Cave    M/D/N   Common      30-31   -\nGuidance Chamber    Unova   Cave    M/D/N   Horde       26-28   -\nMistralton Cave     Unova   Cave    M/D/N   Common      30-31   -\n```');
  	}
// Pokedex : 611
    if (message.content === '?fraxure') {
    	message.channel.send('```md\nFraxure\n> PokeDex Number : 611\n> Egg Group : Monster , Dragon\n> Evolution : Axew → Fraxure (Lv.38) → Haxorus (Lv.48)\n#Map                Region  Type    Time    Rarity      Level   Item\nMistralton Cave     Unova   D.Cloud M/D/N   Special     38-40   -\nVictory Road        Unova   Grass   M/D/N   Rare        40      -\n```');
  	}
// Pokedex : 612
    if (message.content === '?haxorus') {
    	message.channel.send('```md\nHaxorus\n> PokeDex Number : 612\n> Egg Group : Monster , Dragon\n> Evolution : Axew → Fraxure (Lv.38) → Haxorus (Lv.48)\nNo wild location found. \n```');
  	}
// Pokedex : 613
    if (message.content === '?cubchoo') {
    	message.channel.send('```md\nCubchoo\n> PokeDex Number : 613\n> Egg Group : Field\n> Evolution : Cubchoo → Beartic (Lv.37)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Uncommon    33      -\nRoute 7             Unova   Grass   M/D/N   Common      26-28   -\nRoute 7             Unova   D.Grass M/D/N   Common      30-32   -\nTwist Mountain      Unova   Cave    M/D/N   V.Common    28-31   -\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 614
    if (message.content === '?beartic') {
    	message.channel.send('```md\nBeartic\n> PokeDex Number : 614\n> Egg Group : Field\n> Evolution : Cubchoo → Beartic (Lv.37)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   D.Grass M/D/N   Uncommon    37      -\nDragonspiral Tower  Unova   D.Grass M/D/N   Horde       37      -\n```');
  	}
// Pokedex : 615
    if (message.content === '?cryogonal') {
    	message.channel.send('```md\nCryogonal\n> PokeDex Number : 615\n> Egg Group : Genderless\n#Map                Region  Type    Time    Rarity      Level   Item\nTwist Mountain      Unova   Cave    M/D/N   Rare        31      -\nTwist Mountain      Unova   Cave    M/D/N   Horde       26-28   -\n```');
  	}
// Pokedex : 616
    if (message.content === '?shelmet') {
    	message.channel.send('```md\nShelmet\n> PokeDex Number : 616\n> Egg Group : Bug\n> Evolution : Shelmet → Accelgor (Trade for Karrablast)\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Grass   M/D/N   V.Common    30-33   -\nIcirrus City        Unova   Grass   M/D/N   Horde       28-30   -\nMoor of Icirrus     Unova   Grass   M/D/N   V.Common    30-33   -\nRoute 6             Unova   Grass   M/D/N   Rare        22-24   -\nRoute 6             Unova   D.Grass M/D/N   Rare        26-28   -\nRoute 8             Unova   Grass   M/D/N   V.Common    30-33   -\n```');
  	}
// Pokedex : 617
    if (message.content === '?accelgor') {
    	message.channel.send('```md\nAccelgor\n> PokeDex Number : 617\n> Egg Group : Bug\n> Evolution : Shelmet → Accelgor (Trade for Karrablast)\nNo wild location found.\n```');
  	}
// Pokedex : 618
    if (message.content === '?stunfisk') {
    	message.channel.send('```md\nStunfisk\n> PokeDex Number : 618\n> Egg Group : Water A , Chaos\n#Map                Region  Type    Time    Rarity      Level   Item\nIcirrus City        Unova   Grass   M/D/N   Common      31-32   -\nIcirrus City        Unova   Water   M/D/N   V.Common    25-35   -\nIcirrus City        Unova   Water   M/D/N   Horde       25-35   -\nIcirrus City        Unova   S.Rod   M/D/N   V.Common    35-55   -\nIcirrus City        Unova   Fishing M/D/N   Special     55-60   -\nMoor of Icirrus     Unova   Grass   M/D/N   Common      31-32   -\nMoor of Icirrus     Unova   Water   M/D/N   V.Common    25-35   -\nMoor of Icirrus     Unova   Water   M/D/N   Horde       25-35   -\nMoor of Icirrus     Unova   S.Rod   M/D/N   V.Common    35-55   -\nMoor of Icirrus     Unova   Fishing M/D/N   Special     55-60   -\nRoute 8             Unova   Grass   M/D/N   Common      31-32   -\nRoute 8             Unova   Grass   M/D/N   Horde       28-30   -\nRoute 8             Unova   Water   M/D/N   V.Common    25-35   -\nRoute 8             Unova   Water   M/D/N   Horde       25-35   -\nRoute 8             Unova   S.Rod   M/D/N   V.Common    35-55   -\nRoute 8             Unova   Fishing M/D/N   Special     55-60   -\n```');
  	}
// Pokedex : 619
    if (message.content === '?mienfoo') {
    	message.channel.send('```md\nMienfoo\n> PokeDex Number : 619\n> Egg Group : Field , Humanoid\n> Evolution : Mienfoo → Mienshao (Lv.50)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   V.Common    30-33   -\nDragonspiral Tower  Unova   D.Grass M/D/N   V.Common    33-37   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\nRoute 14            Unova   Grass   M/D/N   Uncommon    49      -\nRoute 14            Unova   D.Grass M/D/N   Uncommon    54      -\nTrial Chamber       Unova   Cave    M/D/N   Uncommon    41      -\nTrial Chamber       Unova   Cave    M/D/N   Horde       37-39   -\nVictory Road        Unova   Cave    M/D/N   Uncommon    39-41   -\nVictory Road        Unova   Grass   M/D/N   Common      38-40   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\n```');
  	}
// Pokedex : 620
    if (message.content === '?mienshao') {
    	message.channel.send('```md\nMienshao\n> PokeDex Number : 620\n> Egg Group : Field , Humanoid\n> Evolution : Mienfoo → Mienshao (Lv.50)\nNo wild location found.\n```');
  	}
// Pokedex : 621
    if (message.content === '?druddigon') {
    	message.channel.send('```md\nDruddigon\n> PokeDex Number : 621\n> Egg Group : Dragon , Monster\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\n```');
  	}
// Pokedex : 622
    if (message.content === '?golett') {
    	message.channel.send('```md\nGolett\n> PokeDex Number : 622\n> Egg Group : Genderless\n> Evolution : Golett → Golurk (Lv.43)\n#Map                Region  Type    Time    Rarity      Level   Item\nDragonspiral Tower  Unova   Grass   M/D/N   Uncommon    30-33   -\nDragonspiral Tower  Unova   Grass   M/D/N   Horde       29-30   -\n```');
  	}
// Pokedex : 623
    if (message.content === '?golurk') {
    	message.channel.send('```md\nGolurk\n> PokeDex Number : 623\n> Egg Group : Genderless\n> Evolution : Golett → Golurk (Lv.43)\nNo wild location found.\n```');
  	}
// Pokedex : 624
    if (message.content === '?pawniard') {
    	message.channel.send('```md\nPawniard\n> PokeDex Number : 624\n> Egg Group : Humanoid\n> Evolution : Pawniard → Bisharp (Lv.52)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 9             Unova   Grass   M/D/N   Common      31-34   -\nRoute 9             Unova   D.Grass M/D/N   Common      31-34   -\nRoute 11            Unova   Grass   M/D/N   Rare        50      -\n```');
  	}
// Pokedex : 625
    if (message.content === '?bisharp') {
    	message.channel.send('```md\nBisharp\n> PokeDex Number : 625\n> Egg Group : Humanoid\n> Evolution : Pawniard → Bisharp (Lv.52)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   D.Grass M/D/N   Rare        55      -\n```');
  	}
// Pokedex : 626
    if (message.content === '?bouffalant') {
    	message.channel.send('```md\nBouffalant\n> PokeDex Number : 626\n> Egg Group : Field\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 10            Unova   Grass   M/D/N   Common      34-35   -\nRoute 10            Unova   Grass   M/D/N   Horde       32-33   -\nRoute 10            Unova   D.Grass M/D/N   Common      39-40   -\n```');
  	}
// Pokedex : 627
    if (message.content === '?rufflet') {
    	message.channel.send('```md\nRufflet\n> PokeDex Number : 627\n> Egg Group : Flying\n> Evolution : Rufflet → Braviary (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Shadow  M/D/N   Special     22-24   -\nDreamyard           Unova   Shadow  M/D/N   Special     6-7     -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 2             Unova   Shadow  M/D/N   Special     6-7     -\nRoute 4             Unova   Shadow  M/D/N   Special     19-21   -\nRoute 10            Unova   Grass   M/D/N   Uncommon    4-36    -\nRoute 10            Unova   D.Grass M/D/N   Uncommon    39-41   -\nRoute 11            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 18            Unova   Shadow  M/D/N   Special     36-38   -\nVictory Road        Unova   Grass   M/D/N   Common      37-40   -\nVillage Bridge      Unova   Grass   M/D/N   Common      48-50   -\nVillage Bridge      Unova   Grass   M/D/N   Horde       45-47   -\nVillage Bridge      Unova   D.Grass M/D/N   Common      53-55   -\n```');
  	}
// Pokedex : 628
    if (message.content === '?braviary') {
    	message.channel.send('```md\nBraviary\n> PokeDex Number : 628\n> Egg Group : Flying\n> Evolution : Rufflet → Braviary (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   D.Grass M/D/N   Uncommon    54-55   -\nRoute 12            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 629
    if (message.content === '?vullaby') {
    	message.channel.send('```md\nVullaby\n> PokeDex Number : 629\n> Egg Group : Flying\n> Evolution : Vullaby → Mandibuzz (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nDesert Resort       Unova   Shadow  M/D/N   Special     22-24   -\nDreamyard           Unova   Shadow  M/D/N   Special     6-7     -\nPinwheel Forest     Unova   Shadow  M/D/N   Special     13-15   -\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 2             Unova   Shadow  M/D/N   Special     6-7     -\nRoute 4             Unova   Shadow  M/D/N   Special     19-21   -\nRoute 10            Unova   Grass   M/D/N   Uncommon    4-36    -\nRoute 10            Unova   D.Grass M/D/N   Uncommon    39-41   -\nRoute 11            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 18            Unova   Shadow  M/D/N   Special     36-38   -\nVictory Road        Unova   Grass   M/D/N   Common      37-40   -\nVillage Bridge      Unova   Grass   M/D/N   Common      48-50   -\nVillage Bridge      Unova   Grass   M/D/N   Horde       45-47   -\nVillage Bridge      Unova   D.Grass M/D/N   Common      53-55   -\n```');
  	}
// Pokedex : 630
    if (message.content === '?mandibuzz') {
    	message.channel.send('```md\nMandibuzz\n> PokeDex Number : 630\n> Egg Group : Flying\n> Evolution : Vullaby → Mandibuzz (Lv.54)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 11            Unova   D.Grass M/D/N   Uncommon    54-55   -\nRoute 12            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   Shadow  M/D/N   Special     60-65   -\n```');
  	}
// Pokedex : 631
    if (message.content === '?heatmor') {
    	message.channel.send('```md\nHeatmor\n> PokeDex Number : 631\n> Egg Group : Field\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Unova   Grass   M/D/N   V.Common    37-40   -\nVictory Road        Unova   Grass   M/D/N   Horde       36-37   -\n```');
  	}
// Pokedex : 632
    if (message.content === '?durant') {
    	message.channel.send('```md\nDurant\n> PokeDex Number : 632\n> Egg Group : Bug\n#Map                Region  Type    Time    Rarity      Level   Item\nTrial Chamber       Unova   Cave    M/D/N   V.Common    39-42   -\nTrial Chamber       Unova   Cave    M/D/N   Horde       37-39   -\nVictory Road        Unova   Cave    M/D/N   V.Common    37-42   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-39   -\n```');
  	}
// Pokedex : 633
    if (message.content === '?deino') {
    	message.channel.send('```md\nDeino\n> PokeDex Number : 633\n> Egg Group : Dragon\n> Evolution : Deino → Zweilous (Lv.50) → Hydreigon (Lv.64)\n#Map                Region  Type    Time    Rarity      Level   Item\nVictory Road        Unova   Cave    M/D/N   Rare        38-40   -\nVictory Road        Unova   Cave    M/D/N   Horde       36-37   -\n```');
  	}
// Pokedex : 634
    if (message.content === '?zweilous') {
    	message.channel.send('```md\nZweilous\n> PokeDex Number : 634\n> Egg Group : Dragon\n> Evolution : Deino → Zweilous (Lv.50) → Hydreigon (Lv.64)\nNo wild location found.\n```');
  	}
// Pokedex : 635
    if (message.content === '?hydreigon') {
    	message.channel.send('```md\nHydreigon\n> PokeDex Number : 635\n> Egg Group : Dragon\n> Evolution : Deino → Zweilous (Lv.50) → Hydreigon (Lv.64)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 15            Unova   Shadow  M/D/N   Special     64-65   -\n```');
  	}
// Pokedex : 636
    if (message.content === '?larvesta') {
    	message.channel.send('```md\nLarvesta\n> PokeDex Number : 636\n> Egg Group : Bug\n> Evolution : Larvesta → Volcarona (Lv.59)\n#Map                Region  Type    Time    Rarity      Level   Item\nRelic Castle        Unova   Cave    M/D/N   Rare        47-49   -\n```');
  	}
// Pokedex : 637
    if (message.content === '?volcarona') {
    	message.channel.send('```md\nVolcarona\n> PokeDex Number : 637\n> Egg Group : Bug\n> Evolution : Larvesta → Volcarona (Lv.59)\nNo wild location found.\n```');
  	}
// Pokedex : 643
    if (message.content === '?reshiram') {
    	message.channel.send('```md\nReshiram\n> PokeDex Number : 643\n> Egg Group : Cannot Breed\nNo wild location found.\n```');
  	}
// Pokedex : 644
    if (message.content === '?zekrom') {
    	message.channel.send('```md\nZekrom\n> PokeDex Number : 644\n> Egg Group : Cannot Breed\nNo wild location found.\n```');
  	}
});


client.login(process.env.BOT_TOKEN);

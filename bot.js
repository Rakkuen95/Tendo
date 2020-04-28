const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on('message', message => {
    if (message.content === '?about') {
    	message.channel.send('```md\nTeam phát triển MMO Bot bao gồm\nGen 1st : Startear\nGen 2nd : liiih\nGen 3rd : dragoncv\nGen 4th : DXgamer\nGen 5th : ThanhPhong\n```');
  	}
    if (message.content === '?startear') {
    	message.channel.send('https://i.imgur.com/YxJTidU.png');
  	}
// Pokedex : 001
    if (message.content === '?bulbasaur') {
    	message.channel.send('```md\nBulbasaur\n> PokeDex Number : 001\n> Egg Group : Monster , Plant\n> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)\n#Map                Region  Type    Time    Rarity      Level   Item\nRoute 5             Kanto   Grass   M/D/N   Rare        10      -\n```');
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
    if (message.content === '?charmander') {
    	message.channel.send('```md\nCharmander\n> PokeDex Number : 004\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nRock Tunnel         Kanto   Cave    M/D/N   Rare        15      -\n```');
  	}
// Pokedex : 005
    if (message.content === '?charmeleon') {
    	message.channel.send('```md\nCharmeleon\n> PokeDex Number : 005\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 006
    if (message.content === '?charizard') {
    	message.channel.send('```md\nCharizard\n> PokeDex Number : 006\n> Egg Group : Monster , Dragon\n> Evolution : Charmander → Charmeleon (Lv.16) → Charizard (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 007
    if (message.content === '?squirtle') {
    	message.channel.send('```md\nSquirtle\n> PokeDex Number : 007\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\n#Map                Region  Type    Time    Rarity      Level   Item\nSeafoam Islands     Kanto   Cave    M/D/N   Rare        25      -\n```');
  	}
// Pokedex : 008
    if (message.content === '?wartortle') {
    	message.channel.send('```md\nWartortle\n> PokeDex Number : 008\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo wild locations found.\n```');
  	}
// Pokedex : 009
    if (message.content === '?blastoise') {
    	message.channel.send('```md\nBlastoise\n> PokeDex Number : 009\n> Egg Group : Monster , Water A\n> Evolution : Squirtle → Wartortle (Lv.16) → Blastoise (Lv.36)\nNo wild locations found.\n```');
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
    	message.channel.send('```md\nPidgeot\n> PokeDex Number : 018\n> Egg Group : Flying\n> Evolution : Pidgey → Pidgeotto (Lv.18) → Pidgeot (Lv.36)\nNo wild locations found.\n```');
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
    	message.channel.send('```md\nFearow\n> PokeDex Number : 022\n> Egg Group : Flying\n> Evolution : Spearow → Fearow (Lv.20)\n#Map                Region  Type    Time    Rarity      Level   Item\nCanyon Entrance     Kanto   Grass   M/D     Horde       46-48   -\nCanyon Entrance     Kanto   Grass   M/D/N   Uncommon    48-50   -\nCape Brink          Kanto   Grass   M/D/N   Uncommon    41-43   -\nKindle Road         Kanto   Grass   M/D/N   Rare        37-39   -\nMt.Ember            Kanto   Grass   M/D/N   Uncommon    40-42   -\nRoute 9             Kanto   Grass   M/D     Rare        20      -\nRoute 10            Kanto   Grass   M/D     Rare        20      -\nRoute 16            Kanto   Grass   M/D/N   Uncommon    22-25   -\nRoute 17            Kanto   Grass   M/D     Horde       20-22   -\nRoute 17            Kanto   Grass   M/D/N   Rare        26-28   -\nRoute 18            Kanto   Grass   M/D/N   Uncommon    28-30   -\nRoute 23            Kanto   Grass   M/D/N   Rare        40-44   -\nRuin Valley         Kanto   Grass   M/D/N   Horde       48-50   -\nRuin Valley         Kanto   Grass   M/D/N   Uncommon    50-52   -\nSevault Canyon      Kanto   Grass   M/D/N   Uncommon    50-52   -\nTreasure Beach      Kanto   Grass   M/D/N   Uncommon    37-39   -\nWater Path          Kanto   Grass   M/D/N   Uncommon    48-50   -\nRoute 1             Unova   Shadow  M/D/N   Special     34-38   -\nRoute 10            Unova   Shadow  M/D/N   Special     43-44   -\nRoute 11            Unova   Shadow  M/D/N   Special     60-65   -\nRoute 15            Unova   D.Grass M/D/N   Horde       50-52   -\nRoute 15            Unova   Grass   M/D/N   Uncommon    48-50   -\nRoute 15            Unova   D.Grass M/D/N   Uncommon    53-55   -\nVictory Road        Unova   Shadow  M/D/N   Special     45-48   -\nRoute 225           Sinnoh  Grass   M/D     Horde       49-50   -\nRoute 225           Sinnoh  Grass   M/D/N   Uncommon    50-52   -\nRoute 226           Sinnoh  Grass   M/D     Uncommon    51-53   -\nRoute 227           Sinnoh  Grass   M/D     Horde       50-51   -\nRoute 227           Sinnoh  Grass   M/D/N   Uncommon    51-53   -\nStark Mountain      Sinnoh  Grass   M/D/N   Uncommon    54-55   -\n```');
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
    	message.channel.send('```md\nRaichu\n> PokeDex Number : 026\n> PokeDex Number : 025\n> Egg Group : Field , Fairy\n> Evolution : Pichu → Pikachu (Happiness) → Raichu (Use Thunderstone)\nNo wild locations found.```');
  	}
// Pokedex : 027
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 028
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 029
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 030
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 031
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 032
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 033
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 034
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 035
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 036
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 037
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 038
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 039
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 040
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 041
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 042
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 043
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 044
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 045
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 046
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 047
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 048
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 049
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 050
    if (message.content === '?x') {
    	message.channel.send('x');
  	}
// Pokedex : 051
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
});

client.login(process.env.BOT_TOKEN);

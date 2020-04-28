const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('
```md
Bulbasaur
> PokeDex Number : 001
> Egg Group : Monster , Plant
> Evolution : Bulbasaur → Ivysaur (Lv.16) → Venusaur (Lv.32)
#Map            Region  Type    Time    Rarity      Level   Item
Route 5         Kanto   Grass   M/D/N   Rare        10      -
```
                      ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = ".";

client.on("message", (message) => {
const args = message.content.slice(config.prefix).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (command === "hi") {
    message.channel.send("hello!");
  }

  if (command === "asl") {
  let [age, sex, location] = args;
  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }

});
client.login(process.env.BOT_TOKEN);

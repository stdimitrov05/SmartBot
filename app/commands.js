const Discord = require("discord.js");
const token = require("./json/config.json");

module.exports.Commands = function () {
  const prefix = "*";

  //Get Client
  const app = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

  app.once("ready", () => {
    console.log(`Starting ${app.user.tag}`);
  });

  app.on("message", (msg) => {
    if (msg.author.bot) return;
    const command = msg.content;
    switch (command) {
      case prefix + "Hi":
        msg.reply(`Hello! ${app.username}`);
    }
  });

  //Use Token
  app.login(token.bot_token);
};

const { Client, MessageEmbed } = require("discord.js");
const { DisTube } = require("@distube/ytdl-core");
/* JSON */
const bot = require("./json/me.json");
const token = require("./json/config.json");
const license = require("./json/license.json");
const rolesJson = require("./json/roles.json");
const programR = require("./json/programmer.json");
const commands = require("./json/commads.json");
/* Events */
const { nowTime } = require("./events/nowTime");
const { botAge } = require("./events/botAge");

module.exports.Commands = function () {
  const prefix = "*";

  //Get Client
  const app = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
  });

  app.once("ready", () => {
    console.log(`Starting ${app.user.tag}`);
    app.user.setStatus("online");
    app.user.setActivity("Visual Studio Code ", { type: "PLAYING" });
  });

  app.on("message", (msg) => {
    if (msg.author.bot) return;
    const command = msg.content.toLowerCase();

    switch (command) {
      case prefix + "hi":
        msg.reply(`Hello! ${msg.author.username}`);
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use hi time:${nowTime()}`
        );
        break;

      case prefix + "me":
        const embed = new MessageEmbed()
          .setColor("RED")
          .setTitle(`${bot.title}`)
          .addFields(
            { name: `Hello! ${msg.author.username}`, value: bot.about },
            { name: "Social Media", value: bot.social }
          )
          .setTimestamp()
          .setImage(
            "https://scontent.fpdv1-1.fna.fbcdn.net/v/t39.30808-6/257430383_1808759065983085_8385350683251731787_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QHobcUjDsKoAX8vuSFI&tn=riq9vuQqO1EJIi5a&_nc_ht=scontent.fpdv1-1.fna&oh=00_AT_RDEYS-hK6Zni6kED7FU254njR_RIpLk7VJXclbjUmiw&oe=61DC8D70"
          )
          .setFooter(`©️ ` + `${bot.footer}`);

        msg.reply({ embeds: [embed] });
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use me time:${nowTime()}`
        );
        break;
      case prefix + "linces":
        const linces = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`${license.titleL}`)
          .addFields({
            name: `${license.secondeTitleL}`,
            value: license.infoL,
          })
          .setTimestamp()
          .setFooter(`©️ ` + `${bot.footer}`);
        msg.reply({ embeds: [linces] });
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use linces time:${nowTime()}`
        );
        break;
      case prefix + "nowtime":
        msg.reply(`${nowTime()}`);
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use nowtime time:${nowTime()}`
        );
        break;
      case prefix + "botage":
        msg.reply(`${botAge()} old.`);
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use botage time:${nowTime()}`
        );
        break;
      //case prefix + "birthdaybot":
      // msg.reply(birthdaybot())
      case prefix + "youtube/twitch":
        const roles = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`${rolesJson.titleR}`)
          .addFields(
            { name: `ENG`, value: rolesJson.engInfo },
            { name: "BG", value: rolesJson.bgInfo }
          )
          .setURL("https://dyno.gg/form/bae17bac")
          .setTimestamp()

          .setFooter(`©️ ` + `${bot.footer}`);
        msg.reply({ embeds: [roles] });
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use youtube/twitch time:${nowTime()}`
        );
        break;
      case prefix + "programmer":
        const programmer = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`${programR.titleP}`)
          .addFields(
            { name: `ENG`, value: programR.engr },
            { name: "BG", value: programR.bgR }
          )
          .setURL("https://dyno.gg/form/f69f3e54")
          .setTimestamp()

          .setFooter(`©️ ` + `${bot.footer}`);
        msg.reply({ embeds: [programmer] });
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use programmer time:${nowTime()}`
        );
        break;
      case prefix + "report":
        msg.reply("Check your DM please");
        msg.author.send(
          "Write to someone on the server about the problem. OR stdimitrov#2755"
        );
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use report time:${nowTime()}`
        );

        break;
      case prefix + "delete":
        const id = 514162981689622528;
        //  const coOwner = 929247603047157820
        if (id == msg.author.id || coOwner == msg.author.id) {
          msg.channel.delete();
        } else {
          msg.reply("Nice xD");
          console.log(
            `${msg.author.username} - id: ${msg.author.id} time:${nowTime()}`
          );
        }
        break;
      case prefix + "help":
        const commandList = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`${commands.titleC}`)
          .setDescription(commands.commands)
          .addFields({ name: `${commands.newtitle}`, value: commands.newcom })
          .setTimestamp()
          .setFooter(`©️ ` + `${bot.footer}`);
        msg.reply({ embeds: [commandList] });
        console.log(
          `${msg.author.username} - id: ${
            msg.author.id
          } use help time:${nowTime()}`
        );
        break;
      case prefix + "beta":
        msg.author.send("New commands: music* help");
    }
  });
  

  //Use Token
  app.login(token.bot_token);
};

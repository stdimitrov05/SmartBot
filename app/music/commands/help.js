const Discord = require("discord.js");
const footer = require("../../json/me.json");
module.exports = {
  name: "help",
  aliases: ["h", "cmd", "command"],
  run: async (client, message) => {
    message.channel.send({
      embeds: [
        new Discord.MessageEmbed()
          .setTitle("Commands")
          .setDescription(
            client.commands.map((cmd) => `\`${cmd.name}\``).join(", ") +
              "Progamming Process"
          )
          .setColor("BLURPLE")
          .setTimestamp()

          .setFooter(`©️ ` + `${footer.footer}`),
      ],
    });
  },
};

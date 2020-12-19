const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "unban",
    category: "moderation",
    description: "unbans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, You do not have perms to unban someone`)
          }
          
          if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, I do not have perms to unban someone`)
          }
          
          let userID = args[0]
            message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(bUser.user)

            const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`User <@${userID}> has been unbanned`)
            message.channel.send(embed);


      })    
    }
}


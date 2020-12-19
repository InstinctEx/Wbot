const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);




        let embed = new MessageEmbed()
		.setAuthor(message.author.username)
		.setDescription(`Sending this message took **${Math.floor(msg.createdTimestamp - message.createdTimestamp)}**ms. The average heartbeat ping is **${Math.round(client.ping)}**ms`)
		.setColor("#9B59B6")
		.addField("Full Username", message.author.tag)
		.addField("ID", message.author.id)
		.addField("Created At", message.author.createdAt)
        .setFooter(`This server is on shard ${message.guild.shardID}.`);
	    msg.edit(embed);











    }

}

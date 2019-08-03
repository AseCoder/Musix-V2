module.exports = {
    name: 'q',
    description: 'Queue command.',
    cooldown: 5,
    async execute(message, args, client, RichEmbed) {
        const serverQueue = client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send(':x: There is nothing playing.');
        if (args[1]) {
            if (isNaN(args[1])) return msg.channel.send(':x: I\'m sorry, But you need to enter a valid __number__.');
        }
        let page = parseInt(args[1]);
        if (!page) page = 1;
        let pagetext = `:page_facing_up: Page: ${page} :page_facing_up:`
        if (page === 1) pagetext = ':arrow_down: Next in queue :arrow_down:'
        let queuesongs = serverQueue.songs.slice((page - 1) * 20 + 1, page * 20 + 1);
        let queuemessage = `${queuesongs.map(song => `**#** ${song.title}`).join('\n')}`
        const hashs = queuemessage.split('**#**').length;
        for (let i = 0; i < hashs; i++) {
            queuemessage = queuemessage.replace('**#**', `**${i + 1}**`);

        }
        const embed = new RichEmbed()
            .setTitle("__Song queue__")
            .setDescription(`**Now playing:** ${serverQueue.songs[0].title}🎶\n${pagetext}\n${queuemessage}`)
            .setColor("#b50002")
        return message.channel.send(embed);
    }
};

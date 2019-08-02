module.exports = {
    name: 'help',
    description: 'Help command.',
    cooldown: 5,
    execute(message, args, client, RichEmbed) {
        const embed = new RichEmbed()
            .setTitle('Commands for Musix!')
            .addField('```+play```', 'Play a song.', true)
            .addField('```+queue```', 'Display the queue.', true)
            .addField('```+np```', 'Display whats currently playing.', true)
            .addField('```+volume```', 'Change or check the volume.', true)
            .addField('```+pause```', 'Pause the music.', true)
            .addField('```+resume```', 'Resume the music.', true)
            .addField('```+stop```', 'Stop the music, Clear the queue and leave the current voice channel.', true)
            .addField('```+skip```', 'Skip a song.', true)
            .addField('```+invite```', 'Invite Musix.', true)
            .addField('```+ping```', 'See the current ping for Musix', true)
            .addField('```+info```', 'Display info and instructions.', true)
            .addField('```+help```', 'Display the help.', true)
            .setAuthor(client.user.username, client.user.displayAvatarURL)
            .setColor('#2780cd')
        return message.channel.send(embed);
    }
};
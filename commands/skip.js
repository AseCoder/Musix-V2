module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
	execute(message, args, client, RichEmbed) {
		const { voiceChannel } = message.member;
		const serverQueue = client.queue.get(message.guild.id);
		const permissions = message.channel.permissionsFor(message.author);
		if (!serverQueue) return message.channel.send(':x: There is nothing playing that I could skip for you.');
		if (message.author.id !== '360363051792203779') {
			if (!voiceChannel) return message.channel.send(':x: I\'m sorry but you need to be in a voice channel to skip songs!');
			if (!permissions.has('MANAGE_MESSAGES')) return message.channel.send(':x: You need the `MANAGE_MESSAGES` permission to skip songs!');
		}
		message.channel.send(':fast_forward: Skipped the song for you!');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
	}
};

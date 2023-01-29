const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Show detailed stats of bot')
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
    description: 'Pause the queue',
    run: async (client, message, args) => {
        const voice_channel = message.member.voice.channel;
        const embed = new EmbedBuilder()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
        if (!voice_channel) return message.channel.send(embed);
        let song = client.player.pause(message);
        const pause = new EmbedBuilder()
            .setColor('#85b0d2')
            .setDescription(`**${song.name}** was paused!`)
        if (song)

            message.channel.send(pause);
    }
}
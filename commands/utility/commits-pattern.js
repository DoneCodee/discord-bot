const { SlashCommandBuilder,AttachmentBuilder, EmbedBuilder } = require('discord.js')

const exampleEmbed = new EmbedBuilder()
	.setTitle('Padrões de Commit')

const file = new AttachmentBuilder('https://media.discordapp.net/attachments/1199816862624661537/1199817256629182545/image.png?ex=65cd2665&is=65bab165&hm=d5ee0b658067a34802976ab26f2eca864795157978a23b5b0c99384566938638&=&format=webp&quality=lossless&width=806&height=585');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commits')
		.setDescription('Mostra uma tabela de commits padrões.'),
	
        async execute(interaction) {
		    await interaction.reply({ embeds: [exampleEmbed], files: [file] })
	    },
}
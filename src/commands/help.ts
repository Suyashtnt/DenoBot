import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { Guild } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/guild.ts";
import { botCache, botprefix } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';

const help = (message: Message, args: string[], guild?: Guild) => {

  //Note: This is very basic, I will make a better Help Command later.

  const userEmbed = new Embed()
    .setTitle(`**Help for DenoBot**`)
    .setThumbnail(`https://i.imgur.com/q2jd68R.png`)
    .setDescription(`
    __**General**__
    \`avatar\` \`userinfo\` \`serverinfo\` \`stats\` \`invite\`
    __**Fun**__
    \`hug\` \`kiss\` \`dog\` \`cat\` \`meme\` \`8ball\` \`diceroll\`
    __**Search**__
    \`pokedex\`
    __**Utility**__
    \`ping\` \`uptime\` \`say\` \`prefix\`
    __**Owner**__
    \`shutdown\`
    `)
    .setColor('#848484')
    .setFooter(`Prefix: ${botprefix.prefix || `Huh? No Prefix How Tho???`}`, `.`)

message.channel.sendMessage({ embed: userEmbed });
};

botCache.commands.set(`help`, {
  guildOnly: true,
  callback: help,
});

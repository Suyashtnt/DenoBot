import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { Guild } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/guild.ts";
import { botCache } from "../../mod.ts";
import { cache } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/utils/cache.ts";
import Embed from '../utils/embedConstructor.ts';
import { moment } from "https://deno.land/x/moment/moment.ts";


const userinfo = (message: Message, args: string[], guild?: Guild) => {

  const userEmbed = new Embed()
    .setTitle(`**${message.author.username}'s Info**`)
    .setThumbnail(`${message.author.avatarURL(2048)}`)
    .setDescription(`
    **ID: \`${message.author.id}\`**
    **Discrim:** #${message.author.discriminator}
    **Guild Nickname:** ${message.member?.nick || `None`}
    **Joined Server:** ${moment(message.member?.joined_at).format("LLLL")}
    **Avatar URL:** [Click](${message.author.avatarURL(2048)})
    **Started Boosting:** ${moment(message.member?.premiumSince).format("LLLL") || `Not Bought yet :(`}
    `)
    .setColor('#848484')

message.channel.sendMessage({ embed: userEmbed });
};


const serverinfo = (message: Message, args: string[], guild?: Guild) => {

  const serverEmbed = new Embed()
    .setTitle(`**${guild?.name} Stats**`)
    .setThumbnail(`${guild?.iconURL(2048)}`)
    .setDescription(`
    **ID: \`${guild?.id}\`**
    **Owner: \`${guild?.owner_id}\`**

    **Members:** ${guild?.members.size}
    **Total Members:** ${guild?.memberCount}
    **Channels:** ${guild?.channels.size}
    **Roles:** ${guild?.roles.size}

    **Region: \`${guild?.region}\`**
    **Large Server?: \`${guild?.large}\`**
    `)
    .setColor('#848484')

message.channel.sendMessage({ embed: serverEmbed });
};

const stats = (message: Message) => {

  const embed = new Embed()
    .setAuthor(`Bot Stats`, `https://i.imgur.com/q2jd68R.png`)
    .setDescription(`
    **Users:** ${cache.users.size}
    **Servers:** ${cache.guilds.size}
    **Channels:** ${cache.channels.size}
    **Messages Sent:** ${cache.messages.size}
    `)
    .setColor('#848484')

message.channel.sendMessage({ embed: embed });

};


botCache.commands.set(`userinfo`, {
  guildOnly: true,
  callback: userinfo,
});

botCache.commands.set(`serverinfo`, {
  guildOnly: true,
  callback: serverinfo,
});

botCache.commands.set(`stats`, {
  guildOnly: true,
  callback: stats,
});

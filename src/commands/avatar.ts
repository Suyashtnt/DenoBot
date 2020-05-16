import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';

const avatar = async (message: Message) => {

    const user = message.mentions.length ? message.mentions[0] : message.author

      const output = new Embed()
          .setTitle(`**${user.tag}'s Avatar**`)
          .setDescription(`
          **ID:** ${user.id}
          `)
          .setImage(user.avatarURL(2048))
          .setColor('#7289da')

      message.channel.sendMessage({ embed: output });
  }

botCache.commands.set(`avatar`, {
  callback: avatar,
});

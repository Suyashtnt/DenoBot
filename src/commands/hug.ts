import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://unpkg.com/ky/index.js';

const hug = async (message: Message) => {

    const user = message.mentions.length ? message.mentions[0] : message.author
    if (user === message.author) return message.channel.sendMessage(`You want to hug yourself?!?! Please Mention a user to hug!`)

    const body = await ky.get('https://nekos.life/api/v2/img/hug').json();

      const output = new Embed()
          .setTitle(`**Hug 🤗**`)
          .setDescription(`**${message.author.username}** hugged **${user.username}!**`)
          .setImage(body.url)
          .setColor('#e889e0')

      message.channel.sendMessage({ embed: output });
  }

botCache.commands.set(`hug`, {
  callback: hug,
});

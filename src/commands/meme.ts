import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://unpkg.com/ky/index.js';

const meme = async (message: Message, args: String[]) => {

    const body = await ky.get('https://some-random-api.ml/meme').json();

      const output = new Embed()
          .setTitle(`**Meme** 😂`)
          .setDescription(`**Category:** ${body.category}\n*${body.caption}*`)
          .setImage(body.image)
          .setColor('#ffd56d')

      message.channel.sendMessage({ embed: output });
  }

botCache.commands.set(`meme`, {
  callback: meme,
});

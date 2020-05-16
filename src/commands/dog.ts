import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://unpkg.com/ky/index.js';

const dog = async (message: Message, args: String[]) => {

    const body = await ky.get('https://nekos.life/api/v2/img/woof').json();

      const output = new Embed()
          .setTitle(`**Dog** 🐶`)
          .setImage(body.url)
          .setColor('#5da4fc')

      message.channel.sendMessage({ embed: output });
  }

botCache.commands.set(`dog`, {
  callback: dog,
});

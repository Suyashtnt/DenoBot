import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://unpkg.com/ky/index.js';

const cat = async (message: Message, args: String[]) => {

    const body = await ky.get('https://aws.random.cat/meow').json();

      const output = new Embed()
          .setTitle(`**Cat** 😸`)
          .setImage(body.file)
          .setColor('#6df7ff')

      message.channel.sendMessage({ embed: output });
  }
botCache.commands.set(`cat`, {
  callback: cat,
});

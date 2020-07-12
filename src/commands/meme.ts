import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
importky from 'https://unpkg.com/ky@0.20.0/index.js';
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const meme = async (message: Message, args: String[]) => {

  const body = await ky.get('https://some-random-api.ml/meme').json();

  const output = new Embed()
    .setTitle(`**Meme** 😂`)
    .setDescription(`**Category:** ${body.category}\n*${body.caption}*`)
    .setImage(body.image)
    .setColor('#ffd56d')

  sendMessage(message.channel, { embed: output });
}

botCache.commands.set(`meme`, {
  callback: meme,
});

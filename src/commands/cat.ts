import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
// @deno-types=https://deno.land/x/ky/index.d.ts
import ky from 'https://unpkg.com/ky@0.21.0/index.js';

const cat = async (message: Message, args: String[]) => {

  const body = await ky.get('https://aws.random.cat/meow').json();

  const output = new Embed()
    .setTitle(`**Cat** 😸`)
    .setImage(body.file)
    .setColor('#6df7ff')

  sendMessage(message.channel, { embed: output });
}
botCache.commands.set(`cat`, {
  callback: cat,
});

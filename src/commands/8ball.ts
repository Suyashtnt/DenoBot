import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://unpkg.com/ky@0.20.0/index.js';

const eightball = async (message: Message, args: String[]) => {

  let question = args.join(" ");
  if (!question) return sendMessage(message.channel, `You'll need to ask a Question!`);

  const body = await ky.get('https://natebotapi.glitch.me/api/8ball').json();

  const output = new Embed()
    .setTitle(`**8 Ball 🎱**`)
    .setColor(`#7f7c7c`)
    .setDescription(`**Question:** ${question}\n**Answer:** ${body.response}`)

  sendMessage(message.channel, { embed: output });
}

botCache.commands.set(`8ball`, {
  callback: eightball,
});

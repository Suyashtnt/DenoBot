import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import fetch from '../utils/fetchConstructor.ts'
import ky from 'https://cdn.pika.dev/ky@^0.20.0';

const eightball = async (message: Message, args: String[]) => {

  let question = args.join(" ");
  if (!question) return sendMessage(message.channel, `You'll need to ask a Question!`);


  const body = fetch("https://natebotapi.glitch.me/api/8ball", "application/json")

  const output = new Embed()
    .setTitle(`**8 Ball 🎱**`)
    .setColor(`#7f7c7c`)
    .setDescription(`**Question:** ${question}\n**Answer:** ${body}`)

  sendMessage(message.channel, { embed: output });
}

botCache.commands.set(`8ball`, {
  callback: eightball,
});

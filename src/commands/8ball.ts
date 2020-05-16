import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://unpkg.com/ky/index.js';

const eightball = async (message: Message, args: String[]) => {

  let question = args.join(" ");
    if (!question) return message.channel.sendMessage(`You'll need to ask a Question!`);

    const body = await ky.get('https://natebotapi.glitch.me/api/8ball').json();

      const output = new Embed()
        .setTitle(`**8 Ball 🎱**`)
        .setColor(`#7f7c7c`)
        .setDescription(`**Question:** ${question}\n**Answer:** ${body.response}`)

      message.channel.sendMessage({ embed: output });
  }

botCache.commands.set(`8ball`, {
  callback: eightball,
});

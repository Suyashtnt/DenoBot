import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import { Member, sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://cdn.pika.dev/ky@^0.20.0';

const hug = async (message: Message) => {


  message.mentions()[0] = message.mentions()[0];
  let user: Member;


  if (message.mentions.length === 0) {
    user = message.mentions()[0]
  } else {
    return sendMessage(message.channel, `You want to hug yourself?!?! Please Mention a user to hug!`)
  }
  // @ts-ignore
  const body = await ky.get('https://nekos.life/api/v2/img/hug').json();

  const output = new Embed()
    .setTitle(`**Hug 🤗**`)
    .setDescription(`**${message.author.username}** hugged **${user.}!**`)
    .setImage(body.url)
    .setColor('#e889e0')

  sendMessage(message.channel, { embed: output });
}

botCache.commands.set(`hug`, {
  callback: hug,
});

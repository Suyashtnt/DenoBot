import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/handlers/channel.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://cdn.pika.dev/ky@^0.20.0';

const dog = async (message: Message, args: String[]) => {

  // @ts-ignore
  const body = await ky.get('https://nekos.life/api/v2/img/woof').json();

  const output = new Embed()
    .setTitle(`**Dog** 🐶`)
    .setImage(body.url)
    .setColor('#5da4fc')

  sendMessage(message.channel, { embed: output });
}

botCache.commands.set(`dog`, {
  callback: dog,
});

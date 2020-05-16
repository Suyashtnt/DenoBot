import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache, botprefix } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';

const prefix = async (message: Message) => {

      message.channel.sendMessage(` **The Bot Prefix is \`${botprefix.prefix}\`**`);

  }

botCache.commands.set(`prefix`, {
  callback: prefix,
});

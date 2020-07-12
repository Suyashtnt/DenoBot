import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache, botprefix } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const prefix = async (message: Message) => {

  sendMessage(message.channel, ` **The Bot Prefix is \`${botprefix.prefix}\`**`);

}

botCache.commands.set(`prefix`, {
  callback: prefix,
});

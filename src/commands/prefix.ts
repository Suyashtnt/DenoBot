import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import { configs } from "../../configs.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const prefix = async (message: Message) => {

  sendMessage(message.channel, ` **The Bot Prefix is \`${configs.prefix}\`**`);

}

botCache.commands.set(`prefix`, {
  callback: prefix,
});

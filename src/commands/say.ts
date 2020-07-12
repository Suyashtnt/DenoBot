import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const say = async (message: Message, args: String[]) => {

  const result = args.join(" ")
  if (!result) return sendMessage(message.channel, `You'll need to specify something for the bot to say!`)

  sendMessage(message.channel, result);
}

botCache.commands.set(`say`, {
  callback: say,
});

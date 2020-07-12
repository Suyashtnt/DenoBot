import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const shutdown = async (message: Message, args: String[]) => {

  if (message.author.id !== "341527559382499329") return sendMessage(message.channel, 'You do not have permissions to run this command!');

  await sendMessage(message.channel, 'Bot is now shutting down...');
  Deno.exit();
}

botCache.commands.set(`shutdown`, {
  callback: shutdown,
});

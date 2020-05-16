import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";

const shutdown = async (message: Message, args: String[]) => {

    if(message.author.id !== "341527559382499329") return message.channel.sendMessage('You do not have permissions to run this command!');

    await message.channel.sendMessage('Bot is now shutting down...');
    Deno.exit();
}

botCache.commands.set(`shutdown`, {
  callback: shutdown,
});

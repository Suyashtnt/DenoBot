import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const pingCommand = (message: Message) => {
  return sendMessage(message.channel,
    `**Pong!** The Current Ping is: **\`${Date.now() - message.timestamp}\`**ms`,
  );
};

botCache.commands.set(`ping`, {
  callback: pingCommand,
});
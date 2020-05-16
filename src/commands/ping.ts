import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";

const pingCommand = (message: Message) => {
  return message.channel.sendMessage(
    `**Pong!** The Current Ping is: **\`${Date.now() - message.timestamp}\`**ms`,
  );
};

botCache.commands.set(`ping`, {
  callback: pingCommand,
});
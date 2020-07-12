import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const invite = (message: Message) => {
  return sendMessage(message.channel,
    `Hey! The Bot is not available for Invite. For help Join the **NTM Support Server:**\nhttps://discord.com/invite/G2rb53z`,
  );
};

botCache.commands.set(`invite`, {
  callback: invite,
});
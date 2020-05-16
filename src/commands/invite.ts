import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";

const invite = (message: Message) => {
  return message.channel.sendMessage(
    `Hey! The Bot is not available for Invite. For help Join the **NTM Support Server:**\nhttps://discord.com/invite/G2rb53z`,
  );
};

botCache.commands.set(`invite`, {
  callback: invite,
});
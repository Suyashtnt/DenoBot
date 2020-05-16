import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { Command } from "../types/commands.ts";
import { botCache } from "../../mod.ts";
import { Guild } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/guild.ts";

export const nsfwInhibitor = (
  message: Message,
  command: Command,
  guild?: Guild,
) => {

  if (!command.nsfw) return false;

  if (!guild) return true;

  const is_nsfw = message.channel.nsfw;

  return !is_nsfw;
};

botCache.inhibitors.set("nsfw", nsfwInhibitor);

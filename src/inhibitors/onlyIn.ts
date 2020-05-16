import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { Command } from "../types/commands.ts";
import { botCache } from "../../mod.ts";
import { Guild } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/guild.ts";

export const onlyInInhibitor = (
  message: Message,
  command: Command,
  guild?: Guild,
) => {

  if (command.guildOnly && !guild) return true;

  if (command.dmOnly && guild) return true;

  return false;
};

botCache.inhibitors.set("only_in", onlyInInhibitor);

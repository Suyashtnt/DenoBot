import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { logGreen, logRed} from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/utils/logger.ts";
import { configs } from "../../configs.ts";
import { botCache } from "../../mod.ts";
import { cache } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/utils/cache.ts";

export const commandHandler = async (message: Message) => {

  if (message.author.bot) return;

  const guildID = message.guild_id;

  const prefix = checkPrefix(message, guildID);
  if (!message.content.startsWith(prefix)) return;

  const [commandName, ...args] = message.content.substring(prefix.length).split(
    " ",
  );

  const command = checkCommand(commandName);
  if (!command) return;

  const guild = guildID ? cache.guilds.get(guildID) : undefined;
  logCommand(message, guild?.name || "DM", "Ran", commandName);
  const inhibitor_results = await Promise.all(
    [...botCache.inhibitors.values()].map((inhibitor) =>
      inhibitor(message, command, guild)
    ),
  );

  if (inhibitor_results.includes(true)) {
    return logCommand(message, guild?.name || "DM", "Inhibibted", commandName);
  }

  try {
    await command.callback(message, args, guild);

    logCommand(message, guild?.name || "DM", "Success", commandName);
  } catch (error) {
    logCommand(message, guild?.name || "DM", "Failed", commandName);
    logRed(error);
  }
};

export const checkPrefix = (message: Message, guildID: string | undefined) => {
  const prefix = guildID ? botCache.guildPrefixes.get(guildID) : configs.prefix;
  return prefix || configs.prefix;
};

export const checkCommand = (commandName: string) => {
  const command = botCache.commands.get(commandName);
  if (command) return command;

  const alias = botCache.commandAliases.get(commandName);
  if (!alias) return;

  return botCache.commands.get(alias);
};

export const logCommand = (
  message: Message,
  guild_name: string,
  type: string,
  commandName: string
) => {
  logGreen(`[COMMAND=${commandName} - ${type}] by ${message.author.tag} in ${guild_name}`);
};

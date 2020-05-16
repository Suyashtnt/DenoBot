import Client from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/module/client.ts";
import { configs } from "./configs.ts";
import { Intents } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/types/options.ts";
import { eventHandlers } from "./src/events/eventHandlers.ts";
import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { Command } from "./src/types/commands.ts";
import { Guild } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/guild.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

export const upSince = Date.now();

export const botCache = {
  commands: new Map<string, Command>(),
  commandAliases: new Map<string, string>(),
  guildPrefixes: new Map<string, string>(),
  inhibitors: new Map<
    string,
    (message: Message, command: Command, guild?: Guild) => boolean
  >(),
};

const importDirectory = async (path: string) => {
  const files = Deno.readDirSync(Deno.realPathSync(path));

  for (const file of files) {
    if (!file.name) continue;

    const currentPath = `${path}/${file.name}`;
    if (file.isFile) {
      await import(currentPath);
      continue;
    }

    importDirectory(currentPath);
  }
};

await Promise.all(
  ["./src/commands", "./src/inhibitors"].map((path) => importDirectory(path)),
);

export const botprefix = {
  prefix: configs.prefix
}

export const BotOptions = {
  token: configs.token,
  botID: configs.botID,
  intents: [Intents.GUILDS, Intents.GUILD_MESSAGES],
  eventHandlers,
};

Client(BotOptions);

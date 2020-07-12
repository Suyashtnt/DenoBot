import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache, upSince } from "../../mod.ts";
import { humanizeDelta } from '../utils/timeUtil.ts';
import Embed from '../utils/embedConstructor.ts';
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const uptime = async (message: Message, args: String[]) => {

  const diff = Date.now() - upSince;

  const embed = new Embed()
    .setTitle(`**Uptime**`)
    .setDescription(`
    I've been online for:
    **${humanizeDelta(diff)}** 
    `)
    .setColor(`#35e07c`)

  sendMessage(message.channel, { embed: embed });
}

botCache.commands.set(`uptime`, {
  callback: uptime,
});

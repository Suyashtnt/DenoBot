import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache, upSince } from "../../mod.ts";
import { humanizeDelta } from '../utils/timeUtil.ts';
import Embed from '../utils/embedConstructor.ts';

const uptime = async (message: Message, args: String[]) => {

  const diff = Date.now() - upSince;

  const embed = new Embed()
    .setTitle(`**Uptime**`)
    .setDescription(`
    I've been online for:
    **${humanizeDelta(diff)}** 
    `)
    .setColor(`#35e07c`)

    message.channel.sendMessage({ embed: embed });
}

botCache.commands.set(`uptime`, {
  callback: uptime,
});

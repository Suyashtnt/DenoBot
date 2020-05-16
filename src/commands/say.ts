import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";

const say = async (message: Message, args: String[]) => {

  const result = args.join(" ")
    if (!result) return message.channel.sendMessage(`You'll need to specify something for the bot to say!`)

    message.channel.sendMessage(result);
}

botCache.commands.set(`say`, {
  callback: say,
});

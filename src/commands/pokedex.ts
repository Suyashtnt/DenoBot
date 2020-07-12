import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://cdn.pika.dev/ky@^0.20.0';
import { sendMessage } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v5/mod.ts";
const pokedex = async (message: Message, args: String[]) => {

  let name = args.join(" ");
  if (!name) return sendMessage(message.channel, `You'll need to specify a Pokemon to Search for!`)

  // @ts-ignore
  const pokedex = await ky.get(`https://some-random-api.ml/pokedex?pokemon=${name}`).json();

  const embed = new Embed()
    .setTitle(`**${pokedex.name}**`)
    .setDescription(`
          *${pokedex.description}*

          **ID:** ${pokedex.id}
          **Base Experience:** ${pokedex.base_experience}
          **Generation:** ${pokedex.generation}
          **Type:** ${pokedex.type}
          **Weight:** ${pokedex.weight}
          **Height:** ${pokedex.height}
          `)
    .addField(`**Stats**`, `**HP:** ${pokedex.stats.hp}\n**Attack:** ${pokedex.stats.attack}\n**Defense:** ${pokedex.stats.defense}\n**Speed:** ${pokedex.stats.speed}`)
    .addField(`**Misc.**`, `**Species:** ${pokedex.species.join(", ")}\n**Abilities:** ${pokedex.abilities.join(", ")}\n**Gender:** ${pokedex.gender.join(", ")}\n**Egg Groups:** ${pokedex.egg_groups.join(", ")}`)
    .setThumbnail(`https://www.serebii.net/pokemon/art/${pokedex.id}.png`)
    .setColor('#ff8ea1')

  sendMessage(message.channel, { embed: embed });

}

botCache.commands.set(`pokedex`, {
  callback: pokedex,
});

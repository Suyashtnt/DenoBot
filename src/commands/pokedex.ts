import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";
import Embed from '../utils/embedConstructor.ts';
import ky from 'https://unpkg.com/ky/index.js';

const pokedex = async (message: Message, args: String[]) => {

  let name = args.join(" ");
    if(!name) return message.channel.sendMessage(`You'll need to specify a Pokemon to Search for!`)

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

      message.channel.sendMessage({ embed: embed });

}

botCache.commands.set(`pokedex`, {
  callback: pokedex,
});

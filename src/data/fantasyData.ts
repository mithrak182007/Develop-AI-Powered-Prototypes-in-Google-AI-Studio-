import { CharacterClassInfo, CharacterClassType, FantasyCharacter } from '../types';

export const CHARACTER_CLASSES: Record<CharacterClassType, CharacterClassInfo> = {
  Warrior: {
    id: 'Warrior',
    name: 'Warrior',
    roleTitle: 'Vanguard Champion',
    description: 'Masters of martial combat, armored resilience, and brute battlefield tactics.',
    primaryStat: 'Strength',
    signatureWeapon: 'Broadsword & Tower Shield',
    colorTheme: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-600/30',
      badgeBg: 'bg-amber-800/15',
      badgeText: 'text-amber-800 dark:text-amber-300',
      accent: 'text-amber-700 dark:text-amber-400',
    },
  },
  Mage: {
    id: 'Mage',
    name: 'Mage',
    roleTitle: 'Arcane Scholar',
    description: 'Wielders of primordial energy, channeling elemental spells and ancient incantations.',
    primaryStat: 'Intelligence',
    signatureWeapon: 'Crystal Focus Staff',
    colorTheme: {
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-600/30',
      badgeBg: 'bg-indigo-800/15',
      badgeText: 'text-indigo-800 dark:text-indigo-300',
      accent: 'text-indigo-700 dark:text-indigo-400',
    },
  },
  Rogue: {
    id: 'Rogue',
    name: 'Rogue',
    roleTitle: 'Shadow Infiltrator',
    description: 'Masters of stealth, lethal precision strikes, agile escapes, and keen perception.',
    primaryStat: 'Agility',
    signatureWeapon: 'Dual Serrated Daggers',
    colorTheme: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-600/30',
      badgeBg: 'bg-emerald-800/15',
      badgeText: 'text-emerald-800 dark:text-emerald-300',
      accent: 'text-emerald-700 dark:text-emerald-400',
    },
  },
  Paladin: {
    id: 'Paladin',
    name: 'Paladin',
    roleTitle: 'Holy Crusader',
    description: 'Sworn protectors binding martial discipline with sacred wards of divine light.',
    primaryStat: 'Charisma & Fortitude',
    signatureWeapon: 'Blessed Warhammer',
    colorTheme: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-600/30',
      badgeBg: 'bg-yellow-800/15',
      badgeText: 'text-yellow-800 dark:text-yellow-300',
      accent: 'text-yellow-700 dark:text-yellow-400',
    },
  },
  Ranger: {
    id: 'Ranger',
    name: 'Ranger',
    roleTitle: 'Wilderness Warden',
    description: 'Deadly marksmen attuned to the instincts of untamed beasts and forgotten trails.',
    primaryStat: 'Dexterity',
    signatureWeapon: 'Composite Longbow',
    colorTheme: {
      bg: 'bg-teal-500/10',
      border: 'border-teal-600/30',
      badgeBg: 'bg-teal-800/15',
      badgeText: 'text-teal-800 dark:text-teal-300',
      accent: 'text-teal-700 dark:text-teal-400',
    },
  },
  Cleric: {
    id: 'Cleric',
    name: 'Cleric',
    roleTitle: 'Divine Healer',
    description: 'Conduits of heavenly grace, restorative prayers, and defensive sanctuary circles.',
    primaryStat: 'Wisdom',
    signatureWeapon: 'Gilded Flail & Reliquary',
    colorTheme: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-600/30',
      badgeBg: 'bg-cyan-800/15',
      badgeText: 'text-cyan-800 dark:text-cyan-300',
      accent: 'text-cyan-700 dark:text-cyan-400',
    },
  },
  Bard: {
    id: 'Bard',
    name: 'Bard',
    roleTitle: 'Lore Minstrel',
    description: 'Weavers of inspirational melodies, bewitching rhythm, and chroniclers of legend.',
    primaryStat: 'Charisma',
    signatureWeapon: 'Enchanted Lute & Rapier',
    colorTheme: {
      bg: 'bg-rose-500/10',
      border: 'border-rose-600/30',
      badgeBg: 'bg-rose-800/15',
      badgeText: 'text-rose-800 dark:text-rose-300',
      accent: 'text-rose-700 dark:text-rose-400',
    },
  },
  Druid: {
    id: 'Druid',
    name: 'Druid',
    roleTitle: 'Keeper of the Grove',
    description: 'Shape-shifting guardians drawing primal vigor directly from roots, storms, and earth.',
    primaryStat: 'Wisdom',
    signatureWeapon: 'Yew Wood Quarterstaff',
    colorTheme: {
      bg: 'bg-green-500/10',
      border: 'border-green-600/30',
      badgeBg: 'bg-green-800/15',
      badgeText: 'text-green-800 dark:text-green-300',
      accent: 'text-green-700 dark:text-green-400',
    },
  },
  Warlock: {
    id: 'Warlock',
    name: 'Warlock',
    roleTitle: 'Pact Binder',
    description: 'Occult seekers bound to other-worldly entities, wielding forbidden eldritch hexes.',
    primaryStat: 'Eldritch Will',
    signatureWeapon: 'Obsidian Ritual Athame',
    colorTheme: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-600/30',
      badgeBg: 'bg-purple-800/15',
      badgeText: 'text-purple-800 dark:text-purple-300',
      accent: 'text-purple-700 dark:text-purple-400',
    },
  },
};

export const FIRST_NAMES: string[] = [
  'Eldrin', 'Lyra', 'Thalor', 'Kaelen', 'Morwen', 'Varis', 'Zephyr', 'Brynn',
  'Sylvan', 'Rowena', 'Cassian', 'Astrid', 'Soren', 'Fenris', 'Talia', 'Gideon',
  'Isolde', 'Darien', 'Rhiannon', 'Alistair', 'Seraphina', 'Corin', 'Maeve',
  'Valen', 'Elowen', 'Boran', 'Faelan', 'Dierdre', 'Kael', 'Orin', 'Selene',
  'Torin', 'Nerys', 'Cedric', 'Kallista', 'Rathgar', 'Evander', 'Elira'
];

export const SURNAMES: string[] = [
  'Stormstrider', 'Ironbreaker', 'Shadowcloak', 'Dawnbringer', 'Moonwhisper',
  'Swiftarrow', 'Frostborn', 'Emberforge', 'Ravenscar', 'Oakenshield',
  'Brightblade', 'Nightshade', 'Starfall', 'Wildwood', 'Deepdelver',
  'Silverhart', 'Thunderpeak', 'Bramblethorn', 'Ashenveil', 'Sunstrider',
  'Runeweaver', 'Gloomwarden', 'Spellseeker', 'Mistrunner', 'Windcaller'
];

export const TITLES: string[] = [
  'the Undaunted', 'the Silent', 'of the High Spire', 'the Swift',
  'the Unyielding', 'Seeker of Truths', 'the Spellbound', 'of the Ashen Peaks',
  'the Vigilant', 'Shield of the Realm', 'Wanderer of the Wilds', 'the Iron-Willed'
];

export const ORIGINS: string[] = [
  'Citadel of Sunspire',
  'Whispering Forest of Eldoria',
  'Iron Crags of Dun Karst',
  'Sunken Ruins of Thalass',
  'Misty Moors of Oakhaven',
  'Celestial Observatory of Zeph',
  'Obsidian Reach Fortress',
  'Free Ports of Marasol'
];

export const TRAITS: string[] = [
  'Calm under fire and unshakeable in battle',
  'Speaks in cryptic ancient proverbs',
  'Carries an ornate heirloom of a lost dynasty',
  'Can read atmospheric omens from gusting winds',
  'Never breaks a sworn oath once sealed',
  'Intensely curious about arcane artifacts',
  'Prefers nighttime quietude to bustling taverns',
  'Has a loyal raven messenger companion'
];

let lastGeneratedNames = new Set<string>();

export function generateRandomCharacter(): FantasyCharacter {
  const classKeys = Object.keys(CHARACTER_CLASSES) as CharacterClassType[];
  const selectedClass = classKeys[Math.floor(Math.random() * classKeys.length)];

  // Generate unique name combination
  let fullName = '';
  let attempts = 0;
  do {
    const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const surname = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
    fullName = `${firstName} ${surname}`;
    attempts++;
  } while (lastGeneratedNames.has(fullName) && attempts < 50);

  lastGeneratedNames.add(fullName);
  if (lastGeneratedNames.size > 40) {
    // Keep set bounded
    const iterator = lastGeneratedNames.values();
    lastGeneratedNames.delete(iterator.next().value!);
  }

  const title = TITLES[Math.floor(Math.random() * TITLES.length)];
  const origin = ORIGINS[Math.floor(Math.random() * ORIGINS.length)];
  const trait = TRAITS[Math.floor(Math.random() * TRAITS.length)];

  return {
    id: `char-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: fullName,
    classType: selectedClass,
    classInfo: CHARACTER_CLASSES[selectedClass],
    title,
    origin,
    trait,
    timestamp: Date.now(),
  };
}

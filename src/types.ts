export type CharacterClassType =
  | 'Warrior'
  | 'Mage'
  | 'Rogue'
  | 'Paladin'
  | 'Ranger'
  | 'Cleric'
  | 'Bard'
  | 'Druid'
  | 'Warlock';

export interface CharacterClassInfo {
  id: CharacterClassType;
  name: string;
  roleTitle: string;
  description: string;
  primaryStat: string;
  signatureWeapon: string;
  colorTheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
}

export interface FantasyCharacter {
  id: string;
  name: string;
  classType: CharacterClassType;
  classInfo: CharacterClassInfo;
  title: string;
  origin: string;
  trait: string;
  timestamp: number;
}

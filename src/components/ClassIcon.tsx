import React from 'react';
import {
  Shield,
  Sparkles,
  Target,
  Sun,
  Compass,
  HeartPulse,
  Music,
  Trees,
  Flame,
} from 'lucide-react';
import { CharacterClassType } from '../types';

interface ClassIconProps {
  classType: CharacterClassType;
  className?: string;
}

export const ClassIcon: React.FC<ClassIconProps> = ({ classType, className = 'w-5 h-5' }) => {
  switch (classType) {
    case 'Warrior':
      return <Shield className={className} />;
    case 'Mage':
      return <Sparkles className={className} />;
    case 'Rogue':
      return <Target className={className} />;
    case 'Paladin':
      return <Sun className={className} />;
    case 'Ranger':
      return <Compass className={className} />;
    case 'Cleric':
      return <HeartPulse className={className} />;
    case 'Bard':
      return <Music className={className} />;
    case 'Druid':
      return <Trees className={className} />;
    case 'Warlock':
      return <Flame className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

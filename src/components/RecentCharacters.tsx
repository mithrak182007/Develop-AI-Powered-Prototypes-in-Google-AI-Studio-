import React from 'react';
import { History, ArrowRight } from 'lucide-react';
import { FantasyCharacter } from '../types';
import { ClassIcon } from './ClassIcon';

interface RecentCharactersProps {
  characters: FantasyCharacter[];
  activeCharacterId: string;
  onSelectCharacter: (char: FantasyCharacter) => void;
}

export const RecentCharacters: React.FC<RecentCharactersProps> = ({
  characters,
  activeCharacterId,
  onSelectCharacter,
}) => {
  if (characters.length <= 1) return null;

  return (
    <div id="recent-characters-section" className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
      <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
        <History className="w-3.5 h-3.5" />
        <span>Generated Roster ({characters.length})</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {characters.map((char) => {
          const isActive = char.id === activeCharacterId;
          return (
            <button
              key={char.id}
              type="button"
              onClick={() => onSelectCharacter(char)}
              className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-stone-100 dark:bg-stone-800 border-stone-400 dark:border-stone-600 shadow-xs'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className={`p-1.5 rounded-lg ${char.classInfo.colorTheme.badgeBg} ${char.classInfo.colorTheme.badgeText}`}>
                  <ClassIcon classType={char.classType} className="w-3.5 h-3.5" />
                </span>
                <div className="truncate">
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">
                    {char.name}
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400">
                    {char.classType}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-2" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

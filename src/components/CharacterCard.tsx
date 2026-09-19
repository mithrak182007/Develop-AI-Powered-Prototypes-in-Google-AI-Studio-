import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Sparkles, MapPin, Feather, Zap } from 'lucide-react';
import { FantasyCharacter } from '../types';
import { ClassIcon } from './ClassIcon';

interface CharacterCardProps {
  character: FantasyCharacter;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `${character.name} — ${character.classType} (${character.classInfo.roleTitle})\nPrimary Stat: ${character.classInfo.primaryStat}\nSignature Weapon: ${character.classInfo.signatureWeapon}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API unavailable
    }
  };

  return (
    <motion.div
      key={character.id}
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      id="character-card"
      className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-all"
    >
      {/* Top Bar: Class Badge & Copy Action */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-100 dark:border-stone-800">
        <div
          id="character-class"
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase ${character.classInfo.colorTheme.badgeBg} ${character.classInfo.colorTheme.badgeText} border ${character.classInfo.colorTheme.border}`}
        >
          <ClassIcon classType={character.classType} className="w-4 h-4" />
          <span>Class: {character.classType}</span>
        </div>

        <button
          type="button"
          id="copy-character-btn"
          onClick={handleCopy}
          aria-label="Copy character details"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Main Character Header: Name and Epithet */}
      <div className="pt-6 pb-5">
        <div className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
          Fantasy Character
        </div>
        <h2
          id="character-name"
          className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 font-serif leading-tight"
        >
          {character.name}
        </h2>
        <p className="mt-1.5 text-sm sm:text-base font-medium text-stone-600 dark:text-stone-300 italic">
          "{character.title}" &bull; {character.classInfo.roleTitle}
        </p>
      </div>

      {/* Class Description */}
      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed pb-5 border-b border-stone-100 dark:border-stone-800">
        {character.classInfo.description}
      </p>

      {/* Attribute Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5 text-left">
        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Primary Stat</span>
          </div>
          <p className="mt-1 text-sm font-bold text-stone-800 dark:text-stone-100">
            {character.classInfo.primaryStat}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Signature Armament</span>
          </div>
          <p className="mt-1 text-sm font-bold text-stone-800 dark:text-stone-100">
            {character.classInfo.signatureWeapon}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Realm of Origin</span>
          </div>
          <p className="mt-1 text-sm font-bold text-stone-800 dark:text-stone-100">
            {character.origin}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            <Feather className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            <span>Distinctive Trait</span>
          </div>
          <p className="mt-1 text-sm font-bold text-stone-800 dark:text-stone-100">
            {character.trait}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

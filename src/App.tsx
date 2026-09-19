import { useState, useTransition } from 'react';
import { Sparkles, Dices, Shield, Wand2, RefreshCw } from 'lucide-react';
import { generateRandomCharacter } from './data/fantasyData';
import { FantasyCharacter } from './types';
import { CharacterCard } from './components/CharacterCard';
import { RecentCharacters } from './components/RecentCharacters';

export default function App() {
  const [character, setCharacter] = useState<FantasyCharacter>(() => generateRandomCharacter());
  const [history, setHistory] = useState<FantasyCharacter[]>([character]);
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    startTransition(() => {
      const newChar = generateRandomCharacter();
      setCharacter(newChar);
      setHistory((prev) => [newChar, ...prev.slice(0, 7)]);
    });
  };

  const handleSelectHistory = (selectedChar: FantasyCharacter) => {
    setCharacter(selectedChar);
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-800 dark:text-stone-200 flex flex-col items-center justify-start p-4 sm:p-6 md:p-10 font-sans selection:bg-amber-500/30">
      <main className="w-full max-w-xl mx-auto flex flex-col items-center">
        {/* App Title & Header */}
        <header className="w-full text-center mb-6 sm:mb-8 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Character Generator</span>
          </div>

          <h1
            id="app-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 font-serif"
          >
            Fantasy Character Creator
          </h1>

          <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-md mx-auto">
            Forge mythical champions, rogue scoundrels, and arcane mages with unique names and classes.
          </p>
        </header>

        {/* Primary Generator Action Button */}
        <div className="w-full flex flex-col items-center mb-6">
          <button
            type="button"
            id="generate-character-btn"
            onClick={handleGenerate}
            disabled={isPending}
            className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-base sm:text-lg text-white bg-stone-900 hover:bg-stone-800 dark:bg-amber-600 dark:hover:bg-amber-500 shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer disabled:opacity-75"
          >
            <Dices className="w-5 h-5 transition-transform group-hover:rotate-45" />
            <span>Generate Fantasy Character</span>
            {isPending && <RefreshCw className="w-4 h-4 animate-spin ml-1" />}
          </button>
          <span className="mt-2 text-xs text-stone-500 dark:text-stone-400">
            Click to summon a random hero
          </span>
        </div>

        {/* Character Card Display */}
        <div className="w-full">
          <CharacterCard character={character} />
        </div>

        {/* Recent Characters Roster */}
        <div className="w-full">
          <RecentCharacters
            characters={history}
            activeCharacterId={character.id}
            onSelectCharacter={handleSelectHistory}
          />
        </div>

        {/* Subtle Footer Note */}
        <footer className="mt-12 text-center text-xs text-stone-400 dark:text-stone-600">
          Fantasy Character Creator &bull; Powered by unique name & archetype generation
        </footer>
      </main>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { LANGUAGES } from '../constants';
import Card from './ui/Card';

const LanguageSelector: React.FC = () => {
  const navigate = useNavigate();
  const { selectLanguage } = useGame();

  const handleSelect = (language: typeof LANGUAGES[0]) => {
    selectLanguage(language);
    navigate('/path');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
          Welcome to <span className="text-violet-400">Enki</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Your gamified journey to mastering code begins here. Choose your path!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {LANGUAGES.map((lang) => (
          <Card key={lang.id} onClick={() => handleSelect(lang)}>
            <div className="p-8 flex flex-col items-center text-center">
              <div className={`p-4 rounded-full bg-slate-800 mb-6`}>
                {lang.logo}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{lang.name}</h2>
              <p className="text-slate-400">{lang.description}</p>
            </div>
            <div className={`h-2 bg-gradient-to-r ${lang.color} rounded-b-xl`}></div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
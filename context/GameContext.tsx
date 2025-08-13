
import React, { createContext, useState, ReactNode } from 'react';
import { Language, UserProgress, Lesson, Level } from '../types';
import { CURRICULUM } from '../constants';

interface GameContextType {
  selectedLanguage: Language | null;
  userProgress: UserProgress;
  lessons: Lesson[];
  curriculum: Level[];
  selectLanguage: (language: Language) => void;
  completeLesson: (lessonId: string, xp: number) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getLessonById: (lessonId: string) => Lesson | undefined;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({});

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    if (!userProgress[language.id]) {
      setUserProgress(prev => ({
        ...prev,
        [language.id]: { completedLessons: new Set(), xp: 0 }
      }));
    }
  };

  const completeLesson = (lessonId: string, xp: number) => {
    if (!selectedLanguage) return;
    setUserProgress(prev => {
      const newProgress = { ...prev };
      const langProgress = newProgress[selectedLanguage.id];
      if (langProgress && !langProgress.completedLessons.has(lessonId)) {
        langProgress.completedLessons.add(lessonId);
        langProgress.xp += xp;
      }
      return newProgress;
    });
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    if (!selectedLanguage) return false;
    return userProgress[selectedLanguage.id]?.completedLessons.has(lessonId) || false;
  };

  const curriculum = selectedLanguage ? CURRICULUM[selectedLanguage.id] || [] : [];
  const lessons = curriculum.flatMap(level => level.lessons);

  const getLessonById = (lessonId: string): Lesson | undefined => {
    return lessons.find(l => l.id === lessonId);
  }

  const value = {
    selectedLanguage,
    userProgress,
    lessons,
    curriculum,
    selectLanguage,
    completeLesson,
    isLessonCompleted,
    getLessonById,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

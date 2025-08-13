
export interface Language {
  id: string;
  name: string;
  logo: React.ReactNode;
  description: string;
  color: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  xp: number;
  initialCode: string;
}

export interface Level {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface LanguageCurriculum {
  [key: string]: Level[];
}

export interface UserProgress {
  [key: string]: {
    completedLessons: Set<string>;
    xp: number;
  };
}

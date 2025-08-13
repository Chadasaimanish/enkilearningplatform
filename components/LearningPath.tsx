import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { CheckCircleIcon } from './icons/Icons';

const LearningPath: React.FC = () => {
  const navigate = useNavigate();
  const { lessons, curriculum, selectedLanguage, userProgress, isLessonCompleted } = useGame();
  
  if (!selectedLanguage) {
    navigate('/'); 
    return null;
  }
  
  const progress = userProgress[selectedLanguage.id];
  const totalXP = progress ? progress.xp : 0;
  const completedCount = progress ? progress.completedLessons.size : 0;
  const totalLessons = lessons.length;
  const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;
  
  let styleCounter = 0;

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 bg-slate-900/50 p-4 rounded-xl border border-slate-800 backdrop-blur-sm">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mt-2">
                {selectedLanguage.name} Path
              </h1>
              <p className="text-slate-400">Your journey to mastering {selectedLanguage.name}.</p>
            </div>
            <div className="text-right">
               <div className="text-lg font-semibold text-amber-400">{totalXP} XP</div>
               <div className="text-sm text-slate-400">{completedCount} / {totalLessons} Lessons</div>
            </div>
          </div>
          <div className="w-full mt-4">
              <div className="bg-slate-700 rounded-full h-4">
                  <div className="bg-violet-500 h-4 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
              </div>
          </div>
        </header>

        {curriculum.map((level) => (
            <section key={level.id} className="mb-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-violet-400">{level.title}</h2>
                    <p className="text-slate-400 mt-2 max-w-2xl mx-auto">{level.description}</p>
                </div>

                <div className="relative">
                    {/* Dotted line background */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 h-full w-1 border-l-2 border-slate-800 border-dashed"></div>

                    <div className="space-y-4">
                        {level.lessons.map((lesson) => {
                            const lessonIndex = lessons.findIndex(l => l.id === lesson.id);
                            const isFirstLesson = lessonIndex === 0;
                            const previousLesson = isFirstLesson ? null : lessons[lessonIndex - 1];
                            const isCurrentlyUnlocked = isFirstLesson || (previousLesson ? isLessonCompleted(previousLesson.id) : false);
                            
                            const completed = isLessonCompleted(lesson.id);

                            const currentStyleIndex = styleCounter;
                            styleCounter++;

                            return (
                                <div key={lesson.id} className={`flex items-center w-full ${currentStyleIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                <div className={`w-1/2 ${currentStyleIndex % 2 === 0 ? 'pr-8' : 'pl-8 text-right'}`}>
                                    <Link to={isCurrentlyUnlocked ? `/lesson/${lesson.id}` : '#'} className={`group block p-6 rounded-xl transition-all duration-300 ${isCurrentlyUnlocked ? 'bg-slate-900/70 backdrop-blur-sm border border-slate-800 hover:border-violet-500 cursor-pointer' : 'bg-slate-800/50 border border-slate-800/50'}`}>
                                        <h3 className={`font-bold text-lg ${isCurrentlyUnlocked ? 'text-white' : 'text-slate-500'}`}>{lesson.title}</h3>
                                        <p className={`text-sm ${isCurrentlyUnlocked ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600'}`}>+ {lesson.xp} XP</p>
                                    </Link>
                                </div>
                                {/* Node on the timeline */}
                                <div className={`z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 ${completed ? 'bg-green-500 border-green-700' : isCurrentlyUnlocked ? 'bg-violet-500 border-violet-700' : 'bg-slate-600 border-slate-800'}`}>
                                    {completed ? <CheckCircleIcon className="w-6 h-6 text-white"/> : <span className="text-white font-bold">{lessonIndex + 1}</span>}
                                </div>
                                <div className="w-1/2"></div> {/* Spacer */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
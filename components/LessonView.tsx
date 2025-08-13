import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { evaluateCode, getHint } from '../services/geminiService';
import Button from './ui/Button';
import Card from './ui/Card';
import { CheckCircleIcon, XCircleIcon, LightBulbIcon } from './icons/Icons';

type EvaluationResult = {
  isCorrect: boolean;
  output: string;
  explanation: string;
} | null;

const LessonView: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { getLessonById, completeLesson, selectedLanguage } = useGame();
  
  const [lesson, setLesson] = useState(getLessonById(lessonId!));
  const [code, setCode] = useState(lesson?.initialCode || '');
  const [evaluation, setEvaluation] = useState<EvaluationResult>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [isHintLoading, setIsHintLoading] = useState(false);

  useEffect(() => {
    const currentLesson = getLessonById(lessonId!);
    if (currentLesson) {
        setLesson(currentLesson);
        setCode(currentLesson.initialCode);
    } else {
        navigate('/path');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId, getLessonById]);
  
  if (!lesson || !selectedLanguage) {
    return <div>Loading lesson...</div>;
  }

  const handleRunCode = async () => {
    setIsLoading(true);
    setEvaluation(null);
    const result = await evaluateCode(lesson.description, code, selectedLanguage.name);
    setEvaluation(result);
    setIsLoading(false);
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setEvaluation(null);
    const result = await evaluateCode(lesson.description, code, selectedLanguage.name);
    setEvaluation(result);
    if (result.isCorrect) {
      completeLesson(lesson.id, lesson.xp);
    }
    setIsSubmitting(false);
  };
  
  const handleGetHint = async () => {
    setIsHintLoading(true);
    setHint(null);
    const generatedHint = await getHint(lesson.description, code);
    setHint(generatedHint);
    setIsHintLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-950 font-sans">
      {/* Left Panel: Instructions */}
      <div className="lg:w-1/3 p-6 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-800">
        <div className="flex-grow">
          <Button variant="ghost" className="mb-4 -ml-4" onClick={() => navigate('/path')}>&larr; Back to Path</Button>
          <h1 className="text-2xl font-bold text-white mb-2">{lesson.title}</h1>
          <p className="text-slate-400 mb-6">{lesson.description}</p>
          <div className="space-y-4">
              <Button onClick={handleGetHint} isLoading={isHintLoading} variant="secondary" className="w-full">
                  <LightBulbIcon className="w-5 h-5" /> Get a Hint
              </Button>
              {hint && (
                  <Card className="p-4 bg-violet-900/50 border-violet-700">
                      <p className="text-violet-200">{hint}</p>
                  </Card>
              )}
          </div>
        </div>
        <div className="text-slate-500 text-sm mt-4">Powered by Gemini</div>
      </div>

      {/* Right Panel: Code Editor & Output */}
      <div className="lg:w-2/3 flex flex-col p-6 h-full">
        <h2 className="text-xl font-semibold mb-2 text-white">Code Editor</h2>
        <div className="flex-grow flex flex-col">
            <textarea
              className="font-mono bg-slate-900 text-slate-100 p-4 rounded-t-lg border border-slate-700 focus:ring-2 focus:ring-violet-500 focus:outline-none w-full flex-grow resize-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
            />
            
            {/* Output / Console */}
            <div className="bg-slate-900 p-4 rounded-b-lg border-x border-b border-slate-700 h-48 overflow-y-auto">
                <h3 className="text-lg font-semibold text-slate-300 mb-2">Output</h3>
                {isLoading || isSubmitting ? (
                    <div className="flex items-center text-slate-400">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Evaluating...
                    </div>
                ) : evaluation ? (
                    <div>
                         {evaluation.isCorrect ? (
                             <div className="flex items-center gap-2 text-green-400"><CheckCircleIcon className="w-5 h-5"/> Correct!</div>
                         ) : (
                             <div className="flex items-center gap-2 text-red-400"><XCircleIcon className="w-5 h-5"/> Needs Improvement</div>
                         )}
                         <p className="text-slate-400 mt-2 text-sm italic">{evaluation.explanation}</p>
                         <pre className="font-mono text-slate-300 mt-4 whitespace-pre-wrap">{evaluation.output}</pre>
                    </div>
                ) : (
                    <p className="text-slate-500 font-mono">Click "Run Code" to see the output here.</p>
                )}

                {evaluation?.isCorrect && (
                     <div className="mt-4 p-4 bg-green-900/50 border border-green-700 rounded-lg text-center">
                        <h4 className="font-bold text-green-300">Lesson Complete! You earned {lesson.xp} XP.</h4>
                        <Button onClick={() => navigate('/path')} className="mt-2">Next Lesson</Button>
                    </div>
                )}
            </div>
        </div>
        
        <div className="mt-4 flex gap-4">
            <Button onClick={handleRunCode} isLoading={isLoading} className="flex-1">Run Code</Button>
            <Button onClick={handleSubmit} isLoading={isSubmitting} variant="primary" className="flex-1">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;
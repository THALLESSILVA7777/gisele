
import React, { useState, useCallback, useMemo } from 'react';
import { SECTIONS, QUESTIONS } from './constants';
import { QuizState, AIAnalysis } from './types';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultView } from './components/ResultView';
const handleAnalyze = async () => {
  setIsAnalyzing(true);

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        respostas: state.answers,
      }),
    });

    const data = await response.json();
    setAnalysis(data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsAnalyzing(false);
  }
};

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentStep: 0,
    answers: {},
    isComplete: false
  });
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);

  const currentQuestion = QUESTIONS[state.currentStep];
  const currentSection = SECTIONS.find(s => s.id === currentQuestion.section);
  
  // Calculate block (grouping sections into 4 blocks as requested)
  const currentBlock = useMemo(() => {
    const secId = currentQuestion.section;
    if (secId <= 3) return { num: 1, name: "DNA & Mercado" };
    if (secId <= 6) return { num: 2, name: "Oferta & Vendas" };
    if (secId <= 9) return { num: 3, name: "Operação & Escala" };
    return { num: 4, name: "Mindset & Expansão" };
  }, [currentQuestion]);

  const handleAnswer = useCallback((id: number, value: string | string[]) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [id]: value }
    }));
  }, []);

  const nextStep = async () => {
    const isLast = state.currentStep === QUESTIONS.length - 1;
    
    if (isLast) {
      setIsAnalyzing(true);
      const result = await analyzeBriefing(state.answers);
      setAnalysis(result);
      setState(prev => ({ ...prev, isComplete: true }));
      setIsAnalyzing(false);
    } else {
      setState(prev => ({ ...prev, currentStep: prev.currentStep + 1 }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (state.currentStep > 0) {
      setState(prev => ({ ...prev, currentStep: prev.currentStep - 1 }));
    }
  };

  const canContinue = useMemo(() => {
    const ans = state.answers[currentQuestion.id];
    if (!currentQuestion.required) return true;
    if (currentQuestion.type === 'multiSelect') return Array.isArray(ans) && ans.length > 0;
    return !!ans;
  }, [state.answers, currentQuestion]);

  if (state.isComplete && analysis) {
    return (
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <ResultView analysis={analysis} />
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-4">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-brain text-2xl text-blue-400 animate-pulse"></i>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold font-jakarta">Processando Inteligência...</h2>
          <p className="text-slate-400 animate-pulse">Nossa IA está analisando seus dados para gerar o diagnóstico.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
            Bloco {currentBlock.num}: {currentBlock.name}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-jakarta tracking-tight">
            Briefing Estratégico
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Seção {currentSection?.id}/12: {currentSection?.title}
          </p>
        </div>

        {/* Quiz Container */}
        <div className="glass-morphism rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <ProgressBar current={state.currentStep + 1} total={QUESTIONS.length} />
          
          <div className="min-h-[300px] flex flex-col justify-center">
            <QuestionCard 
              question={currentQuestion} 
              value={state.answers[currentQuestion.id] || ''} 
              onChange={handleAnswer} 
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-700/50">
            <button
              onClick={prevStep}
              disabled={state.currentStep === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                state.currentStep === 0 
                  ? 'opacity-30 cursor-not-allowed text-slate-500' 
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <i className="fas fa-arrow-left text-xs"></i>
              Anterior
            </button>

            <button
              onClick={nextStep}
              disabled={!canContinue}
              className={`px-10 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 ${
                canContinue 
                  ? 'bg-blue-600 hover:bg-blue-50 hover:shadow-blue-500/20 text-white' 
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              {state.currentStep === QUESTIONS.length - 1 ? 'Finalizar e Analisar' : 'Continuar'}
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-slate-500 text-xs">
          Responda com clareza para um diagnóstico mais preciso. <br className="md:hidden" />
          Pressione Enter para avançar.
        </div>
      </div>
    </div>
  );
};

export default App;

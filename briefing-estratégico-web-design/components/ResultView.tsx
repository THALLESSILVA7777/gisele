
import React from 'react';
import { AIAnalysis } from '../types';

interface ResultViewProps {
  analysis: AIAnalysis;
}

export const ResultView: React.FC<ResultViewProps> = ({ analysis }) => {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-700">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 text-blue-500 mb-4">
          <i className="fas fa-award text-3xl"></i>
        </div>
        <h2 className="text-3xl font-bold font-jakarta bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Seu Diagnóstico Estratégico está Pronto
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          Analisamos profundamente sua estrutura atual e objetivos para traçar o caminho mais rápido para a performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-morphism p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <i className="fas fa-stethoscope text-blue-500"></i>
            Diagnóstico Atual
          </h3>
          <p className="text-slate-300 leading-relaxed italic">
            "{analysis.diagnosis}"
          </p>
        </div>

        <div className="glass-morphism p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <i className="fas fa-ticket-alt text-blue-500"></i>
            Ticket Ideal Sugerido
          </h3>
          <div className="text-4xl font-extrabold text-blue-400">
            {analysis.suggestedTicket}
          </div>
          <p className="text-xs text-slate-500">
            Baseado na sua experiência e transformação prometida.
          </p>
        </div>

        <div className="glass-morphism p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <i className="fas fa-exclamation-triangle text-amber-500"></i>
            Gargalos Identificados
          </h3>
          <ul className="space-y-2">
            {analysis.bottlenecks.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-slate-300">
                <i className="fas fa-chevron-right text-[10px] text-amber-500"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-morphism p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <i className="fas fa-road text-green-500"></i>
            Roadmap de Implementação
          </h3>
          <ul className="space-y-2">
            {analysis.roadmap.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-300">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-500 text-xs flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold transition-all"
        >
          Refazer Diagnóstico
        </button>
      </div>
    </div>
  );
};

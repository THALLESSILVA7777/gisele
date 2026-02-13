
import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  value: string | string[];
  onChange: (id: number, value: string | string[]) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, value, onChange }) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(question.id, e.target.value);
  };

  const handleSelect = (option: string) => {
    onChange(question.id, option);
  };

  const handleMultiSelect = (option: string) => {
    const current = Array.isArray(value) ? value : [];
    if (current.includes(option)) {
      onChange(question.id, current.filter(i => i !== option));
    } else {
      onChange(question.id, [...current, option]);
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <label className="block text-lg font-semibold text-slate-100 mb-2">
        {question.label}
        {question.required && <span className="text-blue-500 ml-1">*</span>}
      </label>

      {question.type === 'short' && (
        <input
          type="text"
          value={typeof value === 'string' ? value : ''}
          onChange={handleTextChange}
          placeholder="Sua resposta..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      )}

      {question.type === 'paragraph' && (
        <textarea
          rows={4}
          value={typeof value === 'string' ? value : ''}
          onChange={handleTextChange}
          placeholder="Desenvolva sua resposta aqui..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
        />
      )}

      {question.type === 'select' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.options?.map(option => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-4 text-left rounded-xl border transition-all ${
                value === option 
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400' 
                  : 'border-slate-700 bg-slate-900 hover:border-slate-500 text-slate-400'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === 'multiSelect' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.options?.map(option => {
            const isSelected = Array.isArray(value) && value.includes(option);
            return (
              <button
                key={option}
                onClick={() => handleMultiSelect(option)}
                className={`p-4 text-left rounded-xl border transition-all flex items-center justify-between ${
                  isSelected 
                    ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' 
                    : 'border-slate-700 bg-slate-900 hover:border-slate-500 text-slate-400'
                }`}
              >
                <span>{option}</span>
                {isSelected && <i className="fas fa-check-circle"></i>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

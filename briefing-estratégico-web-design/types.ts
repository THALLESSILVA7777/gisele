
export type QuestionType = 'text' | 'paragraph' | 'select' | 'multiSelect' | 'short';

export interface Question {
  id: number;
  section: number;
  label: string;
  type: QuestionType;
  options?: string[];
  required: boolean;
  placeholder?: string;
}

export interface Section {
  id: number;
  title: string;
  description?: string;
}

export interface QuizState {
  currentStep: number;
  answers: Record<number, string | string[]>;
  isComplete: boolean;
}

export interface AIAnalysis {
  diagnosis: string;
  roadmap: string[];
  bottlenecks: string[];
  suggestedTicket: string;
}

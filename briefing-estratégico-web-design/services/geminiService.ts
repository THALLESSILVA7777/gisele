
import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysis } from "../types";

export async function analyzeBriefing(answers: Record<number, string | string[]>): Promise<AIAnalysis> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Analise os dados deste briefing estratégico de uma Web Designer e gere um diagnóstico premium e personalizado.
    Dados do Briefing:
    ${JSON.stringify(answers)}

    Retorne APENAS um JSON no formato:
    {
      "diagnosis": "Um texto curto e direto (2 parágrafos) analisando a situação atual.",
      "roadmap": ["Passo 1", "Passo 2", "Passo 3", "Passo 4", "Passo 5"],
      "bottlenecks": ["Gargalo 1", "Gargalo 2", "Gargalo 3"],
      "suggestedTicket": "R$ Valor sugerido baseado nos objetivos"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnosis: { type: Type.STRING },
            roadmap: { type: Type.ARRAY, items: { type: Type.STRING } },
            bottlenecks: { type: Type.ARRAY, items: { type: Type.STRING } },
            suggestedTicket: { type: Type.STRING }
          },
          required: ["diagnosis", "roadmap", "bottlenecks", "suggestedTicket"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Erro na análise da IA:", error);
    return {
      diagnosis: "Não foi possível gerar a análise automática no momento. Nossos consultores entrarão em contato.",
      roadmap: ["Otimização de processos", "Ajuste de precificação", "Escalabilidade de funil"],
      bottlenecks: ["Falta de clareza estratégica", "Dependência de indicação"],
      suggestedTicket: "R$ 3.000,00 - R$ 7.000,00"
    };
  }
}

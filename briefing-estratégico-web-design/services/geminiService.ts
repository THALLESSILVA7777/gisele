import { GoogleGenerativeAI } from "@google/genai";
import { AIAnalysis } from "../types";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function analyzeBriefing(respostas: Record<string, string>): Promise<AIAnalysis> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Analise os dados deste briefing estratégico de um Web Designer e gere um diagnóstico premium e personalizado.

    Dados do Briefing:
    ${JSON.stringify(respostas)}

    Retorne APENAS em JSON no formato:
    {
      "diagnosis": "Texto curto analisando a situação",
      "roteiro": ["Passo 1", "Passo 2", "Passo 3"],
      "gargalos": ["Gargalo 1", "Gargalo 2"],
      "suggestedTicket": "R$ valor sugerido"
    }
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return JSON.parse(text);

  } catch (error) {
    console.error("Erro na análise da IA:", error);

    return {
      diagnosis: "Não foi possível gerar análise automática no momento.",
      roteiro: ["Ajustar posicionamento", "Otimizar oferta", "Melhorar funil"],
      gargalos: ["Falta de clareza estratégica", "Estrutura comercial fraca"],
      suggestedTicket: "R$ 3.000,00 - R$ 7.000,00"
    };
  }
}

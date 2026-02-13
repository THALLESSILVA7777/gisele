import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { respostas } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Analise os dados deste briefing estratégico de um Web Designer e gere um diagnóstico premium e personalizado.
    
    Dados do Briefing:
    ${JSON.stringify(respostas)}
    
    Retorne APENAS em JSON no formato:
    {
      "diagnostico": "Texto curto",
      "roteiro": ["Passo 1", "Passo 2", "Passo 3"],
      "gargalos": ["Gargalo 1", "Gargalo 2"],
      "ticketSugerido": "R$ valor"
    }
    `;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    return res.status(200).json(JSON.parse(text));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao analisar briefing" });
  }
}

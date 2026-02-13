import { GoogleGenerativeAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { respostas } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Analise os dados deste briefing estratégico de um Web Designer.

    ${JSON.stringify(respostas)}

    Retorne em JSON:
    {
      "diagnosis": "...",
      "roteiro": [],
      "gargalos": [],
      "suggestedTicket": ""
    }
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return res.status(200).json(JSON.parse(text));

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro na análise" });
  }
}

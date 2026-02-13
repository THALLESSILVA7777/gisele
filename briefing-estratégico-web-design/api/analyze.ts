import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const { respostas } = req.body;

    const prompt = `
    Analise os dados deste briefing estratégico de Web Designer:
    ${JSON.stringify(respostas)}

    Retorne em JSON:
    {
      "diagnostico": "",
      "roteiro": [],
      "gargalos": [],
      "ticket_sugerido": ""
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

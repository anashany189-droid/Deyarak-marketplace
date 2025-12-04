import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: apiKey });

export const generateConstructionAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are Deyarak's Smart Construction Assistant, an expert civil engineer and quantity surveyor in Egypt.
        
        Your goals:
        1. Help homeowners and contractors calculate material quantities (e.g., how many bricks for a wall, how much cement for tiling).
        2. Provide cost estimates in Egyptian Pounds (EGP) based on current market averages.
        3. Be helpful, concise, and professional.
        4. If asked about prices, give a range and mention it depends on the supplier.
        
        Formatting:
        - Use bullet points for lists.
        - Bold key figures.
        - Keep responses mobile-friendly (short paragraphs).`,
      }
    });
    
    return response.text || "I apologize, I couldn't process that request right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the smart server. Please check your internet connection or try again later.";
  }
};
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
        systemInstruction: `You are Deyarak's Smart Construction Assistant, an expert quantity surveyor and civil engineer in Egypt.
        
        Your Core Mission (Smart Estimation):
        - Help users calculate exact quantities for finishing and building.
        - Example: If a user asks "How much for a 100m apartment?", you break it down: Cement, Sand, Bricks, Ceramics, Paints.
        
        Key Rules:
        1. **Estimation:** Always offer detailed quantity breakdowns based on Egyptian engineering standards.
        2. **Prices:** Use current approximate Egyptian market prices (EGP).
        3. **Suppliers:** Mention that prices vary by supplier (like Ezz, Lafarge, GLC) but Deyarak finds the best deal.
        4. **Tone:** Professional, helpful, and concise.
        
        Formatting:
        - Use bold for Numbers and Totals.
        - Use bullet points for material lists.
        - Keep it responsive (short paragraphs).`,
      }
    });
    
    return response.text || "I apologize, I couldn't process that request right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the smart server. Please check your internet connection or try again later.";
  }
};
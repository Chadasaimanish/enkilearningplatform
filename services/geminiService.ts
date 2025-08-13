
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = "AIzaSyDACb5gKBzKn5Eo1yoluBB0u6ML1kJ-yO8";

// Only initialize the client if the API key exists. This prevents crashes.
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

if (!ai) {
  console.warn("Gemini API key not configured. AI features will be disabled. Please provide an API_KEY environment variable.");
}

export const evaluateCode = async (problem: string, code: string, language: string) => {
  if (!ai) {
    return {
      isCorrect: false,
      output: "AI Service Not Configured.",
      explanation: "The developer needs to provide a Gemini API key to enable code evaluation."
    };
  }

  const model = "gemini-2.5-flash";
  const prompt = `
    As a code evaluator for a learning platform, analyze the following code snippet written in ${language}.
    The problem description is: "${problem}".

    User's code:
    \`\`\`${language}
    ${code}
    \`\`\`

    Evaluate the code based on the problem description.
    1. Determine if the code correctly solves the problem.
    2. Simulate the output of running this code.

    Return a JSON object.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isCorrect: {
              type: Type.BOOLEAN,
              description: "Whether the user's code correctly solves the problem."
            },
            output: {
              type: Type.STRING,
              description: "The simulated console output of the code. If there's an error, describe it."
            },
            explanation: {
                type: Type.STRING,
                description: "A brief, one-sentence explanation of why the code is correct or incorrect."
            }
          },
          required: ["isCorrect", "output", "explanation"]
        }
      }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error evaluating code with Gemini:", error);
    return {
      isCorrect: false,
      output: "An error occurred while evaluating the code. Please try again.",
      explanation: "Could not connect to the AI service."
    };
  }
};

export const getHint = async (problem: string, code: string) => {
  if (!ai) {
    return "Hint service is unavailable. Please configure the Gemini API key.";
  }
  
  const model = "gemini-2.5-flash";
  const prompt = `
    You are a friendly and encouraging programming tutor.
    A student is stuck on a coding problem.
    The problem is: "${problem}".
    Their current code is: \`\`\`${code}\`\`\`
    Provide a short, helpful hint to guide them. Do not give the full answer.
    Focus on the next logical step. Keep it to 1-2 sentences.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error getting hint from Gemini:", error);
    return "Sorry, I couldn't generate a hint right now. Please check your connection and try again.";
  }
};

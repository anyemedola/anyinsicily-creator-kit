import { callGroq } from "./groqService.js";
import { systemPrompt } from "../templates/systemPrompt.js";

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error("Invalid JSON from AI");
  }
}

export async function generateEmail({ template, brand, contactName, subject, signature, niche, product }) {
  const prompt = `
${systemPrompt(template, brand, niche)}

Brand: ${brand}
Contact name: ${contactName || 'not provided'}
Subject line (user-edited): ${subject || 'not provided'}
Signature (user-edited): ${signature || 'not provided'}
Niche: ${niche}
Product: ${product}
`;

  const response = await callGroq(prompt);

  return safeParse(response);
}
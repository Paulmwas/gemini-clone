// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key from an environment variable or configuration file
const API_KEY = "AIzaSyDqf069PDOf1jqyp7cIQ4u2C17cfe9Zucg"; // Replace with your actual API key or use environment variable

const genAI = new GoogleGenerativeAI(API_KEY);

export async function run(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text; // Return the text if needed
    } catch (error) {
        console.error("Error generating content:", error);
        throw error; // Re-throw the error if needed
    }
}

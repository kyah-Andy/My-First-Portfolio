# Portfolio Chatbot Setup

This project features an AI-powered chatbot assistant using the **Google Gemini API**.

## Features
- **AI Persona**: "Andy's Portfolio Assistant" trained on Andy's official resume.
- **Real-time Chat**: Interactive UI with message history and typing indicators.
- **Secure Integration**: Uses environment variables for the Gemini API key.

---

## Local Development

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **Gemini API Key**: Obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Run the App
```bash
npm install
npm run dev
```
The app will be available at `http://localhost:3000`.

---

## Chatbot Persona: "Andy's Portfolio Assistant"
The assistant's knowledge is configured in `src/components/Chatbot.tsx` within the `PORTFOLIO_CONTEXT` constant. It includes details about Andy's skills, experience at Accenture, and various data engineering projects.

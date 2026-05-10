# Portfolio Chatbot Setup & Deployment

This project has been upgraded to a full-stack architecture (Express + React + Vite) to support a secure, AI-powered chatbot assistant using the **Google Gemini API**.

## Features
- **AI Persona**: "Andy's Portfolio Assistant" trained on Andy's skills, projects, and certifications.
- **Real-time Chat**: Interactive UI with message history and loading animations.
- **Secure Integration**: Leveraging platform-managed environment variables for the Gemini API.

---

## Local Development Instructions

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Gemini API Key**: Obtain one from the [Google AI Studio](https://aistudio.google.com/app/apikey).

### 2. Environment Setup
Create a `.env` file in the root directory (based on `.env.example`):
```env
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Installation
Install all dependencies:
```bash
npm install
```

### 4. Run the Dev Server
Start the full-stack application (server.ts + Vite):
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

---

## Deployment Instructions

### Online Deployment (AI Studio / Cloud Run)
1. **Push to GitHub**: If you haven't already, push your code to a GitHub repository.
2. **Set Environment Variables**: In your deployment platform (e.g., Cloud Run or AI Studio Settings), add a new environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: `your_api_key_from_google_ai_studio`
3. **Build & Start**: The platform will automatically run:
   - `npm run build` (Compiles the React frontend and the Express server)
   - `npm start` (Runs the production server via Node.js)

### Manual Deployment
If deploying to a VPS (e.g., Heroku, DigitalOcean):
```bash
# Build the project
npm run build

# Start the server in production mode
NODE_ENV=production npm start
```

---

## Chatbot Persona: "Andy's Portfolio Assistant"
The assistant is configured in `src/components/Chatbot.tsx`. It uses a system instruction (context) that includes details found in `App.tsx`:
- **Skills**: Azure, Python, SQL, Power BI, ETL.
- **Experience**: Accenture (L2 Support), Fiberhome (OSP Design).
- **Projects**: Telecom Churn Analysis, Superstore Dashboard, Azure ETL Pipeline.

You can modify the `PORTFOLIO_CONTEXT` constant in `src/components/Chatbot.tsx` to update the information the bot knows about you.

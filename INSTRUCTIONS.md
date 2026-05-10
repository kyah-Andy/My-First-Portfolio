# Portfolio Chatbot Setup & Deployment

This project uses a production-ready **Node.js + Express** backend to securely connect your chatbot to the **Google Gemini API**.

## Features
- **Secure Backend**: API keys are never exposed to the browser.
- **Gemini 1.5 Flash**: Fast and intelligent responses.
- **Custom Persona**: Controlled via `PORTFOLIO_CONTEXT` in the frontend.
- **CORS Enabled**: Ready for deployment on GitHub Pages or custom domains.
- **Typing Indicators**: Visual feedback for better UX.

---

## Local Development Instructions

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **Gemini API Key**: [Get it here](https://aistudio.google.com/app/apikey).

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_key_here
```

### 3. Run Locally
```bash
# Install dependencies
npm install

# Start the dev server (Both Frontend & Backend)
npm run dev
```
The app will run at `http://localhost:3000`.

---

## Deployment Instructions

### Option 1: Render (Recommended for Backend)
1. **New Web Service**: Connect your GitHub repository to [Render](https://render.com/).
2. **Build Command**: `npm install && npm run build`
3. **Start Command**: `npm start`
4. **Environment Variables**: Add `GEMINI_API_KEY` in the Render dashboard.

### Option 2: GitHub Pages (Frontend Only)
If you host the frontend on GitHub Pages:
1. Update `origin` in `server.ts` to allow your `.github.io` domain.
2. Ensure your backend is deployed (e.g., on Render) and update the `fetch` URL in `Chatbot.tsx` to your Render absolute URL (e.g., `https://your-app.onrender.com/api/chat`).

---

## API Documentation
### POST `/api/chat`
- **Request Body**:
  ```json
  {
    "message": "Hello!",
    "context": "Professional assistant...",
    "history": []
  }
  ```
- **Response**:
  ```json
  {
    "reply": "Hi! How can I help you today?"
  }
  ```

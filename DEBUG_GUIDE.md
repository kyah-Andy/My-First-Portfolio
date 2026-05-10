# Environment Variables & Chatbot Debug Guide

This guide explains how to properly handle environment variables in a Vite + React project and why your chatbot might have stopped working after deploying to GitHub.

---

### 1. Storing Variables: `.env` vs `.env.local` vs `.env.example`

In a modern Node.js/Vite project, we use different files to manage environment variables:

- **`.env.local` (Git Ignored):** This is where you store your **ACTUAL** secrets (like your Gemini API Key). This file should NEVER be committed to GitHub.
- **`.env.example` (Committed):** This acts as a template. It contains the *keys* but not the *values* (e.g., `GEMINI_API_KEY=your_key_here`). It tells other developers which variables are required.
- **`.env` (Committed/Optional):** Used for public configuration that doesn't change between environments (e.g., `PORT=3000`).

**Action:** Add `.env.local` to your `.gitignore` immediately.

---

### 2. The `VITE_` Prefix Requirement

By default, Vite does not load environment variables into your client-side code for security reasons. 

If you want to access a variable in the **frontend/browser**, it **MUST** be prefixed with `VITE_`:
- `VITE_GEMINI_API_KEY=xyz` -> Exposed to the browser.
- `GEMINI_API_KEY=xyz` -> ONLY available in the Node.js backend (Secure).

---

### 3. Accessing Keys in Code

Vite uses `import.meta.env` instead of the traditional Node.js `process.env`:

```javascript
// ✅ Frontend (Vite)
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// ❌ Frontend (Standard Vite) - This will be undefined
const apiKey = process.env.GEMINI_API_KEY;

// ✅ Backend (Node.js/Express)
const apiKey = process.env.GEMINI_API_KEY;
```

---

### 4. Deployment Platforms (Vercel, Netlify, Render)

When you deploy, you don't upload `.env` files. Instead, you configure them in the platform's dashboard:

1. Go to your **Project Settings**.
2. Find the **Environment Variables** section.
3. Add `GEMINI_API_KEY` (and `VITE_GEMINI_API_KEY` if used in frontend).
4. Redeploy your app.

---

### 5. GitHub Pages Limitations

**CRITICAL:** GitHub Pages is for **static sites** only.
- It does **not** have a backend to keep secrets hidden.
- If you use `VITE_GEMINI_API_KEY` on GitHub Pages, **your API key is public**. Anyone can open "Inspect Element" -> "Network" and see your key in the bundle.

**The Solution (Proxy Pattern):**
Host your backend (Express server) on a platform like **Render**, **Railway**, or **Vercel**. Your GitHub Pages frontend then calls your backend API, which securely holds the key and calls Gemini.

---

### 6. Debugging Common Errors

- **401 Unauthorized:** Your API key is incorrect, expired, or the variable isn't being loaded correctly. Check if `dotenv.config()` is called at the very top of your backend.
- **CORS Issues:** Browsers block requests from one domain (GitHub Pages) to another (your backend). 
  - **Fix:** In your Express app, use the `cors` middleware: `app.use(cors({ origin: 'https://your-github-username.github.io' }))`.
- **Missing Dependencies:** Ensure `@google/genai` is in your `package.json` and you've run `npm install`.

---

### 7. Best Practices for Security

1. **Never commit secrets:** Always use `.env.local` and keep it out of Git.
2. **Use a Proxy Backend:** Always call sensitive APIs (like Gemini) from a backend server, never directly from the browser.
3. **Rotate Keys:** If you accidentally commit a key, delete it immediately in [Google AI Studio](https://aistudio.google.com/app/apikey) and generate a new one.
4. **Rate Limiting:** Protect your backend API from being abused by adding a library like `express-rate-limit`.

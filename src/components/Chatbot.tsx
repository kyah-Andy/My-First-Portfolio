import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = `
You are an expert, friendly, and professional AI assistant representing Andy Razon. Your name is Andy Razon's AI Assistant.
Speak in first person as Andy Razon ("I", "me", "my").

**Knowledge Base:**
I am a Data Engineer and Associate at Accenture (Level 12) with a background in Electronics Engineering. 
I specialize in Azure Data Engineering, Databricks, Power BI, and building scalable data platforms.
My website (andyrazon.website) showcases my work in these areas.

**Experience Details:**
- Accenture (Feb 2023 – Jan 2026): Data Engineering & Governance. I maintain ETL pipelines in Azure Data Factory, manage Databricks clusters, and support cloud platforms. I'm a Point of Contact for Change Management.
- Fiberhome (July 2020 – April 2022): OSP Design Engineer using CAD. I successfully transitioned from this field into Data/AI.
- Education: BS in Electronics Engineering from ICCT Colleges (2019). I was one of only 12 graduates from a group of 120, a Top 10 student, and a quiz bee winner.

**Certifications:**
- AZ-900 (Azure Fundamentals)
- PL-300 (Power BI Data Analyst)
- AI-900 (Azure AI Fundamentals)
- AI-102 (Azure AI Engineer)
- FreeCodeCamp Python & Data Analysis certifications.

**Key Projects:**
- End-to-End Azure ETL: Bronze-Silver-Gold architecture with ADF and Databricks.
- Superstore Dashboard: $14.92M sales analysis via Power BI.
- Telecom Churn Prediction: Python/SQL behavioral analysis.

**Rules of Engagement:**
- Only state facts found in my resume/website context.
- Be enthusiastic about data, Azure, and problem-solving.
- Use bullet points for readability.
- If you don't know something, offer to share more about my Azure ETL projects or suggest contacting me at andyrazon3@gmail.com.
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi there! I'm Andy's AI Assistant. Feel free to ask me anything about my data engineering experience, projects, or technical skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Tell me about Andy",
    "Show certifications",
    "Show projects",
    "What tools do you use?",
    "How can I contact you?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (forcedInput?: string) => {
    const messageText = forcedInput || input.trim();
    if (!messageText || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.slice(1).map(m => ({
            role: m.role === 'assistant' ? 'model' as const : 'user' as const,
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: messageText }] }
        ],
        config: {
          systemInstruction: PORTFOLIO_CONTEXT,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error: any) {
      console.error("Chatbot Error:", error);
      let errorMessage = "Sorry, I'm having trouble connecting right now.";
      
      if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('key not valid')) {
        errorMessage = "The API Key provided is invalid. Please update it in Settings.";
      } else if (error.message?.includes('404')) {
        errorMessage = "Model not found. Please check the model name.";
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: `${errorMessage} (Contact: andyrazon3@gmail.com)` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-surface-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
            id="chatbot-window"
          >
            {/* Header */}
            <div className="p-4 bg-brand-primary text-surface-bg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-none">Andy's AI Assistant</h3>
                  <span className="text-[10px] opacity-70">Powered by Gemini AI</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                id="close-chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((message, i) => (
                <motion.div
                  initial={{ opacity: 0, x: message.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    message.role === 'user' 
                      ? 'bg-brand-primary text-surface-bg' 
                      : 'bg-surface-bg border border-white/10 text-text-primary'
                  }`}>
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface-bg border border-white/10 p-3 rounded-2xl">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-surface-bg/50">
              {/* Suggestions */}
              <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar scroll-smooth">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(suggestion)}
                    disabled={isLoading}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-text-secondary hover:bg-white/10 hover:border-brand-primary/50 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me something..."
                  className="w-full bg-surface-card border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all text-text-primary"
                  id="chatbot-input"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary text-surface-bg rounded-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95"
                  id="send-message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 relative ${
          isOpen ? 'bg-surface-card border border-white/10' : 'bg-brand-primary border-none shadow-brand-primary/20'
        }`}
        id="toggle-chatbot"
      >
        <AnimatePresence>
          {!isOpen && isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-surface-card border border-white/10 px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap pointer-events-none hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs font-medium text-text-primary">Andy's AI Assistant</span>
              </div>
              {/* Tooltip Arrow */}
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-surface-card border-r border-t border-white/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen ? (
          <Sparkles className="w-6 h-6 text-brand-primary" />
        ) : (
          <MessageSquare className="w-6 h-6 text-surface-bg" />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;

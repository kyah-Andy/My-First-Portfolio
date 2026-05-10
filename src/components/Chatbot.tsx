import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = `
You are "Andy's Portfolio Assistant", a helpful and professional AI guide for Andy S. Razon's portfolio website.
Your goal is to answer questions about Andy's skills, experience, projects, and certifications based on the following information:

Andy S. Razon is a Data Scientist, Data Engineer, and BI Analyst based in Rizal, Philippines.
Contact: andyrazon3@gmail.com | 09208975952
LinkedIn: linkedin.com/in/andy-razon-9b9817255

TECHNICAL SKILLS:
- Data Engineering: Azure Data Factory, Azure Databricks, Azure SQL, ETL Pipelines, Azure Storage, Azure Key Vault.
- Data Science & Analytics: Python, SQL, Exploratory Data Analysis (EDA), Statistical Modeling, Numpy/Pandas, Excel.
- Business Intelligence: Power BI, DAX, Data Modeling, SSIS/SSRS/SSAS, Insight Visualization.
- Professional: Problem-Solving, Analytical Thinking, Strategic Planning, Project Management.

WORK HISTORY:
1. App/Cloud Support Engineer (L2) at Accenture, Inc. (Feb 2023 – Jan 2026): Escalation point for Data Platform investigations, collaborated with Microsoft Engineers, managed Azure resources.
2. OSP Design Engineer at Wuhan Fiberhome International Technologies (July 2020 – April 2022): Optimized design processes using CAD, conducted design assessments.

EDUCATION:
- B.S. in Electronics Engineering (BSECE) from ICCT Colleges Foundation, Inc. (Graduated Jan 2019).
- College Journey Highlights: Andy aimed for Latin honors but faced early setbacks. He persevered, ranking in the Top 10 of his batch in the 2nd year. He was a consistent quiz bee participant and won 3rd place in PalaIECEPAN 2018: Battle of InQUIZitive Minds. He was one of only 12 students to graduate from an original group of ~120.

CERTIFICATIONS:
- Python Developer Certification (FreeCodeCamp, 2026)
- PL-300: Power BI Data Analyst Associate (Microsoft, 2023)
- AI-102: Azure AI Engineer Associate (Microsoft, 2024)
- AZ-900: Microsoft Azure Fundamentals (Microsoft, 2023)
- AI-900: Azure AI Fundamentals (Microsoft, 2024)

FEATURED PROJECTS:
1. Telecom Customer Churn Analysis: Python + SQL project predicting customer retention.
2. Power BI Superstore Dashboard: Sales analytics solution visualizing $14.92M in sales.
3. End-to-End Azure ETL: Pipeline implementing ADF, Databricks, and SQL Database.

PERSONALITY:
Helpful, encouraging, and knowledgeable about Andy's technical career. Keep responses concise and focused on Andy's professional profile.
`;

const TypingIndicator = () => (
  <div className="flex gap-2 items-center p-3 bg-surface-bg rounded-2xl rounded-tl-none border border-white/5 w-fit shadow-sm">
    <div className="flex gap-1">
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
        className="w-1.5 h-1.5 bg-brand-primary rounded-full"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        className="w-1.5 h-1.5 bg-brand-primary rounded-full"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        className="w-1.5 h-1.5 bg-brand-primary rounded-full"
      />
    </div>
    <span className="text-[10px] font-bold text-brand-primary/50 uppercase tracking-tighter">Andy is typing...</span>
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Andy's Portfolio Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent, text?: string) => {
    if (e) e.preventDefault();
    const messageText = text || input.trim();
    
    if (!messageText || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: PORTFOLIO_CONTEXT }] },
          ...messages.map(m => ({ 
            role: m.role === 'assistant' ? 'model' : 'user', 
            parts: [{ text: m.content }] 
          })),
          { role: 'user', parts: [{ text: messageText }] }
        ],
        config: {
          temperature: 0.7,
        }
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "Tell me about Andy's experience",
    "What projects has he built?",
    "What Azure certifications does he have?",
    "Show his data engineering skills",
    "What tools does he use?",
    "Can you explain his Databricks experience?",
    "Tell me about your college journey"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[600px] bg-surface-card rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-brand-primary text-surface-bg flex justify-between items-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-surface-bg/20 overflow-hidden bg-surface-bg shadow-inner flex items-center justify-center">
                  <Bot className="w-7 h-7 text-brand-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight">Andy's Assistant</p>
                  <p className="text-[10px] text-surface-bg/70 flex items-center gap-1 font-bold">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                    Always Active
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-surface-bg/10 rounded-full transition-colors relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20' : 'bg-surface-bg border border-white/10'}`}>
                      {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-brand-primary text-surface-bg rounded-tr-none font-medium' 
                        : 'bg-surface-bg text-text-primary rounded-tl-none border border-white/5'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%] flex-row items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-bg border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <TypingIndicator />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-white/5 bg-surface-bg/50">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(undefined, s)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-3 py-1.5 bg-surface-card border border-white/10 rounded-full text-[10px] font-semibold text-text-secondary hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm flex-shrink-0"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={(e) => handleSendMessage(e)} className="p-4 border-t border-white/10">
              <div className="flex bg-surface-bg rounded-2xl p-1 items-center border border-white/5">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me something about Andy..."
                  className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none text-text-primary placeholder:text-text-secondary/50"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-brand-primary text-surface-bg rounded-xl disabled:opacity-50 transition-all hover:bg-brand-secondary shadow-lg shadow-brand-primary/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-primary text-surface-bg rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-secondary transition-all relative group"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        <span className="absolute right-full mr-4 bg-surface-card text-text-primary px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10">
          Chat with Assistant
        </span>
      </motion.button>
    </div>
  );
};

export default Chatbot;

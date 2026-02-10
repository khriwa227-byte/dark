
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const DesignAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Je bent de klantenservice medewerker van IPTVKopen. 
          Reageer professioneel, behulpzaam en enthousiast over onze IPTV diensten.
          Kerninformatie:
          - Pakketten: Starter (€34,99), Popular (€44,99), Prime (€69,99).
          - Toegang: Binnen 5 minuten na betaling via WhatsApp.
          - Inbegrepen: 65.000+ kanalen, 175.000+ films & series, 4K kwaliteit.
          - Ondersteuning: WhatsApp, Smart TV's, Fire Stick, etc.
          - Garantie: 15 dagen geld-terug-garantie.
          - We bieden geen gratis proefperiodes, maar wel volledige garantie.
          - Spreek Nederlands. Wees beknopt en direct.`,
        },
      });

      const assistantContent = response.text || "Sorry, ik kon dat niet verwerken. Vraag gerust naar onze prijzen of zenderaanbod.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error("Assistant Error:", error);
      const conversationText = [...messages, { role: 'user', content: userMessage }]
        .map(m => `${m.role === 'user' ? 'Klant' : 'Support'}: ${m.content}`)
        .join('\n');
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=447449708976&text=${encodeURIComponent(conversationText)}&type=phone_number&app_absent=0`;
      window.open(whatsappUrl, '_blank');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white w-96 max-w-[90vw] h-[500px] rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-black p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-black rotate-45"></div>
              </div>
              <div>
                <div className="font-bold text-sm">Chat met IPTVKopen</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">Team IPTVKopen</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10 text-gray-400 space-y-4">
                <div className="text-4xl">👋</div>
                <p className="text-sm font-medium">Hoi! Ik help je graag met al je vragen over IPTVKopen.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-gray-100 text-black rounded-tl-none'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl text-sm flex gap-1 items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Stel een vraag..."
                className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 p-1.5 bg-black text-white rounded-lg disabled:opacity-30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 border-2 border-white rounded-full"></span>
        </button>
      )}
    </div>
  );
};

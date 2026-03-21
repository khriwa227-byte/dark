
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`py-8 px-6 transition-all duration-300 rounded-3xl ${isOpen ? 'glass-card mb-4 mt-4' : ''}`}
      style={{ borderBottom: isOpen ? 'none' : '1px solid rgba(59,130,246,0.12)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-2xl font-black tracking-tight pr-8 text-white">{question}</span>
        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          style={isOpen
            ? { backgroundColor: '#3B82F6', borderColor: '#3B82F6', color: '#fff' }
            : { backgroundColor: 'transparent', borderColor: 'rgba(59,130,246,0.4)', color: '#60A5FA' }
          }>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-lg font-medium leading-relaxed whitespace-pre-line" style={{ color: 'rgba(241,245,249,0.6)' }}>{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter lg:sticky top-40 leading-tight text-white">
            Veelgestelde <br/><span className="text-italics underline decoration-4 underline-offset-8" style={{ textDecorationColor: 'rgba(124,58,237,0.6)' }}>vragen</span>
          </h2>
        </div>
        <div className="space-y-2">
          {FAQS.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

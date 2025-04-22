"use client"

import { useState } from 'react';
import {ChevronDown , Search} from 'lucide-react'; 

const faqs = [
  {
    question: "How do I get started?",
    answer: "Just sign up using your email and start exploring! We offer a free tier to try everything out."
  },
  
  {
    question: "Is this free to use?",
    answer: "Yes, we have a free version with all the essentials. Paid plans unlock advanced features."
  },
  {
    question: "How does collaboration work?",
    answer: "You can invite teammates, assign tasks, leave comments, and even co-edit content in real-time."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <section className="py-24 px-6 md:px-20 bg-white">
        
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Got Questions?</h2>
        <p className="text-gray-600 mb-8">We got you covered. Let us know your query.</p>
        <div className="w-full flex justify-center mt-6 px-4 mb-12">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Search Question"
          className="w-full text-black pl-4 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition text-sm sm:text-base"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
      </div>
    </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200  rounded-4xl p-6 cursor-pointer hover:shadow-sm transition-all duration-1000 "
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
              <ChevronDown className={`text-black transition-transform duration-500 ${openIndex === index ? "rotate-180" : "rotate-0"}`}/>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600 text-sm md:text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

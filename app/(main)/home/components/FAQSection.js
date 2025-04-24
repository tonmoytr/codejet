"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is it easy?",
    answer:
      "Absolutely! Codejet is designed for non-technical users. With our intuitive interface and templates, anyone can create a stunning website effortlessly.",
  },
  {
    question: "What are the costs?",
    answer:
      "Codejet offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced customization, integrations, and support.",
  },
  {
    question: "Types of websites?",
    answer:
      "You can build blogs, portfolios, business sites, e-commerce platforms, and more with Codejet’s versatile templates.",
  },
  {
    question: "How to start?",
    answer:
      "Simply sign up, choose a template, and begin customizing your site with our drag-and-drop editor. No prior experience needed.",
  },
  {
    question: "No coding required?",
    answer:
      "Exactly! Everything is visual. No need to write a single line of code.",
  },
  {
    question: "Free hosting options?",
    answer:
      "Yes! Codejet provides free hosting for all users with basic needs. You can upgrade anytime for custom domains and enhanced features.",
  },
  {
    question: "Types of websites?",
    answer:
      "You can build blogs, portfolios, business sites, e-commerce platforms, and more with Codejet’s versatile templates.",
  },
  {
    question: "How to start?",
    answer:
      "Simply sign up, choose a template, and begin customizing your site with our drag-and-drop editor. No prior experience needed.",
  },
  {
    question: "No coding required?",
    answer:
      "Exactly! Everything is visual. No need to write a single line of code.",
  },
  {
    question: "Free hosting options?",
    answer:
      "Yes! Codejet provides free hosting for all users with basic needs. You can upgrade anytime for custom domains and enhanced features.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      {/* <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">FAQs</h2> */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-900"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-4 sm:px-6 text-left font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span className="text-base font-semibold sm:text-lg">
                {faq.question}
              </span>
              <span className="ml-4">
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

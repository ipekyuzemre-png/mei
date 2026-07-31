import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "FAQ | Premium Digital Agency",
  description: "Frequently asked questions about our digital agency services.",
};

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web design, web development, UI/UX design, e-commerce solutions, brand strategy, SEO optimization, and ongoing maintenance & support."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A standard website typically takes 4-8 weeks, while more complex web applications or e-commerce platforms may take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your design process?",
      answer: "Our process follows four key phases: Discovery (understanding your goals and audience), Design (creating wireframes and visual concepts), Development (building the solution with clean, scalable code), and Launch (testing, deployment, and handover with documentation)."
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes, we offer flexible maintenance and support packages to keep your website secure, updated, and performing optimally. This includes regular updates, security monitoring, performance optimization, and content updates."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern, industry-leading technologies including React, Next.js, Node.js, WordPress, Shopify, and more. We choose the best technology stack based on your specific project requirements and business goals."
    },
    {
      question: "How much does a website cost?",
      answer: "Every project is unique, so pricing depends on the scope, features, and complexity of your requirements. We provide detailed, transparent quotes after understanding your needs during a free consultation. Contact us to discuss your project."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Absolutely! We work with clients worldwide. Our streamlined communication process, including video calls, project management tools, and regular updates, ensures smooth collaboration regardless of location or time zone."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, we specialize in website redesigns. We'll analyze your current site's performance, identify areas for improvement, and create a modern, high-performing design that aligns with your brand and business objectives."
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/50 hover:text-black transition-colors text-sm font-semibold uppercase tracking-widest mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-[Plus_Jakarta_Sans] text-4xl sm:text-5xl font-bold text-black mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-black/50 text-base mb-12 leading-relaxed">
          Find answers to common questions about our services, process, and how we work with clients.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/5 shadow-sm"
            >
              <h3 className="font-[Plus_Jakarta_Sans] text-lg font-bold text-black mb-3">
                {faq.question}
              </h3>
              <p className="text-black/60 leading-[1.8] text-[15px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

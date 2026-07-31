import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Premium Digital Agency",
  description: "Terms and conditions governing the use of our services.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-black/50 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="space-y-10 text-black/70 leading-[1.9] text-[15px]">
          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of our agency.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">2. Our Services</h2>
            <p>We provide digital design and development services including but not limited to web design, web development, UI/UX design, e-commerce solutions, and brand strategy. The specific scope of work for each project will be outlined in a separate project agreement or proposal.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of our agency and is protected by intellectual property laws. Upon full payment, clients receive ownership rights to the deliverables as specified in their project agreement.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">4. Client Responsibilities</h2>
            <p>Clients are responsible for providing accurate project requirements, timely feedback, and necessary content such as text, images, and brand assets. Delays in providing these materials may affect project timelines and delivery dates.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">5. Payment Terms</h2>
            <p>Payment terms will be outlined in the project proposal or contract. Unless otherwise agreed, a deposit is required before work begins. Final payment is due upon project completion and before the transfer of deliverables and source files.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">6. Limitation of Liability</h2>
            <p>Our agency shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid by the client for the specific service in question.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">7. Termination</h2>
            <p>Either party may terminate a project agreement with written notice. In the event of termination, the client is responsible for payment of all work completed up to the date of termination. We reserve the right to retain all work product until full payment is received.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">8. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services constitutes acceptance of the modified terms.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

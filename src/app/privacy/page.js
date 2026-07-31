import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Premium Digital Agency",
  description: "Our commitment to protecting your privacy and personal data.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-black/50 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="space-y-10 text-black/70 leading-[1.9] text-[15px]">
          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, phone number, company name, and project details.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, provide our services, send project updates and communications, improve our website and services, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">3. Cookies & Tracking</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings. We use analytics cookies to understand how visitors interact with our website, which helps us improve our content and services.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">5. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you interact with.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing activities. To exercise these rights, please contact us using the information provided on our contact page.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2 className="font-[Plus_Jakarta_Sans] text-xl font-bold text-black mb-4">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us through the contact form on our website or via the email address listed on our homepage.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

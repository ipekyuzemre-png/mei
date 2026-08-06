import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "SEO Rehberi | Rengin Yazılım",
  description: "İşletmelerin dijitalleşme sürecinde karşılaştıkları yapısal sorunlar ve sektörel SEO odaklı özel yazılım çözümleri.",
};

export default function BlogList() {
  return (
    <div className="bg-[#F4F3EE] min-h-screen relative overflow-hidden">
      {/* Footer-like Wave Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/hero_bg.webp" 
          alt="Background" 
          fill 
          priority 
          className="object-cover object-center opacity-40 mix-blend-luminosity -scale-x-100 scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EE] via-transparent to-[#F4F3EE]/50" />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="lg">
          <div className="mb-16">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-medium text-black/80 mb-6">
              Dijital Rehber
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Dijital Dünyadan <br />
              <span className="text-[#D97757]">Rehberler & Haberler</span>
            </h1>
            <p className="text-lg text-black/60 max-w-2xl">
              İşletmelerin dijitalleşme sürecinde karşılaştıkları yapısal sorunlar ve özel yazılım çözümleri.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group relative flex flex-col rounded-3xl bg-black/5 border border-black/10 overflow-hidden hover:bg-white/40 hover:shadow-lg hover:border-black/20 backdrop-blur-sm transition-all duration-300">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EE] to-transparent opacity-80" />
                </div>
                
                <div className="flex flex-col flex-1 p-6 z-10 relative">
                  <div className="flex items-center gap-3 text-xs text-black/40 mb-4 font-semibold uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-black/20" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-[#D97757] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-black/60 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-black/80 group-hover:text-black transition-colors">
                    Makaleyi Oku
                    <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

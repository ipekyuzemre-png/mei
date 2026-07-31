import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Container from "@/components/shared/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Script from "next/script";
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Bulunamadı" };
  
  return {
    title: `${post.title} | MEI Yazılım`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    }
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#F4F3EE] dark:bg-[#1a1a1a] min-h-screen transition-colors duration-500">
      <Script id={`json-ld-article-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "image": `https://meiyazilim.com${post.image}`,
          "author": {
            "@type": "Organization",
            "name": "MEI Yazılım"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MEI Yazılım",
            "logo": {
              "@type": "ImageObject",
              "url": "https://meiyazilim.com/og-image.webp"
            }
          },
          "description": post.excerpt
        })}
      </Script>
      <Navbar />
      
      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="md">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-semibold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="mr-2 size-4" />
            Blog'a Dön
          </Link>

          <article>
            <header className="mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-black/50 dark:text-white/50 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  {post.readTime}
                </div>
              </div>
            </header>

            <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-black/5 dark:border-white/5 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

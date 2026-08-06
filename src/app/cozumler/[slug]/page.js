import { notFound } from "next/navigation";
import { generatePseoData, getPseoBySlug } from "@/data/pseo";
import PseoTemplate from "@/components/pseo/PseoTemplate";

// This function tells Next.js to pre-render these pages at build time
export async function generateStaticParams() {
  const data = generatePseoData();
  return data.map((item) => ({
    slug: item.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getPseoBySlug(slug);

  if (!data) {
    return {
      title: "Sayfa Bulunamadı | Rengin Yazılım",
    };
  }

  return {
    title: `${data.title} | Rengin Yazılım`,
    description: data.resolvedDescription,
    alternates: {
      canonical: `/cozumler/${slug}`,
    },
    openGraph: {
      title: `${data.title} | Rengin Yazılım`,
      description: data.resolvedDescription,
      url: `/cozumler/${slug}`,
      type: "website",
      images: [
        {
          url: data.profession.image, // Ideally, generate custom OG images based on district + profession
          width: 1200,
          height: 630,
          alt: data.title,
        }
      ]
    }
  };
}

export default async function PseoPage({ params }) {
  const { slug } = await params;
  const data = getPseoBySlug(slug);

  if (!data) {
    notFound();
  }

  return <PseoTemplate data={data} />;
}

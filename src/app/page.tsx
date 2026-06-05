import { Hero } from "@/components/landing/hero";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { translations } from "@/utils/translations";

export const metadata: Metadata = {
  alternates: {
    canonical: translations.en.site.brand.url,
  },
};

export default async function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

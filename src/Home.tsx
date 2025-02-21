import { HeroSection } from "@/pages/HeroSection";
import { HeroPost } from "@/pages/HeroPost";
import { NewsletterSection } from "@/pages/NewsletterSection";

export function Home() {
  return (
    <div>
      <HeroSection />
      <HeroPost />
      <NewsletterSection />
    </div>
  );
}

import { HeroSection } from "@/components/HeroSection";
import { HeroPost } from "@/components/HeroPost";
import { NewsletterSection } from "@/components/NewsletterSection";

export function Home() {
  return (
    <div>
      <HeroSection />
      <HeroPost />
      <NewsletterSection />
    </div>
  );
}

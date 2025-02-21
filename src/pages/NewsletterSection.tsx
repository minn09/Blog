import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-[#63B3ED]/5">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter and never miss our latest articles and
          updates.
        </p>
        <form className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button className="bg-[#63B3ED] hover:bg-[#63B3ED]/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

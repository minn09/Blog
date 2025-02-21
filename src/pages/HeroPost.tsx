import { ArrowRight } from "lucide-react";
import { Link } from "@/components/ui/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroPost() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <Card key={post} className="border-none shadow-lg">
              <CardHeader>
                <img
                  src={`/placeholder.svg?height=200&width=400`}
                  alt="Article thumbnail"
                  className="rounded-t-lg h-48 w-full object-cover"
                />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#63B3ED] mb-2">March 1, 2024</p>
                <CardTitle className="mb-2">The Art of Minimalism</CardTitle>
                <p className="text-gray-600 mb-4">
                  Discover how embracing minimalism can transform your life and
                  bring clarity to your daily routine.
                </p>
                <Link
                  href="#"
                  className="text-[#63B3ED] hover:text-[#63B3ED]/90 font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  const goToArticles = () => {
    navigate("/articles"); // Redirige a la ruta "/articles"
  };
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-[#63B3ED]/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Minimal Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A clean and simple space for thoughts, ideas, and stories.
          </p>
          <Button
            className="bg-[#63B3ED] hover:bg-[#63B3ED]/90"
            onClick={goToArticles}
          >
            Start Reading
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
};

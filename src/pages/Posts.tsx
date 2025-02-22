import { Post } from "@/pages/Post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HiOutlineSearch } from "react-icons/hi";

const POSTS_DATA = [
  {
    title: "The Art of Minimalist Design in Modern Web Development",
    content:
      "Explore how minimalist design principles can create more effective and engaging user experiences. Learn the key elements of minimalist design and how to implement them in your next project.",
    date: "March 8, 2024",
    category: "Design",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "5 min read",
  },
  {
    title: "Building Scalable Applications with React and TypeScript",
    content:
      "Discover best practices for building large-scale applications using React and TypeScript. Learn about project structure, state management, and performance optimization techniques.",
    date: "March 7, 2024",
    category: "Development",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "8 min read",
  },
  {
    title: "The Future of Web Animation: Performance and Creativity",
    content:
      "An in-depth look at modern web animation techniques, from CSS animations to WebGL. Learn how to create engaging animations while maintaining optimal performance.",
    date: "March 6, 2024",
    category: "Animation",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "6 min read",
  },
  {
    title: "Mastering CSS Grid: Advanced Layout Techniques",
    content:
      "Deep dive into CSS Grid and learn advanced techniques for creating complex layouts. Includes practical examples and real-world use cases.",
    date: "March 5, 2024",
    category: "CSS",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "7 min read",
  },
  {
    title: "Optimizing React Applications for Performance",
    content:
      "Learn essential techniques for improving the performance of your React applications. Covers code splitting, lazy loading, and optimization strategies.",
    date: "March 4, 2024",
    category: "Performance",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "10 min read",
  },
  {
    title: "Introduction to Web Accessibility (A11y)",
    content:
      "Understanding the importance of web accessibility and how to implement it in your projects. Learn about ARIA labels, semantic HTML, and keyboard navigation.",
    date: "March 3, 2024",
    category: "Accessibility",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "6 min read",
  },
];

export function Posts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-white rounded-md px-2 py-1 shadow-sm">
              <HiOutlineSearch className="text-gray-400" size={25} />{" "}
              {/*TODO: change size inline */}
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-48"
              />
            </div>
            <Button
              variant="outline"
              className="border-[#63B3ED] text-[#63B3ED] hover:bg-[#63B3ED] hover:text-white"
            >
              View All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS_DATA.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-2">
          <Button
            variant="outline"
            className="border-[#63B3ED] text-[#63B3ED] hover:bg-[#63B3ED] hover:text-white"
          >
            Previous
          </Button>
          <Button className="bg-[#63B3ED] hover:bg-[#63B3ED]/90">Next</Button>
        </div>
      </div>
    </section>
  );
}

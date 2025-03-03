import { Post } from "@/pages/Post";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import type { PostProps } from "../types/PostProps";

interface PostData extends Omit<PostProps, 'date' | 'readTime'> {
  post_id: number;
  created_at: string;
  readTime: number;
}

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        const transformedPosts = data.map((post: PostData) => ({
          title: post.title,
          content: post.content,
          date: new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          category: post.category,
          imageUrl: post.imageUrl || '/placeholder.svg?height=200&width=400',
          readTime: `${post.readTime} min read`
        }));
        setPosts(transformedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p>Loading posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-red-500">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-white rounded-md px-2 py-1 shadow-sm">
              <HiOutlineSearch className="text-gray-400" size={25} />
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
          {posts.map((post, index) => (
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

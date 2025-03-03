import { useState } from "react";
import { useEffect } from "react";

export function BlogAdmin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [readTime, setReadTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, category, imageUrl, readTime }),
    });

    if (response.ok) {
      alert("Post creado con éxito");
      setTitle("");
      setContent("");
      setCategory("");
      setImageUrl("");
      setReadTime("");
    } else {
      alert("Error al crear el post");
    }
  };

  const ArticleReadTime = (text: string): number => {
    const wordsPerMinute = 225; // Average reading speed
    const wordCount = text.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  useEffect(() => {
    const calculatedReadTime = ArticleReadTime(content);
    setReadTime(calculatedReadTime.toString());
  }, [content]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-lg w-full border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Crear Nuevo Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Contenido"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={10}
            className="w-full p-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="city" aria-placeholder="Categoria">
            Categoria:
          </label>
          <select
            name="city"
            id="city"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Development">Development</option>
            <option value="Design">Design</option>
          </select>
          <input
            type="text"
            placeholder="URL de la imagen"
            className="w-full p-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            disabled
            type="text"
            placeholder="Tiempo de lectura"
            className="w-full p-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setReadTime(ArticleReadTime(e.target.value).toString())}
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-opacity-80 transition duration-300"
          >
            Crear Post
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";

export function BlogAdmin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert("Post creado con éxito");
      setTitle("");
      setContent("");
    } else {
      alert("Error al crear el post");
    }
  };

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
            rows={5}
            className="w-full p-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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

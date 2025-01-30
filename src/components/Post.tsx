interface PostProps {
  title: string;
  content: string;
}

export function Post({ title, content }: PostProps) {
  return (
    <>
      <section className="bg-stone-300 p-4">
        <h2 className="text-2xl">{title}</h2>
        <p>{content}</p>
      </section>
    </>
  );
}

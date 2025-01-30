import { Post } from "./Post";

export const Posts = () => {
  return (
    <>
      <aside className="bg-primary p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <Post title="Post 1" content="Content for post 1" />
          <Post title="Post 2" content="Content for post 2" />
          <Post title="Post 3" content="Content for post 3" />
          <Post title="Post 4" content="Content for post 4" />
          <Post title="Post 5" content="Content for post 5" />
          <Post title="Post 6" content="Content for post 6" />
        </section>
      </aside>
    </>
  );
};

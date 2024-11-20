import Header from "@/components/Header";
import Post from "@/components/Post";

const urlPosts = "http://localhost:3000/posts.json";

async function getPosts() {
  const res = await fetch(urlPosts, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar os posts");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="flex flex-col gap-8 min-h-screen bg-indigo-600">
      {/* <Header title="Blog" /> */}
      <Header/>
      <div className="container mx-auto p-6 bg-blue-800 items-center ">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-50 ">
          Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {posts.map((post: any) => (
            <Post key={post.id} post={post}/>
          ))}
        </div>
      </div>
    </main>
  );
}

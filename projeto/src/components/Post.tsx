import Image from "next/image";

interface Post {
    id: number;
    title: string;
    content: string;
}

export default function Post({post}: any) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden ">
          <Image src={post.image} alt={post.title} width={800} height={450}/>
              <div className="p-6 ">
                <h2 className="text-2xl text-black ">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>Autor: {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="mt-4 flex space-x-4 text-gray-700">
                    <button> 👍 {post.likes} Likes</button>
                    <span>{post.comments} Comentários</span>
                </div>
              </div>
            </div>
    )
}

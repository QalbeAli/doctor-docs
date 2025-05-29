import { blogSource } from "@/lib/source";
import Link from "next/link";

export default async function BlogPage() {
  const posts = blogSource.getPages();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.url}
            className="border rounded-lg p-6 hover:border-blue-500 transition-colors"
          >
            <Link href={post.url}>
              <h2 className="text-2xl font-semibold mb-2">{post.data.title}</h2>
              <p className="text-gray-600 mb-4">{post.data.description}</p>
              <div className="text-sm text-gray-500">
                {new Date(post.data.date).toLocaleDateString()}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

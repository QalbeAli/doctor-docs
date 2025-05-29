import { blogSource } from "@/lib/source";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import Link from "next/link";

export default async function BlogPost(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug ?? []);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const toc = page.data.toc;
  const date = page.data.date;

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-[#181c24] via-[#10131a] to-[#23263a] text-white pb-16">
      {/* Banner/Header */}
      <div className="w-full  container bg-gradient-to-r from-purple-800 to-green-400 rounded-xl p-8 mb-8 flex flex-col md:flex-row md:items-end justify-between shadow-lg">
        <div>
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
            {page.data.title}
          </h1>
          <p className="text-lg text-gray-200 mb-4">{page.data.description}</p>
          <Link
            href="/blog"
            className="inline-block bg-black/40 text-white px-4 py-2 rounded hover:bg-black/60 transition mb-2 border border-white/10 shadow"
          >
            ← Back to Blog
          </Link>
        </div>
        <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
          <div className="text-sm text-gray-200">Written by Team</div>
          <div className="text-xs text-gray-300">
            {new Date(date).toLocaleDateString(undefined, {
              dateStyle: "full",
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
        {/* Table of Contents */}
        {toc && toc.length > 0 && (
          <aside className="md:w-1/4 w-full mb-8 md:mb-0">
            <div className="bg-[#181c24] border border-[#23263a] rounded-xl p-4 shadow-lg sticky top-28">
              <div className="font-semibold mb-2 text-white">
                Table of Contents
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                {toc.map((item: any) => (
                  <li key={item.url} className="ml-2">
                    <a
                      href={item.url}
                      className="hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
        {/* Main Content */}
        <article className="prose prose-invert max-w-3xl flex-1 bg-[#181c24] rounded-xl shadow-xl border border-[#23263a] p-8">
          <MDXContent components={getMDXComponents()} />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug ?? []);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

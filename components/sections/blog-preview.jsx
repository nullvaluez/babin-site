import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const previewPosts = [
  {
    slug: "10-human-trafficking-signs",
    title: "10 Human Trafficking Signs and What You Can Do to Help",
    excerpt:
      "Learn how to identify human trafficking signs in everyday situations and interactions, and what steps you can take to make a difference.",
    category: "Human Trafficking",
    date: "2023-03-15",
  },
  {
    slug: "13-upsetting-facts-human-trafficking",
    title: "13 Upsetting Facts About Human Trafficking in the US",
    excerpt:
      "This article covers 13 facts about human trafficking in the US, one of the most heinous crimes facing our world today.",
    category: "Human Trafficking",
    date: "2023-02-20",
  },
  {
    slug: "7-questions-columbus-personal-injury-lawyer",
    title: "7 Questions To Ask Your Columbus Personal Injury Lawyer",
    excerpt:
      "Learn about the seven questions to ask a personal injury lawyer in Columbus, Ohio, and discover what qualities to look for.",
    category: "Personal Injury",
    date: "2022-12-10",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest News & Insights
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Stay informed with legal insights and news from our team.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-semibold text-blue-primary hover:underline sm:flex"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50" />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-gray-900 transition-colors group-hover:text-blue-primary">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-primary">
                  Read More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-primary"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

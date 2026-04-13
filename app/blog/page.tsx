import { Metadata } from "next";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog & News - Education Insights from Jeolikot",
  description:
    "Read latest blogs, education insights, and news from Bal Sansar Sainik School, Jeolikot, Nainital. Tips for parents, school admission guides, and Uttarakhand education updates.",
  keywords: [
    "school blog Jeolikot",
    "education blog Nainital",
    "best school Jeolikot blog",
    "school admission guide Nainital",
    "Uttarakhand education news",
    "State Board vs CBSE",
    "school in Jeolikot Nainital",
    "parenting tips school Nainital",
  ],
  openGraph: {
    title: "Blog & News | Bal Sansar Sainik School Jeolikot",
    description:
      "Educational insights, school news, and admission guides from Bal Sansar Sainik School, Jeolikot.",
  },
  twitter: {
    card: "summary",
    title: "Blog & News | Bal Sansar Sainik School",
    description:
      "Latest education blogs, news, and insights from Bal Sansar Sainik School, Jeolikot, Nainital.",
  },
  alternates: {
    canonical: "https://balsansarsainikschool.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-navy pt-28 pb-20 px-4 sm:px-6 lg:px-16">
      <BlogContent />
    </main>
  );
}

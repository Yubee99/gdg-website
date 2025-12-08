import { blogPosts } from "../../../data/blogPosts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* 1. HERO HEADER */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 container mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Torna al Blog
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary text-black text-xs font-bold uppercase px-3 py-1 rounded-sm">
                            {post.label}
                        </span>
                        <div className="flex items-center gap-2 text-zinc-300 text-xs font-bold uppercase tracking-wider">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight leading-none mb-6 max-w-4xl">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center border border-white/10">
                            <User className="w-5 h-5 text-zinc-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white uppercase tracking-wider">{post.author}</p>
                            <p className="text-xs text-zinc-500 uppercase">GDG Writer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. ARTICLE CONTENT */}
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div
                    className="prose prose-invert prose-lg md:prose-xl max-w-none
                    prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-bold
                    prose-h1:text-5xl prose-h1:mb-8 prose-h1:text-primary 
                    prose-h2:text-3xl prose-h2:text-white prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-6 prose-h2:mt-16 prose-h2:mb-8
                    prose-h3:text-2xl prose-h3:text-zinc-100 prose-h3:mt-12 prose-h3:mb-6
                    prose-p:text-zinc-300 prose-p:font-body prose-p:leading-8 prose-p:tracking-wide prose-p:mb-8 prose-p:text-lg
                    prose-strong:text-white prose-strong:font-bold prose-strong:text-primary
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-4 prose-ul:marker:text-primary prose-ul:mb-8
                    prose-li:text-zinc-300 prose-li:leading-7
                    selection:bg-primary selection:text-black"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >
                </div>
            </article>

            {/* 3. FOOTER CTA */}
            <section className="border-t border-white/10 py-16 bg-zinc-900/30">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-heading font-bold uppercase tracking-widest mb-6">Ti è piaciuto l'articolo?</h3>
                    <div className="flex justify-center gap-4">
                        <Link
                            href={post.discussionUrl || "https://discord.com/invite/JnBWf9Ngy9"}
                            className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 font-heading font-bold uppercase tracking-wide rounded-sm transition-colors"
                        >
                            Discutine su Discord
                        </Link>
                        <Link
                            href="/blog"
                            className="bg-transparent border border-zinc-700 hover:border-white text-white px-8 py-3 font-heading font-bold uppercase tracking-wide rounded-sm transition-colors"
                        >
                            Leggi altro
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

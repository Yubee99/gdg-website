import Link from "next/link";
import { ArrowRight, Clock, Tag, PlayCircle } from "lucide-react";
import { blogPosts, BlogPost } from "../../data/blogPosts";

const filters = ["Tutte", "Tornei", "Team", "Media", "Patch Notes"];

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const { category } = await searchParams;

    // Filter Logic
    const activeCategory = category || "Tutte";

    // Sort logic (optional, but good for "latest"): assuming order in array is "latest first" or sort by date string (simple string comparison works for ISO, but here we have Italian dates. For now, rely on array order. 
    // Actually, let's keep array order as primary signal of recency).

    let filteredArticles = blogPosts;

    if (activeCategory !== "Tutte") {
        filteredArticles = blogPosts.filter(post =>
            (post.category === activeCategory) || (post.label === activeCategory)
        );
    }

    // Featured Article Logic: 
    // If "Tutte" (All) is selected, show the latest post as featured and the rest in the grid.
    // If a specific category is selected, DISABLE the featured layout and show EVERYTHING in the grid. 
    // This resolves the issue where a single result (e.g. Patch Notes) would be "hidden" in the featured box 
    // while the grid appeared empty, confusing the user.

    const showFeaturedLayout = activeCategory === "Tutte";

    const featuredArticleData = filteredArticles.length > 0 ? filteredArticles[0] : blogPosts[0];

    // If showing featured layout, exclude the first one from grid.
    // If NOT showing featured layout, show ALL (including the first one) in the grid.
    const gridArticles = showFeaturedLayout
        ? filteredArticles.filter(p => p.slug !== featuredArticleData.slug)
        : filteredArticles;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">

            {/* 1. HERO HEADER */}
            <section className="pt-20 pb-12 container mx-auto px-4 text-center border-b border-white/5">
                <h1 className="valorant-glitch text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-4">
                    GDG <span className="text-primary glitch-text-color">Newsroom</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 font-body font-light tracking-wide max-w-2xl mx-auto">
                    Aggiornamenti, Patch Notes e Storie dalla Community.
                </p>
            </section>

            {/* 2. MAGAZINE LAYOUT */}
            <section className="py-16 container mx-auto px-4">

                {/* Featured Content (Only show if we are in "Tutte" mode AND have results) */}
                {showFeaturedLayout && filteredArticles.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-secondary-red rounded-full animate-pulse"></span>
                            In Evidenza
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                            {/* Main Image Card */}
                            <div className="lg:col-span-2 relative h-[400px] md:h-[500px] bg-zinc-900 rounded-sm overflow-hidden group">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${featuredArticleData.image})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
                                    <span className="inline-block bg-secondary-red text-white text-xs font-bold uppercase px-3 py-1 mb-4 rounded-sm">
                                        {featuredArticleData.label || featuredArticleData.category}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase leading-none mb-4 group-hover:text-primary transition-colors">
                                        {featuredArticleData.title}
                                    </h3>
                                    <p className="text-zinc-300 font-body text-lg max-w-xl mb-6 line-clamp-2 md:line-clamp-none">
                                        {featuredArticleData.excerpt}
                                    </p>
                                    <Link href={`/blog/${featuredArticleData.slug}`} className="flex items-center gap-2 text-white font-heading font-bold uppercase tracking-widest hover:text-primary transition-colors">
                                        Leggi articolo <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-1 flex flex-col justify-between border-l border-zinc-800 pl-0 lg:pl-12 pt-8 lg:pt-0">
                                <div>
                                    <h3 className="text-xl font-heading font-bold uppercase mb-8 text-primary">Trending Now</h3>
                                    <ul className="space-y-8">
                                        {filteredArticles.filter(p => p.slug !== featuredArticleData.slug).slice(0, 4).map((post, idx) => (
                                            <li key={idx} className="group cursor-pointer">
                                                <Link href={`/blog/${post.slug}`}>
                                                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-1">
                                                        <span className={`uppercase font-bold ${post.category === 'Tornei' ? 'text-secondary-red' :
                                                                post.category === 'Team' ? 'text-secondary-green' :
                                                                    'text-primary'
                                                            }`}>
                                                            {post.category || post.label}
                                                        </span>
                                                        <span>•</span>
                                                        <span>{post.date}</span>
                                                    </div>
                                                    <h4 className="text-lg font-bold font-heading leading-tight group-hover:text-white text-zinc-300 transition-colors">
                                                        {post.title}
                                                    </h4>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-zinc-900 p-6 mt-8 rounded-sm text-center">
                                    <p className="text-xs font-bold uppercase text-zinc-500 mb-2">Non perdere nulla</p>
                                    <button className="w-full py-2 border border-zinc-700 hover:border-primary hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">
                                        Iscriviti alla Newsletter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-zinc-900 pb-4">
                    {filters.map((filter, idx) => (
                        <Link
                            key={idx}
                            href={filter === "Tutte" ? "/blog" : `/blog?category=${filter}`}
                            className={`text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${(activeCategory === filter)
                                ? 'bg-white text-black'
                                : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
                                }`}
                        >
                            {filter}
                        </Link>
                    ))}
                </div>

                {/* Article Grid */}
                {gridArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {gridArticles.map((article, idx) => (
                            <Link key={idx} href={`/blog/${article.slug}`} className="group cursor-pointer block">
                                <div className="relative h-64 bg-zinc-900 mb-4 overflow-hidden rounded-sm">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${article.image})` }}></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2 py-1 rounded border border-white/10">
                                            {article.category || article.label}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-xs text-zinc-500 mb-2">
                                    <Clock className="w-3 h-3" />
                                    <span>{article.date}</span>
                                </div>

                                <h3 className="text-xl font-heading font-bold uppercase leading-tight group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-zinc-500">
                        <p>Nessun articolo trovato per questa categoria.</p>
                    </div>
                )}

            </section>
        </div>
    );
}

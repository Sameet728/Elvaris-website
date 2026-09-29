import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";
import Link from "next/link";
import { docSidebar, docArticles } from "../../data/content";

export default function DocumentationHub() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 h-max">
              <FadeIn>
                <div className="space-y-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search documentation..." 
                      className="w-full bg-surface-100 border border-white/10 rounded-lg px-4 py-2 text-sm text-fg-100 placeholder:text-fg-300 focus:outline-none focus:border-white/30 transition-colors"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-2.5 text-fg-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  <nav className="space-y-6 hidden lg:block">
                    {docSidebar.map((category) => (
                      <div key={category.title}>
                        <h3 className="text-xs font-semibold text-fg-300 mb-3 tracking-wider">{category.title.toUpperCase()}</h3>
                        <ul className="space-y-2 border-l border-white/10 ml-1 pl-4">
                          {category.items.map((item) => (
                            <li key={item.slug}>
                              <Link href={`/documentation/${item.slug}`} className="text-sm text-fg-200 hover:text-white transition-colors block">
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </nav>
                </div>
              </FadeIn>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-16">
              <FadeIn>
                <div className="max-w-3xl space-y-4">
                  <h1 className="text-[clamp(40px,5vw,56px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                    Documentation
                  </h1>
                  <p className="text-xl text-fg-200">
                    Comprehensive technical documentation covering research methodology, data handling, and quantitative concepts.
                  </p>
                </div>
              </FadeIn>

              <div className="grid gap-6 md:grid-cols-2">
                {docSidebar.map((category, i) => (
                  <FadeIn key={category.title} delay={i * 50}>
                    <div className="glow-card h-full rounded-2xl bg-surface-100 p-8 transition-colors hover:bg-surface-200">
                      <h2 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
                        {category.title}
                      </h2>
                        <ul className="space-y-4">
                        {category.items.slice(0, 5).map((item) => {
                          const desc = docArticles[item.slug]?.description;
                          return (
                            <li key={item.slug}>
                              <Link href={`/documentation/${item.slug}`} className="group block text-sm text-fg-200 hover:text-white transition-colors">
                                <div className="flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3 group-hover:bg-white/60 transition-colors shrink-0" />
                                  <span className="font-medium">{item.title}</span>
                                </div>
                                {desc && <p className="ml-4.5 mt-1 text-xs text-fg-300 line-clamp-1">{desc}</p>}
                              </Link>
                            </li>
                          );
                        })}
                        {category.items.length > 5 && (
                          <li>
                            <Link href={`/documentation/${category.items[0].slug}`} className="text-sm text-fg-300 hover:text-white transition-colors ml-4.5 mt-2 inline-block">
                              + {category.items.length - 5} more...
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

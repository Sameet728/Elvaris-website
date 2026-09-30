import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";
import Link from "next/link";
import { projects } from "../../data/content";

export default function ProductPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] space-y-16">
            <FadeIn>
              <div className="max-w-3xl space-y-4">
                <span className="text-[11px] font-mono text-fg-300 uppercase tracking-widest">ELVARIS PRODUCT</span>
                <h1 className="text-[clamp(44px,6vw,64px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  Product
                </h1>
                <p className="text-xl text-fg-200">
                  An educational showcase of research products and experimental systems.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => {
                const isExternal = !!(project as any).link;
                const href = isExternal ? (project as any).link : `/product/${project.slug}`;
                const target = isExternal ? "_blank" : undefined;
                const rel = isExternal ? "noopener noreferrer" : undefined;
                
                return (
                <FadeIn key={project.slug} delay={i * 100}>
                  <Link href={href} target={target} rel={rel} className="group block h-full">
                    <div className="glow-card h-full rounded-2xl bg-surface-100 p-8 transition-all duration-300 hover:bg-surface-200 hover:-translate-y-1 flex flex-col relative overflow-hidden">
                      {isExternal && (
                        <div className="absolute top-0 right-0 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                      )}
                      <div className="mb-6 flex items-start justify-between">
                        <span className="font-mono text-xs text-fg-300 block">PRODUCT / {project.id}</span>
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-green-400' : 'bg-white/40'} animate-pulse`} />
                          <span className="text-xs font-mono text-fg-200">{project.status}</span>
                        </div>
                      </div>
                      <h2 className="mb-3 text-2xl font-medium text-fg-100">{project.title}</h2>
                      <p className="text-base leading-relaxed text-fg-300 mb-6 flex-1 group-hover:text-fg-200 transition-colors">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[11px] font-mono text-fg-300 bg-black/40 px-2 py-1 rounded border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-fg-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white shrink-0 ml-4"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              )})}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DocsNav } from "./DocsNav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col selection:bg-white selection:text-black">
      <Navbar />

      <main className="flex-1 relative">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-[1240px] px-6 py-28 sm:py-32 flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-28 h-max">
            <DocsNav />
          </div>

          <div className="flex-1 min-w-0 max-w-4xl">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";
import Link from "next/link";

const AREAS = [
  {
    title: 'AI & Engineering',
    desc: 'We are looking for people interested in AI, machine learning, software engineering, automation, agents, and AI-assisted development. You do not need to be an expert in everything — depth in any of these areas is valuable.',
    skills: ['Python', 'Machine Learning', 'LLMs / Agents', 'Backend Engineering', 'AI Tools', 'Automation'],
  },
  {
    title: 'Quantitative & Finance',
    desc: 'We are looking for people interested in financial markets, quantitative methods, statistics, trading systems, backtesting, risk, and market data. Some familiarity with markets is valuable — you do not need to be a professional trader.',
    skills: ['Statistics', 'Backtesting', 'Market Data', 'Risk Analysis', 'Python / R', 'Financial Markets'],
  },
  {
    title: 'Research & Data',
    desc: 'We are looking for people interested in data science, analytics, data engineering, experimentation, validation, and statistical analysis. Curiosity and rigour matter more than formal experience.',
    skills: ['Data Analysis', 'SQL / NoSQL', 'Statistical Testing', 'Visualization', 'Experimentation', 'Research'],
  },
];

const AI_QUALITIES = [
  'Comfortable using AI coding assistants daily (Cursor, Copilot, Antigravity, etc.)',
  'Able to structure complex tasks for AI agents effectively',
  'Knows how to verify, review, and correct AI-generated code',
  'Has shipped something meaningful with AI as a primary accelerator',
  'Can demonstrate a workflow or prompt set that they are proud of',
  'Understands the limitations and failure modes of LLMs',
];

const INTERNSHIPS = [
  { role: 'AI Research Intern', desc: 'Work on AI systems, LLMs, agents, and ML models applied to research workflows.' },
  { role: 'Quant Research Intern', desc: 'Explore quantitative methods, backtesting frameworks, and statistical validation.' },
  { role: 'AI / Software Engineering Intern', desc: 'Build research tools, automation pipelines, APIs, and full-stack applications.' },
  { role: 'Data Science Intern', desc: 'Work with market data, feature engineering, statistical analysis, and dashboards.' },
  { role: 'FinTech Research Intern', desc: 'Research at the intersection of financial technology, data, and quantitative systems.' },
  { role: 'Research Automation Intern', desc: 'Build automated research pipelines, AI-assisted workflows, and reproducibility systems.' },
];

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32 relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-data-grid opacity-[0.02] pointer-events-none" />
          
          <div className="mx-auto max-w-[1240px] relative z-10 space-y-32">
            
            {/* Hero */}
            <FadeIn>
              <div className="max-w-3xl space-y-6 text-center mx-auto">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider text-fg-200">
                  CAREERS
                </span>
                <h1 className="text-[clamp(44px,6vw,64px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  Build the future of quantitative research.
                </h1>
                <p className="text-xl leading-relaxed text-fg-200">
                  We are interested in people who enjoy difficult technical problems, rigorous research, artificial intelligence, quantitative systems, and building from first principles.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <Link
                    href="/careers/apply"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-transform hover:bg-fg-100 active:scale-[0.97]"
                  >
                    Apply for Internship
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* What We Look For */}
            <FadeIn delay={100}>
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-medium text-fg-100 mb-4">Who We Are Looking For</h2>
                  <p className="text-lg text-fg-200">
                    Three capability areas. Expertise in any one is valuable. You do not need to be an expert in all three domains.
                  </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-3">
                  {AREAS.map((area, i) => (
                    <div key={i} className="glow-card rounded-2xl bg-surface-100 p-8 hover:bg-surface-200 transition-colors flex flex-col h-full">
                      <h3 className="text-xl font-medium text-fg-100 mb-3">{area.title}</h3>
                      <p className="text-sm leading-relaxed text-fg-300 mb-6 flex-1">
                        {area.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.skills.map((skill) => (
                          <span key={skill} className="text-[11px] font-mono text-fg-200 bg-white/5 border border-white/10 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* AI Proficiency */}
            <FadeIn delay={150}>
              <div className="grid lg:grid-cols-2 gap-16 border-t border-white/[0.06] pt-24">
                <div className="space-y-6">
                  <h2 className="text-3xl font-medium text-fg-100">Practical AI skills matter more than terminology.</h2>
                  <p className="text-lg text-fg-200 leading-relaxed">
                    We value people who can demonstrate they actually use modern AI tools to accelerate real engineering and research work — not just those who can name them.
                  </p>
                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-xs font-mono tracking-widest text-white/50 block mb-3">ANTIGRAVITY / AI AGENTS</span>
                    <p className="text-sm text-fg-200 leading-relaxed">
                      Instead of asking "Do you know Antigravity?", we ask practical questions: How do you structure complex tasks for an AI agent? How do you verify AI-generated code? Describe a project where AI materially accelerated your work.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <span className="text-xs font-mono tracking-widest text-white/50 block mb-6">WHAT WE LOOK FOR IN AI SKILLS</span>
                  {AI_QUALITIES.map((q, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-surface-100">
                      <span className="font-mono text-white/40 text-sm mt-0.5">0{i + 1}</span>
                      <span className="text-sm text-fg-200">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Internship Opportunities */}
            <FadeIn delay={200}>
              <div className="space-y-12 border-t border-white/[0.06] pt-24">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-medium text-fg-100 mb-4">Open Internship Tracks</h2>
                  <p className="text-lg text-fg-200">
                    Select a primary interest — and optionally a secondary area. You do not need to choose just one dimension.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {INTERNSHIPS.map((item, i) => (
                    <div key={i} className="glow-card rounded-2xl bg-surface-100 p-6 hover:bg-surface-200 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-fg-200">OPEN</span>
                      </div>
                      <h4 className="font-medium text-fg-100 mb-2">{item.role}</h4>
                      <p className="text-sm text-fg-300 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Final CTA */}
            <FadeIn delay={250}>
              <div className="text-center border-t border-white/[0.06] pt-24">
                <h2 className="text-3xl font-medium text-fg-100 mb-4">Ready to apply?</h2>
                <p className="text-fg-200 leading-relaxed mb-8 max-w-md mx-auto">
                  Our application takes about 15 minutes. Tell us what you have built, what you are curious about, and how you work with AI tools.
                </p>
                <Link href="/careers/apply" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-transform hover:bg-fg-100 active:scale-[0.97]">
                  Start Application
                </Link>
              </div>
            </FadeIn>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

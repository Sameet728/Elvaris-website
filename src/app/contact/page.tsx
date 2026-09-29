"use client";

import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";
import { useState } from "react";

const reasons = ['Research', 'Partnership', 'Careers', 'Technical Questions', 'General'];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] grid gap-16 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <div className="max-w-xl space-y-6">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider text-fg-200">
                  CONTACT
                </span>
                <h1 className="text-[clamp(44px,6vw,64px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  Let's talk.
                </h1>
                <p className="text-xl leading-relaxed text-fg-200">
                  We are always open to discussing research collaborations, technical approaches, or potential partnerships.
                </p>
                <div className="pt-8 space-y-6 text-sm text-fg-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-100 border border-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <span>contact@elvariscapital.in</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-100 border border-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </div>
                    <a href="https://github.com/elvaris" className="hover:text-white transition-colors">github.com/elvaris</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-100 border border-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <a href="https://linkedin.com/company/elvaris" className="hover:text-white transition-colors">linkedin.com/company/elvaris</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-100 border border-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <span>Pune, India</span>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-xl border border-white/10 bg-surface-100">
                  <p className="text-[13px] text-fg-300 font-mono">
                    "We reply to all serious technical inquiries within 48 hours."
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="glow-card rounded-2xl bg-surface-100 p-8 sm:p-12">
                {isSuccess ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-fg-100">Message Sent</h3>
                    <p className="text-fg-200 text-sm mb-8">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5 transition-colors text-fg-100"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-fg-200">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-fg-100 placeholder:text-fg-300 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-fg-200">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-fg-100 placeholder:text-fg-300 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-fg-200">Company / Organization <span className="text-fg-300">(Optional)</span></label>
                        <input
                          type="text"
                          id="company"
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-fg-100 placeholder:text-fg-300 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="reason" className="text-sm font-medium text-fg-200">Reason</label>
                        <select
                          id="reason"
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-fg-100 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all appearance-none"
                        >
                          {reasons.map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-fg-200">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-fg-100 placeholder:text-fg-300 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                        placeholder="How can we help?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform duration-[160ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-fg-100 active:scale-[0.97] disabled:opacity-70 disabled:active:scale-100"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

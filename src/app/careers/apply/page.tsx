"use client";

import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { FadeIn } from "../../../components/fade-in";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "f65db974-5cb6-4921-9d9c-314c26b076d3";

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New Internship Application — ${formData.get("first-name")} ${formData.get("last-name")}`);
    formData.append("from_name", "Elvaris Careers");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-white/20 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
          <FadeIn>
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">Apply to Elvaris</h1>
            <p className="mt-4 text-lg text-white/60">
              We are always looking for exceptional talent in quantitative research, artificial intelligence, and software engineering. Please fill out the form below to initiate the process.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            {isSuccess ? (
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Application Submitted</h3>
                <p className="text-white/60 text-sm mb-8">
                  Thank you for your interest in Elvaris. We will review your application and get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5 transition-colors text-white"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form className="mt-12 space-y-8" onSubmit={handleSubmit}>
                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                {error && (
                  <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-white/70">
                      First name <span className="text-white/30">*</span>
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none ring-1 ring-transparent transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-white/30"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-white/70">
                      Last name <span className="text-white/30">*</span>
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                      className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none ring-1 ring-transparent transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-white/30"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70">
                    Email address <span className="text-white/30">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none ring-1 ring-transparent transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-white/30"
                    placeholder="jane.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-white/70">
                    Role of Interest <span className="text-white/30">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    defaultValue=""
                    className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-transparent transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-white/30 [&>option]:bg-black [&>option]:text-white"
                  >
                    <option value="" disabled>Select a role</option>
                    <option value="quant">Quantitative Researcher</option>
                    <option value="ml">Machine Learning Engineer</option>
                    <option value="software">Software Engineer</option>
                    <option value="data">Data Scientist</option>
                    <option value="other">Other / General Application</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="portfolio" className="text-sm font-medium text-white/70">
                    LinkedIn / GitHub / Portfolio URL <span className="text-white/30">*</span>
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    id="portfolio"
                    required
                    className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none ring-1 ring-transparent transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-white/30"
                    placeholder="https://github.com/janedoe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">
                    Brief Cover Letter (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full resize-y rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none ring-1 ring-transparent transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-white/30"
                    placeholder="Tell us a bit about your background and why you want to join Elvaris..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}

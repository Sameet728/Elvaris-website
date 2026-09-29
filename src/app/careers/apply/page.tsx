import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { FadeIn } from "../../../components/fade-in";

export const metadata = {
  title: "Apply | Elvaris Capital",
  description: "Join Elvaris Capital and shape the future of market intelligence.",
};

export default function ApplyPage() {
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
            <form className="mt-12 space-y-8" action="#" method="POST">
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
                  className="block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-1 ring-transparent transition-all hover:bg-white/10 focus:border-white/30 focus:bg-white/10 focus:ring-white/30 [&>option]:bg-black [&>option]:text-white"
                >
                  <option value="" disabled selected>Select a role</option>
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
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98] sm:w-auto"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}

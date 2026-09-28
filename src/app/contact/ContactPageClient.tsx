'use client';

import { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/ui/Icons';
import { FadeInUp } from '@/components/ui/MotionWrappers';

const reasons = ['Research', 'Partnership', 'Careers', 'Technical Questions', 'General'];

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    reason: 'Research',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', company: '', reason: 'Research', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info */}
          <div>
            <FadeInUp>
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Contact</span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight mb-6">Let&apos;s talk.</h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-12 max-w-md">
                We are always open to discussing research collaborations, technical approaches, or potential partnerships.
              </p>
              
              <div className="space-y-6 mb-12">
                <a href="mailto:contact@elvaris.com" className="flex items-center gap-3 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  contact@elvaris.com
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center">
                    <Github size={18} />
                  </div>
                  github.com/elvaris
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center">
                    <Linkedin size={18} />
                  </div>
                  linkedin.com/company/elvaris
                </a>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                <p className="text-[13px] text-[var(--text-muted)] font-mono">
                  &ldquo;We reply to all serious technical inquiries within 48 hours.&rdquo;
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Form */}
          <div>
            <FadeInUp delay={0.2}>
              <div className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                {isSuccess ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                    <p className="text-[var(--text-secondary)] text-[15px]">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2 border border-[var(--border-color)] rounded-lg text-[13px] hover:bg-[var(--bg-hover)] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-[13px] font-medium text-[var(--text-secondary)]">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-lg text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-[13px] font-medium text-[var(--text-secondary)]">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-lg text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-[13px] font-medium text-[var(--text-secondary)]">Company / Organization <span className="text-[var(--text-muted)]">(Optional)</span></label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-lg text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="reason" className="block text-[13px] font-medium text-[var(--text-secondary)]">Reason</label>
                        <select
                          id="reason"
                          name="reason"
                          required
                          value={formState.reason}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-lg text-[14px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none"
                          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2369717D\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                        >
                          {reasons.map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-[13px] font-medium text-[var(--text-secondary)]">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-lg text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-[14px] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}

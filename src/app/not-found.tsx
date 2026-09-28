import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] mb-6 text-2xl font-mono text-[var(--text-muted)]">
          404
        </div>
        <h1 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Page not found</h1>
        <p className="text-[var(--text-secondary)] mb-8 max-w-sm mx-auto">
          The page or research article you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] text-[14px] font-medium rounded-lg hover:border-[var(--text-muted)] transition-colors"
        >
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
    </div>
  );
}

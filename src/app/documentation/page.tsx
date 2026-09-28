import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Comprehensive technical documentation covering research methodology, data handling, and quantitative concepts.',
};

export default function DocumentationPage() {
  redirect('/documentation/introduction');
}

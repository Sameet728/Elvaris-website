import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Elvaris for research collaboration, technical questions, or partnership.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}

'use client';

import dynamic from 'next/dynamic';

// Dynamically import the testimonials section with SSR disabled
// This ensures the component only renders on the client side
// which prevents hook mismatches between server and client renders
const ClientOnlyTestimonials = dynamic(
  () => import('@/components/ui/testimonials-section').then(mod => mod.TestimonialsSection),
  { ssr: false }
);

export default function TestimonialsSection() {
  return (
    <div className="w-full">
      <ClientOnlyTestimonials />
    </div>
  );
}

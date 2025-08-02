'use client';

import FloatingContactButtons from '@/components/FloatingContactButtons';
import ExitIntentPopup from '@/components/ExitIntentPopup';
// import StickyCtaButton from '@/components/StickyCtaButton'; // Removed as per user request

export default function ClientWrapper() {
  return (
    <>
      <FloatingContactButtons />
      {/* <StickyCtaButton /> Removed left sticky CTA */}
      <ExitIntentPopup />
    </>
  );
}

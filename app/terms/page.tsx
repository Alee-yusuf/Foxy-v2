import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Foxy Home Buyer',
  description: 'Terms and conditions for using Foxy Home Buyer\'s services and website.',
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-display font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last Updated: August 4, 2025</p>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Foxy Home Buyer. These Terms of Service ("Terms") govern your access to and use of our website and 
            services. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p className="mb-4">
            Foxy Home Buyer provides real estate services including, but not limited to, purchasing properties for cash, 
            providing cash offers, and related real estate services in the state of Florida.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
          <p className="mb-4">
            You must be at least 18 years old and have the legal capacity to enter into a binding contract to use our services. 
            By using our services, you represent and warrant that you meet these requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Property Evaluation</h2>
          <p className="mb-4">
            All cash offers are subject to property evaluation. We reserve the right to modify or withdraw any offer based on 
            the results of our property inspection and due diligence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. No Obligation</h2>
          <p className="mb-4">
            Submitting information about your property or requesting a cash offer does not create any obligation to sell your 
            property to Foxy Home Buyer, nor does it create any obligation for Foxy Home Buyer to purchase your property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including text, graphics, logos, and images, is the property of Foxy Home Buyer or its 
            content suppliers and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            Foxy Home Buyer shall not be liable for any indirect, incidental, special, or consequential damages resulting from 
            the use or inability to use our services, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting 
            the updated Terms on our website and updating the "Last Updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard 
            to its conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Foxy Home Buyer LLC<br />
            Riverview, FL 33578<br />
            Email: legal@foxyhomebuyer.com<br />
            Phone: (813) 555-CASH
          </p>
        </section>
      </div>
    </main>
  );
}

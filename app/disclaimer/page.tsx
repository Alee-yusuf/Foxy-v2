import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Foxy Home Buyer',
  description: 'Important legal disclaimers regarding the use of Foxy Home Buyer\'s services and website.',
};

export default function Disclaimer() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-display font-bold mb-6">Legal Disclaimer</h1>
      <p className="text-gray-600 mb-8">Last Updated: August 4, 2025</p>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No Professional Advice</h2>
          <p className="mb-4">
            The information provided on this website is for general informational purposes only and does not constitute legal, 
            financial, or real estate advice. Foxy Home Buyer is not a licensed real estate broker or agent. Any information 
            provided should not be used as a substitute for consultation with professional legal, financial, or real estate 
            advisors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No Guarantees</h2>
          <p className="mb-4">
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any 
            kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the 
            information, products, services, or related graphics contained on this website. Any reliance you place on such 
            information is therefore strictly at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No Offer to Purchase</h2>
          <p className="mb-4">
            The information provided on this website does not constitute an offer to purchase real estate. Any offer to 
            purchase property is subject to a written purchase agreement and is contingent upon verification of information 
            provided by the property owner.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Market Conditions</h2>
          <p className="mb-4">
            Real estate markets change frequently. The information on this website may not reflect current market conditions. 
            Foxy Home Buyer makes no guarantees about future market conditions or property values.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
          <p className="mb-4">
            This website may contain links to third-party websites. These links are provided for your convenience only. 
            Foxy Home Buyer has no control over, and assumes no responsibility for, the content, privacy policies, or 
            practices of any third-party websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No Endorsement</h2>
          <p className="mb-4">
            Reference to any specific commercial product, process, or service by trade name, trademark, manufacturer, 
            or otherwise does not constitute or imply endorsement, recommendation, or favoring by Foxy Home Buyer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fair Housing</h2>
          <p className="mb-4">
            Foxy Home Buyer is committed to the principles of the Fair Housing Act and does not discriminate against any 
            person because of race, color, religion, sex, handicap, familial status, national origin, or any other 
            protected class.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this disclaimer, please contact us at:
          </p>
          <p>
            2908 W Bay to Bay Blvd, Tampa, FL 33629<br />
            Email: info@foxyhomebuyer.com<br />
            Phone: +1 (866) 404-3664
          </p>
        </section>
      </div>
    </main>
  );
}

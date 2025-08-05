import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Foxy Home Buyer',
  description: 'Learn how Foxy Home Buyer protects your personal information and privacy.',
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-display font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: August 4, 2024</p>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            At Foxy Home Buyer, we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
            our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personal identification information (name, email, phone number, etc.)</li>
            <li>Property information</li>
            <li>Browsing data and usage information</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We may use your information to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your inquiries and offer customer support</li>
            <li>Improve our website and services</li>
            <li>Send promotional communications</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-4">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Service providers who assist with our business operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of your information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Foxy Home Buyer LLC<br />
            Riverview, FL 33578<br />
            Email: privacy@foxyhomebuyer.com<br />
            Phone: (813) 555-CASH
          </p>
        </section>
      </div>
    </main>
  );
}

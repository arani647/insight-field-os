import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 2026</p>
          <p className="text-muted-foreground leading-relaxed mb-6">Servinix Inc. ("Servinix," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Information We Collect</h2>
          <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
            <li><strong className="text-foreground">Personal Information:</strong> Name, email, phone number, company name, and billing information.</li>
            <li><strong className="text-foreground">Usage Data:</strong> How you interact with our platform.</li>
            <li><strong className="text-foreground">Device Information:</strong> Browser type, OS, IP address, and device identifiers.</li>
            <li><strong className="text-foreground">Location Data:</strong> GPS data from vehicles using our fleet tracking features.</li>
            <li><strong className="text-foreground">Communication Data:</strong> Messages and calls processed through our platform.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">How We Use Information</h2>
          <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information, updates, and security alerts</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Monitor and analyze usage patterns</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We use cookies, web beacons, and similar tracking technologies. You can control cookies through your browser settings.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">How We Share Information</h2>
          <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
            <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who perform services on our behalf.</li>
            <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or legal process.</li>
            <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger or acquisition.</li>
            <li><strong className="text-foreground">With Consent:</strong> When you have given explicit consent.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">SMS Communications</h2>
          <div className="p-6 rounded-xl border border-border/50 bg-card mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">If you provide your mobile phone number and opt in to receive text messages from Servinix, you consent to receive SMS communications related to demos, account notifications, service reminders, and product updates.</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-4">
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>You may opt out at any time by replying STOP.</li>
              <li>For assistance, reply HELP or contact <a href="mailto:support@servinix.com" className="text-primary hover:underline">support@servinix.com</a>.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-2"><strong className="text-foreground">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong></p>
            <p className="text-muted-foreground leading-relaxed">SMS consent and phone numbers are used only for communication related to Servinix services.</p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We implement industry-standard security measures including encryption in transit and at rest, access controls, and regular security audits.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion at any time.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">User Rights</h2>
          <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
            <li><strong className="text-foreground">Access:</strong> Request a copy of your personal information.</li>
            <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate information.</li>
            <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information.</li>
            <li><strong className="text-foreground">Portability:</strong> Request transfer of your data.</li>
            <li><strong className="text-foreground">Objection:</strong> Object to certain processing.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We may update this Privacy Policy from time to time. We will notify you by posting the new policy and updating the "Last updated" date.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Contact Information</h2>
          <div className="text-muted-foreground mb-6">
            <p>Servinix Inc.</p>
            <p>Email: <a href="mailto:privacy@servinix.com" className="text-primary hover:underline">privacy@servinix.com</a></p>
            <p>Phone: (800) 555-1234</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;

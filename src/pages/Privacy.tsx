import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="bg-hero-gradient pt-20 pb-16 lg:pt-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Privacy Policy</h1>
          <p className="mt-4 text-primary-foreground/70">Last updated: March 8, 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>Servinix, Inc. ("Servinix," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at servinix.com, use our platform, or engage with our services (collectively, the "Services").</p>
                <p className="mt-4">By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access the Services.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                <p>We may collect personally identifiable information that you voluntarily provide when you register for an account, request a demo, subscribe to our newsletter, or contact us. This may include:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Name, email address, phone number, and company name</li>
                  <li>Billing and payment information</li>
                  <li>Job title, fleet size, and business type</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">Automatically Collected Information</h3>
                <p>When you access our Services, we automatically collect certain information, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Device information (browser type, operating system, device identifiers)</li>
                  <li>Log data (IP address, access times, pages viewed, referring URL)</li>
                  <li>Location data (GPS coordinates from fleet tracking devices, with user consent)</li>
                  <li>Usage data (features used, actions taken within the platform)</li>
                </ul>

                <h3 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">Cookies and Tracking Technologies</h3>
                <p>We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, though disabling cookies may affect functionality.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze usage trends and preferences</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations and enforce our agreements</li>
                  <li>Develop new products, services, and features</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong className="text-foreground">Service Providers:</strong> With third-party vendors who perform services on our behalf (hosting, analytics, payment processing, customer support)</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                  <li><strong className="text-foreground">Protection of Rights:</strong> To protect the rights, property, or safety of Servinix, our users, or the public</li>
                  <li><strong className="text-foreground">With Consent:</strong> With your consent or at your direction</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encryption in transit and at rest, access controls, regular security assessments, and employee training. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Your Rights and Choices</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong className="text-foreground">Access:</strong> Request a copy of your personal information</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-foreground">Portability:</strong> Request a portable copy of your data</li>
                  <li><strong className="text-foreground">Opt-Out:</strong> Opt out of marketing communications at any time</li>
                  <li><strong className="text-foreground">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="mt-4">To exercise any of these rights, please contact us at privacy@servinix.com.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. California Privacy Rights (CCPA)</h2>
                <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt out of the sale of your information. We do not sell personal information.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
                <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
                <p>Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">11. Third-Party Links</h2>
                <p>Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">12. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="mt-4 rounded-xl border border-border/50 bg-card p-6">
                  <p className="font-semibold text-foreground">Servinix, Inc.</p>
                  <p className="mt-1">Email: privacy@servinix.com</p>
                  <p>Website: servinix.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

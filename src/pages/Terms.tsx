import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="bg-hero-gradient pt-20 pb-16 lg:pt-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Terms of Service</h1>
          <p className="mt-4 text-primary-foreground/70">Last updated: March 8, 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("you" or "Customer") and Servinix, Inc. ("Servinix," "we," "us," or "our") governing your access to and use of the Servinix platform, website at servinix.com, and all related services (collectively, the "Services").</p>
                <p className="mt-4">By accessing or using the Services, you agree to be bound by these Terms. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
                <p>Servinix provides an AI-native platform for service businesses that includes fleet GPS tracking, field service management, customer communication tools, and AI-powered automation features. The specific features available to you depend on your subscription plan.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Account Registration</h2>
                <p>To access certain features of the Services, you must create an account. You agree to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Subscription and Payments</h2>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Subscription Plans</h3>
                <p>Access to the Services requires a paid subscription. Subscription details, including pricing, features, and billing cycles, are described on our website or in a separate order form.</p>
                
                <h3 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">Payment Terms</h3>
                <p>You agree to pay all fees associated with your subscription plan. Fees are non-refundable except as expressly stated in these Terms or required by applicable law. We may change our fees upon 30 days' written notice.</p>
                
                <h3 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">Automatic Renewal</h3>
                <p>Subscriptions automatically renew for successive periods unless you cancel before the end of the current billing period. You may cancel your subscription at any time through your account settings or by contacting our support team.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
                  <li>Attempt to gain unauthorized access to any part of the Services</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services</li>
                  <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
                  <li>Use the Services to transmit harmful code, spam, or malicious content</li>
                  <li>Resell, sublicense, or redistribute the Services without written consent</li>
                  <li>Use the Services to collect data in violation of privacy laws</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Data Ownership and Licenses</h2>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Your Data</h3>
                <p>You retain all rights to the data you submit to the Services ("Customer Data"). You grant Servinix a limited, non-exclusive license to use, process, and store Customer Data solely to provide and improve the Services.</p>
                
                <h3 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">Our Platform</h3>
                <p>Servinix retains all rights, title, and interest in and to the Services, including all intellectual property rights. These Terms do not grant you any rights to our trademarks, logos, or brand features.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Privacy and Data Protection</h2>
                <p>Our collection and use of personal information is governed by our Privacy Policy, available at servinix.com/privacy. By using the Services, you consent to our data practices as described in the Privacy Policy.</p>
                <p className="mt-4">For customers subject to data protection regulations (such as GDPR or CCPA), we offer a Data Processing Agreement (DPA) upon request.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. Service Level and Availability</h2>
                <p>We strive to maintain 99.9% uptime for our Services. We may perform scheduled maintenance with reasonable advance notice. We are not liable for any downtime or service interruptions caused by circumstances beyond our reasonable control, including but not limited to natural disasters, third-party service failures, or government actions.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SERVINIX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>
                <p className="mt-4">OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO SERVINIX DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Servinix and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any third-party rights.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">11. Termination</h2>
                <p>Either party may terminate these Terms at any time. We may suspend or terminate your access to the Services immediately if you breach these Terms or if required by law. Upon termination:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>You may request export of your Customer Data within 30 days</li>
                  <li>We will delete your Customer Data within 90 days of termination</li>
                  <li>All provisions that should survive termination will remain in effect</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">12. Dispute Resolution</h2>
                <p>Any disputes arising from these Terms shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in the state of Delaware, and the language shall be English.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">15. General Provisions</h2>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong className="text-foreground">Entire Agreement:</strong> These Terms, together with the Privacy Policy and any order forms, constitute the entire agreement between you and Servinix.</li>
                  <li><strong className="text-foreground">Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
                  <li><strong className="text-foreground">Waiver:</strong> No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.</li>
                  <li><strong className="text-foreground">Assignment:</strong> You may not assign these Terms without our prior written consent. We may assign these Terms without restriction.</li>
                  <li><strong className="text-foreground">Force Majeure:</strong> Neither party shall be liable for delays or failures in performance due to causes beyond reasonable control.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">16. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="mt-4 rounded-xl border border-border/50 bg-card p-6">
                  <p className="font-semibold text-foreground">Servinix, Inc.</p>
                  <p className="mt-1">Email: legal@servinix.com</p>
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

export default Terms;

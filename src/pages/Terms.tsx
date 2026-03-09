import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">By accessing or using the Servinix platform and services ("Services"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Services.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Description of Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Servinix provides a cloud-based software platform for field service businesses including fleet GPS tracking, field service management, customer communication tools, AI voice automation, and related features.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">User Accounts</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify Servinix immediately of any unauthorized use.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Acceptable Use</h2>
          <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-6">
            <li>Do not use Services for any illegal purpose</li>
            <li>Do not attempt unauthorized access</li>
            <li>Do not interfere with or disrupt the Services</li>
            <li>Do not transmit spam, malware, or harmful content</li>
            <li>Do not reverse engineer any part of the Services</li>
            <li>Do not harass, abuse, or impersonate others</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Payments and Billing</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Paid features require a valid payment method. Fees are billed in advance and are non-refundable except as required by law. We may change prices with 30 days' notice.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">The Services are owned by Servinix and protected by intellectual property laws. You are granted a limited, non-exclusive license to use the Services. You retain ownership of your data.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Service Availability</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We strive for 99.9% uptime but Services may be temporarily unavailable due to maintenance or circumstances beyond our control.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">SMS Messaging Terms</h2>
          <div className="p-6 rounded-xl border border-border/50 bg-card mb-6">
            <p className="text-muted-foreground leading-relaxed mb-4">By providing your mobile phone number and opting in to receive SMS messages from Servinix, you agree to receive text messages related to demos, account notifications, and service communications.</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-4">
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>You may opt out at any time by replying STOP.</li>
              <li>For assistance, reply HELP.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-2">Consent to receive SMS messages is not a condition of purchasing services.</p>
            <p className="text-muted-foreground leading-relaxed">Mobile carriers are not responsible for delayed or undelivered messages.</p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Disclaimer of Warranties</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">IN NO EVENT SHALL SERVINIX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. SERVINIX'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">You agree to indemnify and hold harmless Servinix from any claims arising from your use of the Services or violation of these Terms.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Termination</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We may terminate or suspend your account immediately if you breach these Terms. You may terminate your account at any time by contacting us.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">These Terms shall be governed by the laws of the State of California. Disputes shall be subject to the exclusive jurisdiction of courts in San Francisco County, California.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">We may modify these Terms at any time with 30 days' notice for material changes. Continued use constitutes acceptance.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4">Contact Information</h2>
          <div className="text-muted-foreground mb-6">
            <p>Servinix Inc.</p>
            <p>Email: <a href="mailto:legal@servinix.com" className="text-primary hover:underline">legal@servinix.com</a></p>
            <p>Phone: (800) 555-1234</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;

import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Bidias Group LLC",
  description: "How Bidias Group LLC collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      lastUpdated="July 1, 2026"
    >
      <LegalSection number="1" title="Introduction">
        <p>
          Bidias Group LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
          <a href="https://www.bidiasgroup.com">www.bidiasgroup.com</a>. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit our website or submit forms.
          Please read this policy carefully. If you disagree, please discontinue use of the site.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Information We Collect">
        <p>We may collect information in the following ways:</p>
        <h3>Freight Quote Requests</h3>
        <ul>
          <li>Origin and destination city/zip codes</li>
          <li>Freight type, pickup and delivery dates</li>
          <li>Your name, email address, and phone number</li>
          <li>Any additional details you voluntarily provide</li>
        </ul>
        <h3>Driver Applications</h3>
        <p>
          Driver applications are processed through IntelliApp (driverapponline.com), a third-party
          platform. Information submitted there is governed by IntelliApp&rsquo;s own privacy policy.
          We may receive application summaries including your name, contact info, license class, and
          driving history.
        </p>
        <h3>Automatically Collected Data</h3>
        <ul>
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on site</li>
          <li>Referring URLs and device information</li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="How We Use Your Information">
        <p>We use collected information to:</p>
        <ul>
          <li>Respond to freight quote requests and provide rate estimates</li>
          <li>Process and evaluate driver applications</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and services</li>
          <li>Comply with applicable laws and regulations</li>
          <li>Protect the rights and safety of Bidias Group LLC, our team, and our customers</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </LegalSection>

      <LegalSection number="4" title="Cookies &amp; Tracking">
        <p>
          Our website may use cookies and similar tracking technologies to enhance your experience.
          Essential cookies are required for the site to function. Analytics cookies help us understand
          how visitors interact with the site. You may control cookie preferences through your browser
          settings. See our{" "}
          <a href="/cookie-policy">Cookie Policy</a> for full details.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Third-Party Services">
        <p>We work with the following third-party services that may have access to certain information:</p>
        <ul>
          <li>
            <strong>IntelliApp (Driver Applications):</strong> Driver application data is submitted through
            and stored by IntelliApp at{" "}
            <a href="https://intelliapp.driverapponline.com/c/3909622" target="_blank" rel="noopener noreferrer">
              driverapponline.com
            </a>
            .
          </li>
          <li>
            <strong>Microsoft Outlook Bookings:</strong> Appointment scheduling is handled through
            Microsoft&rsquo;s Bookings platform, subject to Microsoft&rsquo;s Privacy Policy.
          </li>
          <li>
            <strong>Analytics Providers:</strong> We may use analytics tools to understand site usage.
            These providers may set cookies on your device.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="6" title="Data Security">
        <p>
          We implement reasonable technical and organizational measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction. However, no method of
          transmission over the internet is 100% secure. We cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Data Retention">
        <p>
          We retain personal information only as long as necessary to fulfill the purposes outlined in
          this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
          Freight quote inquiries are typically retained for up to 2 years. Driver application records
          are retained as required by FMCSA regulations.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Your Rights">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of certain data processing activities</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:admin@bidiasgroup.com">admin@bidiasgroup.com</a>.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Children's Privacy">
        <p>
          Our website is not directed to individuals under the age of 18. We do not knowingly collect
          personal information from minors. If we become aware that we have collected information from
          a child under 18, we will take steps to delete it promptly.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of significant changes
          by posting the new policy on this page with an updated &ldquo;Last updated&rdquo; date. Your
          continued use of the website after changes constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Contact Us">
        <p>If you have questions about this Privacy Policy, please contact:</p>
        <p>
          <strong>Bidias Group LLC</strong><br />
          Andre Bidias, Administrator<br />
          <a href="mailto:admin@bidiasgroup.com">admin@bidiasgroup.com</a><br />
          <a href="tel:2678081450">(267) 808-1450</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

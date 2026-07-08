import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Bidias Group LLC",
  description: "Terms and conditions governing use of the Bidias Group LLC website.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Terms of Service"
      subtitle="Terms and conditions governing your use of our website and services."
      lastUpdated="July 1, 2026"
    >
      <LegalSection number="1" title="Acceptance of Terms">
        <p>
          By accessing and using the Bidias Group LLC website at{" "}
          <a href="https://www.bidiasgroup.com">www.bidiasgroup.com</a>, you accept and agree to be bound
          by these Terms of Service and our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. If you do not agree to these terms, please do not
          use our website.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Website Use">
        <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
        <ul>
          <li>Infringe the rights of any third party</li>
          <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
          <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
          <li>Interfere with the proper functioning of the website</li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>
        <p>
          We reserve the right to terminate or restrict access to the website at our sole discretion,
          without notice, for conduct we believe violates these terms or is harmful to other users,
          us, or third parties.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Freight Quote Disclaimer">
        <p>
          Freight quotes submitted through our website are <strong>requests for information only</strong> and
          do not constitute a binding contract or guarantee of service. All freight quotes are subject to
          availability, verification of shipment details, and formal agreement between the parties.
        </p>
        <p>
          Bidias Group LLC reserves the right to decline any freight request without obligation to provide
          a reason.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Driver Application Disclaimer">
        <p>
          Submission of a driver application through IntelliApp or any other means does not guarantee
          employment or an independent contractor relationship. All applications are subject to review,
          background checks, drug testing, and DOT qualification standards.
        </p>
        <p>
          Bidias Group LLC is an equal opportunity employer and complies with all applicable employment
          laws and regulations.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Intellectual Property">
        <p>
          All content on this website — including text, graphics, logos, images, and software — is the
          property of Bidias Group LLC or its content suppliers and is protected by applicable copyright
          and trademark laws. You may not reproduce, distribute, or create derivative works without our
          express written permission.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Disclaimer of Warranties">
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
          any warranties of any kind, either express or implied. Bidias Group LLC makes no representations
          or warranties regarding the accuracy, completeness, or reliability of any content on the website.
        </p>
        <p>
          We do not warrant that the website will be uninterrupted, error-free, or free of viruses or
          other harmful components.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Bidias Group LLC shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising out of your use of, or inability
          to use, this website or its content — even if we have been advised of the possibility of such
          damages.
        </p>
        <p>
          Our total liability for any claim arising from use of this website shall not exceed one hundred
          US dollars ($100).
        </p>
      </LegalSection>

      <LegalSection number="8" title="Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Bidias Group LLC, its officers, directors,
          employees, and agents from any claims, liabilities, damages, losses, and expenses (including
          reasonable attorney&rsquo;s fees) arising from your violation of these Terms of Service or your
          use of the website.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Governing Law">
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of the
          Commonwealth of Pennsylvania, without regard to its conflict of law provisions. Any disputes
          arising under these terms shall be subject to the exclusive jurisdiction of the courts located
          in Pennsylvania.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Changes to Terms">
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be effective
          immediately upon posting to the website. Your continued use of the website after any changes
          constitutes your acceptance of the new terms.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Contact Us">
        <p>If you have questions about these Terms of Service, please contact:</p>
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

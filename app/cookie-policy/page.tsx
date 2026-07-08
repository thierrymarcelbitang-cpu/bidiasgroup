import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — Bidias Group LLC",
  description: "How Bidias Group LLC uses cookies and similar tracking technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Cookie Policy"
      subtitle="How we use cookies and similar tracking technologies on our website."
      lastUpdated="July 1, 2026"
    >
      <LegalSection number="1" title="What Are Cookies?">
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile) when
          you visit a website. They are widely used to make websites work more efficiently and to provide
          information to website owners. Cookies cannot access, read, or modify any data on your device.
        </p>
        <p>
          Similar technologies include web beacons, pixel tags, and local storage — these serve comparable
          purposes and are also covered by this policy.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Essential Cookies">
        <p>
          Essential cookies are strictly necessary for our website to function properly. They enable
          core functionality such as page navigation, form submissions, and security features. The website
          cannot function correctly without these cookies, and they cannot be disabled.
        </p>
        <p>Examples of what essential cookies may do on our site:</p>
        <ul>
          <li>Maintain your session as you navigate between pages</li>
          <li>Remember form input data to prevent loss on page refresh</li>
          <li>Ensure security during form submissions</li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="Analytics Cookies">
        <p>
          Analytics cookies help us understand how visitors interact with our website by collecting
          information anonymously. This information helps us improve the site&rsquo;s structure and content.
        </p>
        <p>Analytics data may include:</p>
        <ul>
          <li>Pages visited and time spent on each page</li>
          <li>How visitors arrived at our site (search engines, direct links, etc.)</li>
          <li>General geographic location (country/region level only)</li>
          <li>Device and browser type</li>
        </ul>
        <p>
          We do not use analytics data to personally identify individual visitors.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Preference Cookies">
        <p>
          Preference cookies allow our website to remember choices you make — such as your preferred
          language (English or French) — to provide a more personalized experience. These cookies are
          stored locally in your browser&rsquo;s storage.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Third-Party Cookies">
        <p>
          Some pages on our website embed content or tools from third-party services that may set their
          own cookies:
        </p>
        <ul>
          <li>
            <strong>Microsoft Outlook Bookings:</strong> When you click to book an appointment, you
            are redirected to Microsoft&rsquo;s Bookings platform, which has its own cookie policy.
          </li>
          <li>
            <strong>IntelliApp:</strong> Our driver application portal operates on a third-party domain
            with its own cookie and privacy practices.
          </li>
        </ul>
        <p>
          We have no control over third-party cookies. Please review the respective privacy policies
          of these services for details.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Managing Cookies">
        <p>
          You can control and manage cookies in several ways. Please note that removing or blocking
          certain cookies may affect your experience on our website.
        </p>
        <h3>Browser Settings</h3>
        <p>
          Most browsers allow you to view, manage, delete, and block cookies. Visit your browser&rsquo;s
          help section for instructions:
        </p>
        <ul>
          <li>Chrome: Settings → Privacy and Security → Cookies</li>
          <li>Firefox: Options → Privacy &amp; Security → Cookies and Site Data</li>
          <li>Safari: Preferences → Privacy → Manage Website Data</li>
          <li>Edge: Settings → Cookies and Site Permissions</li>
        </ul>
        <h3>Do Not Track</h3>
        <p>
          Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal. Our website currently does not
          respond to DNT signals, as there is no consistent industry standard for doing so.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Contact Us">
        <p>If you have questions about our use of cookies, please contact:</p>
        <p>
          <strong>Bidias Group LLC</strong><br />
          <a href="mailto:admin@bidiasgroup.com">admin@bidiasgroup.com</a><br />
          <a href="tel:2678081450">(267) 808-1450</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

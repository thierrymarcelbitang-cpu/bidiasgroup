import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility — Bidias Group LLC",
  description: "Bidias Group LLC's commitment to web accessibility and equal access for all users.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout
      badge="ACCESSIBILITY"
      title="Accessibility Statement"
      subtitle="Our commitment to making our website accessible to everyone."
      lastUpdated="July 1, 2026"
    >
      <LegalSection number="1" title="Our Commitment">
        <p>
          Bidias Group LLC is committed to ensuring that our website is accessible to all people,
          including those with disabilities. We believe that everyone deserves equal access to
          information and services, and we strive to meet that standard on our digital platforms.
        </p>
        <p>
          We are continuously working to improve the accessibility of our website to provide the
          best possible experience for all users, regardless of their abilities or the technology
          they use to access our content.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Conformance Standards">
        <p>
          We aim to conform to the{" "}
          <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>, published
          by the World Wide Web Consortium (W3C). These guidelines explain how to make web content
          more accessible to people with a wide range of disabilities.
        </p>
        <p>The four core principles of WCAG require content to be:</p>
        <ul>
          <li><strong>Perceivable</strong> — information must be presentable in ways users can perceive</li>
          <li><strong>Operable</strong> — interface components must be operable</li>
          <li><strong>Understandable</strong> — information and operation must be understandable</li>
          <li><strong>Robust</strong> — content must be interpretable by assistive technologies</li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="Accessibility Features">
        <p>Our website incorporates the following accessibility features:</p>
        <ul>
          <li>Semantic HTML structure with proper heading hierarchy</li>
          <li>Descriptive alt text on all informational images</li>
          <li>Sufficient color contrast ratios for text and UI components</li>
          <li>Keyboard navigation support for all interactive elements</li>
          <li>Focus indicators visible on all interactive elements</li>
          <li>Responsive design that works across devices and screen sizes</li>
          <li>Forms with properly associated labels for all input fields</li>
          <li>Skip navigation links for screen reader users</li>
          <li>No content that flashes more than 3 times per second</li>
        </ul>
      </LegalSection>

      <LegalSection number="4" title="Known Limitations">
        <p>
          While we strive for full accessibility, there may be some areas of our website that do
          not yet fully conform to WCAG 2.1 AA. We are actively working to identify and address
          these issues. Known areas of ongoing improvement include:
        </p>
        <ul>
          <li>Some older PDF documents may not be fully accessible — we are working to remediate these</li>
          <li>Third-party tools (IntelliApp, Microsoft Bookings) are subject to their own accessibility standards</li>
          <li>Animated content may present challenges for users with vestibular disorders — we are adding prefers-reduced-motion support</li>
        </ul>
      </LegalSection>

      <LegalSection number="5" title="Feedback &amp; Contact">
        <p>
          We welcome feedback on the accessibility of our website. If you experience any barriers
          or have suggestions for improvement, please contact us:
        </p>
        <p>
          <strong>Bidias Group LLC</strong><br />
          Andre Bidias, Administrator<br />
          <a href="mailto:admin@bidiasgroup.com">admin@bidiasgroup.com</a><br />
          <a href="tel:2678081450">(267) 808-1450</a>
        </p>
        <p>
          We aim to respond to accessibility feedback within 3 business days and will work to
          resolve substantive issues within 10 business days.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Formal Complaints">
        <p>
          If you are not satisfied with our response to your accessibility concern, you may contact
          the relevant enforcement authority in your jurisdiction. In the United States, you may
          contact the:
        </p>
        <ul>
          <li>
            <strong>U.S. Department of Justice, Civil Rights Division</strong><br />
            For ADA Title III complaints involving places of public accommodation<br />
            <a href="https://www.ada.gov" target="_blank" rel="noopener noreferrer">www.ada.gov</a>
          </li>
        </ul>
        <p>
          We are committed to good-faith efforts to resolve all accessibility issues and appreciate
          your patience as we continue to improve.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

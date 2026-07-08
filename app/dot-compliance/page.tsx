import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "DOT Compliance — Bidias Group LLC",
  description: "Bidias Group LLC's commitment to federal DOT and FMCSA regulations for trucking compliance.",
};

export default function DotCompliancePage() {
  return (
    <LegalLayout
      badge="COMPLIANCE"
      title="DOT Compliance"
      subtitle="Our commitment to federal transportation regulations and safety standards."
      lastUpdated="July 1, 2026"
    >
      <LegalSection number="1" title="Federal Compliance Commitment">
        <p>
          Bidias Group LLC is fully committed to compliance with all applicable U.S. Department of
          Transportation (DOT) and Federal Motor Carrier Safety Administration (FMCSA) regulations.
          We maintain our operating authority and ensure that all operations, drivers, and equipment
          meet or exceed federal requirements.
        </p>
        <p>
          Compliance is not just a legal obligation at Bidias Group LLC — it is a core value that
          protects our drivers, our customers, and everyone sharing the road.
        </p>
      </LegalSection>

      <LegalSection number="2" title="FMCSA Registration &amp; Operating Authority">
        <p>Bidias Group LLC holds active FMCSA operating authority as a for-hire motor carrier. Our compliance includes:</p>
        <ul>
          <li>Active USDOT Number registration</li>
          <li>Motor Carrier (MC) Number in good standing</li>
          <li>Required minimum insurance coverage maintained at all times</li>
          <li>Current BOC-3 process agent on file</li>
          <li>Unified Carrier Registration (UCR) up to date</li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="Driver Qualification Standards">
        <p>Every driver operating under Bidias Group LLC must meet FMCSA driver qualification requirements:</p>
        <ul>
          <li>Valid Commercial Driver&rsquo;s License (CDL) appropriate to vehicle class</li>
          <li>Current DOT Medical Examiner&rsquo;s Certificate (medical card)</li>
          <li>Pre-employment background and MVR (Motor Vehicle Record) check</li>
          <li>Pre-employment drug and alcohol testing (negative results required)</li>
          <li>Verification of prior employment history (3 years)</li>
          <li>Road test or road test certificate on file</li>
          <li>Annual MVR review for all active drivers</li>
        </ul>
      </LegalSection>

      <LegalSection number="4" title="Hours of Service (HOS)">
        <p>
          Bidias Group LLC strictly enforces FMCSA Hours of Service regulations to prevent driver
          fatigue and ensure safe operation:
        </p>
        <ul>
          <li>11-hour driving limit within a 14-hour on-duty window</li>
          <li>30-minute break requirement after 8 consecutive hours of driving</li>
          <li>60/70-hour weekly driving limits</li>
          <li>34-hour restart provision compliance</li>
          <li>Sleeper berth provisions where applicable</li>
        </ul>
      </LegalSection>

      <LegalSection number="5" title="Drug &amp; Alcohol Testing (FMCSA Part 382)">
        <p>
          Bidias Group LLC maintains a comprehensive drug and alcohol testing program in full compliance
          with FMCSA Part 382:
        </p>
        <ul>
          <li><strong>Pre-employment testing</strong> — required before any driver operates a CMV</li>
          <li><strong>Random testing</strong> — conducted throughout the year per FMCSA minimum rates</li>
          <li><strong>Post-accident testing</strong> — required following qualifying accidents</li>
          <li><strong>Reasonable suspicion testing</strong> — when observable signs indicate impairment</li>
          <li><strong>Return-to-duty testing</strong> — following any violation</li>
          <li><strong>Follow-up testing</strong> — ongoing after return-to-duty</li>
        </ul>
        <p>
          All testing is conducted through an authorized third-party administrator (TPA) using DOT-approved
          collection procedures and SAMHSA-certified laboratories.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Vehicle Inspection &amp; Maintenance">
        <p>Our fleet maintenance program ensures all commercial motor vehicles are safe and roadworthy:</p>
        <ul>
          <li>Pre-trip and post-trip driver vehicle inspection reports (DVIRs) required daily</li>
          <li>Systematic preventive maintenance schedule for all units</li>
          <li>Annual DOT inspection by qualified inspectors</li>
          <li>Immediate repair of any out-of-service defects before the vehicle re-enters service</li>
          <li>Complete maintenance records kept on file as required by 49 CFR Part 396</li>
        </ul>
      </LegalSection>

      <LegalSection number="7" title="Electronic Logging Device (ELD) Compliance">
        <p>
          All Bidias Group LLC commercial motor vehicles subject to the ELD mandate are equipped with
          FMCSA-registered Electronic Logging Devices. Our ELD program includes:
        </p>
        <ul>
          <li>Use of only FMCSA-certified and registered ELD devices</li>
          <li>Driver training on proper ELD use and data entry requirements</li>
          <li>Data transfer capability for roadside inspections</li>
          <li>Recordkeeping and retention of ELD data as required by law</li>
        </ul>
      </LegalSection>

      <LegalSection number="8" title="Safety Contact">
        <p>
          For compliance inquiries, safety concerns, or to report a potential violation, contact our
          safety department:
        </p>
        <p>
          <strong>Bidias Group LLC — Safety &amp; Compliance</strong><br />
          Andre Bidias, Administrator<br />
          <a href="mailto:admin@bidiasgroup.com">admin@bidiasgroup.com</a><br />
          <a href="tel:2678081450">(267) 808-1450</a>
        </p>
        <p>
          You may also file a complaint directly with FMCSA at{" "}
          <a href="https://www.fmcsa.dot.gov/safety/consumer-complaint" target="_blank" rel="noopener noreferrer">
            fmcsa.dot.gov
          </a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

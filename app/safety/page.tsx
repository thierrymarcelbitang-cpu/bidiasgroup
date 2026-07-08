import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Safety — Bidias Group LLC",
  description: "Bidias Group LLC's safety culture, standards, and commitment to safe trucking operations.",
};

export default function SafetyPage() {
  return (
    <LegalLayout
      badge="SAFETY"
      title="Safety Standards"
      subtitle="Our commitment to keeping drivers, cargo, and the public safe on every mile."
      lastUpdated="July 1, 2026"
    >
      <LegalSection number="1" title="Our Safety Culture">
        <p>
          At Bidias Group LLC, safety is not a department — it is a culture. We believe that every
          accident is preventable, and that protecting our drivers, the public, and the freight in
          our care is the foundation of professional trucking.
        </p>
        <p>
          Safety performance is a shared responsibility across every level of our organization, from
          management decisions to daily driver behavior. We hold ourselves accountable to the highest
          standards in the industry.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Driver Safety Standards">
        <p>We require all drivers operating under Bidias Group LLC to:</p>
        <ul>
          <li>Hold a valid, appropriate Commercial Driver&rsquo;s License (CDL) at all times</li>
          <li>Maintain a current DOT medical certificate</li>
          <li>Complete all required pre-employment safety training</li>
          <li>Perform thorough pre-trip and post-trip vehicle inspections</li>
          <li>Obey all federal, state, and local traffic laws</li>
          <li>Report any accidents, incidents, or near-misses immediately</li>
          <li>Never operate a commercial motor vehicle while impaired</li>
          <li>Comply fully with HOS regulations — no exceptions</li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="Fleet Maintenance &amp; Inspection">
        <p>
          Safe equipment is non-negotiable. Our fleet maintenance program includes:
        </p>
        <ul>
          <li>Regularly scheduled preventive maintenance intervals for every unit</li>
          <li>Annual full DOT inspections by certified mechanics</li>
          <li>Immediate out-of-service compliance — defective equipment never rolls</li>
          <li>Brake, tire, and lighting system checks at every service</li>
          <li>Complete, up-to-date maintenance records maintained per FMCSA requirements</li>
        </ul>
      </LegalSection>

      <LegalSection number="4" title="Hours of Service Management">
        <p>
          Driver fatigue is one of the leading causes of commercial vehicle accidents. We take HOS
          compliance seriously:
        </p>
        <ul>
          <li>Electronic Logging Devices (ELDs) installed in all CMVs subject to the mandate</li>
          <li>Real-time HOS monitoring to prevent violations</li>
          <li>Dispatch planning that prioritizes compliant schedules over speed</li>
          <li>Strict prohibition on falsifying logs or coercing HOS violations</li>
          <li>Encouragement for drivers to speak up when rest is needed</li>
        </ul>
      </LegalSection>

      <LegalSection number="5" title="Drug &amp; Alcohol Policy">
        <p>
          Bidias Group LLC operates a zero-tolerance drug and alcohol policy in full compliance
          with FMCSA Part 382. Any driver who tests positive or refuses testing is immediately
          removed from safety-sensitive functions and referred to a Substance Abuse Professional (SAP).
        </p>
        <p>
          See our <a href="/dot-compliance">DOT Compliance page</a> for full details on our
          testing program.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Training &amp; Development">
        <p>We invest in ongoing safety training for all drivers and staff:</p>
        <ul>
          <li>New driver orientation covering all safety policies and procedures</li>
          <li>Defensive driving techniques and hazard recognition</li>
          <li>Adverse weather driving — rain, snow, ice, and high winds</li>
          <li>Cargo securement best practices</li>
          <li>Emergency response procedures</li>
          <li>DOT regulations updates as rules evolve</li>
        </ul>
      </LegalSection>

      <LegalSection number="7" title="Incident Response">
        <p>In the event of an accident or incident, Bidias Group LLC follows a structured response protocol:</p>
        <ul>
          <li>Immediate notification to management and emergency services as needed</li>
          <li>Post-accident drug and alcohol testing within required timeframes</li>
          <li>Thorough accident investigation to identify root causes</li>
          <li>Corrective action implementation to prevent recurrence</li>
          <li>FMCSA accident register updated as required</li>
          <li>Communication with affected parties and insurance as appropriate</li>
        </ul>
      </LegalSection>

      <LegalSection number="8" title="Customer Safety Commitment">
        <p>
          Bidias Group LLC&rsquo;s safety standards directly benefit our freight customers. When you ship
          with us, your cargo is in the hands of qualified, rested, sober drivers operating properly
          maintained equipment. We stand behind every load we haul.
        </p>
        <p>
          To report a safety concern or ask questions about our safety program, contact us at{" "}
          <a href="mailto:admin@bidiasgroup.com">admin@bidiasgroup.com</a> or{" "}
          <a href="tel:2678081450">(267) 808-1450</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

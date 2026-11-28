export const enquiryFaqs = [
  {
    question: "How quickly will Port AI Engineers respond to my enquiry?",
    answer:
      "You will receive an initial technical response within 24 working hours. For urgent discussions, you can also book a Google Calendar slot or reach us directly via phone or WhatsApp.",
  },
  {
    question: "What details help prepare a project quote?",
    answer:
      "Share your required discipline (e.g., P&ID, PFD, 3D Piping, Isometrics, GA Drawings, Stress Analysis, or Plant Layout), approximate sheet or line count, target CAD/stress platform, and project schedule. No initial file upload is needed on this form.",
  },
  {
    question: "Can we sign an NDA and review sample drawings before starting?",
    answer:
      "Yes. Anonymized engineering sample documentation is available upon request, subject to confidentiality and NDA review. Once we receive your enquiry, our team arranges a secure sharing and walkthrough process.",
  },
  {
    question: "Which CAD and pipe stress software platforms do you deliver in?",
    answer:
      "Our engineering team works natively in AutoCAD, AutoCAD Plant 3D, SP3D, E3D, PDMS, CADWORX, CAESAR II, and AutoPIPE, delivering outputs aligned with your project conventions.",
  },
  {
    question: "Do you work with EPC contractors, consultants, and plants outside Hyderabad?",
    answer:
      "Yes. While our engineering operations center is in Hyderabad, India, we collaborate remotely with EPC contractors, plant owners, and engineering consultants across India, the UAE, Saudi Arabia, and Qatar.",
  },
];

interface EnquiryFaqSectionProps {
  headingTag?: "h2" | "h3";
}

export default function EnquiryFaqSection({ headingTag = "h3" }: EnquiryFaqSectionProps) {
  const Heading = headingTag;

  return (
    <div className="mt-14 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_14px_34px_var(--color-card-shadow)] sm:p-8">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Enquiry Guidance &amp; FAQs
        </span>
        <Heading className="text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
          Frequently Asked Questions Before Requesting a Quote
        </Heading>
      </div>

      <div className="mt-6 divide-y divide-[var(--color-border)]">
        {enquiryFaqs.map((faq) => (
          <details key={faq.question} className="group py-4 first:pt-0 last:pb-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-xs text-[var(--color-primary)] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 pr-8 text-sm leading-relaxed text-[var(--color-muted)]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

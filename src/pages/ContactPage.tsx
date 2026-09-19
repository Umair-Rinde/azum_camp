import { contact } from "@/data/constants";
import { displayValue } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { ContactForm } from "@/components/conference/ContactForm";

export function ContactPage() {
  return (
    <>
      <PageMeta title="Contact | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Contact"
        title="Conference secretariat"
        description="Replace bracketed fields in the constants file with organizer-provided details before publication."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <SectionHeading title="Conference Secretariat" />
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Office</dt>
                <dd className="mt-1">{displayValue(contact.secretariat)}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Email</dt>
                <dd className="mt-1">{displayValue(contact.email)}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Phone</dt>
                <dd className="mt-1">{displayValue(contact.phone)}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Address</dt>
                <dd className="mt-1">{displayValue(contact.address)}</dd>
              </div>
            </dl>
          </div>

          <div>
            <SectionHeading title="Social Links" />
            <ul className="mt-4 space-y-2 text-sm">
              {contact.social.map((item) => (
                <li key={item.label}>
                  <a className="text-deep-forest underline-offset-4 hover:underline" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-warm-white p-6">
          <SectionHeading title="Contact Form" />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

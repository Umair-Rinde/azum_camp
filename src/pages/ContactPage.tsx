import { contact } from "@/data/constants";
import { displayValue } from "@/lib/utils";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { ContactForm } from "@/components/conference/ContactForm";

function EmailLinks() {
  return contact.email.split(" / ").map((email, index) => (
    <span key={email}>
      {index > 0 ? " / " : null}
      <a className="text-deep-forest underline-offset-4 hover:underline" href={`mailto:${email}`}>
        {email}
      </a>
    </span>
  ));
}

export function ContactPage() {
  const website = contact.social.find((item) => item.label.toLowerCase() === "website");

  return (
    <>
      <PageMeta title="Contact | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Contact"
        title="Conference Secretariat"
        // description="Replace bracketed fields in the constants file with organizer-provided details before publication."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <div>
          <SectionHeading title="Conference Secretariat" />
          <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-border bg-warm-white p-4">
              <dt className="text-xs tracking-widest text-muted uppercase">Address</dt>
              <dd className="mt-1 whitespace-pre-line leading-6">{displayValue(contact.address)}</dd>
            </div>
            <div className="rounded-lg border border-border bg-warm-white p-4">
              <dt className="text-xs tracking-widest text-muted uppercase">Phone</dt>
              <dd className="mt-1">{displayValue(contact.phone)}</dd>
            </div>
            <div className="rounded-lg border border-border bg-warm-white p-4">
              <dt className="text-xs tracking-widest text-muted uppercase">Email</dt>
              <dd className="mt-1">
                <EmailLinks />
              </dd>
            </div>
            {website ? (
              <div className="rounded-lg border border-border bg-warm-white p-4">
                <dt className="text-xs tracking-widest text-muted uppercase">Website</dt>
                <dd className="mt-1">
                  <a
                    className="break-all text-deep-forest underline-offset-4 hover:underline"
                    href={website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website.href}
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
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

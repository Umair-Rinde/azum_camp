import { currentConference, siteMeta } from "@/data/constants";
import { isPlaceholder } from "@/lib/utils";

export function JsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMeta.siteName,
    description: siteMeta.description,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.siteName,
  };

  const event = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: isPlaceholder(currentConference.title)
      ? siteMeta.siteName
      : currentConference.title,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    description: siteMeta.description,
    ...(isPlaceholder(currentConference.startDateISO)
      ? {}
      : { startDate: currentConference.startDateISO }),
    location: {
      "@type": "Place",
      name: isPlaceholder(currentConference.venue) ? "Venue to be announced" : currentConference.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: isPlaceholder(currentConference.city)
          ? "To be announced"
          : currentConference.city,
        addressCountry: isPlaceholder(currentConference.country)
          ? "To be announced"
          : currentConference.country,
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }} />
    </>
  );
}

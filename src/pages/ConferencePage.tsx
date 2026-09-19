import {
  conferenceFormat,
  currentImportantDates,
  historicalTopics,
  whoShouldAttend,
} from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { ThemeCard } from "@/components/conference/ThemeCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ConferencePage() {
  return (
    <>
      <PageMeta title="Conference | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Conference"
        title="Scientific meeting overview"
        description="Scope, audience, and format for the series. Current dates remain unpublished until they are entered in the constants file."
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <div>
          <SectionHeading title="Overview" />
          <p className="mt-6 max-w-3xl leading-7 text-muted">
            HSDS is an academic conference series concerned with herbal medicines, synthetic and metal-based drugs, formulation science, and translational approaches. The next edition will reuse this page structure once organizers confirm title, dates, and venue.
          </p>
        </div>

        <div>
          <SectionHeading title="Scientific Scope" />
          <p className="mt-6 max-w-3xl leading-7 text-muted">
            Earlier meetings examined preparation and characterization of drugs, analytical and biochemical methods, complementary and Unani medicines, and molecular targets. Those themes remain useful context; they are not automatically the current call.
          </p>
        </div>

        <div id="topics" className="scroll-mt-28">
          <SectionHeading title="Themes & Tracks" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {historicalTopics.map((topic, index) => (
              <ThemeCard key={topic} title={topic} index={index} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Who Should Attend" />
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {whoShouldAttend.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-warm-white px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading title="Conference Format" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {conferenceFormat.map((item) => (
              <ThemeCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>

        <div id="dates" className="scroll-mt-28">
          <SectionHeading title="Important Dates" />
          <div className="mt-6 rounded-lg border border-border bg-warm-white">
            {currentImportantDates.length === 0 ? (
              <p className="px-5 py-8 text-sm text-muted">
                Abstract deadlines, early registration, and opening dates will appear in this table after they are added to src/data/constants.ts.
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Milestone</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentImportantDates.map((item) => (
                    <TableRow key={item.label}>
                      <TableCell>{item.label}</TableCell>
                      <TableCell>{item.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

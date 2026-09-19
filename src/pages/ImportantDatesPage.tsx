import { currentImportantDates } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ImportantDatesPage() {
  return (
    <>
      <PageMeta title="Important Dates | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Overview"
        title="Important dates"
        description="Deadlines will appear here after they are confirmed in the constants file. Do not use dates from earlier pamphlets."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-lg border border-border bg-warm-white">
          {currentImportantDates.length === 0 ? (
            <p className="px-5 py-10 text-sm text-muted">
              Abstract close, early-bird registration, and opening dates are still to be announced.
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
      </section>
    </>
  );
}

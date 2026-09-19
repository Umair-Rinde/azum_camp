import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { ScheduleTimeline } from "@/components/conference/ScheduleTimeline";

export function ProgramPage() {
  return (
    <>
      <PageMeta title="Program | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="Program"
        title="Scientific program"
        description="Day tabs, session times, rooms, oral and poster blocks, and networking intervals will appear when the schedule is entered in the constants file."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <ScheduleTimeline />
      </section>
    </>
  );
}

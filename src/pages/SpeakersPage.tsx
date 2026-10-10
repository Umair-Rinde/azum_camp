import { committee, speakers } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { SpeakerCard } from "@/components/conference/SpeakerCard";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { Card, CardContent } from "@/components/ui/card";
import type { Speaker } from "@/data/types";

/** Fixed width keeps every card the same size and proportion. */
const cardShell = "w-[13.5rem] shrink-0";

function SpeakerGroup({
  title,
  people,
  centered = false,
}: {
  title: string;
  people: Speaker[];
  centered?: boolean;
}) {
  return (
    <div>
      <SectionHeading title={title} align={centered ? "center" : "left"} />
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-10">
        {people.length > 0
          ? people.map((speaker) => (
              <div key={speaker.name} className={cardShell}>
                <SpeakerCard {...speaker} />
              </div>
            ))
          : Array.from({ length: centered ? 1 : 3 }).map((_, index) => (
              <div key={index} className={cardShell}>
                <SpeakerCard placeholder />
              </div>
            ))}
      </div>
    </div>
  );
}

export function SpeakersPage() {
  return (
    <>
      <PageMeta title="Speakers | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="People"
        title="Speakers & Advisory Committee"
        // description="Only confirmed names should be added to the constants file. Until then, these sections remain placeholders."
      />
      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <SpeakerGroup
          title="Keynote Speaker (Chief Guest)"
          people={speakers.filter((s) => s.role === "keynote")}
          centered
        />

        <div id="committee" className="scroll-mt-28">
          <SectionHeading title="Advisory Committee" align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-10">
            {committee.length > 0
              ? committee.map((member) => (
                  <Card
                    key={member.name}
                    className={`${cardShell} flex flex-col overflow-hidden`}
                  >
                    <PlaceholderImage
                      src={member.photo}
                      alt={member.name}
                      className="aspect-[3/4] shrink-0"
                    />
                    <CardContent className="flex min-h-[7.5rem] flex-1 flex-col gap-1 px-3.5 pt-3.5 pb-4 text-center">
                      <p className="min-h-[2.5rem] font-heading text-[0.95rem] leading-snug line-clamp-2">
                        {member.name}
                      </p>
                      <p className="min-h-[2rem] text-xs leading-snug text-gold line-clamp-2">
                        {member.role}
                      </p>
                      <p className="min-h-[2.75rem] text-xs leading-snug text-muted line-clamp-3">
                        {member.institution}
                      </p>
                    </CardContent>
                  </Card>
                ))
              : Array.from({ length: 3 }).map((_, index) => (
                  <Card
                    key={index}
                    className={`${cardShell} flex flex-col overflow-hidden`}
                  >
                    <PlaceholderImage
                      alt="Committee member to be announced"
                      className="aspect-[3/4] shrink-0"
                    />
                    <CardContent className="flex min-h-[7.5rem] flex-1 flex-col gap-1 px-3.5 pt-3.5 pb-4 text-center">
                      <p className="min-h-[2.5rem] font-heading text-[0.95rem] leading-snug line-clamp-2">
                        Member to be announced
                      </p>
                      <p className="min-h-[2rem] text-xs leading-snug text-gold line-clamp-2">
                        Role to be confirmed
                      </p>
                      <p className="min-h-[2.75rem] text-xs leading-snug text-muted line-clamp-3">
                        Institution to be confirmed
                      </p>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>

        <SpeakerGroup
          title="Invited Speakers"
          people={speakers.filter((s) => s.role === "invited")}
          centered
        />
      </section>
    </>
  );
}

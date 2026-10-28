import { useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { speakers } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { SpeakerCard } from "@/components/conference/SpeakerCard";
import type { Speaker } from "@/data/types";

/** Fixed width keeps cards in a group the same size and proportion. */
const cardShell = "w-[13.5rem] shrink-0";
const keynoteShell = "w-[22rem] max-w-full shrink-0";

function SpeakerGroup({
  title,
  people,
  centered = false,
  featured = false,
}: {
  title: ReactNode;
  people: Speaker[];
  centered?: boolean;
  featured?: boolean;
}) {
  const shell = featured ? keynoteShell : cardShell;

  return (
    <div>
      <SectionHeading title={title} align={centered ? "center" : "left"} />
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-10">
        {people.length > 0
          ? people.map((speaker) => (
              <div key={speaker.name} className={shell}>
                <SpeakerCard
                  {...speaker}
                  name={speaker.name.replace(/\s*\(Chief Guest\)\s*$/, "")}
                  featured={featured}
                />
              </div>
            ))
          : Array.from({ length: centered ? 1 : 3 }).map((_, index) => (
              <div key={index} className={shell}>
                <SpeakerCard placeholder featured={featured} />
              </div>
            ))}
      </div>
    </div>
  );
}

export function SpeakersPage() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#committee") navigate("/committee", { replace: true });
  }, [hash, navigate]);

  return (
    <>
      <PageMeta title="Speakers | Herbal & Synthetic Drug Studies" />
      <PageBanner
        eyebrow="People"
        title="Speakers"
        // description="Only confirmed names should be added to the constants file. Until then, these sections remain placeholders."
      />
      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <SpeakerGroup
          title={
            <>
              Keynote Speaker{" "}
              <span className="block md:inline">(Chief Guest)</span>
            </>
          }
          people={speakers.filter((s) => s.role === "keynote")}
          centered
          featured
        />

        <SpeakerGroup
          title="Invited Speakers"
          people={speakers.filter((s) => s.role === "invited")}
          centered
        />
      </section>
    </>
  );
}

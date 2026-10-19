import { committee } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SpeakerCard } from "@/components/conference/SpeakerCard";

/** Fixed width keeps every card the same size and proportion. */
const cardShell = "w-[13.5rem] justify-self-center";

export function CommitteePage() {
  return (
    <>
      <PageMeta title="Committee | Herbal & Synthetic Drug Studies" />
      <PageBanner eyebrow="People" title="Committee" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {committee.map((member) => (
            <div key={member.name} className={cardShell}>
              <SpeakerCard
                name={member.name}
                designation={member.role}
                institution={member.institution}
                country=""
                photo={member.photo}
                shortBio={member.bio}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import { committee } from "@/data/constants";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SpeakerCard } from "@/components/conference/SpeakerCard";
import type { CommitteeMember } from "@/data/types";

/** Cards stay even; second-row items can shrink slightly to fit five across. */
const cardShell = "w-full max-w-[13.5rem] justify-self-center";

const leadMembers = committee.slice(0, 2);
const otherMembers = committee.slice(2);

function MemberCard({ member }: { member: CommitteeMember }) {
  return (
    <div className={cardShell}>
      <SpeakerCard
        name={member.name}
        designation={member.role}
        institution={member.institution}
        country=""
        photo={member.photo}
        shortBio={member.bio}
      />
    </div>
  );
}

export function CommitteePage() {
  return (
    <>
      <PageMeta title="Committee | Herbal & Synthetic Drug Studies" />
      <PageBanner eyebrow="People" title="Reception Committee" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-stretch justify-center gap-x-12 gap-y-12">
          {leadMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {otherMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}

import { committee, speakers } from "@/data/constants";
import { COMMITTEE_GROUP_IMAGES } from "@/data/images";
import { PageMeta } from "@/components/seo/PageMeta";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionHeading } from "@/components/conference/SectionHeading";
import { SpeakerCard } from "@/components/conference/SpeakerCard";
import { ImageGallery } from "@/components/conference/ImageGallery";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { Card, CardContent } from "@/components/ui/card";
import type { Speaker } from "@/data/types";

function SpeakerGroup({ title, people }: { title: string; people: Speaker[] }) {
  return (
    <div>
      <SectionHeading title={title} />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {people.length > 0
          ? people.map((speaker) => <SpeakerCard key={speaker.name} {...speaker} />)
          : Array.from({ length: 3 }).map((_, index) => <SpeakerCard key={index} placeholder />)}
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
        title="Speakers and scientific committee"
        description="Only confirmed names should be added to the constants file. Until then, these sections remain placeholders."
      />
      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <SpeakerGroup title="Plenary Speakers" people={speakers.filter((s) => s.role === "plenary")} />
        <SpeakerGroup title="Keynote Speakers" people={speakers.filter((s) => s.role === "keynote")} />
        <SpeakerGroup title="Invited Speakers" people={speakers.filter((s) => s.role === "invited")} />

        <div id="committee" className="scroll-mt-28 space-y-10">
          <div>
            <SectionHeading title="Scientific Committee" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {committee.length > 0
                ? committee.map((member) => (
                    <Card key={member.name} className="overflow-hidden">
                      <PlaceholderImage src={member.photo} alt={member.name} className="aspect-[4/5]" />
                      <CardContent className="pt-5">
                        <p className="font-heading text-xl">{member.name}</p>
                        <p className="text-sm text-gold">{member.role}</p>
                        <p className="text-sm text-muted">{member.institution}</p>
                      </CardContent>
                    </Card>
                  ))
                : Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <PlaceholderImage alt="Committee member to be announced" className="aspect-[4/5]" />
                      <CardContent className="pt-5">
                        <p className="font-heading text-xl">Member to be announced</p>
                        <p className="text-sm text-gold">Role to be confirmed</p>
                        <p className="text-sm text-muted">Institution to be confirmed</p>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </div>
          <div>
            <SectionHeading
              title="Committee groups"
              description="Group photographs of organizing and scientific committee members."
            />
            <div className="mt-6">
              <ImageGallery images={COMMITTEE_GROUP_IMAGES} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

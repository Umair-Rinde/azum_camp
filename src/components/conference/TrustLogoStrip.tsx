import { organizers } from "@/data/constants";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";

export function TrustLogoStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {organizers.map((org) => (
        <div
          key={org.name}
          className="flex items-center gap-4 rounded-lg border border-border bg-warm-white px-4 py-3"
        >
          <PlaceholderImage src={org.logo} alt={`${org.name} mark`} className="size-14 rounded-md" />
          <div>
            <p className="text-sm font-medium">{org.name}</p>
            <p className="text-xs text-muted">{org.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { presentationTypes, researchTracks } from "@/data/constants";
import { submitToApi } from "@/lib/submissions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  title: z.string().min(3, "Title is required"),
  authorName: z.string().min(2, "Author name is required"),
  coAuthors: z.string().optional(),
  email: z.email("Enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
  institution: z.string().min(2, "Institution is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  presentationType: z.string().min(1, "Select a presentation type"),
  researchTrack: z.string().min(1, "Select a research area"),
  abstract: z.string().min(40, "Abstract text is required"),
});

type AbstractValues = z.infer<typeof schema>;

export function AbstractSubmissionForm() {
  const [status, setStatus] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const form = useForm<AbstractValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      authorName: "",
      coAuthors: "",
      email: "",
      phone: "",
      institution: "",
      city: "",
      country: "",
      presentationType: "",
      researchTrack: "",
      abstract: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await submitToApi("/api/abstracts", { ...values, fileName });
    setStatus("Abstract captured locally. Connect this form to a backend when ready.");
    form.reset();
    setFileName("");
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field id="abstract-title" label="Abstract title" error={form.formState.errors.title?.message} className="md:col-span-2">
        <Input id="abstract-title" {...form.register("title")} />
      </Field>
      <Field id="author-name" label="Author name" error={form.formState.errors.authorName?.message}>
        <Input id="author-name" {...form.register("authorName")} />
      </Field>
      <Field id="co-authors" label="Co-authors">
        <Input id="co-authors" {...form.register("coAuthors")} />
      </Field>
      <Field id="abstract-email" label="Email" error={form.formState.errors.email?.message}>
        <Input id="abstract-email" type="email" {...form.register("email")} />
      </Field>
      <Field id="abstract-phone" label="Phone" error={form.formState.errors.phone?.message}>
        <Input id="abstract-phone" {...form.register("phone")} />
      </Field>
      <Field id="abstract-institution" label="Institution" error={form.formState.errors.institution?.message}>
        <Input id="abstract-institution" {...form.register("institution")} />
      </Field>
      <Field id="abstract-city" label="City" error={form.formState.errors.city?.message}>
        <Input id="abstract-city" {...form.register("city")} />
      </Field>
      <Field id="abstract-country" label="Country" error={form.formState.errors.country?.message}>
        <Input id="abstract-country" {...form.register("country")} />
      </Field>
      <Field label="Presentation type" error={form.formState.errors.presentationType?.message}>
        <Select onValueChange={(value) => form.setValue("presentationType", value, { shouldValidate: true })}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {presentationTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label="Research area" error={form.formState.errors.researchTrack?.message}>
        <Select onValueChange={(value) => form.setValue("researchTrack", value, { shouldValidate: true })}>
          <SelectTrigger>
            <SelectValue placeholder="Select area" />
          </SelectTrigger>
          <SelectContent>
            {researchTracks.map((track) => (
              <SelectItem key={track} value={track}>
                {track}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field id="abstract-text" label="Abstract" error={form.formState.errors.abstract?.message} className="md:col-span-2">
        <Textarea id="abstract-text" {...form.register("abstract")} />
      </Field>
      <Field id="abstract-file" label="Supporting file" className="md:col-span-2">
        <Input
          id="abstract-file"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
        />
      </Field>
      <div className="md:col-span-2">
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting…" : "Submit abstract"}
        </Button>
        {status ? <p className="mt-3 text-sm text-forest">{status}</p> : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id?: string;
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 block">
        {label}
      </Label>
      {children}
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

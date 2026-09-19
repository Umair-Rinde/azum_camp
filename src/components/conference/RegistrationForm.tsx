import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationPlans } from "@/data/constants";
import { submitToApi } from "@/lib/submissions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(7, "Phone is required"),
  institution: z.string().min(2, "Institution is required"),
  category: z.string().min(1, "Select a category"),
  country: z.string().min(2, "Country is required"),
});

type RegistrationValues = z.infer<typeof schema>;

export function RegistrationForm() {
  const [status, setStatus] = useState("");
  const form = useForm<RegistrationValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      category: "",
      country: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await submitToApi("/api/registration", values);
    setStatus("Registration captured locally. Payment will be enabled when instructions are published.");
    form.reset();
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label="Full name" error={form.formState.errors.fullName?.message}>
        <Input {...form.register("fullName")} />
      </Field>
      <Field label="Email" error={form.formState.errors.email?.message}>
        <Input type="email" {...form.register("email")} />
      </Field>
      <Field label="Phone" error={form.formState.errors.phone?.message}>
        <Input {...form.register("phone")} />
      </Field>
      <Field label="Institution" error={form.formState.errors.institution?.message}>
        <Input {...form.register("institution")} />
      </Field>
      <Field label="Country" error={form.formState.errors.country?.message}>
        <Input {...form.register("country")} />
      </Field>
      <Field label="Category" error={form.formState.errors.category?.message}>
        <Select onValueChange={(value) => form.setValue("category", value, { shouldValidate: true })}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {registrationPlans.map((plan) => (
              <SelectItem key={plan.category} value={plan.category}>
                {plan.category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <div className="md:col-span-2">
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting…" : "Submit registration"}
        </Button>
        {status ? <p className="mt-3 text-sm text-forest">{status}</p> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 block">{label}</Label>
      {children}
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

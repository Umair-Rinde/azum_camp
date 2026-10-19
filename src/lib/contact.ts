const DEFAULT_CONTACT_EMAIL = "chemistry@aiscpune.org";

/** Conference contact email from env, with a hard-coded fallback. */
export function getContactEmail(): string {
  const fromEnv = import.meta.env.VITE_CONTACT_EMAIL?.trim();
  return fromEnv || DEFAULT_CONTACT_EMAIL;
}

export function buildContactMailto(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const to = getContactEmail();
  const subject = encodeURIComponent(values.subject);
  const body = encodeURIComponent(
    [`Name: ${values.name}`, `Email: ${values.email}`, "", values.message].join("\n"),
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

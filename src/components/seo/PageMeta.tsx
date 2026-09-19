import { useEffect } from "react";
import { siteMeta } from "@/data/constants";

type PageMetaProps = {
  title: string;
  description?: string;
};

export function PageMeta({ title, description = siteMeta.description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);
  }, [title, description]);

  return null;
}

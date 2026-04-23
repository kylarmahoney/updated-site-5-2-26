import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
}

export function useSEO({ title, description, canonical }: SEOOptions) {
  useEffect(() => {
    document.title = title;

    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", description);

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    let twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    let twitterDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", description);

    if (canonical) {
      let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonicalTag) canonicalTag.setAttribute("href", canonical);
    }
  }, [title, description, canonical]);
}

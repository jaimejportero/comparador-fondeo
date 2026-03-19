// ============================================================
// src/hooks/usePageMeta.ts
// Hook para setear title + meta description en cada página
// ============================================================

import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Open Graph
    const setOG = (property: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:type", "website");
    setOG("og:site_name", "FundedTools");
  }, [title, description]);
}


// ============================================================
// CÓMO USARLO — añade esto al principio de cada pantalla:
// ============================================================
//
  // import { usePageMeta } from "../hooks/usePageMeta";
//
//   export default function MiPagina() {
//     usePageMeta({
//       title: "...",
//       description: "...",
//     });
//     return ( ... );
//   }


// ============================================================
// META TAGS PARA CADA PANTALLA — copia y pega en cada archivo
// ============================================================

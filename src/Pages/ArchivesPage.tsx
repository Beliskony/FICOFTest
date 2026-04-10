"use client";

import { useState } from "react";
import type { ArchiveSection, Photo, Video, Document, LienUtile } from "../Interfaces/archivetype";
import ArchivesHero from "../Components/archives/ArchiveHero";
import ArchiveTabs from "../Components/archives/ArchiveTabs";
import GaleriePhotos from "../Components/archives/GaleriePhoto";
import VideoSection from "../Components/archives/VideosSection";
import BibliothequeDocuments from "../Components/archives/BibliothequeDocument";
import LiensUtiles from "../Components/archives/LiensUtiles";

// ─────────────────────────────────────────────────────────────────────────────
// Remplacer ces tableaux par des appels API (fetch paginé) en production.
// En dev, injectez ici vos données ou un mock de grande taille.
// ─────────────────────────────────────────────────────────────────────────────
const photos: Photo[] = [];
const videos: Video[] = [];
const documents: Document[] = [];
const liens: LienUtile[] = [];

export default function ArchivesPage() {
  const [section, setSection] = useState<ArchiveSection>("galerie");

  const counts: Record<ArchiveSection, number> = {
    galerie:   photos.length,
    videos:    videos.length,
    documents: documents.length,
    liens:     liens.length,
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 1 — Hero */}
      <ArchivesHero />

      {/* 2 — Onglets sticky */}
      <ArchiveTabs active={section} onChange={setSection} counts={counts} />

      {/* 3 — Contenu de la section active */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {section === "galerie"   && <GaleriePhotos photos={photos} />}
        {section === "videos"    && <VideoSection videos={videos} />}
        {section === "documents" && <BibliothequeDocuments documents={documents} />}
        {section === "liens"     && <LiensUtiles liens={liens} />}
      </main>
    </div>
  );
}
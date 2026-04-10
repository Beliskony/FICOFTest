import { Image, Video, FileText, Link } from "lucide-react";
import type { ArchiveSection } from "../../Interfaces/archivetype";

type Tab = {
  id: ArchiveSection;
  label: string;
  icon: React.ElementType;
  count?: number;
};

type Props = {
  active: ArchiveSection;
  onChange: (s: ArchiveSection) => void;
  counts: Record<ArchiveSection, number>;
};

const tabs: Tab[] = [
  { id: "galerie",   label: "Galerie photos", icon: Image },
  { id: "videos",    label: "Vidéos",         icon: Video },
  { id: "documents", label: "Documents",      icon: FileText },
  { id: "liens",     label: "Liens utiles",   icon: Link },
];

export default function ArchiveTabs({ active, onChange, counts }: Props) {
  return (
    <div className="border-b border-neutral-200 bg-white sticky top-[105px] z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto scrollbar-none gap-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`flex items-center gap-2 px-5 py-4 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-all duration-150 ${
                active === id
                  ? "border-[#0C3823] text-[#0C3823]"
                  : "border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300"
              }`}
            >
              <Icon size={15} strokeWidth={2} />
              {label}
              {counts[id] > 0 && (
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    active === id
                      ? "bg-[#0C3823] text-white"
                      : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {counts[id].toLocaleString()}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
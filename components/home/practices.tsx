import {
  Scale,
  Gavel,
  Users,
  Home,
  Briefcase,
  FileText,
  Shield,
  Landmark,
  HandshakeIcon,
  ScrollText,
  Building2,
  HeartHandshake,
  Globe,
  Car,
  Banknote,
  ClipboardList,
  BookOpen,
  Siren,
  TreePine,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { readPracticeAreasSection } from "@/services/home";

interface PracticeArea {
  title: string;
  description: string;
  link: string;
}

interface PracticeAreasSectionData {
  heading: string;
  subheading: string;
  badge: string;
  areas: PracticeArea[];
}

const ICONS = [
  Scale,
  Gavel,
  Users,
  Home,
  Briefcase,
  FileText,
  Shield,
  Landmark,
  HandshakeIcon,
  ScrollText,
  Building2,
  HeartHandshake,
  Globe,
  Car,
  Banknote,
  ClipboardList,
  BookOpen,
  Siren,
  TreePine,
  ShieldAlert,
];

export default async function PracticeAreasSection() {
  const practiceAreasData = await readPracticeAreasSection();

  if (!practiceAreasData) return null;

  const { heading, subheading, badge, areas } = practiceAreasData;

  return (
    <section 
      className="bg-white py-20 px-6"
      aria-label="Practice areas section"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span 
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240] mb-4"
            role="status"
            aria-label="Practice areas badge"
          >
            <Scale className="w-4 h-4" aria-hidden="true" />
            {badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a2240] leading-tight mb-4 font-serif">
            {heading}
          </h2>
          <div 
            className="w-16 h-0.5 bg-[#0a2240] mb-5 rounded-full" 
            aria-hidden="true"
          />
          <p className="text-lg text-gray-500 font-light max-w-xl">
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="List of practice areas"
        >
          {areas.map((area, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Link
                key={area.title}
                href={area.link}
                className="group relative bg-white border border-[#0a2240]/10 rounded-2xl p-6 flex flex-col gap-4 no-underline overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0a2240]/10 hover:border-[#0a2240]/30"
                role="listitem"
                aria-label={`Practice area: ${area.title}`}
              >
                {/* Hover fill background */}
                <div 
                  className="absolute inset-0 bg-[#0a2240] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0" 
                  aria-hidden="true"
                />

                {/* Gold accent top bar */}
                <div 
                  className="absolute top-0 left-6 right-6 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full z-10" 
                  aria-hidden="true"
                />

                {/* Icon badge */}
                <div 
                  className="relative z-10 w-12 h-12 rounded-xl bg-[#0a2240]/8 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:rotate-3 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5 text-[#0a2240] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col gap-1.5 flex-1">
                  <h3 className="text-base font-semibold text-[#0a2240] transition-colors duration-300 group-hover:text-white">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-white/70">
                    {area.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative z-10 flex items-center gap-1.5 mt-1">
                  <span className="text-xs font-semibold text-[#0a2240]/40 transition-all duration-300 group-hover:text-[#c9a84c] group-hover:translate-x-0.5">
                    Learn more
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0a2240]/40 transition-all duration-300 group-hover:text-[#c9a84c] group-hover:translate-x-1" aria-hidden="true" />
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import { Users, Mail, Link2Icon } from "lucide-react";
import { readTeamSection } from "@/services/home";

interface SocialLinks {
  linkedin?: string;
  email?: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials?: SocialLinks;
}

interface TeamSectionData {
  heading: string;
  subheading: string;
  badge: string;
  members: TeamMember[];
}

export default async function TeamSection() {
  const teamData = await readTeamSection();

  if (!teamData) return null;

  const { heading, subheading, badge, members } = teamData;

  return (
    <section
      className="bg-white py-20 px-6"
      aria-label="Team section"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240] mb-4"
            role="status"
            aria-label="Team badge"
          >
            <Users className="w-4 h-4" aria-hidden="true" />
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

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Team members"
        >
          {members.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="group relative bg-white border border-[#0a2240]/10 rounded-2xl p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0a2240]/10 hover:border-[#0a2240]/25"
              role="listitem"
              aria-label={`Team member: ${member.name}, ${member.role}`}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 bg-[#0a2240] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"
                aria-hidden="true"
              />

              {/* Gold top bar */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full z-10"
                aria-hidden="true"
              />

              {/* Avatar */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="relative w-14 h-14 rounded-full bg-[#0a2240]/6 border-2 border-[#0a2240]/12 flex items-center justify-center flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]"
                  aria-hidden="true"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users className="w-6 h-6 text-[#0a2240] transition-colors duration-300 group-hover:text-white" />
                  )}
                  {/* Online dot */}
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c9a84c]">
                    {member.role}
                  </span>
                  <h3 className="text-sm font-semibold text-[#0a2240] transition-colors duration-300 group-hover:text-white">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Bio */}
              <p className="relative z-10 text-sm text-gray-500 leading-relaxed font-light transition-colors duration-300 group-hover:text-white/65">
                {member.bio}
              </p>

              {/* Socials */}
              {member.socials && (
                <div className="relative z-10 flex items-center gap-2 mt-auto pt-1">
                  {member.socials.linkedin && (
                    
                     <a href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="w-7 h-7 rounded-lg bg-[#0a2240]/6 border border-[#0a2240]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/8 group-hover:border-white/15 hover:scale-110"
                    >
                      <Link2Icon className="w-3.5 h-3.5 text-[#0a2240] transition-colors duration-300 group-hover:text-[#c9a84c]" />
                    </a>
                  )}
                  {member.socials.email && (
                    
                     <a href={`mailto:${member.socials.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-7 h-7 rounded-lg bg-[#0a2240]/6 border border-[#0a2240]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/8 group-hover:border-white/15 hover:scale-110"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0a2240] transition-colors duration-300 group-hover:text-[#c9a84c]" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
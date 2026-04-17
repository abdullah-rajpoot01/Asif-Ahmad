import { Star, UserCircle, Quote } from "lucide-react";
import { readTestimonialsSection } from "@/services/home";

interface Testimonial {
  name: string;
  feedback: string;
  rating: number;
}

interface TestimonialsSectionData {
  heading: string;
  subheading: string;
  badge: string;
  testimonials: Testimonial[];
}

export default async function TestimonialsSection() {
  const testimonialsData = await readTestimonialsSection();

  if (!testimonialsData) return null;

  const { heading, subheading, badge, testimonials } = testimonialsData;

  return (
    <section 
      className="bg-white py-20 px-6"
      aria-label="Testimonials section"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span 
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240] mb-4"
            role="status"
            aria-label="Testimonials badge"
          >
            <Star className="w-4 h-4" aria-hidden="true" />
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
          aria-label="Client testimonials"
        >
          {testimonials.map((t, index) => (
            <div
              key={`${t.name}-${index}`}
              className="group relative bg-white border border-[#0a2240]/10 rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0a2240]/10 hover:border-[#0a2240]/25"
              role="listitem"
              aria-label={`Testimonial from ${t.name}, ${t.rating} star rating`}
            >
              {/* Gold top bar */}
              <div 
                className="absolute top-0 left-6 right-6 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" 
                aria-hidden="true"
              />

              {/* Quote icon */}
              <Quote 
                className="w-8 h-8 text-[#0a2240]/10 group-hover:text-[#c9a84c]/30 transition-colors duration-300 -mb-2" 
                aria-hidden="true"
              />

              {/* Feedback */}
              <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">
                "{t.feedback}"
              </p>

              {/* Divider */}
              <div 
                className="w-full h-px bg-[#0a2240]/8" 
                aria-hidden="true"
              />

              {/* Footer */}
              <div className="flex items-center justify-between gap-3">

                {/* User */}
                <div className="flex items-center gap-3">
                  <UserCircle 
                    className="w-9 h-9 text-[#0a2240]/30 group-hover:text-[#0a2240]/60 transition-colors duration-300 flex-shrink-0" 
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-[#0a2240]">
                    {t.name}
                  </p>
                </div>

                {/* Stars */}
                <div 
                  className="flex items-center gap-0.5"
                  aria-label={`Rating: ${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#c9a84c] fill-[#c9a84c]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
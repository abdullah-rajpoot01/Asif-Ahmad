import { Phone, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { readHeroSection } from "@/services/home";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);



export default async function HeroSection() {
  const heroData = await readHeroSection();

  if (!heroData) return null;

  const { heading, subheading, phone, whatsapp, image, cardTitle, cardDescription,badge } = heroData;

  return (
    <section 
      className="min-h-screen bg-white flex items-center py-16 px-6"
      aria-label="Hero section with legal services information"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl">

            {/* Badge */}
            <div>
              <span 
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase bg-[#0a2240]/10 text-[#0a2240]"
                role="status"
                aria-label="Legal excellence badge"
              >
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
               {badge}
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0a2240] leading-tight mb-4 font-serif">
                {heading}
              </h1>
              {/* Divider */}
              <div 
                className="w-16 h-0.5 bg-[#0a2240] mb-5 rounded-full" 
                aria-hidden="true"
              />
              <p className="text-lg leading-relaxed font-light text-gray-600">
                {subheading}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base bg-[#0a2240] text-white border-2 border-[#0a2240] transition-all duration-300 hover:bg-[#0e2f5a] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 no-underline"
                aria-label={`Call us at ${phone}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>

              <a
                href={`https://wa.me/${whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base bg-transparent text-[#0a2240] border-2 border-[#0a2240] transition-all duration-300 hover:bg-[#0a2240] hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 no-underline"
                aria-label={`Contact us on WhatsApp at ${whatsapp}`}
              >
                <WhatsAppIcon className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div 
              className="flex items-center gap-5 mt-1"
              role="list"
              aria-label="Trust indicators"
            >
              {["Free Consultation", "24/7 Support"].map((item) => (
                <div key={item} className="flex items-center gap-1.5" role="listitem">
                  <CheckCircle2 className="w-4 h-4 text-[#0a2240]" aria-hidden="true" />
                  <span className="text-sm text-gray-500">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col items-end w-full max-w-lg">
            <div className="relative w-full max-w-[460px]">

              {/* Decorative frame */}
              <div 
                className="absolute -top-3 -right-3 w-full h-full border-2 border-[#0a2240]/15 rounded-2xl z-0" 
                aria-hidden="true"
              />

              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden h-[480px]">
                <img
                  src={image}
                  alt="Professional lawyer providing legal services"
                  className="w-full h-full object-cover block"
                />
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a2240]/30 pointer-events-none" 
                  aria-hidden="true"
                />
              </div>

              {/* Experience card */}
              <div 
                className="absolute -bottom-5 -left-4 z-10 bg-white border-l-4 border-[#0a2240] rounded-r-2xl shadow-xl p-4 flex items-center gap-3.5 max-w-[280px] transition-all duration-300 hover:-translate-y-1 hover:border-l-[#c9a84c] hover:shadow-2xl group"
                role="complementary"
                aria-label="Experience card"
              >
                <div 
                  className="w-11 h-11 rounded-xl bg-[#0a2240] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:rotate-3 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#0a2240] text-sm font-bold leading-tight mb-0.5 font-serif">
                    {cardTitle}
                  </p>
                  <p className="text-gray-400 text-xs leading-snug">
                    {cardDescription}
                  </p>
                </div>
              </div>

            </div>

            {/* Spacer for card overflow */}
            <div className="h-7" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
}
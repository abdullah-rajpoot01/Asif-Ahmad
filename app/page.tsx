import AboutSection from "@/components/home/about"
import CTASection from "@/components/home/cta"
import HeroSection from "@/components/home/hero"
import PracticeAreasSection from "@/components/home/practices"
import TeamSection from "@/components/home/team"
import TestimonialsSection from "@/components/home/testimonials"
import WhyChooseUsSection from "@/components/home/why-choose"

export default function Page() {
  return (
    <div >
      <HeroSection />
      <PracticeAreasSection/>
      <AboutSection/>
      <TeamSection/>
      <WhyChooseUsSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  )
}

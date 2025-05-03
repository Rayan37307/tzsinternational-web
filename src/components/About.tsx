import Image from "next/image";
import {
  AnimatedElement,
  AnimatedText,
  ParallaxElement,
  ScrollReveal,
  StaggerContainer,
} from "@/components/animations";

export default function About() {
  return (
    <section
      className="py-4 bg-gradient-to-b from-slate-950 to-slate-900"
      id="about"
    >
      <div className="container mx-auto px-4">
        <AnimatedText
          as="h2"
          className="text-3xl font-bold mb-8 text-center text-gray-100"
          type="words"
        >
          About Tzs International
        </AnimatedText>

        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pl-12">
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-gray-300 mb-6">
              TZS International is a premier consultancy specializing in global mobility solutions, including travel services, international recruitment, and study abroad programs. With years of industry expertise, we provide end-to-end support for visa processing, work permits, educational placements, and tailored travel experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-gray-300 mb-6">
              Our Dhaka-based team is dedicated to simplifying cross-border journeys—whether for tourism, employment, or education—through personalized service and compliance-focused guidance. We take pride in connecting Bangladeshi clients with opportunities worldwide while maintaining the highest standards of integrity and professionalism. From Hajj pilgrimages to skilled worker placements, TZS International bridges aspirations with global possibilities.
              </p>
            </ScrollReveal>

            <StaggerContainer>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Trusted since 2018</li>
                <li>Offices in Gulshan, Dhaka</li>
                <li>Specializes in visas, manpower, and education abroad</li>
                <li>End-to-end legal/documentation support</li>
              </ul>
            </StaggerContainer>
          </div>

          <div className="w-full flex justify-center md:w-1/2 mb-8 md:mb-0">
            <ScrollReveal direction="up">
              <AnimatedElement type="scaleIn">
                <Image
                  src="/hero.jpg"
                  alt="About Tzsinternational"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg border border-slate-700"
                />
              </AnimatedElement>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

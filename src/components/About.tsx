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
      className="py-16 bg-bg-main"
      id="about"
    >
      <div className="container mx-auto px-4">
        <AnimatedText
          as="h2"
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-text-main"
          type="words"
        >
          About <span className="text-primary-600">TZS International</span>
        </AnimatedText>

        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pr-12">
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-text-secondary mb-6">
              TZS International is a premier international recruitment and manpower solutions company specializing in connecting skilled professionals with global opportunities. With years of industry expertise, we provide comprehensive services for bulk recruitment, skill development, and foreign language training.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-text-secondary mb-6">
              Our Dhaka-based team is dedicated to simplifying international employment journeys through personalized service and compliance-focused guidance. We take pride in connecting Bangladeshi talent with opportunities worldwide while maintaining the highest standards of integrity and professionalism. With   license, TZS International bridges aspirations with global possibilities.
              </p>
            </ScrollReveal>

            <StaggerContainer>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Trusted since 2018</li>
                <li>Offices in Gulshan, Dhaka</li>
                <li>  Licensed recruitment agency</li>
                <li>Specializes in international manpower solutions</li>
              </ul>
            </StaggerContainer>
          </div>

          <div className="w-full flex justify-center md:w-1/2 mb-8 md:mb-0">
            <ScrollReveal direction="up">
              <AnimatedElement type="scaleIn">
                <Image
                  src="/hero.jpg"
                  alt="About TZS International"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-sleek border border-border-light"
                />
              </AnimatedElement>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

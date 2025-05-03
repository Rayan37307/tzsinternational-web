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
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <AnimatedText
          as="h2"
          className="text-3xl font-bold mb-8 text-center"
          type="words"
        >
          About Tzs International
        </AnimatedText>

        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 md:pl-12">
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-gray-600 mb-6">
                At Tzsinternational, we're passionate about creating
                unforgettable travel experiences. With years of expertise in the
                industry, we've been helping travelers explore the world,
                discover new cultures, and create lasting memories.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-gray-600 mb-6">
                Our team of experienced travel professionals is dedicated to
                providing personalized service, expert advice, and seamless
                travel arrangements. Whether you're planning a relaxing beach
                getaway, an adventurous trek, or a cultural city tour, we're
                here to make your travel dreams a reality.
              </p>
            </ScrollReveal>

            <StaggerContainer>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Customized travel packages</li>
                <li>24/7 customer support</li>
                <li>Competitive prices</li>
                <li>Sustainable travel options</li>
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
                  className="rounded-lg shadow-lg"
                />
              </AnimatedElement>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

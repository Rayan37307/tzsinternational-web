import { ScrollReveal } from "@/components/animations";
import { Users, Building, UserCheck, GraduationCap, Languages } from "lucide-react";

const services = [
  {
    title: "MANPOWER SOURCING AND PLACEMENT",
    description: "Comprehensive manpower sourcing and placement services tailored to meet the unique requirements of various industries.",
    icon: Users,
  },
  {
    title: "BULK INTERNATIONAL RECRUITMENT",
    description: "Efficient and cost-effective solutions for large-scale international recruitment needs with quality assurance.",
    icon: Building,
  },
  {
    title: "SPECIALIZED SKILL RECRUITMENT",
    description: "Targeted recruitment for specialized roles requiring specific technical expertise and industry knowledge.",
    icon: UserCheck,
  },
  {
    title: "SKILL DEVELOPMENT & TRAINING",
    description: "Comprehensive training programs to enhance workforce capabilities and ensure professional development.",
    icon: GraduationCap,
  },
  {
    title: "FOREIGN LANGUAGE TRAINING",
    description: "Language proficiency training to support international business communication and cultural integration.",
    icon: Languages,
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
              Core <span className="text-primary-600">Services</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive manpower solutions to connect skilled professionals with global opportunities
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
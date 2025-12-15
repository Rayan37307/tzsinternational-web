import { ScrollReveal } from "@/components/animations";
import { Building2, Landmark, Factory, ShoppingBag, GraduationCap, Shield, Hotel, Plane } from "lucide-react";

const entities = [
  {
    name: "Greenland Training Centre Ltd.",
    description: "Training and skill development center",
    icon: GraduationCap
  },
  {
    name: "Greenland Polytechnic Institute",
    description: "Professional and technical education",
    icon: GraduationCap
  },
  {
    name: "Greenland Trading & Contracting",
    description: "General trading and contracting services",
    icon: Building2
  },
  {
    name: "Greenland Services Ltd.",
    description: "Comprehensive service provision",
    icon: Building2
  },
  {
    name: "Greenland Builders Ltd.",
    description: "Construction and building services",
    icon: Building2
  },
  {
    name: "Greenland HR Consultancy",
    description: "Human resources consulting",
    icon: Landmark
  },
  {
    name: "Greenland Medical Centre Ltd.",
    description: "Healthcare and medical services",
    icon: Shield
  },
  {
    name: "Greenland Overseas Tourism Ltd.",
    description: "Tourism and travel services",
    icon: Plane
  },
  {
    name: "EduMatric",
    description: "Educational solutions",
    icon: GraduationCap
  },
  {
    name: "Softin Technology Ltd.",
    description: "Technology and digital solutions",
    icon: Building2
  },
  {
    name: "Green Ridge International School",
    description: "International education services",
    icon: GraduationCap
  }
];

export default function GroupEntities() {
  return (
    <section id="group-entities" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
              Group <span className="text-primary-600">Entities</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diversified business portfolio spans multiple sectors, each contributing to our mission of connecting people with possibilities
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entities.map((entity, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <entity.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800">{entity.name}</h3>
                </div>
                <p className="text-gray-600 pl-16">{entity.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Our group of companies operates across multiple industries including education, construction, technology, healthcare, and tourism, 
              enabling us to provide comprehensive solutions to meet diverse client needs. Each entity within our group contributes to our 
              overarching mission of connecting talented individuals with meaningful career opportunities globally.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
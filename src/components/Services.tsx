"use client";

import { Users, Building, UserCheck, GraduationCap, Languages } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-bg-card rounded-xl p-6 border border-border-light shadow-sleek transition-all hover:shadow-sleek-lg hover:-translate-y-1">
      <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text-main mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <Users size={28} />,
      title: "MANPOWER SOURCING AND PLACEMENT",
      description: "Comprehensive manpower sourcing and placement services tailored to meet the unique requirements of various industries."
    },
    {
      icon: <Building size={28} />,
      title: "BULK INTERNATIONAL RECRUITMENT",
      description: "Efficient and cost-effective solutions for large-scale international recruitment needs with quality assurance."
    },
    {
      icon: <UserCheck size={28} />,
      title: "SPECIALIZED SKILL RECRUITMENT",
      description: "Targeted recruitment for specialized roles requiring specific technical expertise and industry knowledge."
    },
    {
      icon: <GraduationCap size={28} />,
      title: "SKILL DEVELOPMENT & TRAINING",
      description: "Comprehensive training programs to enhance workforce capabilities and ensure professional development."
    },
    {
      icon: <Languages size={28} />,
      title: "FOREIGN LANGUAGE TRAINING",
      description: "Language proficiency training to support international business communication and cultural integration."
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-bg-muted"
      id="services"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Core <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We provide comprehensive manpower solutions to connect skilled professionals with global opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

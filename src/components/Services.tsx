"use client";

import { Plane, Globe, CreditCard, Users, Clock, Shield, FileSearch, Ticket, HeartPulse, Briefcase, UserCog, GraduationCap, Church as Qaba } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-slate-900 rounded-xl shadow-md p-6 border border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-secondary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <Plane size={28} />,
      title: "International Tours",
      description: "Explore exotic destinations around the world with our carefully curated international tour packages."
    },
    {
      icon: <Globe size={28} />,
      title: "Visa Assistance",
      description: "Get expert assistance with visa applications for any country, making your travel planning hassle-free."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Flexible Payment",
      description: "Enjoy flexible payment options including installment plans to make your dream vacation affordable."
    },
    {
      icon: <Users size={28} />,
      title: "Group Tours",
      description: "Join our group tours to meet fellow travelers and enjoy special rates for group bookings."
    },
    {
      icon: <Clock size={28} />,
      title: "Quick Processing",
      description: "Experience fast processing times for all your travel documents and bookings."
    },
    {
      icon: <Shield size={28} />,
      title: "Travel Insurance",
      description: "Travel with peace of mind with our comprehensive travel insurance coverage options."
    },
    // Travel Agency Services
    {
      icon: <Ticket size={28} />,
      title: "Air Ticketing",
      description: "Book flights at competitive prices with 24/7 support for changes or cancellations."
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Medical Tourism",
      description: "Access world-class healthcare facilities abroad with tailored travel and treatment packages."
    },
    // Recruiting Services
    {
      icon: <Briefcase size={28} />,
      title: "Work Visa",
      description: "Secure work visas for countries like Canada, Germany, and the UAE with legal guidance."
    },
    {
      icon: <UserCog size={28} />,
      title: "Manpower Recruitment",
      description: "We connect skilled workers with international employers, handling contracts and relocation."
    },
    // Study Abroad Services
    {
      icon: <GraduationCap size={28} />,
      title: "Study Abroad",
      description: "Get admission to top universities worldwide with scholarship and accommodation support."
    },
    {
      icon: <Qaba size={28} />,
      title: "Hajj & Umrah",
      description: "Organized pilgrimage packages with visa processing, flights, and luxury accommodations."
    },
    {
      icon: <FileSearch size={28} />,
      title: "Visa Processing",
      description: "End-to-end visa services for students, tourists, and professionals with a 98% success rate."
    }
  ];

  return (
    <section
      className="py-4 bg-gradient-to-b from-slate-950 to-slate-900"
      id="services"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of travel services to make your
            journey smooth and memorable. From visa assistance to customized
            tour packages, we've got you covered.
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

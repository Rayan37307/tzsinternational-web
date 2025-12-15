import Image from 'next/image';
import { ArrowRight, Users, Building2, Globe, Award } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Whatsapp from '@/components/whatsapp';

const OurClients = () => {
  // Mock data for client types
  const clientTypes = [
    {
      id: 1,
      title: 'Industrial Manufacturing',
      description: 'Providing skilled workforce for manufacturing plants and production facilities',
      icon: Building2,
      count: '50+',
    },
    {
      id: 2,
      title: 'Healthcare Sector',
      description: 'Supplying qualified medical professionals to international healthcare facilities',
      icon: Award,
      count: '30+',
    },
    {
      id: 3,
      title: 'Construction & Infrastructure',
      description: 'Supplying skilled workers for large-scale construction projects worldwide',
      icon: Building2,
      count: '40+',
    },
    {
      id: 4,
      title: 'Hospitality & Tourism',
      description: 'Providing trained staff for hotels, resorts, and tourism companies',
      icon: Globe,
      count: '25+',
    },
  ];

  // Mock data for client testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Kaabi',
      position: 'HR Director, Emirates Group',
      content: 'TZS International has been our trusted partner for over 5 years. Their candidates are well-prepared and adapt quickly to our work environment.',
      company: 'Emirates Group',
      country: 'UAE',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Operations Manager, Construction Co.',
      content: 'Their recruitment process is efficient and transparent. We received exactly the skilled workers we needed for our project.',
      company: 'Global Construction',
      country: 'Kuwait',
    },
    {
      id: 3,
      name: 'Mohammed Hassan',
      position: 'Facility Manager, Healthcare Group',
      content: 'The medical professionals provided by Greenland are highly qualified and professional. Their screening process is thorough.',
      company: 'MediCare Group',
      country: 'Saudi Arabia',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-main">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section - Modern Sleek Design */}
        <section className="py-16 md:py-24 bg-gradient-modern from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Valued Clients</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We proudly serve a diverse portfolio of international clients across multiple industries, connecting skilled professionals with global opportunities
            </p>
          </div>
        </section>

        {/* Client Stats */}
        <section className="py-12 bg-bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-text-secondary">Successful Placements</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                <div className="text-text-secondary">Countries Served</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
                <div className="text-text-secondary">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-text-secondary">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Types */}
        <section className="py-16 md:py-24 bg-bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-main">
                Industries We <span className="text-primary-600">Serve</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Our expertise spans multiple sectors, providing tailored recruitment solutions for diverse client needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientTypes.map((type) => (
                <div
                  key={type.id}
                  className="bg-bg-card rounded-xl p-8 shadow-sleek hover:shadow-sleek-lg transition-all duration-300 border border-border-light text-center"
                >
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{type.title}</h3>
                  <p className="text-text-secondary mb-4">{type.description}</p>
                  <div className="text-2xl font-bold text-primary-600">{type.count}</div>
                  <p className="text-text-dim text-sm">Companies</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 md:py-24 bg-bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-main">
                Client <span className="text-primary-600">Testimonials</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Hear from our valued clients about their experience working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-bg-muted rounded-xl p-8 shadow-sleek border border-border-light"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gray-200 border-2 border-dashed border-border-light rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h4 className="font-bold text-text-main">{testimonial.name}</h4>
                      <p className="text-sm text-text-secondary">{testimonial.position}</p>
                      <p className="text-sm text-primary-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary italic mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center text-text-dim">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>{testimonial.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 md:py-24 bg-bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-main">
                Our Global <span className="text-primary-600">Presence</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Oman', 'Malaysia', 'Singapore', 'Italy'].map((country, index) => (
                  <div key={index} className="bg-bg-card rounded-lg p-6 shadow-sleek border border-border-light text-center">
                    <Globe className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                    <h3 className="font-bold text-text-main">{country}</h3>
                    <p className="text-sm text-text-secondary">Active Partnerships</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-bg-card rounded-xl p-8 shadow-sleek border border-border-light">
                <h3 className="text-xl font-bold text-text-main mb-4">Expanding Our Reach</h3>
                <p className="text-text-secondary mb-6">
                  We continue to expand our global network, forming strategic partnerships in new markets to serve our clients better.
                  Our presence in these regions allows us to understand local requirements and provide culturally appropriate workforce solutions.
                </p>
                <div className="flex items-center text-primary-600 font-medium">
                  <span>Learn about our expansion plans</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Whatsapp />
    </div>
  );
};

export default OurClients;
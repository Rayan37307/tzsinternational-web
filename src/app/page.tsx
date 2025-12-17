'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Globe, Award, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import BlogSlider from '@/components/BlogSlider';

const Home = () => {
  // Features data
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: "Global Opportunities",
      description: "Connect with top employers worldwide through our extensive network."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: "Skilled Professionals",
      description: "Access to highly qualified and experienced workforce globally."
    },
    {
      icon: <Award className="h-8 w-8 text-accent-600" />,
      title: "Quality Assurance",
      description: "Rigorous screening process to ensure the best candidates."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Efficient Process",
      description: "Streamlined solutions for faster and reliable placements."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Software Engineer",
      company: "TechCorp Inc.",
      content: "Thanks to this platform, I landed my dream job in Germany. The support throughout the process was exceptional!",
      rating: 5,
      avatar: "https://source.unsplash.com/100x100/?portrait,women"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Global Solutions Ltd.",
      content: "The recruitment process was seamless and efficient. Highly recommend their services for international opportunities.",
      rating: 5,
      avatar: "https://source.unsplash.com/100x100/?portrait,men"
    },
    {
      id: 3,
      name: "Fatima Al-Zahra",
      position: "Healthcare Specialist",
      company: "MedCare International",
      content: "Professional team that understands cultural nuances and provides excellent guidance for international transitions.",
      rating: 5,
      avatar: "https://source.unsplash.com/100x100/?portrait,professional"
    }
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: "International Recruitment",
      description: "Connecting top talent with global opportunities across industries.",
      icon: <Globe className="h-10 w-10 text-primary-600" />
    },
    {
      id: 2,
      title: "Visa Processing",
      description: "Complete assistance with visa applications and documentation.",
      icon: <Users className="h-10 w-10 text-secondary-600" />
    },
    {
      id: 3,
      title: "Relocation Support",
      description: "End-to-end relocation services to help you settle in your new destination.",
      icon: <Award className="h-10 w-10 text-accent-600" />
    },
    {
      id: 4,
      title: "Skill Development",
      description: "Training programs to enhance skills for international markets.",
      icon: <Star className="h-10 w-10 text-primary-600" />
    }
  ];

  // Statistics data for countries served
  const countryStats = [
    { country: "United States", count: "500+", flag: "🇺🇸" },
    { country: "Canada", count: "300+", flag: "🇨🇦" },
    { country: "Australia", count: "400+", flag: "🇦🇺" },
    { country: "Germany", count: "250+", flag: "🇩🇪" },
    { country: "UAE", count: "600+", flag: "🇦🇪" },
    { country: "Singapore", count: "200+", flag: "🇸🇬" }
  ];

  

  type ClientTestimonial = {
    name: {
      first: string;
      last: string;
    };
    location: {
      city: string;
      country: string;
    };
    picture: {
      large: string;
    };
    testimonial: string;
  };

  const [clientTestimonials, setClientTestimonials] = React.useState<ClientTestimonial[]>([]);

  // Function to fetch client testimonials using Random User API
  const fetchClientTestimonials = async () => {
    try {
      // Fetch 6 client testimonials (for 3 columns on desktop)
      const promises = Array.from({ length: 6 }).map(() =>
        fetch('https://randomuser.me/api/')
          .then(res => res.json())
          .then(data => data.results[0])
      );

      const clients = await Promise.all(promises);

      // Add random testimonials to each client
      const testimonials = clients.map(client => ({
        ...client,
        testimonial: generateRandomTestimonial(),
      }));

      setClientTestimonials(testimonials);
    } catch (error) {
      console.error('Error fetching client testimonials:', error);
    }
  };

  // Helper function to generate random testimonials
  const generateRandomTestimonial = () => {
    const testimonials = [
      "Exceptional service! They helped me find the perfect opportunity in record time.",
      "Professional, reliable, and truly care about their clients' success.",
      "The best recruitment service I've ever used. Highly recommended!",
      "Their attention to detail and follow-up service is outstanding.",
      "Connected me with my dream job with minimal hassle. Great team!",
      "Efficient process and excellent communication throughout the journey."
    ];
    return testimonials[Math.floor(Math.random() * testimonials.length)];
  };

  // Effect to load client testimonials when component mounts
  React.useEffect(() => {
    fetchClientTestimonials();
  }, []);

  return (
    <div className="min-h-screen bg-bg-main text-text-main">
      <Navbar />
      <div className="pt-24" /> {/* Space for fixed navbar */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideUp>
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
                  <Typography variant="span" className="text-primary-700 font-medium">
                    Connecting Talent & Opportunity
                  </Typography>
                </div>

                <Typography variant="h1" className="mb-6 leading-tight">
                  Connecting People with <span className="text-primary-600">Possibilities</span> Worldwide
                </Typography>

                <Typography variant="p" className="text-lg text-text-secondary mb-10 max-w-lg">
                  Leading international recruitment and manpower solutions company specializing in connecting skilled professionals with global opportunities.
                </Typography>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="xl">
                    Learn More
                  </Button>
                </div>
              </div>
            </SlideUp>

            <ScaleIn initialScale={0.9}>
              <div className="relative">
                <Card className="p-0 overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-primary-700">5000+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Professionals Placed</Typography>
                      </div>
                      <div className="bg-secondary-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-secondary-700">40+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Countries Served</Typography>
                      </div>
                      <div className="bg-accent-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-accent-700">15+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Years Experience</Typography>
                      </div>
                      <div className="bg-primary-50 rounded-xl p-4">
                        <Typography variant="span" className="text-2xl font-bold text-primary-700">200+</Typography>
                        <Typography variant="p" className="text-sm text-gray-600">Skilled Recruiters</Typography>
                      </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                      <Typography variant="h4" className="mb-4">Why Choose Us?</Typography>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <Typography variant="p">Comprehensive screening process</Typography>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
                          <Typography variant="p">Global network of opportunities</Typography>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-accent-600 rounded-full mr-3"></div>
                          <Typography variant="p">End-to-end support</Typography>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <Typography variant="p">Transparent communication</Typography>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Services</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                We provide comprehensive recruitment and manpower solutions tailored to your needs
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <Card className="text-center group hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                      {feature.icon}
                    </div>
                    <Typography variant="h4" className="mb-3">{feature.title}</Typography>
                    <Typography variant="p" className="text-text-secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Our Trusted Partners</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Collaborating with industry leaders worldwide
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/partner1.jpg"} width={200} height={100} alt={"partner1"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">Sinopec</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Shipping company</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/partner2.png"} width={200} height={100} alt={"partner2"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">AlBAIK</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Resturant</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/sasco.jpeg"} width={200} height={100} alt={"partner3"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">SASCO.</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Construction</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/partner4.jpg"} width={200} height={100} alt={"partner4"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">Almajal Alarabi</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Group Of Company</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/partner5.png"} width={200} height={100} alt={"partner5"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">NAZ CORP.</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Factory</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/partner6.png"} width={200} height={100} alt={"partner6"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">Transguard</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Guarding searvice for transportation</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/partner7.svg"} width={200} height={100} alt={"partner7"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">Al Mulla Group</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Business</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center p-6 overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mx-auto">
                    <Image src={"/partner8.png"} width={200} height={100} alt={"partner8"} className={"h-32 m-12 object-cover w-auto"} />
                  </div>
                  <CardContent className="pt-4">
                    <Typography variant="h5" className="font-semibold">Fahed Group of Companies</Typography>
                    <Typography variant="p" className="text-text-secondary text-sm">Group Company</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
          </div>
        </div>
      </section>

      {/* Meet Our Navigators Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Meet Our Navigators</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Our expert team guiding you to success
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScaleIn>
                <Card className="text-center overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-82 w-full bg-gray-200 border-2 border-dashed rounded-t-xl overflow-hidden">
  <Image
    src="/advisor.jpeg"
    alt="founder"
    fill
    sizes="100vw"
    className="object-cover obje"
    priority
  />
</div>
                  <CardContent className="pt-6">
                    <Typography variant="h4">Md Nurul Islam</Typography>
                    <Typography variant="p" className="text-text-secondary">Hounorary Advisor</Typography>
                    <Typography variant="p" className="text-text-secondary mt-4">
                      Expert navigator with 10+ years of experience in international recruitment and manpower solutions.
                    </Typography>
                    <div className="flex justify-center mt-6 space-x-4">
                      <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Users className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Award className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-82 w-full bg-gray-200 border-2 border-dashed rounded-t-xl overflow-hidden">
  <Image
    src="/founder.png"
    alt="founder"
    fill
    sizes="100vw"
    className="object-cover object-[center_20%]"
    priority
  />
</div>
                  <CardContent className="pt-6">
                    <Typography variant="h4">Muhammad Tariqul Islam</Typography>
                    <Typography variant="p" className="text-text-secondary">Founder & CEO</Typography>
                    <Typography variant="p" className="text-text-secondary mt-4">
                      Expert navigator with 12+ years of experience in international recruitment and manpower solutions.
                    </Typography>
                    <div className="flex justify-center mt-6 space-x-4">
                      <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Users className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Award className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn>
                <Card className="text-center overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-82 w-full bg-gray-200 border-2 border-dashed rounded-t-xl overflow-hidden">
  <Image
    src="/managingdirector.png"
    alt="founder"
    fill
    sizes="100vw"
    className="object-cover obje"
    priority
  />
</div>
                  <CardContent className="pt-6">
                    <Typography variant="h4">Shirin Akther</Typography>
                    <Typography variant="p" className="text-text-secondary">Managing Director</Typography>
                    <Typography variant="p" className="text-text-secondary mt-4">
                      Expert navigator with 10+ years of experience in international recruitment and manpower solutions.
                    </Typography>
                    <div className="flex justify-center mt-6 space-x-4">
                      <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Users className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Award className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
          </div>
        </div>
      </section>

      {/* Client Appreciation Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Client Appreciation</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                What our valued clients say about our services
              </Typography>
            </div>
          </FadeIn>

          {/* Auto-sliding testimonial carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {[...clientTestimonials, ...clientTestimonials].map((client, index) => (
                <div
                  key={`${index}-${client.name.first}`}
                  className="flex-shrink-0 w-80"
                >
                  <Card className="text-center group hover:shadow-xl transition-shadow p-6 h-full">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary-100 group-hover:border-primary-300 transition-colors">
                      <img
                        src={client.picture.large}
                        alt={`${client.name.first} ${client.name.last}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-0">
                      <Typography variant="h5" className="mb-2">{client.name.first} {client.name.last}</Typography>
                      <Typography variant="p" className="text-text-secondary text-sm mb-4">{client.location.city}, {client.location.country}</Typography>
                      <div className="flex justify-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <Typography variant="p" className="text-text-secondary italic">
                        "{client.testimonial}"
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              display: inline-flex;
              animation: scroll 30s linear infinite;
              width: 200%; /* Double the width to create seamless loop */
            }

            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="bg-gradient-accent text-white p-0 overflow-hidden">
              <div className="p-12 text-center">
                <Typography variant="h2" className="mb-6 text-white">Ready to Find Your Dream Opportunity?</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Join thousands of professionals who found their perfect match with our global network.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-black text-primary-600 hover:bg-gray-100">
                    Start Your Journey
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BlogSlider />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

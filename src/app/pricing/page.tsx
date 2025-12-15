'use client';

import React from 'react';
import { Check, X, Star, Users, Globe, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  // Pricing plans data
  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses with basic recruitment needs",
      features: [
        { name: "Up to 5 job postings", included: true },
        { name: "Basic candidate search", included: true },
        { name: "Email support", included: true },
        { name: "Basic reporting", included: true },
        { name: "Priority support", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Dedicated account manager", included: false }
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing companies with moderate hiring needs",
      features: [
        { name: "Up to 20 job postings", included: true },
        { name: "Advanced candidate search", included: true },
        { name: "24/7 email & chat support", included: true },
        { name: "Detailed reporting", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Dedicated account manager", included: false }
      ],
      cta: "Try Free for 14 Days",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations with extensive needs",
      features: [
        { name: "Unlimited job postings", included: true },
        { name: "AI-powered candidate matching", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Custom reporting", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom onboarding", included: true }
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  // Additional services
  const additionalServices = [
    { name: "Bulk Recruitment", price: "$2.50 per candidate", description: "Large-scale hiring campaigns" },
    { name: "Executive Search", price: "$5,000 - $25,000", description: "C-level and senior management positions" },
    { name: "International Placement", price: "$500 - $2,000", description: "Global recruitment and visa assistance" },
    { name: "Skills Assessment", price: "$50 per assessment", description: "Technical and soft skills evaluation" },
    { name: "Training Programs", price: "$100 - $500 per hour", description: "Customized skill development" },
    { name: "Compliance Consulting", price: "$150 per hour", description: "Regulatory and legal compliance" }
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-main">
      <Navbar />
      <div className="pt-24" /> {/* Space for fixed navbar */}

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Typography variant="h1" className="mb-6 leading-tight">
                Transparent <span className="text-primary-600">Pricing</span> for All Your Needs
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Flexible plans designed to fit your recruitment requirements and budget
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Choose Your Plan</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Select the plan that best fits your recruitment needs
              </Typography>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                {plan.popular ? (
                  <div className="relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                    <Card className="relative border-2 border-accent-500 shadow-xl">
                      <CardContent className="pt-12 px-6 pb-8">
                        <Typography variant="h4" className="text-center mb-2">{plan.name}</Typography>
                        <div className="text-center mb-6">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-text-secondary">/{plan.period}</span>
                        </div>
                        <Typography variant="p" className="text-text-secondary text-center mb-8">
                          {plan.description}
                        </Typography>
                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                              )}
                              <span className={feature.included ? 'text-text-main' : 'text-text-secondary'}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="accent-modern" className="w-full">
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Card>
                    <CardContent className="pt-8 px-6 pb-8">
                      <Typography variant="h4" className="text-center mb-2">{plan.name}</Typography>
                      <div className="text-center mb-6">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-text-secondary">/{plan.period}</span>
                      </div>
                      <Typography variant="p" className="text-text-secondary text-center mb-8">
                        {plan.description}
                      </Typography>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                              )}
                              <span className={feature.included ? 'text-text-main' : 'text-text-secondary'}>
                                {feature.name}
                              </span>
                            </li>
                        ))}
                      </ul>
                      <Button variant="primary-modern" className="w-full">
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Additional Services</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Complementary services to enhance your recruitment process
              </Typography>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                        <Star className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <Typography variant="h5" className="mb-2">{service.name}</Typography>
                        <Typography variant="span" className="text-primary-600 font-bold text-lg mb-2 block">
                          {service.price}
                        </Typography>
                        <Typography variant="p" className="text-text-secondary text-sm">
                          {service.description}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Plan Comparison</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Detailed comparison of all our plans and features
              </Typography>
            </div>
          </FadeIn>

          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center">Professional</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Job Postings</td>
                  <td className="p-4 text-center">Up to 5</td>
                  <td className="p-4 text-center">Up to 20</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <td className="p-4 font-medium">Candidate Search</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center">Email & Chat</td>
                  <td className="p-4 text-center">24/7 Priority</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <td className="p-4 font-medium">Analytics</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Account Manager</td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Frequently Asked Questions</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Everything you need to know about our pricing and services
              </Typography>
            </div>
          </SlideUp>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated." },
              { q: "Are there any setup fees?", a: "No, there are no setup fees for any of our plans. You only pay for the services you use." },
              { q: "Do you offer discounts for non-profits?", a: "Yes, we offer special pricing for non-profit organizations. Contact our sales team for more information." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, and PayPal for your convenience." },
              { q: "Is there a long-term contract?", a: "No, all our plans are month-to-month with no long-term commitment required. Cancel anytime." }
            ].map((faq, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <Card>
                  <CardContent className="p-6">
                    <Typography variant="h5" className="mb-2 font-bold">{faq.q}</Typography>
                    <Typography variant="p" className="text-text-secondary">{faq.a}</Typography>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="bg-gradient-accent text-white p-0 overflow-hidden">
              <div className="p-12 text-center">
                <Typography variant="h2" className="mb-6 text-white">Ready to Get Started?</Typography>
                <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                  Choose the plan that fits your needs or contact us for a custom solution.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="xl" className="bg-white text-primary-600 hover:bg-gray-100">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
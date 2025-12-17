'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, Mail as MailIcon, MessageSquare, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Typography } from '@/components/ui/Typography';
import { FadeIn } from '@/components/animation/FadeIn';
import { SlideUp } from '@/components/animation/SlideUp';
import { ScaleIn } from '@/components/animation/ScaleIn';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Contact information
  const contactInfo = [
    {
      id: 1,
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: 'Our Office',
      content: 'Khandakar Amin Uddin Bhaban (Lift - 5), Madhani Avenue, 100 fit, Notun Bazar,Vatara, Gulshan, Dhaka-1212, Bangladesh',
      additional: 'Head Office'
    },
    {
      id: 2,
      icon: <Phone className="h-6 w-6 text-secondary-600" />,
      title: 'Phone Number',
      content: '+880-1618-008842',
      additional: 'Available 24/7'
    },
    {
      id: 3,
      icon: <MailIcon className="h-6 w-6 text-accent-600" />,
      title: 'Email Address',
      content: 'tzsinternationalbd@gmail.com',
      additional: 'General Inquiries'
    },
    {
      id: 4,
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Working Hours',
      content: 'Saturday - Thursday: 9:00 AM to 6:00 PM',
      additional: 'Friday: Closed'
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Get in <span className="text-primary-600">Touch</span> With Us
              </Typography>
              <Typography variant="p" className="text-lg text-text-secondary mb-10">
                Have questions? We're here to assist you with all your recruitment and manpower needs.
              </Typography>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SlideUp>
                <div className="mb-12">
                  <Typography variant="h2" className="mb-4">Contact Information</Typography>
                  <Typography variant="p" className="text-text-secondary mb-8">
                    Reach out to us through any of our communication channels. Our team is here to assist you.
                  </Typography>
                </div>
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <ScaleIn key={info.id} delay={info.id * 0.1}>
                    <div className="bg-bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border-light">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                        {info.icon}
                      </div>
                      <Typography variant="h5" className="mb-2">{info.title}</Typography>
                      <Typography variant="p" className="text-text-secondary mb-1">{info.content}</Typography>
                      <Typography variant="span" className="text-sm text-text-dim">{info.additional}</Typography>
                    </div>
                  </ScaleIn>
                ))}
              </div>

              {/* Google Map */}
              <SlideUp delay={0.3}>
                <div className="mt-12">
                  <Typography variant="h3" className="mb-4">Find Us</Typography>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-border-light">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.85484581448696!2d90.42647179757122!3d23.798055947038083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b77d72ab59%3A0xb495c120cf611030!2sSocial%20Islami%20Bank%20Limited!5e1!3m2!1sen!2sbd!4v1765789599683!5m2!1sen!2sbd"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="TZS International Office Location"
                    />
                  </div>
                </div>
              </SlideUp>
            </div>

            {/* Contact Form */}
            <div>
              <SlideUp>
                <div className="bg-bg-card rounded-2xl p-8 shadow-lg border border-border-light">
                  <Typography variant="h2" className="mb-6">Send Us a Message</Typography>
                  
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl">
                      {submitError}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          icon={<User className="h-5 w-5 text-text-dim" />}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          icon={<MailIcon className="h-5 w-5 text-text-dim" />}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Your message here..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      loading={isSubmitting}
                      size="xl"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Typography variant="h2" className="mb-4">Frequently Asked Questions</Typography>
              <Typography variant="p" className="text-lg text-text-secondary">
                Common questions about our services and processes
              </Typography>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { 
                q: "What documents are required for international recruitment?", 
                a: "The required documents vary by destination country but typically include: passport, educational certificates, experience letters, medical fitness certificate, police clearance, and relevant professional licenses. Our team will provide a detailed checklist based on your destination." 
              },
              { 
                q: "How long does the recruitment process take?", 
                a: "The duration depends on the destination country and job requirements. Typically, the process takes 3-6 months from application to departure. We maintain transparent communication throughout and provide regular updates." 
              },
              { 
                q: "What are the costs involved?", 
                a: "Costs vary by destination and job type. These typically include: visa processing fees, medical examination, training, and documentation costs. We provide detailed cost breakdowns for transparency." 
              },
              { 
                q: "Do you provide support after placement?", 
                a: "Yes, we provide post-placement support to ensure a smooth transition. This includes assistance with initial settlement, addressing workplace concerns, and maintaining communication with both employers and employees." 
              }
            ].map((faq, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="bg-bg-card rounded-2xl p-6 shadow border border-border-light">
                  <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <Typography variant="h4" className="mb-3 font-semibold">{faq.q}</Typography>
                      <Typography variant="p" className="text-text-secondary">{faq.a}</Typography>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="bg-gradient-accent rounded-3xl p-12 text-center">
              <Typography variant="h2" className="mb-6 text-white">Need Immediate Assistance?</Typography>
              <Typography variant="p" className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
                For urgent matters, please contact our 24/7 support line directly.
              </Typography>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" className="bg-black text-primary-600 hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                  <MailIcon className="h-5 w-5 mr-2" />
                  Email Support
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

import { ScrollReveal } from "@/components/animations";

export default function WhyChooseUs() {
  const whyChooseUsText = "In today's rapidly changing business climate, an efficient and effective organization wins, and that means having people who fit your needs perfectly when you need them. Whether you need to staff a single facility or support a multi-location national operation with uniquely skilled, semi-skilled, or unskilled people, Greenland has recruitment and staffing services to help you meet your goals.";

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Why <span className="text-primary-600">Choose Us</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {whyChooseUsText}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary-800 mb-4">Our Commitment</h3>
              <p className="text-gray-600">
                We guarantee quality, efficiency, and professionalism in every recruitment solution we provide. Our comprehensive approach ensures that your workforce needs are met with precision and care.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
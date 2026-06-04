import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTag from "@/components/ui/SectionTag";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection className="max-w-3xl mb-16">
        <SectionTag>Our Expertise</SectionTag>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-body tracking-tight">What We Do</h2>
        <p className="text-text-secondary text-lg">
          We build high-performance digital products with precision and speed. Our technical stack is optimized for scalability and exceptional user experience.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <AnimatedSection key={service.id} delay={index * 0.1}>
            <ServiceCard 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              featured={index === 1} // Arbitrary feature highlighting
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

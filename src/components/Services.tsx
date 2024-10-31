import React from 'react';
import { Code2, Laptop, Rocket, Users } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-emerald-600" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with cutting-edge technology to solve your unique business challenges.'
  },
  {
    icon: <Laptop className="h-8 w-8 text-emerald-600" />,
    title: 'Web Development',
    description: 'Responsive, fast, and beautiful websites that provide exceptional user experiences.'
  },
  {
    icon: <Rocket className="h-8 w-8 text-emerald-600" />,
    title: 'Digital Transformation',
    description: 'Strategic guidance and implementation to modernize your business processes.'
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-600" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging digital experiences.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Our Services</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">{service.title}</h3>
              <p className="mt-2 text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import Card from '../components/Card';

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@bistroconsulting.com',
      detail: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      detail: 'Mon-Fri: 9AM-6PM PST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'San Francisco, CA',
      detail: 'Bay Area & Remote Services',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Mon-Fri: 9AM-6PM PST',
      detail: 'Emergency support available',
    },
  ];

  const benefits = [
    {
      icon: MessageCircle,
      title: 'Free Initial Consultation',
      description: 'Get expert insights and recommendations in your first call with no commitment required.',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'We work around your schedule with evening and weekend consultations available.',
    },
  ];

  return (
    <div className="min-h-screen pt-40">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pb-24 px-4 hero-gradient"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold font-space mb-8 text-shadow"
          >
            Let's Work <span className="gradient-text">Together</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Ready to transform your restaurant into a thriving, profitable business? Get in touch with our team of experts 
            and start your growth journey today with a free consultation.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-24 px-4 section-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="elevated" className="text-center h-full">
                  <div className="w-16 h-16 gradient-bg rounded-3xl flex items-center justify-center mx-auto mb-6 premium-shadow">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-space mb-3 text-gray-800">{info.title}</h3>
                  <p className="text-gray-700 font-semibold mb-2">{info.description}</p>
                  <p className="text-gray-500 text-sm">{info.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="elevated" className="h-full">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-space mb-3 text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-24 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card variant="elevated" className="gradient-bg text-white">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-6 text-shadow">
                  Ready to Get Started?
                </h2>
                <p className="text-xl opacity-95 leading-relaxed max-w-3xl mx-auto">
                  Fill out the form below and we'll get back to you within 24 hours with a customized growth strategy for your restaurant
                </p>
              </div>
              
              {/* Embedded Contact Form */}
              <div className="premium-glassmorphism rounded-3xl p-8 bg-white bg-opacity-20">
                <script src="https://static.elfsight.com/platform/platform.js" async></script>
                <div className="elfsight-app-d1f06e03-e182-4753-915d-bef976813af8" data-elfsight-app-lazy></div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 section-gradient"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card variant="elevated" className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-8 text-gray-800">
                Transform Your Restaurant <span className="gradient-text">Today</span>
              </h2>
              <p className="text-xl mb-10 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of successful restaurant owners who've grown their business with Bistro's expert guidance and proven strategies
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">📞 Call Now</div>
                  <div className="text-lg text-gray-700 font-semibold">+1 (555) 123-4567</div>
                  <div className="text-sm text-gray-500">Free consultation available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">✉️ Email Us</div>
                  <div className="text-lg text-gray-700 font-semibold">hello@bistroconsulting.com</div>
                  <div className="text-sm text-gray-500">24-hour response guarantee</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
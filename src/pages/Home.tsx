import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Lightbulb, Smartphone, TrendingUp, Star, Users, Award, Target } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home: React.FC = () => {
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

  const services = [
    {
      icon: BarChart3,
      title: 'Menu Engineering',
      description: 'Optimize your menu for maximum profitability and customer satisfaction with data-driven insights.',
      features: ['Cost analysis', 'Pricing optimization', 'Performance tracking'],
    },
    {
      icon: TrendingUp,
      title: 'Profit Optimization',
      description: 'Identify and eliminate profit leaks while maximizing revenue streams across all operations.',
      features: ['Revenue analysis', 'Cost reduction', 'Margin improvement'],
    },
    {
      icon: Lightbulb,
      title: 'Brand & Marketing',
      description: 'Build a compelling brand that attracts and retains customers in today\'s competitive market.',
      features: ['Brand strategy', 'Digital marketing', 'Customer retention'],
    },
    {
      icon: Smartphone,
      title: 'Tech Integration',
      description: 'Leverage cutting-edge technology to streamline operations and enhance customer experience.',
      features: ['POS systems', 'Online ordering', 'Analytics tools'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      business: 'Lotus Garden',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'Bistro helped us increase our profit margins by 40% in just 6 months. Their strategic approach and attention to detail transformed our entire business model.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: '+40% Profit Margin',
    },
    {
      name: 'Marcus Johnson',
      business: 'Urban Bites',
      location: 'New York, NY',
      rating: 5,
      text: 'The tech integration recommendations were game-changing. Our order efficiency improved by 60% and customer satisfaction scores are at an all-time high.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: '+60% Efficiency',
    },
    {
      name: 'Elena Rodriguez',
      business: 'Coastal Kitchen',
      location: 'Miami, FL',
      rating: 5,
      text: 'Professional, insightful, and results-driven. Bistro is the partner every restaurant needs to scale successfully in today\'s market.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: '+25% Revenue',
    },
  ];

  const steps = [
    { 
      title: 'Discovery Call', 
      description: 'We conduct a comprehensive analysis of your current operations and identify key growth opportunities.',
      icon: Target,
    },
    { 
      title: 'Strategic Planning', 
      description: 'Develop a customized growth plan tailored specifically to your restaurant\'s unique needs and goals.',
      icon: Lightbulb,
    },
    { 
      title: 'Implementation', 
      description: 'Execute proven strategies with ongoing support, training, and continuous optimization.',
      icon: TrendingUp,
    },
    { 
      title: 'Scale & Grow', 
      description: 'Monitor results, track performance metrics, and continuously improve for sustained growth.',
      icon: Award,
    },
  ];

  const stats = [
    { value: '200+', label: 'Restaurants Transformed' },
    { value: '40%', label: 'Average Profit Increase' },
    { value: '95%', label: 'Client Satisfaction Rate' },
    { value: '6 Months', label: 'Average ROI Timeline' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-40 pb-24 px-4 hero-gradient"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold font-space mb-8 text-shadow"
          >
            Grow Your Restaurant <br />
            <span className="gradient-text">With Expert Guidance</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Bistro helps restaurant owners scale faster and smarter through strategic consultation,
            profit optimization, and cutting-edge technology integration. Transform your business today.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" icon={ArrowRight} className="text-lg px-10 py-5">
                Book Consultation Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="glass" size="lg" className="text-lg px-10 py-5">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 section-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="elevated" className="text-center">
                  <div className="text-5xl md:text-6xl font-bold font-space gradient-text mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Bistro Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-8 text-shadow">
              Why Choose <span className="gradient-text">Bistro</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We combine deep industry expertise with cutting-edge strategies to help your restaurant thrive in today's competitive landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="elevated" className="h-full">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 gradient-bg rounded-3xl flex items-center justify-center flex-shrink-0 premium-shadow">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-space mb-4 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 section-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-8 text-shadow">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Our proven 4-step process to transform your restaurant into a thriving, profitable business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <Card variant="elevated" className="text-center h-full">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 premium-shadow">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold font-space mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-8 text-shadow">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Success stories from restaurant owners who transformed their business with Bistro's expert guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="testimonial" className="h-full">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 premium-shadow"
                      />
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 font-medium">{testimonial.business}</p>
                        <p className="text-xs text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold gradient-text">{testimonial.results}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 section-gradient"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <Card variant="elevated" className="gradient-bg text-white">
              <h2 className="text-5xl md:text-6xl font-bold font-space mb-8 text-shadow">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-xl mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto">
                Join hundreds of successful restaurant owners who've grown their business with Bistro's proven strategies and expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="lg" icon={ArrowRight} className="text-lg px-10 py-5">
                    Start Your Growth Journey
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="glass" size="lg" className="text-lg px-10 py-5 text-white border-white border-2">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
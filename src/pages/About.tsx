import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Coffee, TrendingUp, Lightbulb, BarChart3, Smartphone } from 'lucide-react';
import Card from '../components/Card';

const About: React.FC = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower restaurant owners with strategic insights and practical solutions that drive sustainable growth and long-term profitability in an ever-evolving industry.',
      details: ['Strategic consulting', 'Data-driven insights', 'Sustainable growth'],
    },
    {
      icon: Coffee,
      title: 'Our Story',
      description: 'Founded by industry veterans with over 20 years of combined experience in restaurant operations, technology integration, and business consulting across diverse markets.',
      details: ['20+ years experience', 'Industry veterans', 'Proven track record'],
    },
    {
      icon: Users,
      title: 'Meet the Experts',
      description: 'Our diverse team combines culinary expertise, business acumen, and technology knowledge to deliver comprehensive solutions tailored to your unique challenges.',
      details: ['Culinary experts', 'Business strategists', 'Tech specialists'],
    },
    {
      icon: Award,
      title: 'Why Restaurants Trust Us',
      description: 'We have successfully helped over 200+ restaurants increase their profitability by an average of 35% within the first year of engagement, with 95% client satisfaction.',
      details: ['200+ restaurants helped', '35% profit increase', '95% satisfaction'],
    },
  ];

  const stats = [
    { value: '200+', label: 'Restaurants Transformed', description: 'Successfully guided restaurants to profitability' },
    { value: '35%', label: 'Average Profit Increase', description: 'Measurable results within first year' },
    { value: '95%', label: 'Client Satisfaction Rate', description: 'Consistently exceeding expectations' },
    { value: '20+', label: 'Years Combined Experience', description: 'Deep industry knowledge and expertise' },
  ];

  const expertise = [
    {
      icon: BarChart3,
      title: 'Restaurant Operations',
      description: 'Deep understanding of kitchen operations, staff management, inventory control, and customer service excellence.',
      skills: ['Kitchen optimization', 'Staff training', 'Inventory management', 'Quality control'],
    },
    {
      icon: TrendingUp,
      title: 'Business Strategy',
      description: 'Proven track record in scaling businesses, optimizing costs, maximizing profitability, and strategic planning.',
      skills: ['Growth strategies', 'Cost optimization', 'Market analysis', 'Financial planning'],
    },
    {
      icon: Smartphone,
      title: 'Technology Integration',
      description: 'Expertise in POS systems, inventory management, digital marketing solutions, and modern restaurant technology.',
      skills: ['POS systems', 'Digital marketing', 'Analytics tools', 'Automation'],
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
            About <span className="gradient-text">Bistro</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed font-medium"
          >
            We're passionate about helping restaurant owners unlock their full potential through 
            strategic consulting, operational optimization, and innovative technology solutions that drive real results.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4 section-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="elevated" className="text-center h-full">
                  <div className="text-5xl md:text-6xl font-bold font-space gradient-text mb-4">
                    {stat.value}
                  </div>
                  <div className="text-gray-800 font-bold text-lg mb-3">{stat.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              The core principles that guide everything we do and drive our commitment to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="elevated" className="h-full">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 gradient-bg rounded-3xl flex items-center justify-center flex-shrink-0 premium-shadow">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-space mb-4 text-gray-800">{value.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                      <div className="space-y-2">
                        {value.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                            {detail}
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

      {/* Expertise Section */}
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
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              A team of seasoned professionals with deep expertise across all aspects of restaurant management and growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {expertise.map((area, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="elevated" className="text-center h-full">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 premium-shadow">
                    <area.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-space mb-4 text-gray-800">{area.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{area.description}</p>
                  <div className="space-y-3">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-center text-sm text-gray-500">
                        <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Philosophy Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card variant="elevated" className="gradient-bg text-white text-center">
              <h3 className="text-4xl md:text-5xl font-bold font-space mb-8 text-shadow">
                Why Choose Our Team?
              </h3>
              <p className="text-xl mb-12 opacity-95 leading-relaxed max-w-3xl mx-auto">
                We don't just provide consulting – we become your strategic partners in growth, combining industry expertise with innovative solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-10 text-left">
                <div className="space-y-4">
                  <h4 className="font-bold text-xl">Proven Results</h4>
                  <p className="opacity-90 leading-relaxed">Track record of helping restaurants achieve measurable growth and profitability improvements.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-xl">Personalized Approach</h4>
                  <p className="opacity-90 leading-relaxed">Every strategy is tailored to your unique business model, market, and growth objectives.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-xl">Ongoing Support</h4>
                  <p className="opacity-90 leading-relaxed">Continuous guidance and optimization to ensure sustained success and long-term growth.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
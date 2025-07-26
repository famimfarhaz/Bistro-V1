import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

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

  const plans = [
    {
      name: 'Basic Plan',
      subtitle: 'Menu Review & Analysis',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Complete menu analysis and optimization',
        'Pricing strategy recommendations',
        'Basic profitability assessment report',
        'Email support and consultation',
        '1 revision round included',
        'Digital delivery of all materials',
      ],
      popular: false,
      badge: 'Getting Started',
    },
    {
      name: 'Growth Plan',
      subtitle: 'Marketing + Strategy',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        'Everything included in Basic Plan',
        'Comprehensive marketing strategy development',
        'Brand positioning and messaging consultation',
        'Social media optimization and content strategy',
        'Customer retention and loyalty programs',
        'Monthly progress review calls',
        'Priority email and phone support',
        'Quarterly strategy adjustments',
      ],
      popular: true,
      badge: 'Most Popular',
    },
    {
      name: 'Premium Plan',
      subtitle: 'Full Business Transformation',
      monthlyPrice: 1499,
      yearlyPrice: 14990,
      features: [
        'Everything included in Growth Plan',
        'Complete operational audit and optimization',
        'Technology integration guidance and setup',
        'Staff training materials and programs',
        'Financial forecasting and budget planning',
        'Weekly strategy and progress calls',
        'On-site visit and consultation (quarterly)',
        '24/7 priority support via all channels',
        'Custom dashboard and reporting tools',
      ],
      popular: false,
      badge: 'Enterprise',
    },
  ];

  const faqs = [
    {
      question: 'How quickly will I see results from your consultation?',
      answer: 'Most clients see measurable improvements within 30-60 days of implementing our recommendations. Full transformation and significant profit increases typically occur within 3-6 months, depending on the plan and implementation speed.',
    },
    {
      question: 'Can I upgrade or downgrade my plan at any time?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately with prorated billing, while downgrades take effect at your next billing cycle to ensure you get full value from your current plan.',
    },
    {
      question: 'Do you work with all types of restaurants and cuisines?',
      answer: 'We work with restaurants of all sizes, cuisines, and business models - from quick-service and fast-casual to fine dining establishments. Our strategies are completely customized to your specific business model and market.',
    },
    {
      question: 'What kind of support do I get with each plan?',
      answer: 'Support varies by plan: Basic includes email support, Growth adds monthly calls and priority support, while Premium provides weekly calls, on-site visits, and 24/7 access to our team.',
    },
    {
      question: 'Is there a contract or can I cancel anytime?',
      answer: 'We offer flexible terms with no long-term contracts required. You can cancel at any time with 30 days notice. However, we recommend staying for at least 6 months to see the full impact of our strategies.',
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
            Choose Your <span className="gradient-text">Growth Plan</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Flexible pricing options designed to fit restaurants of all sizes and growth stages. 
            Invest in your success with proven strategies that deliver measurable results.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-16">
            <span className={`mr-4 text-lg font-medium ${!isYearly ? 'text-orange-500' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors premium-shadow ${
                isYearly ? 'gradient-bg' : 'bg-gray-300'
              }`}
            >
              <motion.span
                animate={{ x: isYearly ? 24 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
              />
            </motion.button>
            <span className={`ml-4 text-lg font-medium ${isYearly ? 'text-orange-500' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-3 text-sm text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full"
              >
                Save 15%
              </motion.span>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-24 px-4 section-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  variant={plan.popular ? 'elevated' : 'pricing'} 
                  className={`relative h-full ${plan.popular ? 'border-orange-500 border-2 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="gradient-bg px-6 py-2 rounded-full text-sm font-bold text-white premium-shadow flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  {!plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-600 text-white px-4 py-1 rounded-full text-xs font-medium">
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold font-space mb-3 text-gray-800">{plan.name}</h3>
                    <p className="text-gray-600 mb-8 font-medium">{plan.subtitle}</p>
                    
                    <div className="mb-8">
                      <span className="text-5xl font-bold font-space gradient-text">
                        ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 text-lg">/month</span>
                      {isYearly && (
                        <div className="text-sm text-gray-500 mt-2">
                          Billed annually (${plan.yearlyPrice.toLocaleString()}/year)
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-orange-500 mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link to="/contact">
                      <Button
                        variant={plan.popular ? 'primary' : 'outline'}
                        className="w-full text-lg py-4"
                        icon={ArrowRight}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-8 text-shadow">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Get answers to common questions about our services, pricing, and what to expect
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card variant="elevated">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                    <h3 className="text-xl font-bold font-space mb-4 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
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
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card variant="elevated" className="gradient-bg text-white text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-8 text-shadow">
                Ready to Start Growing?
              </h2>
              <p className="text-xl mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto">
                Don't wait to transform your restaurant. Join successful owners who've increased their profits with our proven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="lg" icon={ArrowRight} className="text-lg px-10 py-5">
                    Book Free Consultation
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

export default Pricing;
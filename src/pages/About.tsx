import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Clock, TrendingUp, Award, Zap, Globe, Briefcase, Shield, Search, Filter } from 'lucide-react';
import IndustriesSection from './Industries';
import Navigation from '@/components/Navigation';
import TeamLeads from './Team';
import Footer from '@/components/Footer';

// Hero Section Component
const HeroSection = () => {
  return <div className="bg-background">
            <Navigation />

            <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="relative pt-20 pb-24 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-indigo-200 rounded-full opacity-20 blur-3xl" />
                    <motion.div animate={{
          rotate: -360,
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full opacity-20 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{
          y: -30,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.8
        }} className="relative z-10 max-w-3xl mx-auto">
                        <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl leading-tight mt-10">
                            Our
                            <span className="relative mx-3">
                                <span className="relative z-10 text-blue-600">Journey</span>
                                <motion.svg initial={{
                pathLength: 0
              }} animate={{
                pathLength: 1
              }} transition={{
                duration: 1.2,
                delay: 0.5
              }} className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20">
                                    <path d="M 0 10 C 50 0, 150 0, 200 10" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-300" />
                                </motion.svg>
                            </span>
                            to Excellence
                        </h1>
                        <motion.p initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.7
          }} className="mt-8 text-xl text-gray-600 leading-relaxed">
                            We're more than just a business consultancy. We're partners in your growth story, committed to transforming challenges into opportunities.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </div>;
};

// Our Story Section Component
const OurStorySection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.3
      }} className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div variants={itemVariants} className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-100 rounded-full opacity-60 blur-xl"></div>

                        <motion.div whileHover={{
            scale: 1.03
          }} transition={{
            type: 'spring',
            stiffness: 300
          }} className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            
                            
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12 lg:mt-0">
                        <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
                            Our Story
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
                            Your growth partner in planning, process & finance.
                        </h2>

                        <motion.div variants={containerVariants} className="space-y-8">
                            <motion.div variants={itemVariants} className="flex gap-4">
                                <div className="flex-none">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Beginning</h3>
                                    <p className="text-gray-600">
                                        Started by a team of three visionaries in 2021, we set out to reimagine how businesses approach financial planning and optimization.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex gap-4">
                                <div className="flex-none">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth & Expansion</h3>
                                    <p className="text-gray-600">By 2024, we had expanded to serve clients across many industries, with a team of over 35 dedicated professionals committed to excellence.</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex gap-4">
                                <div className="flex-none">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Target className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Where We Are Today</h3>
                                    <p className="text-gray-600">
                                        Today, we're proud to be the trusted partner of Fortune 50 companies and ambitious startups alike, delivering transformative results through innovative approaches.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>;
};

// Values Section Component
const ValuesSection = () => {
  const values = [{
    icon: <Shield className="w-10 h-10 text-blue-500" />,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our interactions and decisions."
  }, {
    icon: <Zap className="w-10 h-10 text-blue-500" />,
    title: "Innovation",
    description: "We constantly seek new approaches and creative solutions to complex challenges."
  }, {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Collaboration",
    description: "We believe the best results come from true partnership with our clients."
  }, {
    icon: <Target className="w-10 h-10 text-blue-500" />,
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in everything we do."
  }];
  return <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{
        y: -20,
        opacity: 0
      }} whileInView={{
        y: 0,
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
                        Our Core Values
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Principles That Guide Us
                    </h2>
                    <p className="text-xl text-gray-600">
                        Our values aren't just words on a wall—they're the foundation of how we operate and serve our clients every day.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => <motion.div key={index} initial={{
          y: 50,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -8,
          transition: {
            duration: 0.3
          }
        }} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} whileInView={{
            scale: 1,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2 + index * 0.1,
            duration: 0.5
          }} className="mb-5">
                                {value.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </motion.div>)}
                </div>
            </div>
        </div>;
};

// Awards Section Component
export const AwardsSection = () => {
  const awards = [{
    title: "Business Innovation Award",
    organization: "Global Business Forum",
    year: "2022",
    icon: <Zap className="w-10 h-10 text-yellow-500" />
  }, {
    title: "Best Consulting Firm",
    organization: "Finance Excellence Awards",
    year: "2023",
    icon: <Award className="w-10 h-10 text-yellow-500" />
  }, {
    title: "Client Satisfaction Excellence",
    organization: "International Service Standards",
    year: "2024",
    icon: <Users className="w-10 h-10 text-yellow-500" />
  }, {
    title: "Top Growth Consultancy",
    organization: "Business Growth Alliance",
    year: "2025",
    icon: <TrendingUp className="w-10 h-10 text-yellow-500" />
  }];
  return;
};
const AboutPage = () => {
  return <>
            {/* Hero Section */}
            <HeroSection />

            {/* Our Story Section */}
            <OurStorySection />

            <TeamLeads />

            {/* Values Section */}
            <ValuesSection />

            <IndustriesSection />

            <AwardsSection />

            <Footer />
        </>;
};
export default AboutPage;
import { motion } from 'framer-motion';
import { Users, Target, Shield, Zap, Building, ShoppingCart, Wrench, Banknote, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TeamLeads from './Team';

// Hero Section Component
const HeroSection = () => {
  return <div className="bg-background">
      <Navigation />
      
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6
        }} className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">Our Company</span>
          </motion.h1>
          <motion.p initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're partners in your growth story, transforming challenges into opportunities through innovative business solutions.
          </motion.p>
        </div>
      </motion.div>
    </div>;
};

// Story Section Component
const StorySection = () => {
  return <div className="bg-background py-[30px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          x: -50,
          opacity: 0
        }} whileInView={{
          x: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your growth partner in planning, process & finance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Founded by CA professionals with Big 4 experience, Seven Labs bridges the gap between where MSMEs are and where they want to be — with hands-on implementation, not slides. Our audit and assurance practice also extends to Fortune 500 engagements across aviation, F&B, and infrastructure.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">40+ organisations transformed, 3000+ employees covered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Offices in Delhi NCR, Agra & Jaipur</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">CA-led team with Big 4 pedigree (KPMG, Grant Thornton)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Proprietary 'What Could Go Wrong' methodology</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          x: 50,
          opacity: 0
        }} whileInView={{
          x: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Organisations Transformed</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3000+</div>
                <div className="text-sm text-muted-foreground">Employees Covered</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Cities (Delhi NCR, Agra, Jaipur)</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">90</div>
                <div className="text-sm text-muted-foreground">Days Avg. Transformation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};

// Industries Section Component
const IndustriesSection = () => {
  const industries = [{
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Manufacturing (Leather, Footwear, Marble)"
  }, {
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    title: "Trading & Distribution"
  }, {
    icon: <Banknote className="w-10 h-10 text-primary" />,
    title: "Food & Beverage / Hospitality"
  }, {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Technology & SaaS"
  }, {
    icon: <Building className="w-10 h-10 text-primary" />,
    title: "Real Estate & Infrastructure"
  }, {
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
    title: "Aviation & IFC Services"
  }];
  return <div className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} whileInView={{
        y: 0,
        opacity: 1
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across diverse sectors, bringing specialized knowledge to every engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => <motion.div key={index} initial={{
          y: 30,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
            </motion.div>)}
        </div>
      </div>
    </div>;
};

// Values Section Component
const ValuesSection = () => {
  const values = [{
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Integrity",
    description: "Upholding the highest ethical standards in all interactions."
  }, {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Innovation",
    description: "Constantly seeking creative solutions to complex challenges."
  }, {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaboration",
    description: "Building true partnerships with our clients for best results."
  }, {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Excellence",
    description: "Committed to delivering exceptional quality in everything we do."
  }];
  return <div className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} whileInView={{
        y: 0,
        opacity: 1
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide how we operate and serve our clients every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => <motion.div key={index} initial={{
          y: 30,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>)}
        </div>
      </div>
    </div>;
};
const AboutPage = () => {
  return <>
      <HeroSection />
      <StorySection />
      <TeamLeads />
      <IndustriesSection />
      <ValuesSection />
      <Footer />
    </>;
};
export default AboutPage;
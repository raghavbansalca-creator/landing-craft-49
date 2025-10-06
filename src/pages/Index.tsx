import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Scale, Users, Building, Settings, Package, BarChart3, Laptop } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import businessCollaboration from "@/assets/business-collaboration.jpg";
import businessGrowth from "@/assets/business-growth.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-12 md:p-20 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-medium mb-8">
                <span>✨</span>
                <span>Make your guests feel special with our solution</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
                Stop Running Your Business{" "}
                <span className="text-accent">Blind</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Transform chaotic manual processes into clear, controlled operations with our 'What Could Go Wrong' methodology.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="text-base px-8 py-6 rounded-full" asChild>
                  <Link to="/contact">Get Your Free Business Audit</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Still Struggling With...
          </h2>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-600 dark:text-red-400 font-medium text-sm">These problems are costing you money every day</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl mb-2">Everything Depends On You Being There</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Manual paperwork, no systems—your business stops when you're not at your desk.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl mb-2">No Clear Picture Of Your Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Can't track funds, don't know what's working—making decisions based on gut feeling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl mb-2">Can't Scale Like The Big Players</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Confused by software options, wondering how corporates manage growth while you're stuck wrestling with daily challenges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              From What Could Go Wrong to What's Going Right
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              Making Business Predictable
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "Every process documented. Every metric tracked. Every risk controlled."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/performance-optimization" className="block">
              <Card className="p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    KRAs, KPIs, appraisal systems, real-time dashboards—make every team member accountable with clear metrics.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/organization-structure" className="block">
              <Card className="p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Building className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">Structure Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Clear roles, reporting lines, decision authority, accountability frameworks—build scalable organizational systems.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/process-optimisation" className="block">
              <Card className="p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Settings className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">Process Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    SOPs, workflow automation, 'What Could Go Wrong' analysis, risk controls—eliminate chaos and inefficiencies.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/inventory-supply-chain" className="block">
              <Card className="p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Package className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">Stock Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Real-time inventory tracking, automated reordering, supplier management—reduce wastage and stockouts.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/financial-planning" className="block">
              <Card className="p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">Financial Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Business models, budget vs actual analysis, financial forecasting, variance reporting—complete money visibility.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/erp-implementation" className="block">
              <Card className="p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Laptop className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">Technology Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Zoho, Odoo, custom systems implementation, software selection—centralize and automate all operations.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* What Sets Us Apart */}
      <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="py-20 px-4 bg-accent relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={businessGrowth} alt="Business growth visualization" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            What Sets Us Apart
          </h2>
          <div className="space-y-6 text-lg">
            <p className="text-foreground font-semibold">
              We will sit in your office till we get your operations streamlined.
            </p>
            <p className="text-muted-foreground">
              We don't give any gyaan, we implement that gyaan right from day 1.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Social Proof */}
      <motion.section initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Trusted by MSME's and Startups
            </h2>
            <div className="text-2xl font-semibold text-primary mb-8">
              40+ organisations and 3000+ employees covered
            </div>
          </div>

          {/* Company Logos */}
          <div className="mb-16">
            <LogoCarousel />
          </div>

          {/* Testimonials */}
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Their 'What Could Go Wrong' methodology completely transformed our operations. We went from chaos to clarity in just 3 months."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">MI</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Modi Illva India Pvt. Ltd.</p>
                    <p className="text-xs text-muted-foreground">Manager and Team</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Finally, we have complete visibility into our finances and operations. The team actually sits with you until everything works perfectly."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">TO</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Mr. Ruchit Dugar</p>
                    <p className="text-xs text-muted-foreground">Founder-Tonoto, Manufacturing MSME</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "The automation solutions they implemented saved us 15+ hours weekly on inventory management. Our order processing is now seamless and error-free."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Machphy Solution</p>
                    <p className="text-xs text-muted-foreground">Operations Head, Tech Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "They took complete control of our finances—from budgeting to forecasting. Now we have crystal-clear visibility into every rupee and make data-driven decisions with confidence."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">CP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Yaksha Hospitality</p>
                    <p className="text-xs text-muted-foreground">CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Ready to See Everything?
          </h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/contact">Schedule Free Business Audit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Scale, Users, Building, Settings, Package, BarChart3, Laptop, Shield, CheckCircle, Target, Handshake } from "lucide-react";
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
      <section className="relative py-12 md:py-24 px-4 text-center bg-gradient-to-br from-blue-950/40 via-blue-900/30 to-blue-800/40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={businessCollaboration} alt="Business collaboration" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-blue-800/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10 px-px"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              Your Business Runs on <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent animate-pulse">WhatsApp & Excel?</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              40 missed calls a day. No real-time P&L. Every decision waits for you. We fix this — with systems that make your business run without you.
            </p>
            <div className="flex justify-center">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm group-hover:blur-md transition duration-300 opacity-70"></div>
                <Link to="/contact" className="relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:scale-105 transition-all duration-300 block text-center">
                  Get Your Free Business Audit
                </Link>
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
    }} className="py-10 md:py-20 px-4 bg-gradient-to-br from-red-950/20 via-red-900/10 to-background relative overflow-hidden">
        {/* Warning Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 mx-[5px] px-[5px]">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-500 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-orange-500 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-28 h-28 border-2 border-red-400 -rotate-12"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-foreground">
            Still Struggling With...
          </h2>
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 md:px-6 py-1.5 md:py-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-600 dark:text-red-400 font-medium text-xs md:text-sm">These problems are costing you money every day</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <Card className="text-center p-4 md:p-6 hover-lift">
              <CardHeader className="pb-2 md:pb-4">
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-2 md:mb-4">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                </div>
                <CardTitle className="text-base md:text-xl mb-1 md:mb-2">Everything Depends On You Being There</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Manual paperwork, no systems—your business stops when you're not at your desk.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover-lift">
              <CardHeader className="pb-2 md:pb-4">
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-2 md:mb-4">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                </div>
                <CardTitle className="text-base md:text-xl mb-1 md:mb-2">No Clear Picture Of Your Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Can't track funds, don't know what's working—making decisions based on gut feeling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover-lift">
              <CardHeader className="pb-2 md:pb-4">
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-2 md:mb-4">
                  <Building className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                </div>
                <CardTitle className="text-base md:text-xl mb-1 md:mb-2">Can't Scale Like The Big Players</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  Confused by software options, wondering how corporates manage growth while you're stuck wrestling with daily challenges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Lead Magnet Section */}
      <motion.section initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="py-8 md:py-14 px-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary font-medium text-xs md:text-sm">Free Resource</span>
          </div>
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-foreground">
            Get Your MSME Operations Health Check
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
            A quick self-assessment to find out where your business is leaking time, money, and control. Takes 2 minutes.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem('lead_email') as HTMLInputElement).value;
              const name = (form.elements.namedItem('lead_name') as HTMLInputElement).value;
              const whatsappNumber = "919719113673";
              const msg = encodeURIComponent(`Hi, I'd like the MSME Operations Health Check.\n\nName: ${name}\nEmail: ${email}`);
              window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
              form.reset();
            }}
          >
            <input
              name="lead_name"
              type="text"
              required
              placeholder="Your name"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              name="lead_email"
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
            >
              Get Free Check
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">No spam. We respect your privacy.</p>
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
    }} className="py-10 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-foreground">
              From What Could Go Wrong to What's Going Right
            </h2>
            <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-primary">
              Making Business Predictable
            </h3>
            <p className="text-sm md:text-lg text-muted-foreground">
              "Every process documented. Every metric tracked. Every risk controlled."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <Link to="/services/performance-optimization" className="block">
              <Card className="p-4 md:p-6 hover-lift cursor-pointer">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xs text-red-500 font-medium mb-1">"I don't know if my team is actually performing"</p>
                  <CardTitle className="text-base md:text-lg mb-1 md:mb-2">Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm">
                    KRAs, KPIs, appraisal systems, real-time dashboards — make every team member accountable with clear metrics.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/organization-structure" className="block">
              <Card className="p-4 md:p-6 hover-lift cursor-pointer">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                    <Building className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xs text-red-500 font-medium mb-1">"Every decision has to go through me"</p>
                  <CardTitle className="text-base md:text-lg mb-1 md:mb-2">Structure Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm">
                    Clear roles, reporting lines, decision authority — build a structure where the business runs without you being the bottleneck.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/process-optimisation" className="block">
              <Card className="p-4 md:p-6 hover-lift cursor-pointer">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                    <Settings className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xs text-red-500 font-medium mb-1">"We keep solving the same problems again and again"</p>
                  <CardTitle className="text-base md:text-lg mb-1 md:mb-2">Process Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm">
                    SOPs, workflow automation, 'What Could Go Wrong' analysis — eliminate chaos and build repeatable, controlled operations.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/inventory-supply-chain" className="block">
              <Card className="p-4 md:p-6 hover-lift cursor-pointer">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                    <Package className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xs text-red-500 font-medium mb-1">"Stock ka pata nahi chalta — dead stock bhi hai, shortage bhi"</p>
                  <CardTitle className="text-base md:text-lg mb-1 md:mb-2">Stock Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm">
                    Real-time inventory tracking, automated reordering, supplier management — reduce wastage and never miss a sale.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/financial-planning" className="block">
              <Card className="p-4 md:p-6 hover-lift cursor-pointer">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xs text-red-500 font-medium mb-1">"Profit year-end ke baad hi pata chalta hai"</p>
                  <CardTitle className="text-base md:text-lg mb-1 md:mb-2">Financial Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm">
                    Real-time P&L, budget vs actual, cash flow forecasting — know exactly where every rupee is going, every day.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/erp-implementation" className="block">
              <Card className="p-4 md:p-6 hover-lift cursor-pointer">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                    <Laptop className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="text-xs text-red-500 font-medium mb-1">"Orders on WhatsApp, billing on Tally, tracking on Excel"</p>
                  <CardTitle className="text-base md:text-lg mb-1 md:mb-2">Technology Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm">
                    Zoho, Odoo, ERPNext implementation — one system to replace the WhatsApp-Excel-paper chaos. We migrate and train.
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
    }} className="py-10 md:py-20 px-4 bg-accent relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={businessGrowth} alt="Business growth visualization" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground text-center">
            What Sets Us Apart
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-sm md:text-lg max-w-2xl mx-auto">
            We don't advise. We implement. We will sit in your office till we get your operations streamlined — from day 1.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="text-center p-4 md:p-6 bg-background/60 rounded-xl border border-border">
              <Handshake className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Implementation, Not Advice</h3>
              <p className="text-xs md:text-sm text-muted-foreground">We sit in your office. No PowerPoints, no reports that collect dust — actual systems that run.</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-background/60 rounded-xl border border-border">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">CA + Technology</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Big 4 trained CAs who also implement ERP, dashboards, and automation. A rare combination at SME level.</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-background/60 rounded-xl border border-border">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">'What Could Go Wrong'</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Our proprietary methodology that maps every risk before it hits — tested across 40+ organisations.</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-background/60 rounded-xl border border-border">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">90-Day Transformation</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Your phone stops ringing 40 times a day. Your business starts running without you being the bottleneck.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-primary">40+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Organisations</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-primary">3000+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Employees Covered</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-primary">3</div>
              <div className="text-xs md:text-sm text-muted-foreground">Cities</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
            </div>
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
    }} className="py-10 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-foreground">
              Trusted by MSME's and Startups
            </h2>
            <div className="text-lg md:text-2xl font-semibold text-primary mb-4 md:mb-8">
              40+ organisations and 3000+ employees covered
            </div>
          </div>

          {/* Company Logos */}
          <div className="mb-16">
            <LogoCarousel />
          </div>

          {/* Testimonials */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible snap-x snap-mandatory md:snap-none">
            <Card className="p-4 md:p-6 min-w-[85vw] md:min-w-0 snap-center">
              <CardContent className="pt-4 md:pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-sm">
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

            <Card className="p-4 md:p-6 min-w-[85vw] md:min-w-0 snap-center">
              <CardContent className="pt-4 md:pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-sm">
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

            <Card className="p-4 md:p-6 min-w-[85vw] md:min-w-0 snap-center">
              <CardContent className="pt-4 md:pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-sm">
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

            <Card className="p-4 md:p-6 min-w-[85vw] md:min-w-0 snap-center">
              <CardContent className="pt-4 md:pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4 text-sm">
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
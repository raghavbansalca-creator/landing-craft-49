import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Users, Zap, Target, DollarSign, BarChart3, Lightbulb, Shield, Globe, AlertTriangle, Scale, FileText, Briefcase, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const StartupEcosystem = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 md:pt-20 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-3 md:mb-6">
            Empowering <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Startups</span> to Scale
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-3xl mx-auto">We provide the strategic foundation, operational excellence, and growth systems</p>
          <Button size="default" className="md:text-lg md:px-8 md:py-3" asChild>
            
          </Button>
        </div>
      </section>

      {/* Startup Challenges */}
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
    }} className="py-8 md:py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
              Common Startup Challenges We Solve
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Every startup faces unique challenges. We've identified the most critical ones that can make or break your growth trajectory.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 md:pb-3">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <CardTitle className="text-base md:text-lg">No Financial Model</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm">
                  Inaccurate forecasting leads to poor scalability and operations management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 md:pb-3">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <CardTitle className="text-base md:text-lg">Unprepared Due Diligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm">
                  Hampered funding opportunities due to inadequate due diligence preparation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 md:pb-3">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <CardTitle className="text-base md:text-lg">Compliance Burden</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm">
                  Overwhelmed by regulatory compliance requirements? We streamline compliance processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 md:pb-3">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <CardTitle className="text-base md:text-lg">Contract Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm">
                  Exposure to risks from poorly drafted contracts and agreements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 md:pb-3">
                <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <CardTitle className="text-base md:text-lg">Government Schemes Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm">
                  Missing out on government schemes and initiatives for startups?
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 md:pb-3">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <CardTitle className="text-base md:text-lg">Debt Crunching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm">
                  Struggling with debt management and financial pressure?
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 md:pb-3">
                <Scale className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <CardTitle className="text-base md:text-lg">Regulatory Struggles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs md:text-sm">
                  Navigating complex regulations is challenging for growing startups.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Our Startup Solutions */}
      <motion.section id="solutions" initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Solutions for Every Stage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From financial modeling to regulatory compliance, we provide end-to-end support to help your startup thrive and scale successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/startup/financial-services">
            <Card className="border-2 hover:shadow-xl transition-all hover:border-primary/50 cursor-pointer" id="financial">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Financial Services</CardTitle>
                <CardDescription className="text-base">
                  Build a strong financial foundation with expert modeling, compliance, and valuation services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Financial modelling and forecasting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Management information System</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Tax compliance review</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Assistance on government grants and schemes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Thorough financial statement analysis</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Business Valuation</p>
                </div>
              </CardContent>
            </Card>
            </Link>

            <Card className="border-2 hover:shadow-xl transition-all hover:border-primary/50" id="due-diligence">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Transaction & Due Diligence</CardTitle>
                <CardDescription className="text-base">
                  Navigate funding rounds confidently with comprehensive due diligence and transaction support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Framing term sheets, agreements and contracts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">FEMA Compliances</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Due diligence documentation review and prep</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Stakeholders management</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Transaction Analysis</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Framing of ESOP policies & structure</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all hover:border-primary/50" id="strategic">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Strategic & Operations</CardTitle>
                <CardDescription className="text-base">
                  Streamline operations and build scalable processes for sustainable growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Vendor contracts and process management</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Framing SOP's for business operations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Digital transformation advisory with respect to workspace management</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Payroll management</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Book keeping and general tax compliances</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground">Pitch Deck assistance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us for Your Startup */}
      <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Startups Choose 7 Labs Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Startup Speed</h3>
              <p className="text-muted-foreground">
                We move at startup pace. Quick implementations, rapid iterations, and immediate value delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
              <p className="text-muted-foreground">
                Startup-friendly pricing with flexible engagement models that grow with your funding stages.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Founder Experience</h3>
              <p className="text-muted-foreground">
                Our team includes former founders and startup operators who understand the unique challenges you face.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a free startup assessment and discover the operational improvements that will accelerate your growth.
          </p>
          <Button size="lg" className="text-lg px-8 py-3" asChild>
            <Link to="/contact">Book Your Free Startup Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default StartupEcosystem;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Users, Zap, Target, DollarSign, BarChart3, Lightbulb, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StartupEcosystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Empowering <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Startups</span> to Scale
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From idea to IPO - we provide the strategic foundation, operational excellence, and growth systems that turn promising startups into industry leaders.
          </p>
          <Button size="lg" className="text-lg px-8 py-3" asChild>
            <Link to="/contact">Get Your Startup Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Startup Challenges */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Startup Challenges We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every startup faces unique challenges. We've identified the most critical ones that can make or break your growth trajectory.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Rapid Growth Pains</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Struggling to scale operations, hire effectively, or maintain quality while growing fast? We help you build systems that grow with you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cash Flow Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Running out of runway? We optimize your burn rate, improve unit economics, and create financial models that attract investors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Team & Culture Scaling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building a high-performance team while maintaining startup culture? We design organizational structures that preserve agility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Product-Market Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Struggling to find your ideal customers or validate your product? We help refine your value proposition and go-to-market strategy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Data-Driven Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Flying blind without proper metrics? We implement analytics systems that provide actionable insights for growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Investor Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Preparing for fundraising? We help you build the operational foundation and metrics that impress investors.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Our Startup Solutions */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Startup-Focused Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored services designed specifically for the unique needs and constraints of growing startups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <Rocket className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-xl">Growth Operations Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Build scalable systems from day one. We implement lean operations that grow with your startup without breaking the bank.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Agile process implementation</li>
                  <li>• Scalable team structures</li>
                  <li>• Growth metrics dashboards</li>
                  <li>• Automation frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-xl">Financial Modeling & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Create investor-ready financial models and cash flow management systems that support sustainable growth.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Unit economics optimization</li>
                  <li>• Runway extension strategies</li>
                  <li>• Investor pitch preparation</li>
                  <li>• Budget planning & monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-xl">Product Strategy & Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Validate your product-market fit and build a roadmap for sustainable growth and customer acquisition.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Customer discovery processes</li>
                  <li>• MVP optimization strategies</li>
                  <li>• Go-to-market planning</li>
                  <li>• Competitive positioning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Globe className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-xl">Technology & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Build a tech foundation that scales. From MVP to enterprise-grade systems without technical debt.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Scalable architecture design</li>
                  <li>• Cloud infrastructure setup</li>
                  <li>• Security & compliance frameworks</li>
                  <li>• Development process optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us for Your Startup */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-muted/30"
      >
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
    </div>
  );
};

export default StartupEcosystem;
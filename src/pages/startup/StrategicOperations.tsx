import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, FileText, Monitor, DollarSign, BookOpen, Presentation, AlertTriangle, ShoppingCart, Users, Rocket, TrendingUp, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StrategicOperations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 grid-rows-6 h-full opacity-10">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-orange-500/30" />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <ClipboardList className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <Monitor className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-6xl text-white/30">→</div>
              <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg">
                <Settings className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Startup Has Product-Market Fit.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Now Build the Engine.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              SOPs, vendor management, digital workspace, payroll, compliance — the operational backbone that lets you scale without chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scaling Pains You Know Too Well</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Every Process Lives in Someone's Head</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">No SOPs, no documentation — when a key person leaves, the process leaves with them.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Vendor Chaos Eating Your Margins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">No contracts, no SLAs, no price benchmarking — vendors set the terms because you never defined them.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Payroll & Compliance on Excel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">PF, ESI, TDS errors every month, late filings, and employees losing trust in your payroll process.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <Presentation className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Pitch Deck That Doesn't Convert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">No market sizing, no financial narrative, no competitive analysis — investors lose interest by slide 3.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* What You'll Have */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-slate-900 to-orange-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">What You'll Have:</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/80 to-orange-900/80 backdrop-blur-sm border border-orange-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl w-fit">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-400 mb-4">Documented Operations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">SOPs, contracts, playbooks, checklists — your operations run on systems, not on individual memory.</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-500/30">
                    <div className="text-orange-400 font-semibold text-sm">SOPs</div>
                  </div>
                  <div className="bg-amber-500/20 rounded-lg p-3 border border-amber-500/30">
                    <div className="text-amber-400 font-semibold text-sm">Contracts</div>
                  </div>
                  <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-500/30">
                    <div className="text-yellow-400 font-semibold text-sm">Playbooks</div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3 border border-red-500/30">
                    <div className="text-red-400 font-semibold text-sm">Checklists</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-amber-900/80 backdrop-blur-sm border border-amber-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl w-fit">
                  <Monitor className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-amber-400 mb-4">Digital-First Workspace</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Project management, communication, documentation — a digital workspace that eliminates the chaos of scattered tools.</p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="bg-amber-500/20 rounded-full p-2 border border-amber-500/30">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-2xl text-amber-400">→</div>
                  <div className="bg-yellow-500/20 rounded-full p-2 border border-yellow-500/30">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-2xl text-amber-400">→</div>
                  <div className="bg-orange-500/20 rounded-full p-2 border border-orange-500/30">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-yellow-900/80 backdrop-blur-sm border border-yellow-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl w-fit">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-yellow-400 mb-4">Zero-Stress Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Payroll, TDS, PF, ESI, GST, ROC — 100% on time, every time. No penalties, no surprises.</p>
                <div className="mt-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-sm text-yellow-400 mb-2">Compliance Rate</div>
                  <div className="text-3xl font-bold text-orange-400">100% On-Time</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategic & Operations Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to transform chaotic startup operations into a scalable, repeatable engine.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Vendor Contract & Process Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contract templates, SLA frameworks, price benchmarking, and vendor performance tracking systems.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">SOP Frameworks for Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Process documentation, workflow design, responsibility matrices, and training materials for every function.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Digital Transformation Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tool selection, workspace setup, automation opportunities, and digital workflow implementation.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Payroll Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">End-to-end payroll processing, PF/ESI compliance, TDS computation, and employee self-service setup.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Bookkeeping & Tax Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Day-to-day bookkeeping, GST returns, TDS filings, ROC compliance, and audit preparation.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Presentation className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Pitch Deck Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Market sizing, competitive landscape, financial narrative, and investor-ready storytelling that converts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Is This For You? */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Is This For You?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with startups at every growth stage — here's how we help at yours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Early-Stage Startups</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">5–15 people</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">You're wearing every hat. We set up the foundational SOPs, compliance, and digital tools so you can focus on building product.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-amber-500/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Growth-Stage Startups</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">15–50 people</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Things are breaking as you grow. We systematise operations, vendor management, and payroll before they become bottlenecks.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-yellow-500/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Funded Startups</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Investor money, board expectations</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Investors expect governance. We deliver board-ready reporting, compliant operations, and the operational rigour that justifies valuation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your operational engine?</h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Book Free Operations Audit</Link>
          </Button>
          <p className="mt-4 text-primary-foreground/70 text-sm">Free 30-minute consultation • No commitment required</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategicOperations;

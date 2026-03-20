import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Globe, Users, Scale, FileCheck, AlertTriangle, Handshake, Search, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TransactionDueDiligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 grid-rows-6 h-full opacity-10">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-indigo-500/30" />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
                <FileText className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-violet-500/20 rounded-lg border border-violet-500/30">
                <Globe className="w-8 h-8 text-violet-400" />
              </div>
              <div className="text-6xl text-white/30">→</div>
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                <Handshake className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Don't Let a Bad Term Sheet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Kill Your Startup
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              From term sheet negotiations to FEMA compliance — we protect your interests at every stage of the funding journey.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You Making These Mistakes?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <FileText className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Signing Term Sheets Without Full Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Liquidation preferences, anti-dilution clauses, drag-along rights — are you really understanding what you're signing?</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <Globe className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">FEMA Non-Compliance on Foreign Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">FC-GPR filings missed, pricing guidelines violated — one FEMA error can freeze your entire cap table.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Due Diligence Disasters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Messy cap tables, missing board resolutions, unsigned agreements — deals fall apart in DD rooms.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <Scale className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">ESOP Structure That Creates Tax Nightmares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Section 56(2)(viib) issues, perquisite tax surprises, and ESOP pools that don't align with valuation.</p>
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
        className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">What You'll Have:</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/80 to-indigo-900/80 backdrop-blur-sm border border-indigo-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl w-fit">
                  <FileCheck className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-indigo-400 mb-4">Bulletproof Documentation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Term Sheets, SHA/SSA, ESOP Agreements, Board Resolutions — every document investor-grade and legally sound.</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-indigo-500/20 rounded-lg p-3 border border-indigo-500/30">
                    <div className="text-indigo-400 font-semibold text-sm">Term Sheets</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-500/30">
                    <div className="text-purple-400 font-semibold text-sm">SHA/SSA</div>
                  </div>
                  <div className="bg-violet-500/20 rounded-lg p-3 border border-violet-500/30">
                    <div className="text-violet-400 font-semibold text-sm">ESOP Docs</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                    <div className="text-blue-400 font-semibold text-sm">Board Resolutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-sm border border-purple-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl w-fit">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-400 mb-4">FEMA & Cross-Border Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">FC-GPR, FC-TRS, ODI filings — seamless cross-border compliance that keeps your funding on track.</p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="bg-purple-500/20 rounded-full p-2 border border-purple-500/30">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-2xl text-purple-400">→</div>
                  <div className="bg-violet-500/20 rounded-full p-2 border border-violet-500/30">
                    <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-2xl text-purple-400">→</div>
                  <div className="bg-indigo-500/20 rounded-full p-2 border border-indigo-500/30">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-violet-900/80 backdrop-blur-sm border border-violet-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl w-fit">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-violet-400 mb-4">ESOP That Actually Works</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Structure, vest, exercise, tax — an ESOP framework that attracts talent without creating liabilities.</p>
                <div className="mt-6 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-lg p-4 border border-violet-500/30">
                  <div className="text-sm text-violet-400 mb-2">ESOP Lifecycle</div>
                  <div className="text-xl font-bold text-indigo-400">Structure → Vest → Exercise → Tax</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Transaction & Due Diligence Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end support for every stage of your funding journey — from pre-deal to post-closing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Term Sheet & Agreement Drafting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Term sheets, SHA, SSA, side letters — drafted to protect founder interests while remaining investor-friendly.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">FEMA Compliances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">FC-GPR, FC-TRS, ODI, downstream investment — complete FEMA compliance for cross-border transactions.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Due Diligence Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Data room setup, document organisation, gap analysis, and pre-DD remediation to ensure a smooth process.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Stakeholder Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Coordinating between founders, investors, legal counsel, and auditors throughout the transaction lifecycle.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ClipboardCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Transaction Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Valuation benchmarking, deal structure analysis, and cap table modelling for informed decision-making.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">ESOP Policy & Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">ESOP scheme design, vesting schedules, exercise mechanics, and tax-efficient structuring for your team.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Funding Round Process */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Guide Your Funding Round</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured 4-step process that takes you from first investor conversation to post-closing compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-indigo-500/50 transition-colors relative">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-indigo-600 font-bold text-lg">1</span>
                </div>
                <CardTitle className="text-lg">Pre-Deal Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Cap table audit, compliance gap analysis, document readiness check, and valuation benchmarking.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                <CardTitle className="text-lg">Term Sheet Negotiation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Clause-by-clause review, red flag identification, negotiation strategy, and founder-friendly structuring.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-violet-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-violet-600 font-bold text-lg">3</span>
                </div>
                <CardTitle className="text-lg">Due Diligence Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Data room management, query resolution, document preparation, and investor communication support.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold text-lg">4</span>
                </div>
                <CardTitle className="text-lg">Post-Closing Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">ROC filings, FEMA compliance, board resolutions, and ongoing regulatory requirements post-investment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to navigate your next funding round?</h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Book Free Transaction Assessment</Link>
          </Button>
          <p className="mt-4 text-primary-foreground/70 text-sm">Free 30-minute consultation • No commitment required</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransactionDueDiligence;

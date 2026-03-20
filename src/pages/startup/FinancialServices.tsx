import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Shield, BarChart3, FileText, Calculator, Landmark, Award, LineChart, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FinancialServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 grid-rows-6 h-full opacity-10">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-emerald-500/30" />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                <Calculator className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-teal-500/20 rounded-lg border border-teal-500/30">
                <TrendingUp className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-6xl text-white/30">→</div>
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Startup Deserves a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                CFO-Grade Financial Foundation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              From financial modelling to business valuation — we build the financial backbone that investors trust and founders rely on.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sound Familiar?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">No Financial Model for Investor Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Walking into investor meetings without revenue projections, unit economics, or scenario analysis.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Burn Rate Surprise Every Month</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">No visibility into cash runway, unexpected expenses, and no early warning system for financial trouble.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <Shield className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">Tax Compliance Is an Afterthought</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Missing Section 80IAC benefits, GST filing delays, and TDS errors that cost you money and credibility.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-lg">No Idea What Your Company Is Worth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Section 56(2)(viib) compliance issues and no defensible valuation for fundraising or ESOP grants.</p>
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
        className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">What You'll Have:</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/80 to-emerald-900/80 backdrop-blur-sm border border-emerald-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl w-fit">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-emerald-400 mb-4">Investor-Ready Financial Model</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Revenue model, unit economics, cash flow projections, and scenario analysis that investors expect.</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-emerald-500/20 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-emerald-400 font-semibold text-sm">Revenue Model</div>
                  </div>
                  <div className="bg-teal-500/20 rounded-lg p-3 border border-teal-500/30">
                    <div className="text-teal-400 font-semibold text-sm">Unit Economics</div>
                  </div>
                  <div className="bg-cyan-500/20 rounded-lg p-3 border border-cyan-500/30">
                    <div className="text-cyan-400 font-semibold text-sm">Cash Flow</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                    <div className="text-green-400 font-semibold text-sm">Scenario Analysis</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-teal-900/80 backdrop-blur-sm border border-teal-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl w-fit">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-teal-400 mb-4">Complete Tax & Compliance Shield</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">GST, TDS, 80IAC, Startup India — every compliance handled proactively, never reactively.</p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="bg-green-500/20 rounded-full p-2 border border-green-500/30">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-2xl text-teal-400">→</div>
                  <div className="bg-teal-500/20 rounded-full p-2 border border-teal-500/30">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-2xl text-teal-400">→</div>
                  <div className="bg-cyan-500/20 rounded-full p-2 border border-cyan-500/30">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/80 to-cyan-900/80 backdrop-blur-sm border border-cyan-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl w-fit">
                  <LineChart className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-cyan-400 mb-4">Defensible Business Valuation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">DCF, NAV, Market Comparable — a valuation that stands up to investor scrutiny and regulatory requirements.</p>
                <div className="mt-6 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg p-4 border border-cyan-500/30">
                  <div className="text-sm text-cyan-400 mb-2">Valuation Methods</div>
                  <div className="text-2xl font-bold text-emerald-400">DCF • NAV • Comparable</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Startup Financial Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every financial capability your startup needs, delivered by people who understand the startup journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Financial Modelling & Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Revenue models, burn rate analysis, runway projections, and investor-ready financial forecasts.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Layers className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Management Information System (MIS)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Real-time dashboards and reports that give founders and investors clarity on business performance.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Tax Compliance Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">GST, TDS, advance tax, Section 80IAC — proactive compliance that prevents costly surprises.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Landmark className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Government Grants & Schemes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Startup India registration, DPIIT recognition, seed fund schemes, and state-level incentives.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Financial Statement Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Deep-dive analysis of P&L, balance sheet, and cash flow to identify strengths and red flags.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Business Valuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">DCF, NAV, and market comparable valuations for fundraising, ESOPs, and regulatory compliance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Funding Stage Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored to Your Funding Stage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Different stages need different financial strategies. We adapt our approach to where you are.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-emerald-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-emerald-600 font-bold text-lg">1</span>
                </div>
                <CardTitle className="text-lg">Pre-Seed / Bootstrapped</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Basic financial model, compliance setup, Startup India registration, and burn rate management.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-teal-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-teal-600 font-bold text-lg">2</span>
                </div>
                <CardTitle className="text-lg">Seed Stage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Investor-ready financial model, valuation report, MIS setup, and tax compliance review.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-cyan-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-cyan-600 font-bold text-lg">3</span>
                </div>
                <CardTitle className="text-lg">Series A</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Detailed forecasting, unit economics deep-dive, board reporting, and audit readiness.</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-green-600 font-bold text-lg">4</span>
                </div>
                <CardTitle className="text-lg">Series B+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">CFO-grade financial operations, multi-entity compliance, advanced modelling, and IPO readiness.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your financial foundation?</h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">Book Free Startup Financial Assessment</Link>
          </Button>
          <p className="mt-4 text-primary-foreground/70 text-sm">Free 30-minute consultation • No commitment required</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialServices;

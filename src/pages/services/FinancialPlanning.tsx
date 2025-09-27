import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertCircle, PieChart, Calculator, BarChart, Target, DollarSign } from "lucide-react";

const FinancialPlanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <DollarSign className="w-16 h-16 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold text-green-400">Revenue</div>
              </div>
              <div className="text-6xl text-white/30">→</div>
              <div className="text-center">
                <BarChart className="w-16 h-16 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-blue-400">Analysis</div>
              </div>
              <div className="text-6xl text-white/30">→</div>
              <div className="text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-purple-400">Growth</div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stop Flying Blind With Your Business Money
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
            Know exactly where every rupee comes from and goes—make decisions based on real numbers, not hunches.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
            Get Financial Audit
          </Button>
        </div>
      </section>

      {/* Current Problem Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You Still...</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Not knowing your actual profit until the CA does year-end accounts?</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Surprised by cash flow problems that seemed to come from nowhere?</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <Target className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Making business decisions without knowing the real financial impact?</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Have After Implementation */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What You'll Have:</h2>
          </div>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-2xl">
                  <CardHeader>
                    <BarChart className="w-16 h-16 text-white mb-4" />
                    <CardTitle className="text-2xl text-white mb-4">Real-Time Financial Picture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 text-lg">See your actual profit, cash flow, and expenses anytime—no waiting for month-end reports.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">₹25,000</div>
                  <div className="text-gray-600">Daily Revenue</div>
                  <div className="text-2xl font-bold text-green-600 mt-4">+15%</div>
                  <div className="text-gray-600">vs Last Month</div>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">Budget</div>
                  <div className="text-gray-600 mb-4">Monthly Planning</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">75% of budget used</div>
                </div>
              </div>
              <div>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-2xl">
                  <CardHeader>
                    <Calculator className="w-16 h-16 text-white mb-4" />
                    <CardTitle className="text-2xl text-white mb-4">Smart Budget Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100 text-lg">Plan your expenses, track against budget, spot problems early—never run out of cash unexpectedly.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-2xl">
                  <CardHeader>
                    <DollarSign className="w-16 h-16 text-white mb-4" />
                    <CardTitle className="text-2xl text-white mb-4">Profitable Decision Making</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-100 text-lg">Know which products, customers, or departments make real money—focus on what actually works.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">₹1.2L</div>
                  <div className="text-gray-600">Monthly Profit</div>
                  <div className="text-lg font-semibold text-gray-800 mt-4">Top Product: Product A</div>
                  <div className="text-green-600">40% margin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build Your Financial Control</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <CardTitle className="text-lg">Budget Framework Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Build realistic budgets based on your actual business patterns—not wishful thinking.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <CardTitle className="text-lg">Cash Flow Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Track money coming in and going out daily—spot cash crunches weeks before they hit.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <CardTitle className="text-lg">Variance Analysis System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Compare actual vs planned every month—understand why you're over or under budget.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <CardTitle className="text-lg">Management Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Get clear, simple reports that show exactly where your business stands financially.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your finances?</h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Financial Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialPlanning;
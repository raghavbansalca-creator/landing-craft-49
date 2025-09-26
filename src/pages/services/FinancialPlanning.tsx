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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Flying Blind With Your Business Money
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto">
            Know exactly where every rupee comes from and goes—make decisions based on real numbers, not hunches.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Have:</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Real-Time Financial Picture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">See your actual profit, cash flow, and expenses anytime—no waiting for month-end reports.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Smart Budget Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Plan your expenses, track against budget, spot problems early—never run out of cash unexpectedly.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Profitable Decision Making</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Know which products, customers, or departments make real money—focus on what actually works.</p>
              </CardContent>
            </Card>
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

      {/* Client Transformation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Real Results</h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl italic text-foreground mb-6">
                "We went from guessing our cash flow to knowing exactly when money would be tight. Avoided a major cash crunch by planning 2 months ahead. Our profit margins improved 15% just by focusing on profitable customers."
              </blockquote>
              <div className="text-muted-foreground font-medium">— Service Company, Mumbai</div>
            </CardContent>
          </Card>
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
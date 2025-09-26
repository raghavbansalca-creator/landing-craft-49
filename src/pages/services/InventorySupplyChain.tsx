import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Package, TrendingUp, AlertTriangle, BarChart, Clock, Target } from "lucide-react";

const InventorySupplyChain = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Losing Money On Dead Stock And Stockouts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto">
            Know exactly what you have, what you need, and when to order—never run out or overstock again.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Inventory Audit
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
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Finding expired or dead stock worth lakhs in your warehouse?</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <Package className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Running out of popular items just when demand peaks?</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <Target className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Making inventory decisions based on guesswork and gut feeling?</CardTitle>
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
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Right Stock At Right Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Never run out of bestsellers, never overstock slow movers—optimal inventory levels always.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Automatic Reordering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">System alerts you exactly when to reorder and how much—no more emergency purchases at high prices.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Cash Flow Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Less money tied up in dead stock, faster inventory turnover—improve your working capital significantly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Make It Happen</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <CardTitle className="text-lg">Stock Movement Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">We set up accurate tracking of every item that comes in and goes out—no more mysterious disappearing inventory.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <CardTitle className="text-lg">Consumption Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Calculate exactly how much you use based on real patterns—predict needs before you run short.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <CardTitle className="text-lg">Physical Verification System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Regular stock-takes that actually match your system—end the gap between books and reality.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <CardTitle className="text-lg">Automated Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">System tells you exactly when to reorder and how much—never guess again.</p>
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
                "We reduced our inventory holding by 40% while never running out of stock. Our cash flow improved by ₹25 lakhs in 6 months just from better inventory management."
              </blockquote>
              <div className="text-muted-foreground font-medium">— Retail Chain, Gurgaon</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to optimize your inventory?</h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Inventory Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InventorySupplyChain;
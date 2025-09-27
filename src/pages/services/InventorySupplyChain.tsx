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
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Losing Money On Dead Stock And Stockouts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Know exactly what you have, what you need, and when to order—never run out or overstock again.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100">
                Get Inventory Audit
              </Button>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <Package className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Track Everything</h3>
                  <p className="text-sm text-white/80">Real-time inventory visibility</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-8">
                  <AlertTriangle className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Prevent Losses</h3>
                  <p className="text-sm text-white/80">Smart alerts & automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Problem Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">Are You Still...</h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-6 bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-red-200 shadow-lg">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-3">Finding expired or dead stock worth lakhs in your warehouse?</h3>
                <p className="text-red-600">Money sitting in corners, collecting dust instead of generating returns.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-red-200 shadow-lg">
              <div className="flex-shrink-0">
                <Package className="w-16 h-16 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-3">Running out of popular items just when demand peaks?</h3>
                <p className="text-red-600">Lost sales, disappointed customers, emergency purchases at premium prices.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-red-200 shadow-lg">
              <div className="flex-shrink-0">
                <Target className="w-16 h-16 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-3">Making inventory decisions based on guesswork and gut feeling?</h3>
                <p className="text-red-600">Flying blind with your most valuable asset—your inventory.</p>
              </div>
            </div>
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
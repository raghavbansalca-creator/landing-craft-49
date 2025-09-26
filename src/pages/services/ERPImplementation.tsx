import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, FileSpreadsheet, FileText, Database, Zap, BarChart3, Settings } from "lucide-react";

const ERPImplementation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Juggling Between WhatsApp, Excel, And Paper
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto">
            One system for everything—from orders to payments, inventory to reports—all connected and automated.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Digital Transformation Audit
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
                <Smartphone className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Managing orders on WhatsApp and tracking them on Excel?</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <FileSpreadsheet className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Manually entering the same data in multiple places?</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center border-destructive/20">
              <CardHeader>
                <FileText className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl">Unable to get a complete picture because information is scattered everywhere?</CardTitle>
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
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Everything In One Place</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Orders, inventory, accounts, reports—all connected in one system that talks to each other.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Automatic Data Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Enter information once, it updates everywhere automatically—no more double entry or manual errors.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary mb-4">Instant Business Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Get any report instantly—sales, inventory, profitability, performance—all at the click of a button.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Digital System Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Transformation System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implement proven ERP solutions tailored to your business needs, ensuring seamless integration and maximum efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Custom Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">ERP system configured exactly to your business processes—not the other way around.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Data Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">All your existing data transferred safely without losing any historical information.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Automate repetitive tasks so your team focuses on growing the business, not data entry.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Real-time Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Live business intelligence at your fingertips—make decisions based on current data.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Mobile Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access your business data from anywhere—desktop, mobile, or tablet.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Training & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Complete team training and ongoing support to ensure successful adoption.</p>
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
                "Before, it took 3 days to prepare a sales report. Now I get real-time sales data on my phone. Our order processing time reduced from 2 hours to 10 minutes."
              </blockquote>
              <div className="text-muted-foreground font-medium">— Manufacturing Company, Ghaziabad</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to digitize your operations?</h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Get Digital Transformation Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPImplementation;
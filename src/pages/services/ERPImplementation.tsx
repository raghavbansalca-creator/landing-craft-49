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
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 grid-rows-6 h-full opacity-10">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="border border-cyan-500/30"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                <Smartphone className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                <FileSpreadsheet className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-4xl text-white/30">+</div>
              <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <FileText className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-6xl text-white/30">→</div>
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Database className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Juggling Between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                WhatsApp, Excel, And Paper
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              One system for everything—from orders to payments, inventory to reports—all connected and automated.
            </p>
            <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-xl">
              Get Digital Transformation Audit
            </Button>
          </div>
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
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">What You'll Have:</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-sm border border-cyan-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl w-fit">
                  <Database className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-cyan-400 mb-4">Everything In One Place</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Orders, inventory, accounts, reports—all connected in one system that talks to each other.</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-cyan-500/20 rounded-lg p-3 border border-cyan-500/30">
                    <div className="text-cyan-400 font-semibold text-sm">Orders</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                    <div className="text-blue-400 font-semibold text-sm">Inventory</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-500/30">
                    <div className="text-purple-400 font-semibold text-sm">Accounts</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                    <div className="text-green-400 font-semibold text-sm">Reports</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-800/80 to-indigo-900/80 backdrop-blur-sm border border-blue-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl w-fit">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-400 mb-4">Automatic Data Flow</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Enter information once, it updates everywhere automatically—no more double entry or manual errors.</p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="bg-green-500/20 rounded-full p-2 border border-green-500/30">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-2xl text-blue-400">→</div>
                  <div className="bg-blue-500/20 rounded-full p-2 border border-blue-500/30">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-2xl text-blue-400">→</div>
                  <div className="bg-purple-500/20 rounded-full p-2 border border-purple-500/30">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-sm border border-purple-500/20 text-white shadow-2xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-fit">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-400 mb-4">Instant Business Reports</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg">Get any report instantly—sales, inventory, profitability, performance—all at the click of a button.</p>
                <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-sm text-purple-400 mb-2">Report Generation Time</div>
                  <div className="text-3xl font-bold text-pink-400">0.3s</div>
                </div>
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
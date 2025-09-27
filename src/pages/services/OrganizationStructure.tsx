import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, ArrowRight, Building, Shield, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OrganizationStructure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building className="h-4 w-4" />
            Organization Structure & Hierarchy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Stop Being The Bottleneck In Your Own Business
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Build a structure where decisions happen without you—even when you're not there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8">
              Get Organization Structure Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Current Problem Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700">
            Are You Still...
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-gray-700 font-medium">
                  The only one who can make important decisions?
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-gray-700 font-medium">
                  Constantly being interrupted for approvals and clarifications?
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-gray-700 font-medium">
                  Worried your business will collapse if you take a vacation?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Organization System */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-red-50 dark:from-orange-950/10 dark:to-red-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our Organization Structure System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Build a self-running organization where every level knows their authority, responsibilities, and when to escalate
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-orange-200 dark:border-orange-800">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-3">Clear Authority Matrix</h3>
                <p className="text-orange-700 dark:text-orange-300 mb-4">
                  Define exactly what decisions each role can make without approval—from petty cash to vendor selection.
                </p>
                <div className="text-sm space-y-1 text-orange-600 dark:text-orange-400">
                  <p>• Decision-making limits by role</p>
                  <p>• Escalation pathways</p>
                  <p>• Authority documentation</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 dark:border-orange-800">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-3">Delegation Framework</h3>
                <p className="text-orange-700 dark:text-orange-300 mb-4">
                  Systematic approach to delegate tasks with clear accountability and reporting structures.
                </p>
                <div className="text-sm space-y-1 text-orange-600 dark:text-orange-400">
                  <p>• Task ownership mapping</p>
                  <p>• Accountability systems</p>
                  <p>• Regular review cycles</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 dark:border-orange-800">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-3">Backup Leadership</h3>
                <p className="text-orange-700 dark:text-orange-300 mb-4">
                  Train secondary leaders who can step in and make decisions when key people are unavailable.
                </p>
                <div className="text-sm space-y-1 text-orange-600 dark:text-orange-400">
                  <p>• Leadership development</p>
                  <p>• Cross-training programs</p>
                  <p>• Succession planning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Have After Implementation */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What You'll Have After Implementation
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-orange-500">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">80% Fewer Interruptions</h3>
                    <p className="text-muted-foreground">
                      Your team handles routine decisions independently. No more constant "Can I do this?" questions throughout the day.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-red-500">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Runs Without You</h3>
                    <p className="text-muted-foreground">
                      Take vacations, attend conferences, or focus on growth—your business operates smoothly in your absence.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-amber-500">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-amber-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Faster Decision Speed</h3>
                    <p className="text-muted-foreground">
                      Decisions that used to wait for you are now made instantly at the right level—no more bottlenecks slowing everything down.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">Authority Matrix Example</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-3 bg-white dark:bg-orange-900/30 rounded">
                  <span className="text-orange-700 dark:text-orange-300">Supervisor Level</span>
                  <span className="font-bold text-orange-800 dark:text-orange-200">Up to ₹5,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-orange-900/30 rounded">
                  <span className="text-orange-700 dark:text-orange-300">Manager Level</span>
                  <span className="font-bold text-orange-800 dark:text-orange-200">Up to ₹25,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-orange-900/30 rounded">
                  <span className="text-orange-700 dark:text-orange-300">Department Head</span>
                  <span className="font-bold text-orange-800 dark:text-orange-200">Up to ₹1,00,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-orange-900/30 rounded">
                  <span className="text-orange-700 dark:text-orange-300">Owner Approval</span>
                  <span className="font-bold text-red-600">Above ₹1,00,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to stop being the bottleneck?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build a structure where your business thrives without your constant oversight.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3"
          >
            Get Organization Structure Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrganizationStructure;
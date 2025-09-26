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

      {/* After Our Work Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-700">
            What You'll Have:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-orange-700">Clear Decision Authority</h3>
              <p className="text-gray-600 leading-relaxed">
                "Every employee knows exactly what decisions they can make and when to escalate—no more bottlenecks."
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-orange-700">Smooth Operations Without You</h3>
              <p className="text-gray-600 leading-relaxed">
                "Your business runs seamlessly whether you're in the office, traveling, or taking time off."
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-orange-700">Faster Decision Making</h3>
              <p className="text-gray-600 leading-relaxed">
                "No more delays waiting for your approval—the right person makes the right decision at the right level."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Transformation */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-700">
            Real Results
          </h2>
          <Card className="border-orange-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                "I used to get 50+ calls daily for approvals. Now my team handles 80% of decisions independently. 
                I finally took a 2-week vacation without a single emergency call."
              </blockquote>
              <div className="border-t border-orange-200 pt-4">
                <p className="font-semibold text-orange-700">— Restaurant Chain Owner, Delhi</p>
              </div>
            </CardContent>
          </Card>
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
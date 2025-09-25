import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PerformanceOptimization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-accent to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Stop Wondering How Your Team Is Really Performing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get clear visibility into every team member's contribution—no more guessing games.
          </p>
        </div>
      </section>

      {/* Current Problem Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Are You Still...
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="flex items-start pt-6">
                <AlertCircle className="w-6 h-6 text-destructive mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground">
                  Unsure if your team is meeting targets?
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="flex items-start pt-6">
                <AlertCircle className="w-6 h-6 text-destructive mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground">
                  Relying on gut feeling for performance reviews?
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="flex items-start pt-6">
                <AlertCircle className="w-6 h-6 text-destructive mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground">
                  Struggling with employees who don't take ownership?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* After Our Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What You'll Have:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Clear Performance Visibility
                </h3>
                <p className="text-muted-foreground">
                  See exactly who's performing, who needs help, and who's exceeding expectations—at any time.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Motivated & Accountable Team
                </h3>
                <p className="text-muted-foreground">
                  Employees know their targets, track their progress, and take ownership of results.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Data-Driven Decisions
                </h3>
                <p className="text-muted-foreground">
                  Promote, train, or restructure based on real performance data, not assumptions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Transformation */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            Real Results
          </h2>
          
          <Card className="p-8">
            <CardContent className="pt-6">
              <div className="flex text-primary justify-center mb-4">
                {"★".repeat(5)}
              </div>
              <blockquote className="text-xl italic text-muted-foreground mb-6">
                "Our 45-person manufacturing team now has clear daily targets. Everyone knows exactly what's expected—productivity increased 30% in 3 months."
              </blockquote>
              <cite className="text-foreground font-semibold">
                — Manufacturing Client, Gurgaon
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Ready to see your team's real performance?
          </h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Schedule Free Business Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceOptimization;
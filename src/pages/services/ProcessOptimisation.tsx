import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Target, TrendingUp } from "lucide-react";

const ProcessOptimisation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Turn Your Daily Chaos Into{" "}
            <span className="text-emerald-600 dark:text-emerald-400">Smooth Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Every process documented, every risk controlled—no more firefighting daily problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Get Process Audit
            </Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Current Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Are You Still...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/20 bg-gradient-to-b from-destructive/5 to-destructive/10">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-xl">Solving the Same Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over and over again? Dealing with recurring issues that should have been solved permanently?
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-gradient-to-b from-destructive/5 to-destructive/10">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-xl">Finding Mistakes Too Late</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Only after they've caused damage? Discovering problems when it's expensive to fix?
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-gradient-to-b from-destructive/5 to-destructive/10">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-xl">Inconsistent Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wondering why quality varies between different shifts or employees?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* After Our Work Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What You'll Have:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-b from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">Consistent Quality Every Time</CardTitle>
                <CardDescription className="text-emerald-700 dark:text-emerald-300">
                  Same high-quality output regardless of who's working—no more good days and bad days.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-b from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/20">
              <CardHeader>
                <Target className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">Problems Caught Before They Happen</CardTitle>
                <CardDescription className="text-emerald-700 dark:text-emerald-300">
                  Spot issues before they become expensive mistakes—prevention instead of correction.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-b from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">Smooth Daily Operations</CardTitle>
                <CardDescription className="text-emerald-700 dark:text-emerald-300">
                  Every employee knows exactly what to do and how to do it—no more confusion or guesswork.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Transformation */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Real Results
          </h2>
          
          <Card className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <CardContent className="p-8">
              <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "We used to find defects at the end of production. Now we catch problems at each stage. 
                Our rework costs dropped <span className="font-bold text-emerald-600 dark:text-emerald-400">70%</span> and 
                customer complaints are almost zero."
              </blockquote>
              <cite className="text-muted-foreground font-medium">
                — Manufacturing Unit, Faridabad
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to eliminate daily chaos?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get your free process assessment and see exactly where you're losing time and money.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50">
            Get Process Optimisation Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessOptimisation;
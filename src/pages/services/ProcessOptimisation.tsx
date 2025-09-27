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

      {/* Our Process System */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-emerald-950/10 dark:to-teal-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our Process Optimization System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform chaotic operations into smooth, predictable processes with built-in quality controls and risk management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-emerald-800 dark:text-emerald-200">Standard Operating Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-700 dark:text-emerald-300 mb-4">
                  Document every critical process with step-by-step instructions, quality checkpoints, and error prevention measures.
                </CardDescription>
                <div className="text-sm space-y-1 text-emerald-600 dark:text-emerald-400">
                  <p>• Process documentation</p>
                  <p>• Quality checklists</p>
                  <p>• Error prevention protocols</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-emerald-800 dark:text-emerald-200">Quality Control Points</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-700 dark:text-emerald-300 mb-4">
                  Build quality checks into every stage of your process—catch problems early before they become expensive fixes.
                </CardDescription>
                <div className="text-sm space-y-1 text-emerald-600 dark:text-emerald-400">
                  <p>• Stage-wise quality checks</p>
                  <p>• Early warning systems</p>
                  <p>• Correction protocols</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-emerald-800 dark:text-emerald-200">Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-emerald-700 dark:text-emerald-300 mb-4">
                  Regular process reviews and improvements based on performance data and team feedback—your operations get better over time.
                </CardDescription>
                <div className="text-sm space-y-1 text-emerald-600 dark:text-emerald-400">
                  <p>• Performance monitoring</p>
                  <p>• Process refinement</p>
                  <p>• Team feedback loops</p>
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
              <Card className="p-6 border-l-4 border-l-emerald-500">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Zero Recurring Problems</h3>
                    <p className="text-muted-foreground">
                      Issues get fixed once and stay fixed. No more dealing with the same problems week after week—permanent solutions.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-teal-500">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-teal-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">70% Reduction in Rework</h3>
                    <p className="text-muted-foreground">
                      Catch defects at each stage instead of at the end. Quality problems identified early when they're cheap to fix.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-cyan-500">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-cyan-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Consistent Output Quality</h3>
                    <p className="text-muted-foreground">
                      Same high standard regardless of who's working, which shift, or which day—your quality becomes predictable.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">Process Control Example</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-3 bg-white dark:bg-emerald-900/30 rounded">
                  <span className="text-emerald-700 dark:text-emerald-300">Stage 1 Quality Check</span>
                  <span className="font-bold text-green-600">✓ Passed</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-emerald-900/30 rounded">
                  <span className="text-emerald-700 dark:text-emerald-300">Stage 2 Quality Check</span>
                  <span className="font-bold text-green-600">✓ Passed</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-emerald-900/30 rounded">
                  <span className="text-emerald-700 dark:text-emerald-300">Final Quality Check</span>
                  <span className="font-bold text-green-600">✓ Passed</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-emerald-900/30 rounded">
                  <span className="text-emerald-700 dark:text-emerald-300">Defect Rate</span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-200">0.3%</span>
                </div>
              </div>
            </div>
          </div>
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
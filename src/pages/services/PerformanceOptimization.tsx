import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Target, BarChart3, Users, Calendar, Clock, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PerformanceOptimization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Different gradient */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Performance Management System
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Stop Wondering How Your Team Is Really <span className="text-blue-600">Performing</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
            Get clear visibility into every team member's contribution with real-time dashboards, KPIs, and performance tracking systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-600 dark:text-blue-400">
            <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">KRA Implementation</span>
            <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Real-time Dashboards</span>
            <span className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Performance Reviews</span>
          </div>
        </div>
      </section>

      {/* Performance Problems */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Are You Still Managing Performance Like This?
            </h2>
            <p className="text-lg text-muted-foreground">
              Most businesses struggle with these common performance management issues
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Performance Reviews Based on Memory</h3>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      "How did Sarah perform this quarter?" You're trying to remember incidents from 3 months ago.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">No Clear Daily/Weekly Targets</h3>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Employees work without knowing if they're hitting the mark until the month-end surprise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Employees Don't Track Their Own Work</h3>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      They don't know their numbers, don't feel ownership, and always wait for you to tell them how they're doing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Promotion & Salary Decisions Are Subjective</h3>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      "I like this person" vs "I have concrete data showing they exceeded targets by 25%."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Performance System */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our Performance Management System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your team into a high-performing, self-monitoring unit where everyone knows their numbers and takes ownership
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-800 dark:text-green-200">Real-Time Performance Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Daily, weekly, monthly metrics visible to everyone. No more waiting for month-end to know if targets are being met.
                </CardDescription>
                <div className="mt-4 text-sm space-y-1 text-green-600 dark:text-green-400">
                  <p>• Live KPI tracking</p>
                  <p>• Individual scorecards</p>
                  <p>• Team performance comparisons</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-800 dark:text-green-200">Clear KRAs & Daily Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Every role has measurable Key Result Areas with daily/weekly targets that employees track themselves.
                </CardDescription>
                <div className="mt-4 text-sm space-y-1 text-green-600 dark:text-green-400">
                  <p>• Role-specific KRAs</p>
                  <p>• Daily target tracking</p>
                  <p>• Self-monitoring systems</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-800 dark:text-green-200">Data-Driven Appraisals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Performance reviews backed by 12 months of concrete data. Promotions and increments based on measurable results.
                </CardDescription>
                <div className="mt-4 text-sm space-y-1 text-green-600 dark:text-green-400">
                  <p>• 360-degree feedback</p>
                  <p>• Performance history tracking</p>
                  <p>• Fair evaluation criteria</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What You'll Have After Implementation
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-blue-500">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Everyone Knows Their Numbers</h3>
                    <p className="text-muted-foreground">
                      Each employee can tell you their performance vs target for today, this week, this month—without asking you.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-500">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Self-Managing Teams</h3>
                    <p className="text-muted-foreground">
                      Team members take ownership, track their own progress, and course-correct without constant supervision.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-purple-500">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Predictable Performance Reviews</h3>
                    <p className="text-muted-foreground">
                      No surprises. Both you and your employee know exactly what the appraisal will look like based on data.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Sample Dashboard Metrics</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-3 bg-white dark:bg-blue-900/30 rounded">
                  <span className="text-blue-700 dark:text-blue-300">Sales Calls Made</span>
                  <span className="font-bold text-blue-800 dark:text-blue-200">47/50 (94%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-blue-900/30 rounded">
                  <span className="text-blue-700 dark:text-blue-300">Customer Issues Resolved</span>
                  <span className="font-bold text-blue-800 dark:text-blue-200">23/25 (92%)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-blue-900/30 rounded">
                  <span className="text-blue-700 dark:text-blue-300">Weekly Target Achievement</span>
                  <span className="font-bold text-green-600">Above Target</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white dark:bg-blue-900/30 rounded">
                  <span className="text-blue-700 dark:text-blue-300">Quality Score</span>
                  <span className="font-bold text-blue-800 dark:text-blue-200">4.8/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Clock className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to See Your Team's Real Performance?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Stop guessing and start measuring. Get a custom performance dashboard for your team in 30 days.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-50">
            Get Your Performance Audit
          </Button>
          <p className="text-sm mt-4 opacity-75">Free 30-minute consultation • No commitment required</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceOptimization;
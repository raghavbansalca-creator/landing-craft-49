import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  company: z.string().trim().optional().or(z.literal("")),
  phone: z.string().trim().optional().or(z.literal("")),
  subject: z.string().trim().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().trim().min(20, { message: "Message must be at least 20 characters" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [isSubmittingWhatsApp, setIsSubmittingWhatsApp] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  // ✅ EmailJS handler
  const sendEmail = async (data: ContactForm) => {
    setIsSubmittingEmail(true);
    try {
      await emailjs.send(
        "service_pwseayy",
        "template_pnd6nkb",
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company || "N/A",
          phone: data.phone || "N/A",
          subject: data.subject,
          message: data.message,
        },
        "M6fSoECJy7UbJ3hXu"
      );

      toast({ title: "Success!", description: "Email sent successfully 🚀" });
      reset();
    } catch (error) {
      toast({ title: "Error", description: "Failed to send email", variant: "destructive" });
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  // ✅ WhatsApp handler
  const sendWhatsApp = (data: ContactForm) => {
    setIsSubmittingWhatsApp(true);
    try {
      const whatsappMessage =
        `*New Contact Form Submission*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `${data.company ? `*Company:* ${data.company}\n` : ""}` +
        `${data.phone ? `*Phone:* ${data.phone}\n` : ""}` +
        `*Subject:* ${data.subject}\n\n` +
        `*Message:*\n${data.message}`;

      const whatsappNumber = "919997155444";
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");

      toast({ title: "Redirecting!", description: "Opening WhatsApp..." });
      reset();
    } catch (error) {
      toast({ title: "Error", description: "Failed to open WhatsApp", variant: "destructive" });
    } finally {
      setIsSubmittingWhatsApp(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve operational excellence and sustainable growth.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 text-primary mr-2" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" {...register("name")} placeholder="Your full name" className={errors.name ? "border-destructive" : ""} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" {...register("email")} placeholder="your.email@company.com" className={errors.email ? "border-destructive" : ""} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" {...register("company")} placeholder="Your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" {...register("phone")} placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" {...register("subject")} placeholder="What can we help you with?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" {...register("message")} placeholder="Tell us about your business challenges and goals..." rows={5} />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      size="lg"
                      className="w-1/2 bg-blue-600"
                      disabled={isSubmittingEmail}
                      onClick={handleSubmit(sendEmail)}
                    >
                      {isSubmittingEmail ? "Sending..." : "Send Email"}
                    </Button>

                    <Button
                      type="button"
                      size="lg"
                      className="w-1/2 bg-green-600"
                      disabled={isSubmittingWhatsApp}
                      onClick={handleSubmit(sendWhatsApp)}
                    >
                      {isSubmittingWhatsApp ? "Opening..." : "Send WhatsApp"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Choose the best way to reach us. We're here to help transform your business.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">admin@sevenlabs.in</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+919193580737</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat from 11 am to 6 pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Our Offices</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div>
                          <p className="font-medium text-foreground">NCR:</p>
                          <p>J 8111, Metro Homes, Meerut Road<br />Ghaziabad, Uttar Pradesh, 201206</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Jaipur:</p>
                          <p>6/371, Sector 6, Vidyadhar Nagar<br />Jaipur, 302039</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Agra:</p>
                          <p>House No-39, Ring Road Colony<br />Agra, Uttar Pradesh, 282004</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">We are available in Agra, Delhi & Jaipur</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 11:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contact;

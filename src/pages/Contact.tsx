import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "" // Anti-spam honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question about our apps? Want to share feedback? 
            Or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-brand-400" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field (hidden) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="focus-brand"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="focus-brand"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="focus-brand resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-500 hover:bg-brand-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct email */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-brand-400" />
                  Direct Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Prefer email? Send us a message directly and we'll respond as soon as possible.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:support@fera-tech.com">
                    support@fera-tech.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Response time */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Response Time
                </h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours during business days. 
                  For urgent issues, please email us directly.
                </p>
              </CardContent>
            </Card>

            {/* What to expect */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  What We Love to Hear About
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bug reports and technical issues</li>
                  <li>• Feature requests and ideas</li>
                  <li>• General feedback about our apps</li>
                  <li>• Partnership opportunities</li>
                  <li>• Press and media inquiries</li>
                </ul>
              </CardContent>
            </Card>

            {/* Note about services */}
            <Card className="glass border-yellow-500/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  A Quick Note
                </h3>
                <p className="text-muted-foreground text-sm">
                  We're a product studio, not a service company. We don't take on client work 
                  or consulting projects — we focus exclusively on building our own apps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
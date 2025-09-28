import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { 
  Smartphone, 
  Code, 
  Zap, 
  Users, 
  Target, 
  Heart,
  Calendar,
  Coffee,
  Gamepad2
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Focused",
      description: "We build apps that do one thing exceptionally well, not everything poorly."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast",
      description: "Quick to launch, fast to use. We respect your time and device resources."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Crafted",
      description: "Every pixel, interaction, and sound is carefully considered and polished."
    }
  ];

  const techStack = [
    { name: "Swift", category: "iOS" },
    { name: "React", category: "Web" },
    { name: "TypeScript", category: "Language" },
    { name: "Figma", category: "Design" },
    { name: "Core Haptics", category: "iOS" },
    { name: "WidgetKit", category: "iOS" },
    { name: "Game Center", category: "iOS" },
    { name: "CloudKit", category: "Backend" }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded Fera Tech",
      description: "Started with a simple mission: build small, focused apps that people love."
    },
    {
      year: "2024", 
      title: "Launched QuarCade",
      description: "Our first app hits the App Store, bringing arcade gaming to your pocket."
    },
    {
      year: "2024",
      title: "AI Exploration",
      description: "Began developing Fera Notes, exploring how AI can enhance productivity without complexity."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BrandLogo className="h-16 w-16" glowStrength="strong" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About Fera Tech
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fera Tech builds small, sharp apps people actually use. We don't do client services — 
            we just make things and release them.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <Card className="glass-strong">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                In a world of bloated, feature-heavy software, we believe in the power of focus. 
                We create apps that solve specific problems elegantly, with beautiful design 
                and thoughtful interactions that feel natural and delightful.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Info */}
          <div className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-brand-400" />
                  Team Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-mono font-bold text-brand-400 mb-2">
                  2
                </div>
                <p className="text-muted-foreground">
                  Small team, big focus. We stay lean to move fast and maintain quality.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-brand-400" />
                  Apps Shipped
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-mono font-bold text-brand-400 mb-2">
                  1
                </div>
                <p className="text-muted-foreground">
                  Quality over quantity. Each app gets our full attention until it's perfect.
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-400" />
                  Happy Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-mono font-bold text-brand-400 mb-2">
                  25K+
                </div>
                <p className="text-muted-foreground">
                  Growing community of users who love focused, well-crafted apps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-500/20 border-2 border-brand-500 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-brand-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono font-bold text-brand-400">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Stack
          </h2>
          <Card className="glass">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="text-center">
                    <Badge variant="outline" className="mb-2">
                      {tech.category}
                    </Badge>
                    <p className="text-sm font-medium text-foreground">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="glass-strong">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Want to Work Together?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're not looking for clients, but we're always interested in connecting 
                with other builders, creators, and people who share our vision for focused software.
              </p>
              <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-400">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
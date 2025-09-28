import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/BrandLogo";
import { 
  Download, 
  Image as ImageIcon, 
  Palette, 
  FileText, 
  Mail,
  Copy,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PressKit = () => {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => new Set([...prev, id]));
      toast({
        title: "Copied!",
        description: "Content copied to clipboard.",
      });
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  const brandColors = [
    { name: "Brand 50", hex: "#E6F8FF", hsl: "198, 100%, 95%" },
    { name: "Brand 100", hex: "#C9F0FF", hsl: "198, 100%, 89%" },
    { name: "Brand 300", hex: "#14AAE3", hsl: "198, 89%, 49%" },
    { name: "Brand 400", hex: "#10BBF2", hsl: "198, 92%, 50%" },
    { name: "Brand 500", hex: "#0FC4F6", hsl: "198, 93%, 51%" },
    { name: "Brand 700", hex: "#1893CD", hsl: "198, 78%, 45%" },
  ];

  const companyInfo = {
    name: "Fera Tech",
    founded: "2023",
    location: "Remote",
    tagline: "Small, focused, and fast. Games, AI, lifestyle, and tools.",
    description: "Fera Tech is a tiny product studio. We design, build, and ship apps and games. We don't do client services — we just make things and release them.",
    email: "press@fera-tech.com"
  };

  const assets = [
    {
      category: "Logos",
      items: [
        { name: "Logo Mark (PNG)", size: "512x512", description: "High-res logo mark" },
        { name: "Logo Mark (SVG)", size: "Vector", description: "Scalable logo mark" },
        { name: "Logo Lockup (PNG)", size: "1024x256", description: "Logo with text" },
        { name: "Logo Lockup (SVG)", size: "Vector", description: "Scalable lockup" },
      ]
    },
    {
      category: "App Icons",
      items: [
        { name: "QuarCade Icon", size: "1024x1024", description: "App Store ready" },
        { name: "Fera Notes Icon", size: "1024x1024", description: "Coming soon" },
      ]
    },
    {
      category: "Screenshots",
      items: [
        { name: "QuarCade Screenshots", size: "Various", description: "iPhone & iPad" },
        { name: "Hero Images", size: "1920x1080", description: "Marketing visuals" },
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <BrandLogo className="h-16 w-16" glowStrength="strong" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Press Kit
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Brand assets, company information, and resources for media and press coverage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Info */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-400" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Company Name</h4>
                    <p className="text-muted-foreground">{companyInfo.name}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Founded</h4>
                    <p className="text-muted-foreground">{companyInfo.founded}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">{companyInfo.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Press Contact</h4>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-brand-400 hover:text-brand-300 transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tagline</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground italic">"{companyInfo.tagline}"</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(companyInfo.tagline, "tagline")}
                      className="p-1 h-auto"
                    >
                      {copiedItems.has("tagline") ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Company Description</h4>
                  <div className="flex items-start gap-2">
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {companyInfo.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(companyInfo.description, "description")}
                      className="p-1 h-auto flex-shrink-0"
                    >
                      {copiedItems.has("description") ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Brand Colors */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-brand-400" />
                  Brand Colors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {brandColors.map((color, index) => (
                    <div key={index} className="space-y-2">
                      <div 
                        className="w-full h-16 rounded-lg border border-border"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-sm">
                        <p className="font-medium text-foreground">{color.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground font-mono text-xs">
                            {color.hex}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(color.hex, `color-${index}`)}
                            className="p-1 h-auto"
                          >
                            {copiedItems.has(`color-${index}`) ? (
                              <CheckCircle className="h-3 w-3 text-green-400" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assets */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-brand-400" />
                  Brand Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {assets.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="font-semibold text-foreground mb-3">
                      {category.category}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-center justify-between p-3 border border-border rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.description} • {item.size}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick facts */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Team Size</h4>
                  <p className="text-2xl font-mono font-bold text-brand-400">2</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Apps Released</h4>
                  <p className="text-2xl font-mono font-bold text-brand-400">1</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Total Downloads</h4>
                  <p className="text-2xl font-mono font-bold text-brand-400">25K+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Countries</h4>
                  <p className="text-2xl font-mono font-bold text-brand-400">12</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-brand-400" />
                  Media Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For press inquiries, interviews, or additional assets.
                </p>
                <Button asChild className="w-full bg-brand-500 hover:bg-brand-400">
                  <a href={`mailto:${companyInfo.email}`}>
                    Get in Touch
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Usage guidelines */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Usage Guidelines
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use official logos without modification</li>
                  <li>• Maintain clear space around logos</li>
                  <li>• Use brand colors consistently</li>
                  <li>• Contact us for custom assets</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;
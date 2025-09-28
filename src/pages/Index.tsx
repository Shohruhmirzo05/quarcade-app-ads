import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/BrandLogo";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Download, Users, Globe, Package } from "lucide-react";
import { Link } from "react-router-dom";

// Import data
import productsData from "@/data/products.json";
import metricsData from "@/data/metrics.json";

const Index = () => {
  const featuredProduct = productsData.find(p => p.status === "Released");
  const upcomingProducts = productsData.filter(p => p.status === "In Progress").slice(0, 3);

  const testimonials = [
    {
      quote: "QuarCade brings back the pure joy of arcade gaming. Perfect for quick breaks!",
      author: "Alex Chen, Designer"
    },
    {
      quote: "Finally, games that respect your time. Brilliant haptic feedback.",
      author: "Sarah Wilson, Developer"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="gradient-orbit absolute inset-0" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  We create and ship{" "}
                  <span className="text-brand-400 brand-glow">apps</span>.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Small, focused, and fast. Games, AI, lifestyle, and tools.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-400 text-primary-foreground">
                  <Link to="/products" className="flex items-center gap-2">
                    See products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/updates">Follow updates</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-brand-500/10 flex items-center justify-center">
                  <BrandLogo className="h-32 w-32" glowStrength="strong" />
                </div>
                <div className="absolute inset-0 rounded-full border border-brand-500/30 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      {featuredProduct && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Now Available
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our first release brings arcade gaming to your pocket with carefully crafted experiences.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <ProductCard product={featuredProduct} featured />
            </div>
          </div>
        </section>
      )}

      {/* Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Download className="h-5 w-5 text-brand-400 mr-2" />
                <span className="text-2xl font-mono font-bold text-foreground">
                  {metricsData.downloads}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Downloads</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-5 w-5 text-brand-400 mr-2" />
                <span className="text-2xl font-mono font-bold text-foreground">
                  {metricsData.countries}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Package className="h-5 w-5 text-brand-400 mr-2" />
                <span className="text-2xl font-mono font-bold text-foreground">
                  {metricsData.releases}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Releases</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-brand-400 mr-2" />
                <span className="text-2xl font-mono font-bold text-foreground">
                  {metricsData.rating}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What's Next
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building the next generation of focused, delightful apps across AI, lifestyle, and tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/roadmap" className="flex items-center gap-2">
                View full roadmap
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What People Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm font-medium text-foreground">
                    — {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-brand-700/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to know when we ship?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified about new releases, updates, and behind-the-scenes content from our tiny studio.
          </p>
          <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-400">
            <Link to="/updates">Subscribe to Updates</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Mock blog posts data
const posts = [
  {
    id: "quarcade-v12-release",
    title: "QuarCade v1.2",
    excerpt: "We're excited to share the latest update to QuarCade.",
    date: "2025-10-15",
    readTime: "3 min read",
    category: "Release",
    slug: "quarcade-v12-release"
  },
  {
    id: "why-we-build-small",
    title: "Why We Build Small, Focused Apps",
    excerpt: "Our philosophy on creating apps that do one thing exceptionally well, and why we think the future belongs to focused tools.",
    date: "2025-09-15",
    readTime: "4 min read",
    category: "Philosophy", 
    slug: "why-we-build-small"
  }
];

const Updates = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock subscription - in real app would integrate with email service
    setIsSubscribed(true);
    setEmail("");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "release":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "development":
        return "bg-brand-500/20 text-brand-300 border-brand-500/30";
      case "philosophy":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "company":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Release notes, development insights, and behind-the-scenes content 
            from our tiny studio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="glass hover:glass-strong transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(post.category)}
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  {/* Read more button removed per request for specific posts */}
                </CardContent>
              </Card>
            ))}

            {/* Load more */}
            <div className="text-center pt-8">
              <Button variant="outline">
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter subscription */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-brand-400" />
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Get notified about new releases, updates, and insights from our team.
                    </p>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-400">
                      Subscribe
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <div className="text-2xl mb-2">🎉</div>
                    <p className="text-sm text-muted-foreground">
                      Thanks for subscribing! You'll hear from us soon.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Release", "Development", "Philosophy", "Company"].map((category) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{category}</span>
                    <Badge variant="outline" className="text-xs">
                      {posts.filter(p => p.category === category).length}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent products */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Our Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🎮</span>
                  <div>
                    <p className="font-medium text-sm">QuarCade</p>
                    <p className="text-xs text-muted-foreground">Available now</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📝</span>
                  <div>
                    <p className="font-medium text-sm">Upcoming app</p>
                    <p className="text-xs text-muted-foreground">Coming soon</p>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full mt-4">
                  <Link to="/products">
                    View All Products
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
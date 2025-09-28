import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Import data
import productsData from "@/data/products.json";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const statusColors = {
    "Released": "bg-green-500/20 text-green-300 border-green-500/30",
    "In Progress": "bg-brand-500/20 text-brand-300 border-brand-500/30",
    "Beta": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl" role="img" aria-label={product.name}>
                  {product.icon}
                </span>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">
                      {product.type}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={statusColors[product.status as keyof typeof statusColors] || ""}
                    >
                      {product.status}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground">
                {product.summary}
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                About
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Features
              </h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-brand-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platforms */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Platforms
              </h2>
              <div className="flex gap-2">
                {product.platforms.map((platform) => (
                  <Badge key={platform} variant="outline">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download/Action Card */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-center">
                  {product.status === "Released" ? "Get the App" : "Coming Soon"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.status === "Released" && product.appStoreUrl ? (
                  <>
                    <Button asChild className="w-full" size="lg">
                      <a 
                        href={product.appStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download on App Store
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Free download with optional in-app purchases
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">🚀</div>
                      <p className="text-muted-foreground">
                        This product is currently in development. 
                        Follow our updates to be notified when it launches.
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/updates">
                        Follow Updates
                      </Link>
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Product Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="text-foreground">{product.category}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge 
                    variant="outline" 
                    className={statusColors[product.status as keyof typeof statusColors] || ""}
                  >
                    {product.status}
                  </Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platforms</span>
                  <span className="text-foreground">
                    {product.platforms.join(", ")}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
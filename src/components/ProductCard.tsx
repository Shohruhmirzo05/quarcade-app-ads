import { Link } from "react-router-dom";
import { ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  slug: string;
  type: string;
  status: string;
  summary: string;
  platforms: string[];
  icon: string;
  appStoreUrl?: string;
}

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const statusColors = {
    "Released": "bg-green-500/20 text-green-300 border-green-500/30",
    "In Progress": "bg-brand-500/20 text-brand-300 border-brand-500/30",
    "Beta": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  };

  return (
    <Card className={`glass transition-all hover:glass-strong group ${featured ? 'ring-1 ring-brand-500/30' : ''}`}>
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <span className="text-2xl" role="img" aria-label={product.name}>
            {product.icon}
          </span>
          <Badge 
            variant="outline" 
            className={statusColors[product.status as keyof typeof statusColors] || ""}
          >
            {product.status}
          </Badge>
        </div>
        <div>
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-brand-400 transition-colors">
            {product.name}
          </CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary" className="text-xs">
              {product.type}
            </Badge>
            {product.platforms.map((platform) => (
              <Badge key={platform} variant="outline" className="text-xs">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground">
          {product.summary}
        </CardDescription>
        
        <div className="flex flex-col gap-2">
          {product.status === "Released" && product.appStoreUrl ? (
            <Button asChild className="w-full">
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
          ) : (
            <Button asChild variant="outline" className="w-full">
              <Link to={`/products/${product.slug}`} className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Learn More
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
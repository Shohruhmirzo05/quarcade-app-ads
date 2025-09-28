import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

// Import data
import productsData from "@/data/products.json";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || product.status === selectedStatus;
    const matchesType = selectedType === "all" || product.type === selectedType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const uniqueStatuses = [...new Set(productsData.map(p => p.status))];
  const uniqueTypes = [...new Set(productsData.map(p => p.type))];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Focused apps and games designed to do one thing exceptionally well. 
            From pocket arcade games to AI-powered productivity tools.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={selectedStatus === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedStatus("all")}
            >
              All Status
            </Button>
            {uniqueStatuses.map((status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("all")}
            >
              All Types
            </Button>
            {uniqueTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-mono font-bold text-brand-400">
                {productsData.filter(p => p.status === "Released").length}
              </h3>
              <p className="text-muted-foreground">Released</p>
            </div>
            <div>
              <h3 className="text-2xl font-mono font-bold text-brand-400">
                {productsData.filter(p => p.status === "In Progress").length}
              </h3>
              <p className="text-muted-foreground">In Development</p>
            </div>
            <div>
              <h3 className="text-2xl font-mono font-bold text-brand-400">
                {uniqueTypes.length}
              </h3>
              <p className="text-muted-foreground">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
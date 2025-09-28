import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Code, Gamepad2, Smartphone, Wrench } from "lucide-react";

// Import data
import roadmapData from "@/data/roadmap.json";

const Roadmap = () => {
  const getAreaIcon = (area: string) => {
    switch (area.toLowerCase()) {
      case "game":
        return <Gamepad2 className="h-4 w-4" />;
      case "ai":
        return <Code className="h-4 w-4" />;
      case "lifestyle":
        return <Smartphone className="h-4 w-4" />;  
      case "tool":
        return <Wrench className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "bg-brand-500/20 text-brand-300 border-brand-500/30";
      case "planning":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "research":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "concept":
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
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
            Product Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey ahead. From shipping polished products to exploring new ideas 
            that push the boundaries of what's possible.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {roadmapData.quarters.map((quarter, quarterIndex) => (
            <div key={quarter.id} className="relative">
              {/* Timeline connector */}
              {quarterIndex < roadmapData.quarters.length - 1 && (
                <div className="absolute left-6 top-24 w-px h-12 bg-border hidden md:block" />
              )}

              {/* Quarter header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 border-2 border-brand-500 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {quarter.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {quarter.period}
                  </p>
                </div>
              </div>

              {/* Items grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 md:ml-16">
                {quarter.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="glass hover:glass-strong transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          {getAreaIcon(item.area)}
                          <CardTitle className="text-lg">
                            {item.title}
                          </CardTitle>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={getStatusColor(item.status)}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.note}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {item.area}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 glass rounded-2xl">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            A Living Document
          </h3>
          <p className="text-muted-foreground">
            This roadmap represents our current thinking and priorities. As a small team, 
            we stay flexible and adjust based on user feedback, technical discoveries, 
            and new opportunities. Dates are estimates, not promises.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
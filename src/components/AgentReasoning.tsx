import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface ReasoningStep {
  id: string;
  step: string;
  description: string;
  status: "completed" | "active" | "pending";
  timestamp: Date;
  confidence?: number;
}

const AgentReasoning = () => {
  const [reasoningSteps, setReasoningSteps] = useState<ReasoningStep[]>([
    {
      id: "1",
      step: "Query Analysis",
      description: "Analyzing user query for pharmaceutical context and intent",
      status: "completed",
      timestamp: new Date(Date.now() - 3000),
      confidence: 95,
    },
    {
      id: "2",
      step: "Knowledge Retrieval",
      description: "Searching pharmaceutical databases and research papers",
      status: "completed",
      timestamp: new Date(Date.now() - 2500),
      confidence: 88,
    },
    {
      id: "3",
      step: "Evidence Synthesis",
      description: "Combining information from multiple authoritative sources",
      status: "active",
      timestamp: new Date(Date.now() - 1000),
      confidence: 78,
    },
    {
      id: "4",
      step: "Response Generation",
      description: "Generating evidence-based response with proper citations",
      status: "pending",
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    // Simulate reasoning progress
    const interval = setInterval(() => {
      setReasoningSteps((prev) => {
        const activeIndex = prev.findIndex((step) => step.status === "active");
        if (activeIndex === -1) return prev;

        const updated = [...prev];

        // Complete current active step
        updated[activeIndex] = {
          ...updated[activeIndex],
          status: "completed",
          confidence: Math.floor(Math.random() * 20) + 80,
        };

        // Activate next step if exists
        if (activeIndex + 1 < updated.length) {
          updated[activeIndex + 1] = {
            ...updated[activeIndex + 1],
            status: "active",
            timestamp: new Date(),
          };
        }

        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case "active":
        return <Clock className="h-4 w-4 text-primary animate-spin" />;
      case "pending":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-primary/10 text-primary border-primary/20";
      case "active":
        return "bg-accent text-accent-foreground border-border";
      case "pending":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <Card className="h-full shadow-lg border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Brain className="h-5 w-5 text-primary" />
          <span>Agent Reasoning</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="h-[calc(100%-60px)]">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {reasoningSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-4 rounded-lg border transition-all duration-300 ${
                  step.status === "active"
                    ? "bg-accent border-border shadow-md"
                    : step.status === "completed"
                    ? "bg-primary/5 border-primary/20"
                    : "bg-muted/50 border-border"
                }`}
              >
                {/* Connection Line */}
                {index < reasoningSteps.length - 1 && (
                  <div className="absolute left-7 top-12 w-0.5 h-8 bg-border"></div>
                )}

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(step.status)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">
                        {step.step}
                      </h4>
                      <Badge
                        className={`text-xs ${getStatusColor(step.status)}`}
                      >
                        {step.status.toUpperCase()}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">
                      {step.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{step.timestamp.toLocaleTimeString()}</span>
                      {step.confidence && (
                        <span className="flex items-center space-x-1">
                          <span>Confidence:</span>
                          <span className="font-medium text-primary">
                            {step.confidence}%
                          </span>
                        </span>
                      )}
                    </div>

                    {step.status === "active" && (
                      <div className="mt-2">
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div
                            className="bg-primary h-1.5 rounded-full animate-pulse"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Current Reasoning Context */}
            <div className="mt-6 p-4 bg-accent border border-border rounded-lg">
              <h5 className="font-medium text-accent-foreground mb-2">
                Current Context
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Domain:</span>
                  <span className="font-medium">Pharmaceutical Research</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Query Type:</span>
                  <span className="font-medium">Clinical Information</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Sources Retrieved:
                  </span>
                  <span className="font-medium">3 documents</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Confidence Level:
                  </span>
                  <span className="font-medium text-primary">High (88%)</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AgentReasoning;

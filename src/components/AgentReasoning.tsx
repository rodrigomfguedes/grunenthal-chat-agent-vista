
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface ReasoningStep {
  id: string;
  step: string;
  description: string;
  status: 'completed' | 'active' | 'pending';
  timestamp: Date;
  confidence?: number;
}

const AgentReasoning = () => {
  const [reasoningSteps, setReasoningSteps] = useState<ReasoningStep[]>([
    {
      id: '1',
      step: 'Query Analysis',
      description: 'Analyzing user query for pharmaceutical context and intent',
      status: 'completed',
      timestamp: new Date(Date.now() - 3000),
      confidence: 95
    },
    {
      id: '2',
      step: 'Knowledge Retrieval',
      description: 'Searching pharmaceutical databases and research papers',
      status: 'completed',
      timestamp: new Date(Date.now() - 2500),
      confidence: 88
    },
    {
      id: '3',
      step: 'Evidence Synthesis',
      description: 'Combining information from multiple authoritative sources',
      status: 'active',
      timestamp: new Date(Date.now() - 1000),
      confidence: 78
    },
    {
      id: '4',
      step: 'Response Generation',
      description: 'Generating evidence-based response with proper citations',
      status: 'pending',
      timestamp: new Date(),
    }
  ]);

  useEffect(() => {
    // Simulate reasoning progress
    const interval = setInterval(() => {
      setReasoningSteps(prev => {
        const activeIndex = prev.findIndex(step => step.status === 'active');
        if (activeIndex === -1) return prev;

        const updated = [...prev];
        
        // Complete current active step
        updated[activeIndex] = {
          ...updated[activeIndex],
          status: 'completed',
          confidence: Math.floor(Math.random() * 20) + 80
        };

        // Activate next step if exists
        if (activeIndex + 1 < updated.length) {
          updated[activeIndex + 1] = {
            ...updated[activeIndex + 1],
            status: 'active',
            timestamp: new Date()
          };
        }

        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'active':
        return <Clock className="h-4 w-4 text-blue-600 animate-spin" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'active':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <Card className="h-full shadow-lg border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Brain className="h-5 w-5 text-purple-600" />
          <span>Agent Reasoning</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="h-[calc(100%-80px)]">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {reasoningSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-4 rounded-lg border transition-all duration-300 ${
                  step.status === 'active' 
                    ? 'bg-blue-50 border-blue-200 shadow-md' 
                    : step.status === 'completed'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                {/* Connection Line */}
                {index < reasoningSteps.length - 1 && (
                  <div className="absolute left-7 top-12 w-0.5 h-8 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(step.status)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{step.step}</h4>
                      <Badge className={`text-xs ${getStatusColor(step.status)}`}>
                        {step.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{step.timestamp.toLocaleTimeString()}</span>
                      {step.confidence && (
                        <span className="flex items-center space-x-1">
                          <span>Confidence:</span>
                          <span className="font-medium text-blue-600">
                            {step.confidence}%
                          </span>
                        </span>
                      )}
                    </div>
                    
                    {step.status === 'active' && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-blue-600 h-1.5 rounded-full animate-pulse" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Current Reasoning Context */}
            <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h5 className="font-medium text-purple-900 mb-2">Current Context</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-purple-700">Domain:</span>
                  <span className="font-medium">Pharmaceutical Research</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-700">Query Type:</span>
                  <span className="font-medium">Clinical Information</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-700">Sources Retrieved:</span>
                  <span className="font-medium">3 documents</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-700">Confidence Level:</span>
                  <span className="font-medium text-green-600">High (88%)</span>
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

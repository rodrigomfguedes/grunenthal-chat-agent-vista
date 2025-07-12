
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, FileText, ExternalLink } from "lucide-react";

interface Document {
  id: string;
  title: string;
  source: string;
  relevance: number;
  excerpt: string;
  type: 'research' | 'clinical' | 'regulatory';
  date: string;
}

const sampleDocuments: Document[] = [
  {
    id: '1',
    title: 'Novel Pain Management Compounds in Phase III Trials',
    source: 'Journal of Pharmaceutical Sciences',
    relevance: 95,
    excerpt: 'This comprehensive study evaluates the efficacy and safety profile of next-generation analgesic compounds, focusing on non-opioid mechanisms for chronic pain management...',
    type: 'research',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'EMA Guidelines for Analgesic Drug Development',
    source: 'European Medicines Agency',
    relevance: 88,
    excerpt: 'Updated regulatory framework for the development and approval of pain management therapeutics, including new safety requirements and efficacy endpoints...',
    type: 'regulatory',
    date: '2023-11-20'
  },
  {
    id: '3',
    title: 'Clinical Trial Results: GTH-001 vs Standard Care',
    source: 'New England Journal of Medicine',
    relevance: 92,
    excerpt: 'Randomized controlled trial comparing GTH-001 with current standard of care in 1,200 patients with chronic neuropathic pain. Primary endpoint met with statistical significance...',
    type: 'clinical',
    date: '2024-02-28'
  }
];

const DocumentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDocument = () => {
    setCurrentIndex((prev) => (prev + 1) % sampleDocuments.length);
  };

  const prevDocument = () => {
    setCurrentIndex((prev) => (prev - 1 + sampleDocuments.length) % sampleDocuments.length);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'research': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'clinical': return 'bg-green-100 text-green-800 border-green-200';
      case 'regulatory': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const currentDoc = sampleDocuments[currentIndex];

  return (
    <Card className="h-full shadow-lg border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <FileText className="h-5 w-5 text-blue-600" />
            <span>Retrieved Documents</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevDocument}
              disabled={sampleDocuments.length <= 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-500 min-w-[60px] text-center">
              {currentIndex + 1} of {sampleDocuments.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextDocument}
              disabled={sampleDocuments.length <= 1}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="h-[calc(100%-80px)]">
        <div className="h-full flex flex-col">
          {/* Document Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <Badge className={getTypeColor(currentDoc.type)}>
                {currentDoc.type.toUpperCase()}
              </Badge>
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium text-green-600">
                  {currentDoc.relevance}% match
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-1 leading-tight">
              {currentDoc.title}
            </h3>
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{currentDoc.source}</span>
              <span>{new Date(currentDoc.date).toLocaleDateString()}</span>
            </div>
          </div>
          
          {/* Document Content */}
          <ScrollArea className="flex-1">
            <div className="pr-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {currentDoc.excerpt}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-medium text-gray-600">Key findings:</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Significant reduction in pain scores (p&lt;0.001)
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Improved quality of life metrics
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    Favorable safety profile maintained
                  </li>
                </ul>
              </div>
            </div>
          </ScrollArea>
          
          {/* Document Actions */}
          <div className="pt-3 mt-3 border-t border-gray-200">
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Full Document
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentCarousel;

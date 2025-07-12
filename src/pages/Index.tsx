
import ChatInterface from "@/components/ChatInterface";
import DocumentCarousel from "@/components/DocumentCarousel";
import AgentReasoning from "@/components/AgentReasoning";
import UserHeader from "@/components/UserHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <UserHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
          {/* Main Chat Interface - Takes up 2/3 of the space */}
          <div className="lg:col-span-2">
            <ChatInterface />
          </div>
          
          {/* Right Panel - Split between Documents and Reasoning */}
          <div className="flex flex-col gap-6">
            {/* Document Carousel */}
            <div className="flex-1">
              <DocumentCarousel />
            </div>
            
            {/* Agent Reasoning */}
            <div className="flex-1">
              <AgentReasoning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

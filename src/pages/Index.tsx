
import ChatInterface from "@/components/ChatInterface";
import DocumentCarousel from "@/components/DocumentCarousel";
import AgentReasoning from "@/components/AgentReasoning";
import UserHeader from "@/components/UserHeader";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-[800px] bg-gradient-to-br from-green-50 to-white flex flex-col">
      <UserHeader />
      
      <div className="flex-1 container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
          {/* Main Chat Interface - Takes up 2/3 of the space */}
          <div className="lg:col-span-2">
            <ChatInterface />
          </div>
          
          {/* Right Panel - Split between Documents and Reasoning */}
          <div className="flex flex-col gap-4">
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
      
      <Footer />
    </div>
  );
};

export default Index;

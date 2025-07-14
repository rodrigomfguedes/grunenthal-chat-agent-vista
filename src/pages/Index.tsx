import ChatInterface from "@/components/ChatInterface";
import DocumentCarousel from "@/components/DocumentCarousel";
import AgentReasoning from "@/components/AgentReasoning";
import UserHeader from "@/components/UserHeader";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-green-50 to-white flex flex-col">
      <UserHeader />

      <div className="flex-1 px-4 py-4">
        <div className="flex gap-4 justify-center">
          {/* Main Chat Interface - Takes up 2/3 of the space */}
          <div className="lg:col-span-2 w-[700px]">
            <ChatInterface />
          </div>

          {/* Document Carousel
          <div className="h-[700px] w-[450px]">
            <DocumentCarousel />
          </div> */}

          {/* Agent Reasoning
          <div className="h-[700px] w-[450px]">
            <AgentReasoning />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;

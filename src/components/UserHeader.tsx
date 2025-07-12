
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const UserHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 ring-2 ring-blue-200">
            <AvatarImage 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
              alt="Profile" 
            />
            <AvatarFallback className="bg-blue-600 text-white">DS</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-900">
              Data Scientist Candidate
            </h1>
            <p className="text-sm text-gray-600">
              Grunenthal Pharma Interview - Agent Chatbot Interface
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              AI Agent
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Active
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;

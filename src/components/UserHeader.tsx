import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const UserHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-green-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 ring-2 ring-primary">
            <AvatarImage src="./rodrigo.png" alt="Profile" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              DS
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-xl font-semibold text-foreground">
              Rodrigo Guedes - Senior Data Scientist Candidate
            </h1>
            <p className="text-sm text-muted-foreground">
              Grunenthal Pharma Interview - Agent Chatbot Interface
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Badge
              variant="outline"
              className="bg-accent text-accent-foreground border-border"
            >
              AI Agent
            </Badge>
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Active
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;

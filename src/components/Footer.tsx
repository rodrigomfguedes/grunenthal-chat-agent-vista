
const Footer = () => {
  return (
    <footer className="bg-white border-t border-green-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div>
            © 2024 Grünenthal Pharma - Agent Chatbot Interface
          </div>
          <div className="flex items-center space-x-4">
            <span>Data Scientist Interview</span>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>AI-Powered Research Assistant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

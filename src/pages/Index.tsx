import { useEffect } from "react";
import EVMMachine from "@/components/EVMMachine";

const Index = () => {
  useEffect(() => {
    document.title = "Electronic Voting Machine - Cast Your Vote";
  }, []);

  return (
    <main className="min-h-screen bg-background py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Democracy in Action
          </h2>
          <p className="text-muted-foreground">
            Your voice matters. Cast your vote securely.
          </p>
        </div>
        
        <EVMMachine />
        
        <div className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <p>
            This electronic voting system ensures fair and transparent elections. 
            Each vote is recorded securely and anonymously.
    
          </p>
          <p>Developed By Nikhilc👨‍💻</p>
        </div>
      </div>
    </main>
  );
};

export default Index;

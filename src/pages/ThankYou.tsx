import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank You - Vote Submitted";
  }, []);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 animate-in fade-in duration-500">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-4">
          <CheckCircle className="w-16 h-16 text-accent" strokeWidth={2} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Thank you for voting!
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Your vote has been recorded successfully. Democracy thrives with your participation.
        </p>
        <div className="pt-6">
          <a 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Return to Home
          </a>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain } from "lucide-react";

interface NameEntryProps {
  onStart: (name: string) => void;
}

const NameEntry = ({ onStart }: NameEntryProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-hover mb-6 shadow-[var(--shadow-medium)] animate-scale-in">
            <Brain className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent mb-3">
            Quiz Master
          </h1>
          <p className="text-muted-foreground text-lg">
            Test your knowledge across multiple categories
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-[var(--shadow-soft)] p-8 border border-border/50 backdrop-blur-sm animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                Enter your name to begin
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-lg border-border/50 focus:border-primary transition-all duration-300"
                autoFocus
              />
            </div>

            <Button 
              type="submit" 
              disabled={!name.trim()}
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary-hover hover:shadow-[var(--shadow-medium)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Quiz
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground text-center">
              You'll receive <span className="font-semibold text-primary">5 unique questions</span> tailored just for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameEntry;

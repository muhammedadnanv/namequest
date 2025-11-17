import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Award, Target } from "lucide-react";

interface ResultsProps {
  userName: string;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Results = ({ userName, score, totalQuestions, onRestart }: ResultsProps) => {
  const percentage = (score / totalQuestions) * 100;

  const getPerformanceMessage = () => {
    if (percentage === 100) {
      return {
        title: "Perfect Score!",
        message: "Outstanding! You're a true quiz master!",
        icon: Trophy,
        color: "text-yellow-500"
      };
    } else if (percentage >= 80) {
      return {
        title: "Excellent!",
        message: "Great job! You really know your stuff!",
        icon: Award,
        color: "text-success"
      };
    } else if (percentage >= 60) {
      return {
        title: "Good Work!",
        message: "Nice effort! Keep learning and improving!",
        icon: Target,
        color: "text-primary"
      };
    } else {
      return {
        title: "Keep Trying!",
        message: "Don't give up! Practice makes perfect!",
        icon: Target,
        color: "text-muted-foreground"
      };
    }
  };

  const performance = getPerformanceMessage();
  const PerformanceIcon = performance.icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 p-4">
      <div className="w-full max-w-lg animate-fade-in">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-medium)] p-8 border border-border/50 backdrop-blur-sm">
          <div className="text-center space-y-6">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-hover shadow-[var(--shadow-medium)] animate-scale-in ${performance.color}`}>
              <PerformanceIcon className="w-12 h-12 text-primary-foreground" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-card-foreground">
                {performance.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {performance.message}
              </p>
            </div>

            <div className="py-8 space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Hi, {userName}!</p>
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  {score}/{totalQuestions}
                </div>
                <p className="text-lg text-muted-foreground mt-2">
                  {percentage.toFixed(0)}% Correct
                </p>
              </div>

              <div className="w-full bg-secondary rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary-hover transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button 
                onClick={onRestart}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary-hover hover:shadow-[var(--shadow-medium)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Try Again
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Enter a new name to get a different set of questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

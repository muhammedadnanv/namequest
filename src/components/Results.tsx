import { Button } from "@/components/ui/button";
import { Trophy, Award, Target, CheckCircle2, XCircle } from "lucide-react";
import { Question } from "@/data/questions";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface StudentInfo {
  name: string;
  phone: string;
  class: string;
}

interface ResultsProps {
  studentInfo: StudentInfo;
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: number[];
  onRestart: () => void;
}

const Results = ({ studentInfo, score, totalQuestions, questions, userAnswers, onRestart }: ResultsProps) => {
  const { toast } = useToast();
  const percentage = (score / totalQuestions) * 100;

  useEffect(() => {
    const saveResults = async () => {
      try {
        // Create student record
        const { data: student, error: studentError } = await supabase
          .from("students")
          .insert({
            name: studentInfo.name,
            phone_number: studentInfo.phone,
            class: studentInfo.class,
          })
          .select()
          .single();

        if (studentError) throw studentError;

        // Prepare answers data
        const answersData = questions.map((q, index) => ({
          question: q.question,
          category: q.category,
          options: q.options,
          correctAnswer: q.correctAnswer,
          userAnswer: userAnswers[index],
          isCorrect: userAnswers[index] === q.correctAnswer,
        }));

        // Save quiz results
        const { error: resultsError } = await supabase
          .from("quiz_results")
          .insert({
            student_id: student.id,
            student_name: studentInfo.name,
            phone_number: studentInfo.phone,
            class: studentInfo.class,
            answers: answersData,
            score: score,
            total_questions: totalQuestions,
          });

        if (resultsError) throw resultsError;

        toast({
          title: "Results Saved",
          description: "Your quiz results have been recorded successfully.",
        });
      } catch (error) {
        console.error("Error saving results:", error);
        toast({
          title: "Error",
          description: "Failed to save results. Please contact the administrator.",
          variant: "destructive",
        });
      }
    };

    saveResults();
  }, [studentInfo, score, totalQuestions, questions, userAnswers, toast]);

  const getPerformanceMessage = () => {
    if (percentage === 100) {
      return {
        title: "Perfect Score! 🎉",
        message: "Congratulations! You answered all questions correctly!",
        icon: Trophy,
        color: "text-yellow-500",
      };
    } else if (percentage >= 80) {
      return {
        title: "Excellent Work! 🌟",
        message: "Outstanding performance! You really know your stuff!",
        icon: Award,
        color: "text-blue-500",
      };
    } else if (percentage >= 60) {
      return {
        title: "Good Job! 👍",
        message: "Well done! You have a solid understanding.",
        icon: Target,
        color: "text-green-500",
      };
    } else {
      return {
        title: "Keep Learning! 📚",
        message: "Don't give up! Review the answers and try again.",
        icon: Target,
        color: "text-orange-500",
      };
    }
  };

  const performance = getPerformanceMessage();
  const Icon = performance.icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 p-4">
      <div className="w-full max-w-4xl space-y-6">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-large)] p-8 border border-border/50 backdrop-blur-sm animate-fade-in">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 ${performance.color}`}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold mb-2">{performance.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{performance.message}</p>
            
            <div className="space-y-2 mb-6">
              <p className="text-xl font-semibold">{studentInfo.name}</p>
              <p className="text-muted-foreground">Class: {studentInfo.class}</p>
              <p className="text-muted-foreground">Phone: {studentInfo.phone}</p>
            </div>

            <div className="flex justify-center items-center gap-8 mb-6">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">
                  {score}/{totalQuestions}
                </div>
                <div className="text-sm text-muted-foreground">Questions Correct</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">{percentage.toFixed(0)}%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>

            <div className="w-full bg-secondary/30 rounded-full h-4 mb-8">
              <div
                className="bg-primary h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <Button onClick={onRestart} className="w-full sm:w-auto px-8 h-12 text-base font-semibold">
              Try Again
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-[var(--shadow-large)] p-8 border border-border/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Answer Review</h2>
          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div key={index} className="border border-border/50 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-4">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">Question {index + 1}</span>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {question.category}
                        </span>
                      </div>
                      <p className="font-medium mb-3">{question.question}</p>
                      
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === optIndex;
                          const isCorrectAnswer = question.correctAnswer === optIndex;
                          
                          let bgColor = "bg-background/50";
                          if (isCorrectAnswer) {
                            bgColor = "bg-green-500/10 border-green-500";
                          } else if (isUserAnswer && !isCorrect) {
                            bgColor = "bg-red-500/10 border-red-500";
                          }

                          return (
                            <div
                              key={optIndex}
                              className={`p-3 rounded-md border ${bgColor}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">{String.fromCharCode(65 + optIndex)}.</span>
                                <span>{option}</span>
                                {isCorrectAnswer && (
                                  <span className="ml-auto text-xs text-green-600 font-semibold">Correct</span>
                                )}
                                {isUserAnswer && !isCorrect && (
                                  <span className="ml-auto text-xs text-red-600 font-semibold">Your answer</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

import { useState } from "react";
import { Question } from "@/data/questions";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import Results from "./Results";

interface QuizProps {
  questions: Question[];
  userName: string;
  onRestart: () => void;
}

const Quiz = ({ questions, userName, onRestart }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    // Check if answer is correct
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Immediately advance to next question or show results
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  if (showResults) {
    return (
      <Results 
        userName={userName}
        score={score}
        totalQuestions={totalQuestions}
        onRestart={onRestart}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 p-4">
      <div className="w-full max-w-3xl">
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-muted-foreground">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
          </div>
          <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>
    </div>
  );
};

export default Quiz;

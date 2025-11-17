import { useState } from "react";
import NameEntry from "@/components/NameEntry";
import Quiz from "@/components/Quiz";
import { getQuestionsForName, Question } from "@/data/questions";

const Index = () => {
  const [userName, setUserName] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = (name: string) => {
    setUserName(name);
    const selectedQuestions = getQuestionsForName(name);
    setQuestions(selectedQuestions);
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setUserName("");
    setQuestions([]);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return <NameEntry onStart={handleStart} />;
  }

  return (
    <Quiz 
      questions={questions}
      userName={userName}
      onRestart={handleRestart}
    />
  );
};

export default Index;

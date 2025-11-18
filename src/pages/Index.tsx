import { useState } from "react";
import NameEntry from "@/components/NameEntry";
import Quiz from "@/components/Quiz";
import { getQuestionsForName, Question } from "@/data/questions";

interface StudentInfo {
  name: string;
  phone: string;
  class: string;
}

const Index = () => {
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = (info: StudentInfo) => {
    setStudentInfo(info);
    const selectedQuestions = getQuestionsForName(info.name);
    setQuestions(selectedQuestions);
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setStudentInfo(null);
    setQuestions([]);
    setQuizStarted(false);
  };

  if (!quizStarted || !studentInfo) {
    return <NameEntry onStart={handleStart} />;
  }

  return (
    <Quiz 
      questions={questions}
      studentInfo={studentInfo}
      onRestart={handleRestart}
    />
  );
};

export default Index;

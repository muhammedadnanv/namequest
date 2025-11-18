import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface QuizResult {
  id: string;
  student_name: string;
  phone_number: string;
  class: string;
  quiz_date: string;
  score: number;
  total_questions: number;
  percentage: number;
  answers: any;
}

interface QuizResultsTableProps {
  onRefresh: () => void;
}

const QuizResultsTable = ({ onRefresh }: QuizResultsTableProps) => {
  const { toast } = useToast();
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedResult, setSelectedResult] = useState<QuizResult | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("quiz_results")
        .select("*")
        .order("quiz_date", { ascending: false });

      if (error) throw error;
      setResults(data || []);
    } catch (error) {
      console.error("Error fetching results:", error);
      toast({
        title: "Error",
        description: "Failed to load quiz results",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchResults();
    onRefresh();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getPerformanceBadge = (percentage: number) => {
    if (percentage === 100) return <Badge className="bg-yellow-500">Perfect</Badge>;
    if (percentage >= 80) return <Badge className="bg-blue-500">Excellent</Badge>;
    if (percentage >= 60) return <Badge className="bg-green-500">Good</Badge>;
    return <Badge variant="secondary">Needs Improvement</Badge>;
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Quiz Results</CardTitle>
            <Button onClick={handleRefresh} variant="outline" size="sm" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No quiz results found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.id}>
                      <TableCell className="font-medium">{result.student_name}</TableCell>
                      <TableCell>{result.class}</TableCell>
                      <TableCell>{result.phone_number}</TableCell>
                      <TableCell>{formatDate(result.quiz_date)}</TableCell>
                      <TableCell>
                        {result.score}/{result.total_questions}
                      </TableCell>
                      <TableCell>{result.percentage.toFixed(0)}%</TableCell>
                      <TableCell>{getPerformanceBadge(result.percentage)}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedResult(result);
                            setShowDetails(true);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Quiz Details - {selectedResult?.student_name}</DialogTitle>
          </DialogHeader>
          {selectedResult && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/20 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Class</p>
                  <p className="font-semibold">{selectedResult.class}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">{selectedResult.phone_number}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold">{formatDate(selectedResult.quiz_date)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Score</p>
                  <p className="font-semibold">
                    {selectedResult.score}/{selectedResult.total_questions} ({selectedResult.percentage.toFixed(0)}%)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Answers</h3>
                {selectedResult.answers.map((answer: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Badge variant={answer.isCorrect ? "default" : "destructive"}>
                        {answer.isCorrect ? "Correct" : "Incorrect"}
                      </Badge>
                      <Badge variant="outline">{answer.category}</Badge>
                    </div>
                    <p className="font-medium mb-2">Q{index + 1}: {answer.question}</p>
                    <div className="space-y-1 ml-4">
                      {answer.options.map((option: string, optIndex: number) => {
                        const isCorrect = optIndex === answer.correctAnswer;
                        const isUserAnswer = optIndex === answer.userAnswer;
                        return (
                          <div
                            key={optIndex}
                            className={`p-2 rounded ${
                              isCorrect
                                ? "bg-green-500/10 border border-green-500"
                                : isUserAnswer
                                ? "bg-red-500/10 border border-red-500"
                                : "bg-background/50"
                            }`}
                          >
                            {String.fromCharCode(65 + optIndex)}. {option}
                            {isCorrect && <span className="ml-2 text-xs text-green-600 font-semibold">(Correct)</span>}
                            {isUserAnswer && !isCorrect && <span className="ml-2 text-xs text-red-600 font-semibold">(User's answer)</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizResultsTable;

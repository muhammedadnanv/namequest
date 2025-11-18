import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, BookOpen, TrendingUp, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import QuizResultsTable from "./QuizResultsTable";

interface AdminDashboardProps {
  onLogout: () => void;
}

interface Stats {
  totalStudents: number;
  totalQuizzes: number;
  averageScore: number;
  perfectScores: number;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const { toast } = useToast();
  const [stats, setStats] = useState<Stats>({
    totalStudents: 0,
    totalQuizzes: 0,
    averageScore: 0,
    perfectScores: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: results, error } = await supabase
        .from("quiz_results")
        .select("*");

      if (error) throw error;

      if (results) {
        const uniqueStudents = new Set(results.map(r => r.student_id)).size;
        const totalQuizzes = results.length;
        const avgScore = results.reduce((acc, r) => acc + r.score, 0) / totalQuizzes || 0;
        const perfectScores = results.filter(r => r.score === r.total_questions).length;

        setStats({
          totalStudents: uniqueStudents,
          totalQuizzes,
          averageScore: avgScore,
          perfectScores,
        });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
      toast({
        title: "Error",
        description: "Failed to load statistics",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Student Quiz Competition - Results & Analytics
            </p>
          </div>
          <Button onClick={onLogout} variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Students
              </CardTitle>
              <Users className="w-5 h-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalStudents}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Quiz Attempts
              </CardTitle>
              <BookOpen className="w-5 h-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalQuizzes}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Score
              </CardTitle>
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {stats.averageScore.toFixed(1)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Perfect Scores
              </CardTitle>
              <Trophy className="w-5 h-5 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.perfectScores}</div>
            </CardContent>
          </Card>
        </div>

        <QuizResultsTable onRefresh={fetchStats} />
      </div>
    </div>
  );
};

export default AdminDashboard;

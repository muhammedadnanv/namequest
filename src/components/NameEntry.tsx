import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface StudentInfo {
  name: string;
  phone: string;
  class: string;
}

interface NameEntryProps {
  onStart: (studentInfo: StudentInfo) => void;
}

const NameEntry = ({ onStart }: NameEntryProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.phone.trim() && formData.class.trim()) {
      onStart(formData);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-large)] p-8 border border-border/50 backdrop-blur-sm animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Student Quiz Competition
            </h1>
            <p className="text-muted-foreground">
              Enter your details to begin the quiz challenge
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="class">Class *</Label>
              <Input
                id="class"
                type="text"
                placeholder="Enter your class (e.g., 10th Grade)"
                value={formData.class}
                onChange={(e) => handleChange("class", e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold"
              disabled={!formData.name.trim() || !formData.phone.trim() || !formData.class.trim()}
            >
              Start Quiz
            </Button>

            <Button 
              type="button"
              variant="outline"
              onClick={() => navigate("/admin")}
              className="w-full h-12 text-base"
            >
              Teacher Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NameEntry;

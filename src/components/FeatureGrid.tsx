import { 
  Video, 
  Brain, 
  MessageSquare, 
  BookOpen, 
  Map, 
  FileText, 
  Briefcase, 
  HelpCircle, 
  Trophy 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Mockup Labs",
    description: "AI mock interviews with posture check, smart questions, and detailed feedback",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Aptitude Sprint",
    description: "5000+ questions in quantitative, verbal, and logical reasoning",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Campus Connect",
    description: "Chat space for students to discuss doubts, exams, and placements",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    title: "CourseHive",
    description: "Curated free courses on trending skills like web dev, AI, and more",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Map,
    title: "Roadmap",
    description: "AI guide from courses to career - what to learn, skip, and do",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: FileText,
    title: "Interview Decoded",
    description: "15,000+ role-wise interview questions for smart preparation",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Briefcase,
    title: "InternArena",
    description: "Daily verified internships and jobs, beginner-friendly opportunities",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: HelpCircle,
    title: "Syllabus Navigator",
    description: "AI chatbot active 24/7 for instant notes and doubt solving",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "HackArena",
    description: "Get all the latest hackathons and tech events details",
    gradient: "from-violet-500 to-purple-500",
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nine powerful tools designed to accelerate your learning and career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;

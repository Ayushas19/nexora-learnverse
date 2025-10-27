import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  BookMarked, 
  Video, 
  TrendingUp, 
  Star, 
  Award,
  LogOut,
  GraduationCap 
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth?mode=login");
        return;
      }

      setUser(session.user);

      // Fetch user profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      setProfile(profileData);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/auth?mode=login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const tierColors: Record<string, string> = {
    bronze: "from-orange-600 to-orange-400",
    silver: "from-gray-400 to-gray-200",
    gold: "from-yellow-500 to-yellow-300",
    platinum: "from-cyan-500 to-blue-500",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-4 border-primary/20 shadow-glow">
              <AvatarImage src={profile?.avatar_url} />
              <AvatarFallback className="text-2xl">
                {profile?.full_name?.[0] || user?.email?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">
                {profile?.full_name || "Student"}
              </h1>
              <p className="text-muted-foreground">@{profile?.username || "user"}</p>
              <Badge className={`mt-2 bg-gradient-to-r ${tierColors[profile?.tier || "bronze"]} text-white`}>
                {profile?.tier?.toUpperCase() || "BRONZE"} TIER
              </Badge>
            </div>
          </div>

          <Button 
            onClick={handleSignOut} 
            variant="outline"
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Trophy, label: "Total Points", value: profile?.total_points || 0, color: "text-yellow-500" },
            { icon: BookMarked, label: "Saved Notes", value: "12", color: "text-blue-500" },
            { icon: Video, label: "Saved Videos", value: "8", color: "text-purple-500" },
            { icon: Award, label: "Achievements", value: "5", color: "text-green-500" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { skill: "Web Development", progress: 75, color: "bg-blue-500" },
                { skill: "Data Structures", progress: 60, color: "bg-purple-500" },
                { skill: "Machine Learning", progress: 40, color: "bg-pink-500" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { title: "First Mock Interview", icon: "🎯", date: "2 days ago" },
                  { title: "100 Questions Solved", icon: "🧠", date: "5 days ago" },
                  { title: "Community Helper", icon: "💬", date: "1 week ago" },
                  { title: "Course Completed", icon: "📚", date: "2 weeks ago" },
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Video, label: "Start Mock Interview", gradient: "from-purple-500 to-pink-500" },
                { icon: BookMarked, label: "Practice Questions", gradient: "from-blue-500 to-cyan-500" },
                { icon: GraduationCap, label: "Browse Courses", gradient: "from-green-500 to-emerald-500" },
                { icon: Trophy, label: "View Hackathons", gradient: "from-orange-500 to-red-500" },
              ].map((action, idx) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={idx}
                    variant="outline"
                    className="h-auto flex-col gap-2 py-6 hover:shadow-hover transition-all"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-center">{action.label}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

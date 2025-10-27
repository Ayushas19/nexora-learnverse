import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      review: "NEXORA completely transformed my job search! The mock interviews with AI feedback helped me land my dream job at Google. The interview question bank is incredible!",
    },
    {
      name: "Raj Patel",
      role: "Data Scientist at Microsoft",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      review: "The Aptitude Sprint and Campus Connect features are game-changers. I improved my problem-solving skills and connected with amazing peers who helped me throughout my journey.",
    },
    {
      name: "Emily Chen",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5,
      review: "CourseHive's curated courses and the AI roadmap feature gave me clear direction. I went from beginner to landing my first dev job in 6 months. Highly recommend!",
    },
    {
      name: "Michael Torres",
      role: "ML Engineer at Amazon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 5,
      review: "The InternArena helped me find my first internship, which led to a full-time offer. The Syllabus Navigator was my 24/7 study buddy. Worth every second!",
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      rating: 5,
      review: "HackArena kept me updated with all hackathons, and the community notes feature saved me so much time. NEXORA is truly the all-in-one platform every student needs!",
    },
    {
      name: "David Kim",
      role: "Frontend Developer at Meta",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      rating: 5,
      review: "Interview Decoded's 15K+ questions covered everything I needed. The AI-powered features and community support made my preparation journey smooth and effective.",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">100K+ Students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about their success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-hover transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

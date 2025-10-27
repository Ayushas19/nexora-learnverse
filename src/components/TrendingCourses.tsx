import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

const TrendingCourses = () => {
  const courses = [
    {
      title: "Full Stack Web Development 2024",
      instructor: "Jonas Schmedtmann",
      rating: 4.9,
      students: "245K",
      duration: "63 hours",
      level: "Beginner",
      trending: true,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Machine Learning & AI Masterclass",
      instructor: "Andrew Ng",
      rating: 4.8,
      students: "892K",
      duration: "54 hours",
      level: "Intermediate",
      trending: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      tags: ["Python", "TensorFlow", "Deep Learning"],
    },
    {
      title: "Cloud Computing with AWS",
      instructor: "Stephane Maarek",
      rating: 4.7,
      students: "178K",
      duration: "32 hours",
      level: "Intermediate",
      trending: true,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      tags: ["AWS", "DevOps", "Cloud"],
    },
    {
      title: "Data Science & Analytics",
      instructor: "Jose Portilla",
      rating: 4.9,
      students: "567K",
      duration: "48 hours",
      level: "Beginner",
      trending: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Python", "Pandas", "Statistics"],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Hot Right Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Trending</span> Free Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most popular courses this month, handpicked for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <Card key={idx} className="group hover:shadow-hover transition-all overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {course.trending && (
                  <Badge className="absolute top-4 left-4 gradient-bg shadow-glow">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
                <Badge className="absolute top-4 right-4 bg-black/80 text-white">
                  FREE
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      by {course.instructor}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>

                <Button className="w-full gradient-bg shadow-glow hover:shadow-hover transition-all">
                  Enroll Now - Free
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Trending Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;

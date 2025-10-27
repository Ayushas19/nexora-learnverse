import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Bookmark, Download } from "lucide-react";

const VideoLecturesSection = () => {
  const [savedVideos, setSavedVideos] = useState<number[]>([]);

  const videos = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      channel: "Code Academy",
      duration: "12:45:30",
      views: "2.4M",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      notesCount: 234,
    },
    {
      id: 2,
      title: "Machine Learning A-Z: Hands-On Python",
      channel: "AI Masters",
      duration: "44:30:00",
      views: "1.8M",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      notesCount: 567,
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      channel: "CS Fundamentals",
      duration: "28:15:45",
      views: "3.2M",
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      notesCount: 892,
    },
  ];

  const toggleSave = (videoId: number) => {
    setSavedVideos((prev) =>
      prev.includes(videoId)
        ? prev.filter((id) => id !== videoId)
        : [...prev, videoId]
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Video Lectures</span> & Study Notes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch curated YouTube lectures and access community-uploaded handwritten notes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="group hover:shadow-hover transition-all overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="lg" className="gradient-bg shadow-glow rounded-full">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
                <Badge className="absolute top-2 right-2 bg-black/80 text-white">
                  {video.duration}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{video.channel}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">{video.views} views</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{video.rating}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    <Download className="w-3 h-3 mr-1" />
                    {video.notesCount} notes
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => toggleSave(video.id)}
                >
                  <Bookmark className={`w-4 h-4 mr-2 ${savedVideos.includes(video.id) ? 'fill-current' : ''}`} />
                  {savedVideos.includes(video.id) ? 'Saved' : 'Save'}
                </Button>
                <Button className="flex-1 gradient-bg">View Notes</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Explore All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoLecturesSection;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import VideoLecturesSection from "@/components/VideoLecturesSection";
import CoursesSection from "@/components/CoursesSection";
import TrendingCourses from "@/components/TrendingCourses";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <VideoLecturesSection />
      <TrendingCourses />
      <CoursesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;

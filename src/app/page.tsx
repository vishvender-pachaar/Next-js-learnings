import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <h1 className="text-center text-2xl">Chai aur Next</h1>
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChooseUs/>
       <MusicSchoolTestimonials/>
       <UpcomingWebinars/>
       <Instructors/>
       <Footer/>
    </main>
  );
}

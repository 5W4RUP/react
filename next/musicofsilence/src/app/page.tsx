import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-3xl text-center dark:text-white">Header</h1>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedStory from "@/components/FeaturedStory";
import TwoColumnFeature from "@/components/TwoColumnFeature";
import SeasonalExperiences from "@/components/SeasonalExperiences";
import WorldGrid from "@/components/WorldGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedStory />
        <TwoColumnFeature />
        <SeasonalExperiences />
        <WorldGrid />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

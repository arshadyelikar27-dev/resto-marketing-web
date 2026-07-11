import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ScrollTriggered } from "@/components/ui/stack-card";
import Journey from "@/components/Journey";
import Menu from "@/components/Menu";
import LetterSection from "@/components/LetterSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#131313", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <ScrollTriggered />
      <Journey />
      <Menu />
      <LetterSection />
      <Testimonials />
      <Footer />
    </main>
  );
}

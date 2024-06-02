import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner3one from "./components/Banner3one";
import Banner3two from "./components/Banner3two";
import Banner4 from "./components/Banner4";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <section className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      <Header />
      <HeroSection />
      <Banner2 />
      <Banner3 />
      <Banner3one />
      <Banner3two />
      <Faq />
      <Banner4 />
      <Footer />
    </section>
  );
}

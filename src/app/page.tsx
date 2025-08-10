import About from "@/components/About";
import Blogs from "@/components/blogs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Tours from "@/components/Tours";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Blogs />
      <Contact />
      <Footer />
      <Whatsapp />
    </main>
  );
}

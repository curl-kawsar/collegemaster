import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesDropdown from '../components/ServicesDropdown';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesDropdown />
      <Footer />
    </div>
  );
}
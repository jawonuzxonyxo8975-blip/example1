import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { JourneyStyles } from './components/JourneyStyles';
import { FeaturedTours } from './components/FeaturedTours';
import { Heritage } from './components/Heritage';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <JourneyStyles />
        <FeaturedTours />
        <Heritage />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

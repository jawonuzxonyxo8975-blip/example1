import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { MemoryEngine } from './components/MemoryEngine';
import { Categories } from './components/Categories';
import { CommunityStories } from './components/CommunityStories';
import { SocialSharing } from './components/SocialSharing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bone-50">
      <Header />
      <main>
        {/* Hero - Full screen cinematic brand introduction */}
        <Hero />

        {/* Philosophy - Brand manifesto and emotional positioning */}
        <section id="philosophy">
          <Philosophy />
        </section>

        {/* Memory Engine - How AI + Artists work together */}
        <section id="memory-engine">
          <MemoryEngine />
        </section>

        {/* Categories - Emotion-based portrait categories */}
        <section id="categories">
          <Categories />
        </section>

        {/* Community Stories - User stories and testimonials */}
        <section id="community">
          <CommunityStories />
        </section>

        {/* Social Sharing - Memory pages and community interaction */}
        <section id="social">
          <SocialSharing />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

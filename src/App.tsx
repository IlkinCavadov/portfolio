import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Stack } from './sections/Stack';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

const App = () => (
  <div className="min-h-screen bg-bg font-sans text-tx-2 transition-colors duration-200">
    <Navbar />
    <main id="top" className="mx-auto max-w-[1080px] px-[clamp(20px,5vw,40px)]">
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;

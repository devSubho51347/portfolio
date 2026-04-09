import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import WhoIHelp from '@/components/WhoIHelp';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';

export default function Home() {
  // Read images from the public/sequence directory
  const sequenceDir = path.join(process.cwd(), 'public', 'sequence');
  let imageUrls: string[] = [];

  try {
    const files = fs.readdirSync(sequenceDir);
    imageUrls = files
      .filter((file) => file.endsWith('.webp'))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map((file) => `/sequence/${file}`);
  } catch (error) {
    console.error("Error reading sequence directory:", error);
  }

  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />

      {/* HERO SECTION - PRESERVED */}
      <div className="relative">
        <ScrollyCanvas imageUrls={imageUrls} />
        <Overlay />
      </div>

      {/* ENHANCED CONTENT */}
      <WhoIHelp />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Insights />
      <Contact />
    </main>
  );
}

import fs from 'fs';
import path from 'path';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';

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
      <div className="relative">
        <ScrollyCanvas imageUrls={imageUrls} />
        <Overlay />
      </div>

      <Projects />
    </main>
  );
}

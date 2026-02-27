"use client";

import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollyCanvasProps {
  imageUrls: string[];
}

export default function ScrollyCanvas({ imageUrls }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];

      for (const url of imageUrls) {
        const img = new Image();
        img.src = url;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        });
        loadedImages.push(img);
        loadedCount++;
      }
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, [imageUrls]);

  const renderFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = images[index];

      if (!canvas || !ctx || !img) return;

      // Handle responsive high-DPI rendering
      const dpr = window.devicePixelRatio || 1;
      
      // Calculate aspect ratio to cover
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;
      
      // Match canvas internal resolution to display resolution
      if (canvas.width !== canvasWidth * dpr || canvas.height !== canvasHeight * dpr) {
         canvas.width = canvasWidth * dpr;
         canvas.height = canvasHeight * dpr;
         ctx.scale(dpr, dpr);
      }

      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        // Image is wider than canvas
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image is taller than canvas
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    [images]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;
    
    // Map 0-1 to image index
    const frameIndex = Math.floor(latest * (images.length - 1));
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded) {
      renderFrame(0);
    }
  }, [isLoaded, renderFrame]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-white/50">
                Loading Sequence...
            </div>
        )}
      </div>
    </div>
  );
}

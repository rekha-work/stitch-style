"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function GalleryPage({ params }: { params: { id: string } }) {
  const [allImageUrls, setAllImageUrls] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const limit = 5;

  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const category = params.id;
        const res = await fetch(
          `/api/gallery?category=${category}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();
        const urls: string[] = data.urls
        setAllImageUrls(urls);
        setImages(urls.slice(0, limit));
        setPage(2);
        if (urls.length <= limit) setAllLoaded(true);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchAllImages();
  }, [params.id]);

  // Load more images when the user scrolls to the bottom
  useEffect(() => {
    if (inView && !loading && !allLoaded) {
      loadMoreImages();
    }
  }, [inView, loading, allLoaded]);

  const loadMoreImages = () => {
    if (loading || allLoaded) return;
    setLoading(true);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const newImages = allImageUrls.slice(startIndex, endIndex);
    if (newImages.length === 0) {
      setAllLoaded(true);
    } else {
      setImages((prev) => [...prev, ...newImages]);
      setPage((prev) => prev + 1);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-semibold text-gray-800">Stitch & Style</span>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Collection</h1>
          <p className="text-gray-600 mb-8">
            Browse through our exquisite designs and find your perfect style
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((imageUrl, index) => (
              <Link
                href={imageUrl}
                key={`${imageUrl}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
  src={imageUrl || "/placeholder.svg"}
  alt={`Fashion design ${index + 1}`}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-contain transition-transform duration-500 group-hover:scale-110"
  priority={index < 2}
/>

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4">
                   
                    <p className="text-gray-600 text-sm">Click to view full size</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {loading && (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-rose-500"></div>
            </div>
          )}

          {!allLoaded && <div ref={ref} className="h-10 my-4"></div>}

          {images.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found</p>
            </div>
          )}
        </section>
      </main>

      {allLoaded && (
        <footer className="bg-gray-50 border-t py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Scissors className="h-5 w-5 text-rose-500" />
                <span className="text-lg font-medium text-gray-800">Stitch & Style</span>
              </div>
              <div className="flex gap-6">
                <Link
                  href="tel:+918197801800"
                  className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors"
                >
                  <span>+918197801800</span>
                </Link>
                <Link
                  href="https://github.com/Himalay-NRHS/stitch-style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors"
                >
                  <span>GitHub</span>
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Stitch & Style.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

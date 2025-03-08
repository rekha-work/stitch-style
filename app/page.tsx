"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Phone, Scissors } from "lucide-react";

export default function Home() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tailored Perfection</h1>
          <p className="text-gray-600 mb-8">
            Discover our exquisite collection of custom-designed clothing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/handemb">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-80">
                  <Image
                    src="https://res.cloudinary.com/stitch-style/image/upload/v1741189935/download_1_efmvuo.jpg"
                    alt="Casual wear collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Hand Embroidery
                  </h3>
                  <p className="text-gray-600">
                    Timeless embroidery designs, stitched with precision to add charm to your outfit.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/macemb">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-80">
                  <Image
                    src="https://res.cloudinary.com/stitch-style/image/upload/v1741190075/front_card_machine_embroidery_mrvte1.jpg"
                    alt="Traditional attire"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Machine Embroidery
                  </h3>
                  <p className="text-gray-600">
                    Modern and detailed embroidery patterns, created with high-quality machine stitching.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/stitched">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-80">
                  <Image
                    src="https://res.cloudinary.com/stitch-style/image/upload/v1741189373/download_cxwlfr.jpg"
                    alt="Elegant evening dress"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Hand-Stitched Blouse Designs
                  </h3>
                  <p className="text-gray-600">
                    Elegant and intricate blouses, carefully crafted by hand for a perfect fit.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

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
                <Phone className="h-5 w-5" />
                <span>+918197801800</span>
              </Link>
              <Link
                href="https://github.com/Himalay-NRHS/stitch-style"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Stitch & Style.
          </div>
        </div>
      </footer>
    </div>
  );
}

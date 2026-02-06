"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Phone, Scissors } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-rose-50 via-white to-amber-50 text-gray-900">
      <header className="sticky top-0 z-10 border-b border-white/40 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 shadow-sm">
              <Scissors className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-rose-500">Atelier</p>
              <span className="text-xl font-semibold text-gray-900">Stitch & Style</span>
            </div>
          </div>
          <Link
            href="/upload"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-gray-800"
          >
            Share a design
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
                Crafted elegance
              </p>
              <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
                Tailored perfection, stitched with soul.
              </h1>
              <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
                Discover couture-inspired embroidery and handcrafted blouse designs built for moments
                that deserve a little extra glow.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/upload"
                  className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  Upload your inspiration
                </Link>
                <Link
                  href="/stitched"
                  className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-600"
                >
                  Explore hand-stitched
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Designs delivered", value: "2.4K+" },
                  { label: "Embroidery patterns", value: "180+" },
                  { label: "Customer rating", value: "4.9/5" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-sm"
                  >
                    <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-rose-200/60 blur-3xl" />
              <div className="absolute -bottom-6 right-0 h-32 w-32 rounded-full bg-amber-200/70 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl">
                <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://res.cloudinary.com/stitch-style/image/upload/v1741189373/download_cxwlfr.jpg"
                    alt="Handcrafted blouse detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-rose-500">
                    Featured atelier
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                    Atelier capsule collection
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    A curated drop of intricate hand-stitching, layered textures, and custom-fit
                    silhouettes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Link href="/handemb" className="group">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="relative h-72">
                  <Image
                    src="https://res.cloudinary.com/stitch-style/image/upload/v1741189935/download_1_efmvuo.jpg"
                    alt="Hand embroidery collection"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-500">Signature</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">Hand Embroidery</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Timeless motifs stitched with precision to elevate your heirloom wardrobe.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/macemb" className="group">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="relative h-72">
                  <Image
                    src="https://res.cloudinary.com/stitch-style/image/upload/v1741190075/front_card_machine_embroidery_mrvte1.jpg"
                    alt="Machine embroidery collection"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-500">Modern craft</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">Machine Embroidery</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Modern, high-definition patterns built with ultra-precise machine stitching.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/stitched" className="group">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="relative h-72">
                  <Image
                    src="https://res.cloudinary.com/stitch-style/image/upload/v1741189373/download_cxwlfr.jpg"
                    alt="Hand-stitched blouse collection"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-500">Heritage</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    Hand-Stitched Blouse Designs
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Intricate blouses crafted by hand, tailored for a flawless, graceful fit.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/70 py-10 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <Scissors className="h-4 w-4" />
              </span>
              <span className="text-lg font-medium text-gray-900">Stitch & Style</span>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-600 sm:flex-row sm:items-center">
              <Link
                href="tel:+918197801800"
                className="flex items-center gap-2 hover:text-rose-500 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+918197801800</span>
              </Link>
              <Link
                href="https://github.com/Himalay-NRHS/stitch-style"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-rose-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
            © {new Date().getFullYear()} Stitch & Style.
          </div>
        </div>
      </footer>
    </div>
  );
}

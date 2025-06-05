'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-white/40" /> {/* overlay transparan */}

      <div className="relative container mx-auto px-6 md:px-12 text-center">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6 drop-shadow-md">
              Selamat Datang di <span className="text-primary">SDN Semper Barat 01</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Sekolah Dasar Negeri yang berdedikasi membentuk generasi cerdas, berkarakter, dan berprestasi di Jakarta Utara.
            </p>
            <Card className="p-1 rounded-2xl shadow-md bg-white/70 backdrop-blur-md w-fit mx-auto">
              <div className="flex justify-center gap-4">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-blue-600 hover:bg-blue-100"
                >
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-pink-500 hover:bg-pink-100"
                >
                  <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-blue-400 hover:bg-blue-100"
                >
                  <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-red-600 hover:bg-red-100"
                >
                  <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>

  );
}

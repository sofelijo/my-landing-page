"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bot,
  MapPin,
} from "lucide-react";
import {
  SiTiktok,
  SiInstagram,
  SiYoutube,
  SiWhatsapp,
} from "react-icons/si";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative container mx-auto px-6 md:px-12 text-center space-y-6">
        {/* NAMA SEKOLAH 2 BARIS */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 drop-shadow-md leading-tight">
          SDN Semper Barat 01<br />Jakarta Utara
        </h1>

        <Card className="p-4 rounded-2xl shadow-sm ring-1 ring-white/30 bg-white/10 backdrop-blur-sm w-fit mx-auto space-y-4">


          {/* Tombol AI assistant + label */}
          <Button
            asChild
            className="gap-2 text-primary font-medium"
            variant="outline"
          >
            <a
              href="https://t.me/SS01JU_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Bot className="h-5 w-5" />
              Tanya sekolah? Klik di sini!
            </a>
          </Button>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4">
            {/* WhatsApp */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-green-600 hover:bg-green-100"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </Button>

            {/* TikTok */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-black hover:bg-black/10"
            >
              <a
                href="https://www.tiktok.com/@sembar01official?_t=ZS-8wwLhUNsort&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok className="h-5 w-5" />
              </a>
            </Button>

            {/* Instagram */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-pink-600 hover:bg-pink-100"
            >
              <a
                href="https://www.instagram.com/sdnsembar01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </Button>

            {/* YouTube */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-red-600 hover:bg-red-100"
            >
              <a
                href="https://youtube.com/@sdnsembar01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </Button>

            {/* Google Maps */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-blue-600 hover:bg-blue-100"
            >
              <a
                href="https://maps.app.goo.gl/YjdiWyKDCRPaXqDJA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

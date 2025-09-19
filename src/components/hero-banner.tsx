"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Bot,
  MapPin,
  Phone,
  GraduationCap,
  BookOpen,
  ClipboardList,
  School,
  Presentation,
} from "lucide-react";
import {
  SiTiktok,
  SiInstagram,
  SiYoutube,
  SiWhatsapp,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

export default function HeroBanner() {
  const [openDialog, setOpenDialog] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const moveIcon = (factor: number) => ({
    transform: `translate(${position.x * factor}px, ${position.y * factor}px)`,
  });

  const handleCall = () => {
    window.location.href = "tel:0214406363";
    setOpenDialog(false);
  };

  // Refs untuk animasi inView
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false });
  const isCardInView = useInView(cardRef, { once: false });

  return (
    <section
      className="relative w-full py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 z-0" />

      {/* Ikon dekoratif */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <GraduationCap className="absolute top-10 left-10 text-indigo-700 w-10 h-10 transition-transform duration-200" style={moveIcon(20)} />
        <BookOpen className="absolute bottom-28 left-1/4 text-green-600 w-10 h-10 transition-transform duration-200" style={moveIcon(35)} />
        <ClipboardList className="absolute top-1/3 right-10 text-orange-500 w-10 h-10 transition-transform duration-200" style={moveIcon(25)} />
        <School className="absolute top-16 right-1/4 text-blue-600 w-10 h-10 transition-transform duration-200" style={moveIcon(30)} />
        <Presentation className="absolute bottom-10 right-10 text-pink-500 w-10 h-10 transition-transform duration-200" style={moveIcon(30)} />
      </div>

      {/* Konten */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center space-y-6">
        <motion.h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-gray-800 drop-shadow-md leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          SDN Semper Barat 01<br />Jakarta Utara
        </motion.h1>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="p-4 rounded-2xl shadow-sm ring-1 ring-white/30 bg-white/10 backdrop-blur-sm w-fit mx-auto space-y-4">
            <Button
              asChild
              className="gap-2 text-primary font-medium"
              variant="outline"
            >
              <a
                href="https://t.me/tanyasekolah_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Bot className="h-5 w-5" />
                Tanya sekolah? Tanyakan{""}
                <span className="font-bold italic">ASKA</span>!
              </a>
            </Button>


            {/* Sosmed */}
            <div className="flex justify-center gap-4">
              {[
                {
                  href: "https://www.whatsapp.com/channel/0029Vb64drS65yD5VaB8gP1n",
                  icon: <SiWhatsapp className="h-5 w-5" />,
                  className: "text-green-600 hover:bg-green-100",
                },
                {
                  isDialog: true,
                },
                {
                  href: "https://www.tiktok.com/@sembar01official?_t=ZS-8wwLhUNsort&_r=1",
                  icon: <SiTiktok className="h-5 w-5" />,
                  className: "text-black hover:bg-black/10",
                },
                {
                  href: "https://www.instagram.com/sdnsembar01/",
                  icon: <SiInstagram className="h-5 w-5" />,
                  className: "text-pink-600 hover:bg-pink-100",
                },
                {
                  href: "https://youtube.com/@sdnsembar01",
                  icon: <SiYoutube className="h-5 w-5" />,
                  className: "text-red-600 hover:bg-red-100",
                },
                {
                  href: "https://maps.app.goo.gl/YjdiWyKDCRPaXqDJA",
                  icon: <MapPin className="h-5 w-5" />,
                  className: "text-blue-600 hover:bg-blue-100",
                },
              ].map((item, i) =>
                item.isDialog ? (
                  <Dialog key="telepon" open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        className="text-blue-700 hover:bg-blue-100 transition rounded-full p-2"
                      >
                        <Phone className="h-5 w-5" />
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Hubungi via Telepon</DialogTitle>
                      </DialogHeader>
                      <p className="text-sm text-gray-600">
                        Anda akan melakukan panggilan ke (021) 4406363. Lanjutkan?
                      </p>
                      <DialogFooter className="mt-4">
                        <Button variant="outline" onClick={() => setOpenDialog(false)}>
                          Batal
                        </Button>
                        <Button onClick={handleCall}>Lanjutkan</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <motion.div key={i} whileHover={{ scale: 1.2 }}>
                    <Button asChild variant="ghost" size="icon" className={item.className}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                      </a>
                    </Button>
                  </motion.div>
                )
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

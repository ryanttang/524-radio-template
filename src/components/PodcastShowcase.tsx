"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

interface Episode {
  title: string;
  date: string;
  src: string;
  img: string;
}

export default function PodcastShowcase() {
  const [currentTrack, setCurrentTrack] = useState<Episode | null>(null);
  const episodes: Episode[] = [
    { title: "Episode 1: Futurewave", date: "2025-07-01", src: "/audio-sample.mp3", img: "/ep1.jpg" },
    { title: "Episode 2: Midnight Pulse", date: "2025-07-08", src: "/audio-sample.mp3", img: "/ep2.jpg" },
    // Add more episodes...
  ];

  return (
    <div>
      <section className="glassmorphic p-6 rounded-3xl shadow-xl mb-16">
        <h2 className="text-2xl font-semibold mb-4">Now Playing</h2>
        <div className="flex gap-4 items-center">
          <div className="w-24 h-24 rounded-xl overflow-hidden border border-zinc-600">
            {currentTrack ? (
              <img src={currentTrack.img} alt="Episode Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-zinc-700" />
            )}
          </div>
          <div>
            <p className="text-lg">{currentTrack ? currentTrack.title : "Select an episode to play"}</p>
            <audio
              className="mt-2 w-full"
              controls
              src={currentTrack?.src}
              autoPlay
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Episode Grid</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {episodes.map((ep, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-md hover:scale-105 transition-transform cursor-pointer border border-zinc-700"
              onClick={() => setCurrentTrack(ep)}
            >
              <CardContent className="p-4">
                <img
                  src={ep.img}
                  alt="Episode Cover"
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h3 className="text-lg font-medium">{ep.title}</h3>
                <p className="text-sm text-zinc-400">{ep.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">🎟️ Live Shows</h2>
        <Swiper spaceBetween={30} slidesPerView={1} loop>
          {[1, 2, 3].map((event) => (
            <SwiperSlide key={event}>
              <Card className="bg-gradient-to-br from-zinc-800 via-black to-zinc-900 p-6 rounded-3xl border border-zinc-700">
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Live in LA - Aug {20 + event}, 2025</h3>
                    <Dialog>
                      <DialogTrigger>
                        <Button className="bg-white text-black hover:bg-zinc-200">Get Tickets</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <p>Ticketing functionality coming soon.</p>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <p className="text-zinc-400">Venue: RetroSound Theater</p>
                  <p className="text-zinc-400">Time: 8:00 PM PST</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
} 
"use client";

import AudioPlayer from "../components/AudioPlayer";
import PlaylistGrid from "../components/PlaylistGrid";
import TicketCarousel from "../components/TicketCarousel";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <motion.div
        className="glassy shadow-neumorphic rounded-3xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        {...({} as any)}
      >
        <h2 className="text-3xl font-bold mb-6 text-pink-400 tracking-widest text-center drop-shadow-lg">
          Now Playing
        </h2>
        <AudioPlayer />
      </motion.div>

      <motion.div
        className="glassy shadow-neumorphic rounded-3xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        {...({} as any)}
      >
        <h2 className="text-2xl font-bold mb-6 text-pink-400 tracking-widest text-center drop-shadow-lg">
          Playlist
        </h2>
        <PlaylistGrid />
      </motion.div>

      <motion.div
        className="glassy shadow-neumorphic rounded-3xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        {...({} as any)}
      >
        <h2 className="text-2xl font-bold mb-6 text-pink-400 tracking-widest text-center drop-shadow-lg">
          Live Show Tickets
        </h2>
        <TicketCarousel />
      </motion.div>
    </div>
  );
}

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

interface AudioPlayerProps {
  playlist?: Track[];
}

const samplePlaylist: Track[] = [
  {
    title: "Sample Track 1",
    artist: "Artist 1",
    src: "/audio-sample.mp3",
    cover: "/ep1.jpg",
  },
  {
    title: "Sample Track 2",
    artist: "Artist 2",
    src: "/audio-sample.mp3",
    cover: "/ep2.jpg",
  },
];

export default function AudioPlayer({ playlist = samplePlaylist }: AudioPlayerProps) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    setPlaying((p) => !p);
    if (audioRef.current) {
      if (!playing) audioRef.current.play();
      else audioRef.current.pause();
    }
  };

  const handlePrev = () => {
    setCurrent((c) => (c === 0 ? playlist.length - 1 : c - 1));
    setProgress(0);
  };
  const handleNext = () => {
    setCurrent((c) => (c === playlist.length - 1 ? 0 : c + 1));
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      setProgress(audioRef.current.currentTime / audioRef.current.duration);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    if (audioRef.current) audioRef.current.volume = Number(e.target.value);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto rounded-3xl p-6 glassy shadow-neumorphic flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={playlist[current].cover}
        alt={playlist[current].title}
        className="w-32 h-32 rounded-2xl object-cover mb-2 shadow-lg"
      />
      <div className="text-center">
        <div className="font-bold text-lg tracking-wide">
          {playlist[current].title}
        </div>
        <div className="text-zinc-400 text-sm">{playlist[current].artist}</div>
      </div>
      <audio
        ref={audioRef}
        src={playlist[current].src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
        autoPlay={playing}
      />
      <div className="flex items-center gap-4 mt-2">
        <button onClick={handlePrev} aria-label="Previous">
          <SkipBack />
        </button>
        <button
          onClick={handlePlayPause}
          className="bg-pink-500 hover:bg-pink-400 text-white rounded-full p-3 shadow-lg transition"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause /> : <Play />}
        </button>
        <button onClick={handleNext} aria-label="Next">
          <SkipForward />
        </button>
      </div>
      <div className="w-full flex items-center gap-2 mt-2">
        <span className="text-xs text-zinc-400">0:00</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={progress}
          onChange={() => {}}
          className="w-full accent-pink-500"
        />
        <span className="text-xs text-zinc-400">3:00</span>
      </div>
      <div className="flex items-center gap-2 w-full mt-2">
        <Volume2 className="w-4 h-4 text-zinc-400" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolume}
          className="accent-pink-500 w-full"
        />
      </div>
    </motion.div>
  );
}

// Tailwind glassy + neumorphic styles (add to globals.css or tailwind config):
// .glassy { @apply bg-white/10 backdrop-blur-lg border border-white/20; }
// .shadow-neumorphic { box-shadow: 8px 8px 24px #18181b, -8px -8px 24px #23232a; } 